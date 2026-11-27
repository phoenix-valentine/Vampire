// The simulation: one night, advanced in equal steps. It never draws and never plays a sound;
// it only changes the state and lists what happened in state.events.
import { createRng } from "./rng.js";
import { createGrid } from "./grid.js";
import { SETTINGS as S } from "./settings.js";
import { emit, die, drink, spawnDrop, damageHuman, clawDamage, xpNeeded } from "./rules.js";
import { updateHumans, updateShots, resetIds } from "./humans.js";
import { initDirector, updateDirector } from "./director.js";
import { makeOffer, applyPower, updatePowers } from "./powers.js";

const DT = 1 / S.stepsPerSecond;

export function createSim(mode, seed) {
  resetIds();
  const state = {
    mode,
    seed,
    rng: createRng(seed),
    grid: createGrid(48),
    t: 0,
    steps: 0,
    over: false,
    result: null,
    cause: null,
    player: {
      x: S.arena.w / 2,
      y: S.arena.h / 2,
      px: S.arena.w / 2,
      py: S.arena.h / 2,
      vx: 0,
      vy: 0,
      fx: 0,
      fy: -1,
      radius: S.player.radius,
      blood: S.player.startBlood,
      maxBlood: S.player.maxBlood,
      level: 1,
      xp: 0,
      invuln: 0,
      still: 0,
      swipeCd: 0.2,
      swipeAng: 0,
      swipeT: 1,
      mistT: 0,
      mistCd: 0,
      batAngle: 0,
      lanceCd: 0,
      novaCd: 0,
      reachMul: 1,
      arcMul: 1,
      intervalMul: 1,
      speedMul: 1,
      drinking: false,
      powers: {},
    },
    humans: [],
    corpses: [],
    drops: [],
    shots: [],
    bolts: [],
    scares: [],
    alarm: { pending: [] },
    dir: null,
    pendingLevels: 0,
    offer: null,
    events: [],
    recentHits: [],
    stats: {
      kills: 0,
      killsBy: {},
      escapes: 0,
      passed: 0,
      drunk: 0,
      hitsTaken: 0,
      damageBy: {},
      violations: 0,
      firstKillT: -1,
      firstLevelT: -1,
      peakHumans: 0,
      lowBloodTime: 0,
      cards: [],
    },
  };
  initDirector(state);
  return state;
}

function updatePlayer(state, input) {
  const p = state.player;
  p.px = p.x;
  p.py = p.y;
  let mx = input.mx;
  let my = input.my;
  const len = Math.hypot(mx, my);
  if (len > 1) {
    mx /= len;
    my /= len;
  }
  const speed = S.player.speed * p.speedMul;
  const k = Math.min(1, S.player.accel * DT);
  p.vx += (mx * speed - p.vx) * k;
  p.vy += (my * speed - p.vy) * k;
  p.x += p.vx * DT;
  p.y += p.vy * DT;
  const r = p.radius;
  p.x = Math.max(r, Math.min(S.arena.w - r, p.x));
  p.y = Math.max(r, Math.min(S.arena.h - r, p.y));
  if (len > 0.1) {
    p.fx = mx / len;
    p.fy = my / len;
    p.still = 0;
  } else {
    p.still += DT;
  }
  if (p.invuln > 0) {
    p.invuln -= DT;
  }
  if (p.mistT > 0) {
    p.mistT -= DT;
  }
  if (p.mistCd > 0) {
    p.mistCd -= DT;
  }
  p.swipeT += DT;
}

function updateHunger(state) {
  const p = state.player;
  const mode = S.modes[state.mode];
  if (mode.hunger > 0 && state.t > mode.hungerDelay) {
    p.blood -= mode.hunger * DT;
    if (p.blood <= 0) {
      die(state, "hunger");
    }
  }
  if (p.blood < p.maxBlood * S.player.lowBlood) {
    state.stats.lowBloodTime += DT;
  }
}

function updateClaws(state) {
  const p = state.player;
  p.swipeCd -= DT;
  if (p.swipeCd > 0) {
    return;
  }
  if (S.modes[state.mode].clawsOnlyMoving && p.still > 0.1) {
    return;
  }
  const reach = S.claws.reach * p.reachMul;
  let best = null;
  let bestD = 1e9;
  state.grid.query(p.x, p.y, reach + 16, (h) => {
    if (h.dead || h.gone) {
      return;
    }
    const d = Math.hypot(h.x - p.x, h.y - p.y) - h.r;
    if (d < reach && d < bestD) {
      bestD = d;
      best = h;
    }
  });
  if (!best) {
    return;
  }
  const ang = Math.atan2(best.y - p.y, best.x - p.x);
  const half = Math.min(Math.PI, ((S.claws.arcDeg * p.arcMul * Math.PI) / 180) / 2);
  const dmg = clawDamage(p);
  let hits = 0;
  state.grid.query(p.x, p.y, reach + 16, (h) => {
    if (h.dead || h.gone) {
      return;
    }
    const dx = h.x - p.x;
    const dy = h.y - p.y;
    const d = Math.hypot(dx, dy) || 0.001;
    if (d - h.r > reach) {
      return;
    }
    let da = Math.atan2(dy, dx) - ang;
    while (da > Math.PI) {
      da -= Math.PI * 2;
    }
    while (da < -Math.PI) {
      da += Math.PI * 2;
    }
    if (Math.abs(da) > half) {
      return;
    }
    hits++;
    damageHuman(state, h, dmg, dx / d, dy / d, S.claws.knock, "claws");
  });
  p.swipeCd = S.claws.interval * p.intervalMul;
  p.swipeAng = ang;
  p.swipeT = 0;
  emit(state, { type: "swipe", x: p.x, y: p.y, ang, reach, half, hits });
}

