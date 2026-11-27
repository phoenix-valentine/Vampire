// How humans move, attack, flee and leave. Three roles: "rush" (walks at the vampire and strikes),
// "ranged" (keeps its distance and shoots), "prey" (crosses the square, runs for a gate when it sees the vampire).
import { SETTINGS as S } from "./settings.js";
import { emit, hurtPlayer } from "./rules.js";

const W = S.arena.w;
const H = S.arena.h;
const HALF_GATE = S.arena.gateWidth / 2;

// Gate centres on the wall line, with the direction that points out of the square.
export const GATES = [
  { x: W / 2, y: 0, nx: 0, ny: -1 },
  { x: W, y: H / 2, nx: 1, ny: 0 },
  { x: W / 2, y: H, nx: 0, ny: 1 },
  { x: 0, y: H / 2, nx: -1, ny: 0 },
];

let nextId = 1;

export function resetIds() {
  nextId = 1;
}

function makeHuman(state, type, role, x, y) {
  const def = S.humans[type];
  const hp = def.hp * (1 + S.scaling.hpPer30s * (state.t / 30));
  return {
    id: nextId++,
    type,
    role,
    x,
    y,
    px: x,
    py: y,
    vx: 0,
    vy: 0,
    kx: 0,
    ky: 0,
    r: def.radius,
    hp,
    maxHp: hp,
    ai: "approach",
    aiT: 0,
    cd: 0.3 + state.rng.float() * 0.5,
    flash: 0,
    batCd: 0,
    tx: x,
    ty: y,
    ax: 0,
    ay: 0,
    locked: false,
    witness: false,
    gate: -1,
    dest: -1,
    repick: 0,
    dead: false,
    gone: false,
    side: state.rng.sign(),
  };
}

// A human that walks in through a gate.
export function spawnAtGate(state, type, role, gateIndex, destGate) {
  if (state.humans.length >= S.limits.humans) {
    return null;
  }
  if (type === "archer") {
    let archers = 0;
    for (let i = 0; i < state.humans.length; i++) {
      if (state.humans[i].type === "archer" && !state.humans[i].dead) {
        archers++;
      }
    }
    if (archers >= S.limits.archers) {
      type = "watchman";
      role = "rush";
    }
  }
  const g = GATES[gateIndex];
  const out = 30 + state.rng.float() * 70;
  const along = (state.rng.float() - 0.5) * (S.arena.gateWidth - 36);
  const tx = -g.ny;
  const ty = g.nx;
  const h = makeHuman(state, type, role, g.x + g.nx * out + tx * along, g.y + g.ny * out + ty * along);
  const inward = 40 + state.rng.float() * 70;
  h.ai = "enter";
  h.tx = g.x - g.nx * inward + tx * along;
  h.ty = g.y - g.ny * inward + ty * along;
  h.gate = gateIndex;
  h.dest = destGate === undefined ? -1 : destGate;
  state.humans.push(h);
  return h;
}

// A human placed inside the square, used for the first seconds of a night.
export function spawnInside(state, type, role, x, y, destGate) {
  const h = makeHuman(state, type, role, x, y);
  h.ai = role === "prey" ? "walk" : role === "ranged" ? "reposition" : "approach";
  h.dest = destGate === undefined ? -1 : destGate;
  if (role === "prey") {
    h.tx = GATES[h.dest].x;
    h.ty = GATES[h.dest].y;
  }
  state.humans.push(h);
  return h;
}

function becomeWitness(state, h) {
  if (h.witness) {
    return;
  }
  h.witness = true;
  h.ai = "flee";
  h.repick = 0;
  emit(state, { type: "scream", x: h.x, y: h.y });
}

function pickEscapeGate(state, h) {
  const p = state.player;
  let best = 0;
  let bestScore = 1e9;
  for (let i = 0; i < GATES.length; i++) {
    const g = GATES[i];
    const dx = g.x - h.x;
    const dy = g.y - h.y;
    const dg = Math.hypot(dx, dy) || 1;
    const pdx = p.x - h.x;
    const pdy = p.y - h.y;
    const dp = Math.hypot(pdx, pdy) || 1;
    let score = dg - 0.5 * Math.min(Math.hypot(g.x - p.x, g.y - p.y), 400);
    const facing = (dx * pdx + dy * pdy) / (dg * dp);
    if (facing > 0.7 && dp < dg) {
      score += 350; // the vampire stands between this human and that gate
    }
    if (score < bestScore) {
      bestScore = score;
      best = i;
    }
  }
  return best;
}

