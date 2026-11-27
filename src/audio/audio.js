// Every sound is made in code: oscillators, noise, envelopes and filters. One sound per kind of
// event, with a minimum gap and a voice limit so hundreds of events a minute never turn to mush.
import { SETTINGS as S } from "../core/settings.js";

// gain, shortest gap between two of the same sound (seconds), priority (higher survives when voices run out)
const SOUNDS = {
  swipe: { gain: 0.1, gap: 0.08, priority: 1 },
  hit: { gain: 0.14, gap: 0.05, priority: 1 },
  kill: { gain: 0.2, gap: 0.05, priority: 2 },
  pickup: { gain: 0.07, gap: 0.035, priority: 3 },
  hurt: { gain: 0.34, gap: 0.1, priority: 5 },
  windup: { gain: 0.045, gap: 0.09, priority: 2 },
  aim: { gain: 0.05, gap: 0.15, priority: 2 },
  arrow: { gain: 0.08, gap: 0.06, priority: 2 },
  levelup: { gain: 0.17, gap: 0.3, priority: 5 },
  card: { gain: 0.14, gap: 0.1, priority: 4 },
  bell: { gain: 0.2, gap: 0.8, priority: 4 },
  escape: { gain: 0.1, gap: 0.5, priority: 3 },
  scream: { gain: 0.035, gap: 0.3, priority: 1 },
  nova: { gain: 0.2, gap: 0.2, priority: 3 },
  lance: { gain: 0.05, gap: 0.08, priority: 1 },
  mist: { gain: 0.1, gap: 0.3, priority: 3 },
  heart: { gain: 0.22, gap: 0.2, priority: 4 },
  dawn: { gain: 0.24, gap: 2, priority: 6 },
  dead: { gain: 0.3, gap: 2, priority: 6 },
};