function updateBlood(state) {
  const p = state.player;
  const B = S.blood;
  const rule = S.modes[state.mode].bloodRule;

  // Feed: blood stays in the bodies until the vampire stands still near them.
  p.drinking = false;
  if (rule === "pools") {
    const still = p.still >= B.drinkStillDelay && p.mistT <= 0;
    const corpses = state.corpses;
    for (let i = 0; i < corpses.length; i++) {
      const c = corpses[i];
      if (c.blood <= 0) {
        continue;
      }
      if (c.age > B.poolLife) {
        c.blood = 0;
        state.stats.wasted = (state.stats.wasted || 0) + 1;
        continue;
      }
      if (!still) {
        continue;
      }
      const dx = c.x - p.x;
      const dy = c.y - p.y;
      if (dx * dx + dy * dy > B.drinkRadius * B.drinkRadius) {
        continue;
      }
      p.drinking = true;
      c.drain += B.drinkRate * DT;
      while (c.drain >= 1 && c.blood > 0) {
        c.drain -= 1;
        c.blood -= 1;
        spawnDrop(state, c.x, c.y, true);
      }
    }
  }

  const drops = state.drops;
  const magnet = rule === "drops";
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    d.px = d.x;
    d.py = d.y;
    d.age += DT;
    const dx = p.x - d.x;
    const dy = p.y - d.y;
    const dist = Math.hypot(dx, dy) || 0.001;
    let taken = false;
    if (d.pulled) {
      d.pullT += DT;
      const speed = d.stream ? B.streamSpeed : B.pullSpeed + B.pullAccel * d.pullT;
      const move = speed * DT;
      if (move >= dist - 4) {
        taken = true;
      } else {
        d.x += (dx / dist) * move;
        d.y += (dy / dist) * move;
      }
    } else {
      if (d.age < B.popTime) {
        d.x += d.vx * DT;
        d.y += d.vy * DT;
      }
      if (dist < B.collectRadius) {
        taken = true;
      } else if (magnet && d.age >= B.popTime && dist < B.pullRadius) {
        d.pulled = true;
      }
    }
    if (taken) {
      drink(state, d.value, d.x, d.y);
    }
    if (taken || d.age > B.dropLife) {
      drops[i] = drops[drops.length - 1];
      drops.pop();
    }
  }

  for (let i = 0; i < state.corpses.length; i++) {
    state.corpses[i].age += DT;
  }
}

function rebuildGrid(state) {
  const grid = state.grid;
  grid.clear();
  const humans = state.humans;
  for (let i = 0; i < humans.length; i++) {
    if (!humans[i].dead && !humans[i].gone) {
      grid.insert(humans[i]);
    }
  }
}

function removeDead(state) {
  const humans = state.humans;
  let keep = 0;
  for (let i = 0; i < humans.length; i++) {
    if (!humans[i].dead && !humans[i].gone) {
      humans[keep++] = humans[i];
    }
  }
  humans.length = keep;
}

// Advances the night by one step. input is { mx, my }, each from -1 to 1.
// While a level-up choice is open, or after the night has ended, nothing moves.
export function stepSim(state, input) {
  if (state.over || state.offer) {
    return;
  }
  state.t += DT;
  state.steps++;
  updatePlayer(state, input);
  updateHunger(state);
  if (state.over) {
    return;
  }
  updateDirector(state, DT);
  rebuildGrid(state);
  updateHumans(state, DT, state.grid);
  updateShots(state, DT);
  if (!state.over) {
    rebuildGrid(state);
    updateClaws(state);
    updatePowers(state, DT, state.grid);
    updateBlood(state);
  }
  removeDead(state);
  if (!state.over && state.t >= S.run.seconds) {
    state.over = true;
    state.result = "dawn";
    emit(state, { type: "dawn" });
  }
  if (!state.over && state.pendingLevels > 0 && !state.offer) {
    state.offer = makeOffer(state);
    emit(state, { type: "levelup", level: state.player.level - state.pendingLevels + 1 });
  }
}

export function chooseCard(state, index) {
  if (!state.offer) {
    return false;
  }
  const card = state.offer[Math.max(0, Math.min(state.offer.length - 1, index))];
  applyPower(state, card.id);
  state.stats.cards.push(card.id);
  state.offer = null;
  state.pendingLevels--;
  state.player.invuln = Math.max(state.player.invuln, S.player.safeAfterCard);
  emit(state, { type: "card", id: card.id });
  return true;
}

// A number that changes if anything about the night changes. Used to prove a seed replays exactly.
export function hashState(state) {
  let h = 2166136261 >>> 0;
  function mix(v) {
    h ^= Math.round(v * 100) | 0;
    h = Math.imul(h, 16777619) >>> 0;
  }
  const p = state.player;
  mix(state.t);
  mix(p.x);
  mix(p.y);
  mix(p.blood);
  mix(p.level);
  mix(p.xp);
  mix(state.stats.kills);
  mix(state.stats.escapes);
  mix(state.humans.length);
  for (let i = 0; i < state.humans.length; i++) {
    mix(state.humans[i].x);
    mix(state.humans[i].y);
    mix(state.humans[i].hp);
  }
  mix(state.drops.length);
  mix(state.corpses.length);
  return h >>> 0;
}

export { xpNeeded };