// Keeps a human inside the walls, except in the opening of a gate.
function constrain(h) {
  const r = h.r;
  const inGateX = Math.abs(h.x - W / 2) < HALF_GATE - r;
  const inGateY = Math.abs(h.y - H / 2) < HALF_GATE - r;
  if (h.y < r) {
    if (inGateX || h.y < -r) {
      if (h.y < 0) {
        h.x = Math.max(W / 2 - HALF_GATE + r, Math.min(W / 2 + HALF_GATE - r, h.x));
      }
    } else {
      h.y = r;
    }
  } else if (h.y > H - r) {
    if (inGateX || h.y > H + r) {
      if (h.y > H) {
        h.x = Math.max(W / 2 - HALF_GATE + r, Math.min(W / 2 + HALF_GATE - r, h.x));
      }
    } else {
      h.y = H - r;
    }
  }
  if (h.x < r) {
    if (inGateY || h.x < -r) {
      if (h.x < 0) {
        h.y = Math.max(H / 2 - HALF_GATE + r, Math.min(H / 2 + HALF_GATE - r, h.y));
      }
    } else {
      h.x = r;
    }
  } else if (h.x > W - r) {
    if (inGateY || h.x > W + r) {
      if (h.x > W) {
        h.y = Math.max(H / 2 - HALF_GATE + r, Math.min(H / 2 + HALF_GATE - r, h.y));
      }
    } else {
      h.x = W - r;
    }
  }
}