export function createAudio() {
  let ctx = null;
  let master = null;
  let noiseBuffer = null;
  let enabled = true;
  let voices = 0;
  const last = {};
  const counts = {}; // how often each sound was asked for; the checks read this
  let ladder = 0;
  let ladderAt = 0;
  let heartIn = 0;

  function now() {
    return ctx ? ctx.currentTime : 0;
  }

  function unlock() {
    if (!enabled) {
      return;
    }
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) {
          return;
        }
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = S.audio.master;
        const squeeze = ctx.createDynamicsCompressor();
        master.connect(squeeze);
        squeeze.connect(ctx.destination);
        const length = Math.floor(ctx.sampleRate * 0.5);
        noiseBuffer = ctx.createBuffer(1, length, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < length; i++) {
          data[i] = Math.random() * 2 - 1;
        }
      }
      if (ctx.state !== "running") {
        ctx.resume();
      }
    } catch (err) {
      ctx = null;
    }
  }

  function envelope(gain, attack, hold) {
    const g = ctx.createGain();
    const t = now();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + hold);
    g.connect(master);
    return g;
  }

  function track(node, seconds) {
    voices++;
    node.onended = () => {
      voices--;
    };
    node.start();
    node.stop(now() + seconds + 0.02);
  }

  function tone(type, from, to, seconds, gain, delay) {
    const osc = ctx.createOscillator();
    const t = now() + (delay || 0);
    osc.type = type;
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t + seconds);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + seconds);
    g.connect(master);
    osc.connect(g);
    voices++;
    osc.onended = () => {
      voices--;
    };
    osc.start(t);
    osc.stop(t + seconds + 0.02);
  }

  function noise(filterType, from, to, seconds, gain) {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(from, now());
    filter.frequency.exponentialRampToValueAtTime(Math.max(30, to), now() + seconds);
    filter.Q.value = 0.9;
    const g = envelope(gain, 0.004, seconds);
    src.connect(filter);
    filter.connect(g);
    track(src, seconds);
  }

  function bell(base, seconds, gain) {
    const partials = [1, 2, 2.76, 5.4];
    const weights = [1, 0.6, 0.4, 0.2];
    for (let i = 0; i < partials.length; i++) {
      tone("sine", base * partials[i], base * partials[i] * 0.995, seconds / (1 + i * 0.5), gain * weights[i], 0);
    }
  }

  function play(name, detail) {
    counts[name] = (counts[name] || 0) + 1;
    if (!enabled || !ctx || ctx.state !== "running") {
      return;
    }
    const def = SOUNDS[name];
    const t = now();
    if (last[name] !== undefined && t - last[name] < def.gap) {
      return;
    }
    if (voices >= S.audio.maxVoices && def.priority < 4) {
      return;
    }
    last[name] = t;
    const g = def.gain;
    const vary = 1 + (Math.random() - 0.5) * 0.08;
    if (name === "swipe") {
      noise("bandpass", 2100 * vary, 600, 0.08, g);
    } else if (name === "hit") {
      tone("sine", 150 * vary, 70, 0.07, g);
    } else if (name === "kill") {
      noise("lowpass", 900 * vary, 180, detail ? 0.2 : 0.13, g);
      tone("sine", 95 * vary, 42, 0.12, g * 0.9);
    } else if (name === "pickup") {
      if (t - ladderAt > 0.4) {
        ladder = 0;
      }
      ladderAt = t;
      tone("sine", 520 * Math.pow(2, ladder / 12), 520 * Math.pow(2, ladder / 12) * 1.02, 0.05, g);
      ladder = Math.min(14, ladder + 1);
    } else if (name === "hurt") {
      tone("square", 120, 52, 0.2, g * 0.6);
      noise("lowpass", 1400, 200, 0.16, g);
    } else if (name === "windup") {
      tone("triangle", 880 * vary, 860, 0.03, g);
    } else if (name === "aim") {
      tone("sawtooth", 170, 250, 0.22, g * 0.5);
    } else if (name === "arrow") {
      noise("highpass", 2600, 5200, 0.07, g);
    } else if (name === "levelup") {
      tone("triangle", 440, 440, 0.12, g, 0);
      tone("triangle", 554, 554, 0.12, g, 0.09);
      tone("triangle", 659, 659, 0.22, g, 0.18);
    } else if (name === "card") {
      tone("triangle", 659, 880, 0.1, g);
    } else if (name === "bell") {
      bell(196, 1.8, g);
    } else if (name === "escape") {
      bell(330, 0.9, g);
    } else if (name === "scream") {
      tone("sawtooth", 720 * vary, 390, 0.17, g);
    } else if (name === "nova") {
      noise("lowpass", 1800, 120, 0.2, g);
      tone("sine", 84, 40, 0.2, g);
    } else if (name === "lance") {
      tone("sine", 900 * vary, 380, 0.07, g);
    } else if (name === "mist") {
      noise("bandpass", 500, 2400, 0.3, g);
    } else if (name === "heart") {
      tone("sine", 62, 44, 0.09, g, 0);
      tone("sine", 58, 40, 0.09, g * 0.8, 0.16);
    } else if (name === "dawn") {
      bell(147, 3.2, g);
    } else if (name === "dead") {
      tone("sawtooth", 110, 36, 0.8, g * 0.5);
      noise("lowpass", 600, 60, 0.7, g);
    }
  }

  function onEvent(e) {
    const type = e.type;
    if (type === "swipe" || type === "hit" || type === "hurt" || type === "windup" || type === "aim" || type === "arrow") {
      play(type);
    } else if (type === "kill") {
      play("kill", e.gib);
    } else if (type === "pickup") {
      play("pickup");
    } else if (type === "levelup") {
      play("levelup");
    } else if (type === "card") {
      play("card");
    } else if (type === "stage") {
      if (e.banner) {
        play("bell");
      }
    } else if (type === "alarm") {
      play("bell");
    } else if (type === "escape") {
      play("escape");
    } else if (type === "scream") {
      play("scream");
    } else if (type === "nova" || type === "lance" || type === "mist" || type === "dawn" || type === "dead") {
      play(type);
    }
  }

  // The heartbeat quickens as the blood runs out.
  function update(state, dt, playing) {
    if (!state || !playing || state.over) {
      return;
    }
    const p = state.player;
    const ratio = p.blood / p.maxBlood;
    if (ratio >= S.player.lowBlood) {
      heartIn = 0;
      return;
    }
    heartIn -= dt;
    if (heartIn <= 0) {
      play("heart");
      heartIn = 0.45 + 0.55 * (ratio / S.player.lowBlood);
    }
  }

  return {
    unlock,
    onEvent,
    update,
    play,
    counts,
    setEnabled(value) {
      enabled = value;
      if (!value && ctx && ctx.state === "running") {
        ctx.suspend();
      } else if (value) {
        unlock();
      }
    },
    isEnabled() {
      return enabled;
    },
    suspend() {
      if (ctx && ctx.state === "running") {
        ctx.suspend();
      }
    },
    resume() {
      if (enabled && ctx && ctx.state !== "running") {
        ctx.resume();
      }
    },
  };
}
