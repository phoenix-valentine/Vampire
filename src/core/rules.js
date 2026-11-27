// Shared rules: what a hit, a kill and a drink do. No drawing, no sound, no browser.
import { SETTINGS as S } from "./settings.js";

export function emit(state, event) {
  state.events.push(event);
}

export function xpNeeded(level) {
  return S.xp.first + S.xp.step * (level - 1);
}

export function clawDamage(player) {
  const levels = Math.min(player.level - 1, S.player.levelDamageCap);
  return S.claws.damage * (1 + S.player.levelDamage * levels);
}

export function softStart(t) {
  const share = Math.min(1, t / S.run.softStartSeconds);
  return S.run.softStartDamage + (1 - S.run.softStartDamage) * share;
}

export function die(state, cause) {
  if (state.over) {
    return;
  }
  state.player.blood = 0;
  state.over = true;
  state.result = "dead";
  state.cause = cause;
  emit(state, { type: "dead", x: state.player.x, y: state.player.y, cause });
}

// Blood reaches the vampire: it heals and it counts toward the next level.
export function drink(state, units, x, y) {
  const p = state.player;
  const mode = S.modes[state.mode];
  p.blood = Math.min(p.maxBlood, p.blood + units * S.blood.healPerUnit * mode.healMul);
  p.xp += units;
  state.stats.drunk += units;
  emit(state, { type: "pickup", x, y, units });
  while (p.xp >= xpNeeded(p.level)) {
    p.xp -= xpNeeded(p.level);
    p.level++;
    state.pendingLevels++;
    if (state.stats.firstLevelT < 0) {
      state.stats.firstLevelT = state.t;
    }
  }
}

// warnedFor is how long the player could see this hit coming.
export function hurtPlayer(state, amount, source, warnedFor, x, y) {
  const p = state.player;
  if (state.over || p.invuln > 0 || p.mistT > 0) {
    return false;
  }
  let dmg = amount * softStart(state.t);
  const cap = p.maxBlood * S.player.hitCapShare;
  if (dmg > cap) {
    dmg = cap;
  }
  if (warnedFor < S.fair.minWarning) {
    state.stats.violations++;
  }
  p.blood -= dmg;
  p.invuln = S.player.hitInvuln;
  state.stats.hitsTaken++;
  state.stats.damageBy[source] = (state.stats.damageBy[source] || 0) + dmg;
  state.recentHits.push({ t: state.t, source, dmg, warnedFor });
  if (state.recentHits.length > 6) {
    state.recentHits.shift();
  }
  emit(state, { type: "hurt", x: p.x, y: p.y, fromX: x, fromY: y, dmg, source });
  const mistLevel = p.powers.mist || 0;
  if (mistLevel > 0 && p.mistCd <= 0 && p.blood > 0) {
    p.mistT = S.powers.mist.duration[mistLevel - 1];
    p.mistCd = S.powers.mist.cooldown[mistLevel - 1];
    emit(state, { type: "mist", x: p.x, y: p.y });
  }
  if (p.blood <= 0) {
    die(state, source);
  }
  return true;
}

export function spawnDrop(state, x, y, streaming) {
  if (state.drops.length >= S.limits.drops) {
    state.drops.shift();
  }
  const a = state.rng.angle();
  const speed = streaming ? 0 : S.blood.popSpeed * (0.5 + state.rng.float());
  state.drops.push({
    x,
    y,
    px: x,
    py: y,
    vx: Math.cos(a) * speed,
    vy: Math.sin(a) * speed,
    age: 0,
    pulled: streaming,
    pullT: 0,
    stream: streaming,
    value: 1,
  });
}

export function killHuman(state, h, dirX, dirY, gib, source) {
  if (h.dead) {
    return;
  }
  h.dead = true;
  const def = S.humans[h.type];
  const stats = state.stats;
  stats.kills++;
  stats.killsBy[h.type] = (stats.killsBy[h.type] || 0) + 1;
  if (stats.firstKillT < 0) {
    stats.firstKillT = state.t;
  }
  const rule = S.modes[state.mode].bloodRule;
  const corpse = { x: h.x, y: h.y, type: h.type, r: h.r, age: 0, dirX, dirY, blood: 0, drain: 0, gib };
  if (rule === "drops") {
    for (let i = 0; i < def.blood; i++) {
      spawnDrop(state, h.x + dirX * S.blood.dropKick, h.y + dirY * S.blood.dropKick, false);
    }
  } else if (rule === "pools") {
    corpse.blood = def.blood;
  } else {
    drink(state, def.blood, h.x, h.y);
    emit(state, { type: "bite", x: h.x, y: h.y });
  }
  state.corpses.push(corpse);
  if (state.corpses.length > S.limits.corpses) {
    state.corpses.shift();
  }
  if (state.mode === "hunt") {
    state.scares.push({ x: h.x, y: h.y });
  }
  emit(state, { type: "kill", x: h.x, y: h.y, dirX, dirY, human: h.type, gib, source, tough: h.type !== "peasant" });
}

export function damageHuman(state, h, dmg, dirX, dirY, knock, source) {
  if (h.dead) {
    return;
  }
  h.hp -= dmg;
  h.flash = 0.08;
  h.kx += dirX * knock;
  h.ky += dirY * knock;
  if (h.hp <= 0) {
    const gib = -h.hp >= h.maxHp * S.feel.gibOverkill;
    killHuman(state, h, dirX, dirY, gib, source);
  } else {
    emit(state, { type: "hit", x: h.x, y: h.y, dirX, dirY, human: h.type, source });
  }
}