export function updateHumans(state, dt, grid) {
  const p = state.player;
  const humans = state.humans;
  const dmgScale = 1 + S.scaling.damagePerMin * (state.t / 60);
  const gazeLevel = p.powers.gaze || 0;
  const gazeRadius = gazeLevel > 0 ? S.powers.gaze.radius[gazeLevel - 1] : 0;
  const gazeSlow = gazeLevel > 0 ? S.powers.gaze.slow[gazeLevel - 1] : 0;
  const scares = state.scares;
  const hearSq = S.humans.peasant.hear * S.humans.peasant.hear;

  for (let i = 0; i < humans.length; i++) {
    const h = humans[i];
    if (h.dead || h.gone) {
      continue;
    }
    const def = S.humans[h.type];
    h.px = h.x;
    h.py = h.y;
    if (h.flash > 0) {
      h.flash -= dt;
    }
    if (h.batCd > 0) {
      h.batCd -= dt;
    }
    if (h.cd > 0) {
      h.cd -= dt;
    }
    const dxp = p.x - h.x;
    const dyp = p.y - h.y;
    const dist = Math.hypot(dxp, dyp) || 0.001;
    const slow = gazeRadius > 0 && dist < gazeRadius ? 1 - gazeSlow : 1;
    let wantX = 0;
    let wantY = 0;

    if (h.ai === "enter") {
      const dx = h.tx - h.x;
      const dy = h.ty - h.y;
      const d = Math.hypot(dx, dy) || 0.001;
      const speed = (h.role === "prey" ? def.walk : def.speed) * slow;
      wantX = (dx / d) * speed;
      wantY = (dy / d) * speed;
      if (d < 12) {
        if (h.role === "prey") {
          h.ai = "walk";
          h.tx = GATES[h.dest].x;
          h.ty = GATES[h.dest].y;
        } else if (h.role === "ranged") {
          h.ai = "reposition";
        } else {
          h.ai = "approach";
        }
      }
    } else if (h.ai === "approach") {
      const strikeStart = def.reach + h.r + p.radius;
      if (dist < strikeStart && h.cd <= 0 && p.mistT <= 0) {
        h.ai = "windup";
        h.aiT = def.windup;
        emit(state, { type: "windup", x: h.x, y: h.y, id: h.id });
      } else {
        wantX = (dxp / dist) * def.speed * slow;
        wantY = (dyp / dist) * def.speed * slow;
      }
    } else if (h.ai === "windup") {
      h.aiT -= dt;
      if (h.aiT <= 0) {
        const strikeRange = def.reach + h.r + p.radius + def.strikeSlack;
        const landed = dist < strikeRange && hurtPlayer(state, def.damage * dmgScale, h.type, def.windup, h.x, h.y);
        emit(state, { type: "strike", x: h.x, y: h.y, landed });
        h.ai = "recover";
        h.aiT = def.recover;
        h.cd = def.cooldown;
      }
    } else if (h.ai === "recover") {
      h.aiT -= dt;
      if (h.aiT <= 0) {
        h.ai = "approach";
      }
    } else if (h.ai === "reposition") {
      if (dist < def.near) {
        wantX = (-dxp / dist) * def.speed * slow;
        wantY = (-dyp / dist) * def.speed * slow;
      } else if (dist > def.far) {
        wantX = (dxp / dist) * def.speed * slow;
        wantY = (dyp / dist) * def.speed * slow;
      } else {
        wantX = (-dyp / dist) * def.speed * 0.45 * h.side * slow;
        wantY = (dxp / dist) * def.speed * 0.45 * h.side * slow;
      }
      const inside = h.x > 20 && h.x < W - 20 && h.y > 20 && h.y < H - 20;
      if (h.cd <= 0 && dist < def.fireRange && inside && p.mistT <= 0) {
        h.ai = "aim";
        h.aiT = def.aim;
        h.ax = dxp / dist;
        h.ay = dyp / dist;
        h.locked = false;
        emit(state, { type: "aim", x: h.x, y: h.y, id: h.id });
      }
    } else if (h.ai === "aim") {
      h.aiT -= dt;
      if (h.aiT > def.aim * (1 - def.lockAt)) {
        h.ax = dxp / dist;
        h.ay = dyp / dist;
      } else if (!h.locked) {
        h.locked = true;
        emit(state, { type: "lock", x: h.x, y: h.y, id: h.id });
      }
      if (h.aiT <= 0) {
        state.shots.push({
          x: h.x + h.ax * h.r,
          y: h.y + h.ay * h.r,
          px: h.x,
          py: h.y,
          vx: h.ax * def.shotSpeed,
          vy: h.ay * def.shotSpeed,
          dmg: def.damage * dmgScale,
          life: def.shotLife,
          warned: def.aim,
          source: h.type,
        });
        emit(state, { type: "arrow", x: h.x, y: h.y });
        h.cd = def.cooldown;
        h.ai = "reposition";
      }
    } else if (h.ai === "walk") {
      const dx = h.tx - h.x;
      const dy = h.ty - h.y;
      const d = Math.hypot(dx, dy) || 0.001;
      wantX = (dx / d) * def.walk * slow;
      wantY = (dy / d) * def.walk * slow;
      if (dist < def.sight && p.mistT <= 0) {
        becomeWitness(state, h);
      } else {
        for (let s = 0; s < scares.length; s++) {
          const sx = scares[s].x - h.x;
          const sy = scares[s].y - h.y;
          if (sx * sx + sy * sy < hearSq) {
            becomeWitness(state, h);
            break;
          }
        }
      }
      if (h.ai === "walk" && d < 26) {
        h.ai = "leave";
        h.gate = h.dest;
      }
    } else if (h.ai === "flee") {
      h.repick -= dt;
      if (h.repick <= 0) {
        h.gate = pickEscapeGate(state, h);
        h.repick = 0.7;
      }
      const g = GATES[h.gate];
      const gx = g.x - h.x;
      const gy = g.y - h.y;
      const gd = Math.hypot(gx, gy) || 0.001;
      const away = Math.max(0, (120 - dist) / 120) * 1.5;
      let fx = gx / gd - (dxp / dist) * away;
      let fy = gy / gd - (dyp / dist) * away;
      const fl = Math.hypot(fx, fy) || 0.001;
      fx /= fl;
      fy /= fl;
      wantX = fx * def.fleeSpeed * slow;
      wantY = fy * def.fleeSpeed * slow;
      if (gd < 26) {
        h.ai = "leave";
      }
    } else if (h.ai === "leave") {
      const g = GATES[h.gate];
      const speed = (h.witness ? def.fleeSpeed : def.walk) * slow;
      wantX = g.nx * speed;
      wantY = g.ny * speed;
      const outBy = (h.x - g.x) * g.nx + (h.y - g.y) * g.ny;
      if (outBy > 34) {
        h.gone = true;
        if (h.witness) {
          state.stats.escapes++;
          state.alarm.pending.push({ at: state.t + S.modes.hunt.hunterDelay, gate: h.gate });
          emit(state, { type: "escape", x: g.x, y: g.y, gate: h.gate });
        } else {
          state.stats.passed++;
        }
        continue;
      }
    }

    const k = Math.min(1, 9 * dt);
    h.vx += (wantX - h.vx) * k;
    h.vy += (wantY - h.vy) * k;
    h.x += (h.vx + h.kx) * dt;
    h.y += (h.vy + h.ky) * dt;
    const decay = Math.max(0, 1 - 7 * dt);
    h.kx *= decay;
    h.ky *= decay;

    // Humans do not stand inside each other.
    grid.query(h.x, h.y, h.r + 12, (o) => {
      if (o === h || o.dead || o.gone) {
        return;
      }
      const dx = h.x - o.x;
      const dy = h.y - o.y;
      const d = Math.hypot(dx, dy);
      const min = h.r + o.r;
      if (d < min && d > 0.01) {
        const push = (min - d) * 0.35;
        h.x += (dx / d) * push;
        h.y += (dy / d) * push;
      }
    });

    // Humans never hold the vampire in place: they are pushed off it.
    if (p.mistT <= 0) {
      const dx = h.x - p.x;
      const dy = h.y - p.y;
      const d = Math.hypot(dx, dy);
      const min = h.r + p.radius - 2;
      if (d < min && d > 0.01) {
        h.x = p.x + (dx / d) * min;
        h.y = p.y + (dy / d) * min;
      }
    }
    constrain(h);
  }
  scares.length = 0;
}

export function updateShots(state, dt) {
  const p = state.player;
  const shots = state.shots;
  for (let i = shots.length - 1; i >= 0; i--) {
    const s = shots[i];
    s.px = s.x;
    s.py = s.y;
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.life -= dt;
    const dx = s.x - p.x;
    const dy = s.y - p.y;
    const hitR = p.radius + S.humans.archer.shotRadius - 2;
    let remove = s.life <= 0;
    if (!remove && dx * dx + dy * dy < hitR * hitR) {
      if (p.mistT <= 0 && p.invuln <= 0) {
        hurtPlayer(state, s.dmg, s.source, s.warned, s.x - s.vx * 0.05, s.y - s.vy * 0.05);
        remove = true;
      }
    }
    if (remove) {
      shots[i] = shots[shots.length - 1];
      shots.pop();
    }
  }
}
