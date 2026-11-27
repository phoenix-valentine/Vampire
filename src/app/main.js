// Ties the pieces together: the phone shell, the simulation, the drawing, the sound and the screens.
import { SETTINGS as S, MODES } from "../core/settings.js";
import { createSim, stepSim, chooseCard } from "../core/sim.js";
import { createScreen } from "./screen.js";
import { createLoop } from "./loop.js";
import { createInput } from "./input.js";
import { createUi } from "./ui.js";
import { createRenderer } from "../render/renderer.js";
import { createAudio } from "../audio/audio.js";
import { createBot } from "../test/bots.js";

const VERSION = __VERSION__;
const SAVE_KEY = "vampire-no-survivors.settings.v1";
const STEP = 1 / S.stepsPerSecond;

function loadPrefs() {
  const prefs = { sound: true, shake: true };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      prefs.sound = saved.sound !== false;
      prefs.shake = saved.shake !== false;
    }
  } catch (err) {
    // Private windows and some embedded views have no storage. The defaults are fine.
  }
  return prefs;
}

function savePrefs(prefs) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(prefs));
  } catch (err) {
    // Nothing to do: the setting simply lasts for this visit only.
  }
}

function boot() {
  const app = document.getElementById("app");
  const canvas = document.getElementById("stage");
  const touch = document.getElementById("touch");
  const params = __TEST__ ? new URLSearchParams(location.search) : new URLSearchParams("");
  const forced = params.get("insets") ? params.get("insets").split(",").map(Number) : null;
  const prefs = loadPrefs();

  const screen = createScreen(canvas, app, {
    dprCap: S.view.dprCap,
    uprightAspect: S.view.uprightAspect,
    viewWidth: S.view.width,
    viewHeightWide: S.view.heightWide,
    forcedInsets: forced,
  });
  const input = createInput(touch, S.input);
  const renderer = createRenderer(canvas, screen);
  const audio = createAudio();
  audio.setEnabled(prefs.sound);
  renderer.setShake(prefs.shake);

  let state = null;
  let phase = "title"; // title, ready, play, levelup, ending, end
  let paused = false;
  let mode = MODES[0];
  let seed = 1;
  let bot = null;
  let speed = 1;
  let readyT = 0;
  let endT = 0;
  const perf = { frames: 0, sumMs: 0, worstMs: 0, peakHumans: 0 };
  const errors = [];
  window.addEventListener("error", (e) => errors.push(String(e.message)));

  const ui = createUi(
    app,
    {
      onStart(m) {
        audio.unlock();
        startNight(m);
      },
      onCard(index) {
        if (phase !== "levelup") {
          return;
        }
        chooseCard(state, index);
        handleEvents();
        ui.hideCards();
        phase = "play";
        input.setEnabled(true);
      },
      onPause() {
        setPaused(true);
      },
      onResume() {
        setPaused(false);
      },
      onRestart() {
        startNight(mode);
      },
      onQuit() {
        paused = false;
        loop.setPaused(false);
        state = null;
        phase = "title";
        renderer.reset();
        ui.showTitle();
      },
      onToggleSound() {
        prefs.sound = !prefs.sound;
        audio.setEnabled(prefs.sound);
        savePrefs(prefs);
        ui.setToggles(prefs.sound, prefs.shake);
      },
      onToggleShake() {
        prefs.shake = !prefs.shake;
        renderer.setShake(prefs.shake);
        savePrefs(prefs);
        ui.setToggles(prefs.sound, prefs.shake);
      },
    },
    VERSION,
  );
  ui.setToggles(prefs.sound, prefs.shake);

  function startNight(m, forcedSeed) {
    mode = m;
    seed = forcedSeed !== undefined ? forcedSeed : (Math.random() * 1e9) | 0;
    state = createSim(mode, seed);
    renderer.reset();
    ui.startNight(mode);
    ui.showHint(S.modes[mode].hint, S.feel.hintSeconds);
    phase = "ready";
    paused = false;
    readyT = 0;
    perf.frames = 0;
    perf.sumMs = 0;
    perf.worstMs = 0;
    perf.peakHumans = 0;
    loop.setPaused(false);
    input.setEnabled(true);
    if (navigator.wakeLock && navigator.wakeLock.request) {
      navigator.wakeLock.request("screen").catch(() => {});
    }
  }

  function setPaused(value) {
    if (phase === "title" || phase === "end" || phase === "levelup") {
      return;
    }
    paused = value;
    loop.setPaused(value);
    if (value) {
      input.cancelAll();
      ui.showPause();
    } else {
      ui.hidePause();
      audio.resume();
    }
  }

  function handleEvents() {
    const events = state.events;
    for (let i = 0; i < events.length; i++) {
      const e = events[i];
      renderer.onEvent(e);
      audio.onEvent(e);
      if (e.type === "hurt") {
        loop.freeze(S.feel.hitStopHurt);
      } else if (e.type === "kill" && e.tough) {
        loop.freeze(S.feel.hitStopKillTough);
      } else if ((e.type === "stage" || e.type === "alarm") && e.banner) {
        ui.showBanner(e.banner);
      }
    }
    events.length = 0;
  }

  function report() {
    const sc = screen.state;
    const st = state.stats;
    const avg = perf.frames > 0 ? perf.sumMs / perf.frames : 0;
    return [
      "Vampire: No Survivors v" + VERSION,
      "Variation: " + mode + " | seed " + seed,
      "Result: " + state.result + (state.cause ? " (" + state.cause + ")" : "") + " at " + state.t.toFixed(1) + " s",
      "Level " + state.player.level + " | kills " + st.kills + " | escaped " + st.escapes + " | hits taken " + st.hitsTaken,
      "Powers: " + (st.cards.join(", ") || "none"),
      "First kill " + st.firstKillT.toFixed(1) + " s | first card " + st.firstLevelT.toFixed(1) + " s | low blood " + st.lowBloodTime.toFixed(0) + " s",
      "Screen " + sc.cssW + "x" + sc.cssH + " @" + sc.dpr + " | insets " + sc.insets.top + "/" + sc.insets.right + "/" + sc.insets.bottom + "/" + sc.insets.left,
      "Frames: average " + avg.toFixed(1) + " ms, worst " + perf.worstMs.toFixed(0) + " ms | most humans " + st.peakHumans,
      "Device: " + navigator.userAgent,
    ].join("\n");
  }

  function showEnd() {
    phase = "end";
    input.setEnabled(false);
    ui.showEnd({
      result: state.result,
      cause: state.cause,
      mode,
      t: state.t,
      kills: state.stats.kills,
      escapes: state.stats.escapes,
      level: state.player.level,
      hits: state.recentHits,
      powers: Object.keys(state.player.powers)
        .map((id) => S.powers[id].name + " " + state.player.powers[id])
        .join(", "),
      report: report(),
    });
  }

  function step() {
    if (!state) {
      input.endStep();
      return;
    }
    if (phase === "ready") {
      // The night waits for the first touch, so nobody dies while reading the hint.
      readyT += STEP;
      const moving = Math.abs(input.state.mx) + Math.abs(input.state.my) > 0.05;
      if (moving || bot || readyT > 4) {
        phase = "play";
      }
    }
    if (phase === "play") {
      for (let n = 0; n < speed; n++) {
        stepSim(state, bot ? bot.act(state) : input.state);
        handleEvents();
        if (state.offer) {
          if (bot) {
            chooseCard(state, bot.pick(state));
            handleEvents();
          } else {
            phase = "levelup";
            input.setEnabled(false);
            ui.showCards(state.offer, state.player.level - state.pendingLevels + 1);
            break;
          }
        }
        if (state.over) {
          phase = "ending";
          endT = state.result === "dead" ? 1.2 : 1.8;
          break;
        }
      }
    } else if (phase === "ending") {
      endT -= STEP;
      if (endT <= 0) {
        showEnd();
      }
    }
    input.endStep();
  }

  let debugIn = 0;
  let slowFor = 0;
  function watchSpeed(elapsed) {
    if (loop.stats.avgMs > 22) {
      slowFor += elapsed;
    } else {
      slowFor = 0;
    }
    if (slowFor > 2 && screen.state.dprCap > 1) {
      slowFor = 0;
      screen.setDprCap(Math.max(1, screen.state.dprCap - 0.5));
    }
  }

  function draw(alpha, elapsed) {
    const still = phase === "levelup" || paused || phase === "end";
    renderer.draw(state, phase, still ? 1 : alpha, elapsed, input.state);
    ui.update(state);
    audio.update(state, elapsed, phase === "play" && !paused);
    if (phase === "play" && !paused && state.t > 1) {
      watchSpeed(elapsed);
      perf.frames++;
      perf.sumMs += loop.stats.frameMs;
      if (loop.stats.frameMs > perf.worstMs) {
        perf.worstMs = loop.stats.frameMs;
      }
    }
    debugIn -= elapsed;
    if (debugIn <= 0) {
      debugIn = 0.5;
      const sc = screen.state;
      ui.setDebug(
        "v" + VERSION + " " + (state ? mode : "title") + " " + sc.cssW + "x" + sc.cssH + "@" + sc.dpr +
          " in " + sc.insets.top + "/" + sc.insets.right + "/" + sc.insets.bottom + "/" + sc.insets.left +
          " " + loop.stats.avgMs.toFixed(1) + "ms" + (state ? " h" + state.humans.length : ""),
      );
    }
  }

  const loop = createLoop({ stepsPerSecond: S.stepsPerSecond, maxStepsPerFrame: 5, step, draw });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      audio.suspend();
      if (phase === "play" || phase === "ready") {
        setPaused(true);
      }
    } else if (!paused) {
      audio.resume();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (phase === "levelup" && (e.key === "1" || e.key === "2" || e.key === "3")) {
      document.querySelectorAll(".screen-cards .card")[Number(e.key) - 1].click();
    } else if (e.key === "Escape" || e.key === "p") {
      setPaused(!paused);
    }
  });
  // Any first touch anywhere is allowed to start the sound.
  window.addEventListener("pointerdown", () => audio.unlock(), { once: true });

  ui.showTitle();
  loop.start();

  if (__TEST__) {
    // The test API: lets the checks start a night, put a bot in the seat, and read what happened.
    window.GAME = {
      version: VERSION,
      state: () => state,
      phase: () => phase,
      errors,
      sounds: audio.counts,
      loopStats: loop.stats,
      start(m, s) {
        startNight(m, s);
      },
      setBot(kind) {
        bot = kind ? createBot(kind, seed) : null;
      },
      setSpeed(n) {
        speed = n;
      },
      // Plays ahead without drawing, for screenshots of a later moment.
      skip(seconds, kind) {
        const pilot = createBot(kind || "hunter", seed);
        const until = state.t + seconds;
        while (!state.over && state.t < until) {
          if (state.offer) {
            chooseCard(state, pilot.pick(state));
          }
          stepSim(state, pilot.act(state));
          handleEvents();
        }
        phase = state.over ? "ending" : "play";
      },
      pause: setPaused,
    };
    if (params.get("debug")) {
      ui.showDebug();
    }
    if (params.get("mode")) {
      startNight(params.get("mode"), Number(params.get("seed")) || 1);
      if (params.get("bot")) {
        window.GAME.setBot(params.get("bot"));
      }
      if (params.get("speed")) {
        speed = Number(params.get("speed"));
      }
    }
  }
}

boot();
