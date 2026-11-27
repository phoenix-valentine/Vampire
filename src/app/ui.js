// Everything that is text or a button: the bars at the top, the banner, the hint, and the four
// screens (title, level-up, pause, end). Built from ordinary page elements so text always wraps
// and every button is a real, large tap target.
import { SETTINGS as S, MODES } from "../core/settings.js";
import { xpNeeded } from "../core/rules.js";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function clock(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m + ":" + (r < 10 ? "0" : "") + r;
}

const CAUSES = {
  peasant: "Beaten down by the mob.",
  watchman: "Cut down by the watch.",
  archer: "Shot by an archer.",
  hunger: "Starved. You went too long without blood.",
};

const SOURCES = {
  peasant: "a peasant's blow",
  watchman: "a watchman's blade",
  archer: "an arrow",
};

export function createUi(app, handlers, version) {
  const hud = app.querySelector("#hud");
  const overlay = app.querySelector("#overlay");

  // ---- The bars at the top ----
  const top = el("div", "hud-top");
  const bars = el("div", "bars");
  const bloodBar = el("div", "bar blood");
  const bloodFill = el("i");
  bloodBar.appendChild(bloodFill);
  const levelBar = el("div", "bar level");
  const levelFill = el("i");
  levelBar.appendChild(levelFill);
  const row = el("div", "hud-row");
  const levelText = el("span", "", "Level 1");
  const clockText = el("span", "", "");
  const escapeText = el("span", "warn", "");
  row.appendChild(levelText);
  row.appendChild(clockText);
  row.appendChild(escapeText);
  bars.appendChild(bloodBar);
  bars.appendChild(levelBar);
  bars.appendChild(row);
  const pauseButton = el("button", "btn-pause");
  pauseButton.setAttribute("aria-label", "Pause");
  pauseButton.appendChild(el("span"));
  pauseButton.appendChild(el("span"));
  pauseButton.addEventListener("click", () => handlers.onPause());
  top.appendChild(bars);
  top.appendChild(pauseButton);
  const banner = el("div", "banner");
  const hint = el("div", "hint");
  hud.appendChild(top);
  hud.appendChild(banner);
  hud.appendChild(hint);
  top.hidden = true;

  let bannerUntil = 0;
  let hintUntil = 0;
  let shown = { blood: -1, level: -1, levelN: -1, clock: "", escapes: -1, low: false };
  let pulseUntil = 0;

  // ---- Screens ----
  function screenNode(name) {
    const node = el("div", "screen screen-" + name);
    node.hidden = true;
    overlay.appendChild(node);
    return node;
  }
  const title = screenNode("title");
  const cards = screenNode("cards");
  const pause = screenNode("pause");
  const end = screenNode("end");
  const debugLine = app.querySelector("#debug");

  function versionLabel() {
    const label = el("button", "version", "v" + version);
    label.setAttribute("aria-label", "Version " + version + ". Tap to show technical details.");
    label.addEventListener("click", () => {
      debugLine.hidden = !debugLine.hidden;
    });
    return label;
  }

  function modeButton(mode, big) {
    const def = S.modes[mode];
    const button = el("button", big ? "btn mode big" : "btn mode");
    button.appendChild(el("strong", "", def.label));
    button.appendChild(el("span", "", def.line));
    button.addEventListener("click", () => handlers.onStart(mode));
    return button;
  }

  // Title: the name, then the three ways to play, in the lower half where the thumb is.
  (function buildTitle() {
    const head = el("div", "title-head");
    head.appendChild(el("h1", "", "Vampire"));
    head.appendChild(el("p", "sub", "No Survivors"));
    head.appendChild(el("p", "lead", "One night. One thumb. Three ways to feed. Play each and see which one you want again."));
    const list = el("div", "stack");
    for (let i = 0; i < MODES.length; i++) {
      list.appendChild(modeButton(MODES[i], true));
    }
    const foot = el("div", "foot");
    foot.appendChild(el("span", "", "Plain shapes on purpose: this build tests the feel."));
    foot.appendChild(versionLabel());
    title.appendChild(head);
    title.appendChild(list);
    title.appendChild(foot);
  })();

  // Level-up: three cards, each readable in full before it is taken.
  const cardsTitle = el("h2", "", "LEVEL 2");
  const cardsSub = el("p", "sub", "Choose one");
  const cardsList = el("div", "stack");
  cards.appendChild(el("div", "spacer"));
  cards.appendChild(cardsTitle);
  cards.appendChild(cardsSub);
  cards.appendChild(cardsList);
  let cardsOpenAt = 0;

  function showCards(offer, level) {
    cardsTitle.textContent = "LEVEL " + level;
    cardsList.textContent = "";
    cardsOpenAt = performance.now();
    cardsList.classList.add("locked");
    setTimeout(() => cardsList.classList.remove("locked"), S.feel.cardLock * 1000);
    for (let i = 0; i < offer.length; i++) {
      const card = offer[i];
      const button = el("button", "btn card");
      const head = el("strong", "", card.name);
      if (card.level > 1) {
        head.appendChild(el("em", "", " level " + card.level));
      }
      button.appendChild(head);
      button.appendChild(el("span", "", card.text));
      button.addEventListener("click", () => {
        // A thumb that was steering when the cards arrived must not pick one by accident.
        if (performance.now() - cardsOpenAt < S.feel.cardLock * 1000) {
          return;
        }
        handlers.onCard(i);
      });
      cardsList.appendChild(button);
    }
    cards.hidden = false;
  }

  // Pause.
  const soundButton = el("button", "btn", "");
  const shakeButton = el("button", "btn", "");
  (function buildPause() {
    pause.appendChild(el("div", "spacer"));
    pause.appendChild(el("h2", "", "Paused"));
    const list = el("div", "stack");
    const resume = el("button", "btn big", "Resume");
    resume.addEventListener("click", () => handlers.onResume());
    soundButton.addEventListener("click", () => handlers.onToggleSound());
    shakeButton.addEventListener("click", () => handlers.onToggleShake());
    const restart = el("button", "btn", "Start this night again");
    restart.addEventListener("click", () => handlers.onRestart());
    const quit = el("button", "btn", "Back to the title");
    quit.addEventListener("click", () => handlers.onQuit());
    list.appendChild(resume);
    list.appendChild(soundButton);
    list.appendChild(shakeButton);
    list.appendChild(restart);
    list.appendChild(quit);
    pause.appendChild(list);
    const foot = el("div", "foot");
    foot.appendChild(versionLabel());
    pause.appendChild(foot);
  })();

  function setToggles(sound, shake) {
    soundButton.textContent = sound ? "Sound: on" : "Sound: off";
    shakeButton.textContent = shake ? "Screen shake: on" : "Screen shake: off";
  }

  // End of the night: what happened, why, and one tap to go again.
  const endTitle = el("h2", "", "");
  const endCause = el("p", "lead", "");
  const endHits = el("ul", "hits");
  const endStats = el("dl", "stats");
  const endButtons = el("div", "stack");
  const reportBox = el("textarea", "report");
  reportBox.readOnly = true;
  reportBox.hidden = true;
  reportBox.id = "report-text";
  reportBox.setAttribute("aria-label", "Run report");
  end.appendChild(endTitle);
  end.appendChild(endCause);
  end.appendChild(endHits);
  end.appendChild(endStats);
  end.appendChild(el("div", "spacer"));
  end.appendChild(endButtons);
  end.appendChild(reportBox);

  function stat(name, value) {
    endStats.appendChild(el("dt", "", name));
    endStats.appendChild(el("dd", "", value));
  }

  function showEnd(data) {
    const won = data.result === "dawn";
    endTitle.textContent = won ? "Dawn. You live." : "You died.";
    endCause.textContent = won ? "The town buries its dead. You sleep." : CAUSES[data.cause] || "";
    endHits.textContent = "";
    if (!won && data.cause !== "hunger") {
      const hits = data.hits.slice(-3);
      for (let i = 0; i < hits.length; i++) {
        endHits.appendChild(el("li", "", clock(S.run.seconds - hits[i].t) + " before dawn: " + (SOURCES[hits[i].source] || hits[i].source) + ", " + Math.round(hits[i].dmg) + " blood"));
      }
    }
    endStats.textContent = "";
    stat("Variation", S.modes[data.mode].label);
    stat("Survived", clock(data.t) + " of " + clock(S.run.seconds));
    stat("Killed", String(data.kills));
    if (data.mode === "hunt") {
      stat("Escaped", String(data.escapes));
    }
    stat("Level", String(data.level));
    stat("Powers", data.powers || "none");
    endButtons.textContent = "";
    const again = el("button", "btn big", "Again");
    again.addEventListener("click", () => handlers.onStart(data.mode));
    endButtons.appendChild(again);
    for (let i = 0; i < MODES.length; i++) {
      if (MODES[i] !== data.mode) {
        endButtons.appendChild(modeButton(MODES[i], false));
      }
    }
    const copy = el("button", "btn small", "Copy a report of this night");
    copy.addEventListener("click", () => {
      reportBox.value = data.report;
      const done = () => {
        copy.textContent = "Copied. Paste it into the chat.";
      };
      const fallback = () => {
        reportBox.hidden = false;
        reportBox.focus();
        reportBox.select();
        copy.textContent = "Select the text below and copy it";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(data.report).then(done, fallback);
      } else {
        fallback();
      }
    });
    endButtons.appendChild(copy);
    reportBox.hidden = true;
    end.hidden = false;
  }

  function hideScreens() {
    title.hidden = true;
    cards.hidden = true;
    pause.hidden = true;
    end.hidden = true;
  }

  function showBanner(text) {
    banner.textContent = text;
    banner.classList.add("on");
    bannerUntil = performance.now() + (S.feel.bannerBase + S.feel.bannerPerChar * text.length) * 1000;
  }

  function showHint(text, seconds) {
    hint.textContent = text;
    hint.classList.add("on");
    hintUntil = performance.now() + seconds * 1000;
  }

  // Called every frame. Only touches the page when a shown value actually changed.
  function update(state) {
    const t = performance.now();
    if (bannerUntil && t > bannerUntil) {
      banner.classList.remove("on");
      bannerUntil = 0;
    }
    if (hintUntil && t > hintUntil) {
      hint.classList.remove("on");
      hintUntil = 0;
    }
    if (!state) {
      return;
    }
    const p = state.player;
    const blood = Math.max(0, Math.round((p.blood / p.maxBlood) * 200) / 200);
    if (blood !== shown.blood) {
      if (blood > shown.blood && shown.blood >= 0) {
        bloodBar.classList.add("pulse");
        pulseUntil = t + 120;
      }
      shown.blood = blood;
      bloodFill.style.transform = "scaleX(" + blood + ")";
    }
    if (pulseUntil && t > pulseUntil) {
      bloodBar.classList.remove("pulse");
      pulseUntil = 0;
    }
    const low = blood < S.player.lowBlood;
    if (low !== shown.low) {
      shown.low = low;
      bloodBar.classList.toggle("low", low);
    }
    const level = Math.round((p.xp / xpNeeded(p.level)) * 100) / 100;
    if (level !== shown.level) {
      shown.level = level;
      levelFill.style.transform = "scaleX(" + Math.min(1, level) + ")";
    }
    if (p.level !== shown.levelN) {
      shown.levelN = p.level;
      levelText.textContent = "Level " + p.level;
    }
    const text = "Dawn in " + clock(S.run.seconds - state.t);
    if (text !== shown.clock) {
      shown.clock = text;
      clockText.textContent = text;
    }
    if (state.mode === "hunt" && state.stats.escapes !== shown.escapes) {
      shown.escapes = state.stats.escapes;
      escapeText.textContent = "Escaped " + state.stats.escapes;
    }
  }

  return {
    update,
    showCards,
    showEnd,
    showBanner,
    showHint,
    hideScreens,
    setToggles,
    showTitle() {
      hideScreens();
      top.hidden = true;
      banner.classList.remove("on");
      hint.classList.remove("on");
      title.hidden = false;
    },
    showPause() {
      pause.hidden = false;
    },
    hidePause() {
      pause.hidden = true;
    },
    hideCards() {
      cards.hidden = true;
    },
    startNight(mode) {
      hideScreens();
      top.hidden = false;
      shown = { blood: -1, level: -1, levelN: -1, clock: "", escapes: -1, low: false };
      escapeText.textContent = mode === "hunt" ? "Escaped 0" : "";
      bloodBar.classList.remove("low");
      banner.classList.remove("on");
    },
    setDebug(text) {
      if (!debugLine.hidden) {
        debugLine.textContent = text;
      }
    },
    showDebug() {
      debugLine.hidden = false;
    },
  };
}
