// Decides who arrives, when, and through which gate. It follows the stage table in the settings,
// and in Hunt it also answers every escape with a hunter.
import { SETTINGS as S } from "./settings.js";
import { emit } from "./rules.js";
import { GATES, spawnAtGate, spawnInside } from "./humans.js";

const TYPES = ["peasant", "watchman", "archer"];

function roleOf(type) {
  return type === "archer" ? "ranged" : "rush";
}

function pickType(state, mix) {
  const roll = state.rng.float() * (mix[0] + mix[1] + mix[2]);
  if (roll < mix[0]) {
    return TYPES[0];
  }
  if (roll < mix[0] + mix[1]) {
    return TYPES[1];
  }
  return TYPES[2];
}

function clampInside(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export function initDirector(state) {
  const table = S.modes[state.mode].stages;
  state.dir = {
    table,
    stage: -1,
    budget: 0,
    gates: [0],
    groupT: 1.5,
    patrolT: 0,
    alarmStep: 0,
  };
  const p = state.player;
  if (table === "mob") {
    // Three peasants already on their way, so the first kill comes within seconds.
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i - 1) * 0.9 + (state.rng.float() - 0.5) * 0.3;
      const d = 130 + i * 28;
      spawnInside(state, "peasant", "rush", p.x + Math.cos(a) * d, p.y + Math.sin(a) * d);
    }
  } else {
    // A few townsfolk crossing the square right beside the vampire.
    for (let i = 0; i < 6; i++) {
      const x = clampInside(p.x - 90 + i * 36, 40, S.arena.w - 40);
      const y = clampInside(p.y - 175 - (i % 2) * 22, 40, S.arena.h - 40);
      spawnInside(state, "peasant", "prey", x, y, 0);
    }
  }
}

function enterStage(state, index) {
  const dir = state.dir;
  const stage = S.stages[dir.table][index];
  dir.stage = index;
  if (dir.table === "mob") {
    const order = state.rng.shuffle([0, 1, 2, 3]);
    dir.gates = order.slice(0, stage.gates);
  }
  emit(state, { type: "stage", index, banner: stage.banner || null, gates: dir.gates.slice() });
}

function spawnHunter(state, gate) {
  const mode = S.modes.hunt;
  const archer = state.t >= mode.archersFrom && state.rng.chance(mode.archerShare);
  const type = archer ? "archer" : "watchman";
  spawnAtGate(state, type, roleOf(type), gate);
}

export function updateDirector(state, dt) {
  const dir = state.dir;
  const stages = S.stages[dir.table];
  let index = 0;
  while (index < stages.length - 1 && state.t >= stages[index].until) {
    index++;
  }
  if (index !== dir.stage) {
    enterStage(state, index);
  }
  const stage = stages[index];
  const alive = state.humans.length;
  if (alive > state.stats.peakHumans) {
    state.stats.peakHumans = alive;
  }

  if (dir.table === "mob") {
    dir.budget += stage.rate * dt;
    while (dir.budget >= 1) {
      dir.budget -= 1;
      if (state.humans.length < stage.cap) {
        const type = pickType(state, stage.mix);
        spawnAtGate(state, type, roleOf(type), state.rng.pick(dir.gates));
      }
    }
    return;
  }

  // Hunt: townsfolk cross the square in groups.
  dir.groupT -= dt;
  if (dir.groupT <= 0) {
    dir.groupT = stage.groupEvery;
    if (state.humans.length + stage.groupSize <= stage.cap) {
      const from = state.rng.int(4);
      const to = (from + 1 + state.rng.int(3)) % 4;
      for (let i = 0; i < stage.groupSize; i++) {
        spawnAtGate(state, "peasant", "prey", from, to);
      }
      emit(state, { type: "group", gate: from, x: GATES[from].x, y: GATES[from].y });
    }
  }
  // The watch patrols on the clock.
  if (stage.patrolEvery > 0) {
    dir.patrolT -= dt;
    if (dir.patrolT <= 0) {
      dir.patrolT = stage.patrolEvery;
      const gate = state.rng.int(4);
      for (let i = 0; i < stage.patrol[0]; i++) {
        spawnAtGate(state, "watchman", "rush", gate);
      }
      for (let i = 0; i < stage.patrol[1]; i++) {
        spawnAtGate(state, "archer", "ranged", gate);
      }
    }
  }
  // Every survivor comes back with a hunter, through the gate they left by.
  const pending = state.alarm.pending;
  for (let i = pending.length - 1; i >= 0; i--) {
    if (state.t >= pending[i].at) {
      // The more the town knows, the more come back with each survivor.
      for (let n = 0; n <= dir.alarmStep; n++) {
        spawnHunter(state, pending[i].gate);
      }
      emit(state, { type: "hunter", gate: pending[i].gate, x: GATES[pending[i].gate].x, y: GATES[pending[i].gate].y });
      pending.splice(i, 1);
    }
  }
  const mode = S.modes.hunt;
  if (dir.alarmStep < mode.alarmSteps.length && state.stats.escapes >= mode.alarmSteps[dir.alarmStep]) {
    const gate = state.rng.int(4);
    for (let i = 0; i < mode.alarmSquads[dir.alarmStep]; i++) {
      spawnHunter(state, gate);
    }
    emit(state, { type: "alarm", level: dir.alarmStep + 1, banner: mode.alarmNames[dir.alarmStep], gate });
    dir.alarmStep++;
  }
}
