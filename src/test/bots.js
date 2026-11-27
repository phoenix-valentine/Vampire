// Stand-in players. Each bot looks at the state and answers with the same input a thumb gives:
// a direction to move in, and which card to take. They are not people; they show whether a night
// can be lost, survived and won, and nothing about whether it is fun.
import { SETTINGS as S } from "../core/settings.js";
import { createRng } from "../core/rng.js";

const PREFERENCE = ["thick", "frenzy", "long", "bats", "nova", "lance", "swift", "mist", "gaze", "gorge"];

function nearestHostile(state) {
  const p = state.player;
  let best = null;
  let bestD = 1e9;
  for (let i = 0; i < state.humans.length; i++) {
    const h = state.humans[i];
    if (h.dead || h.gone || h.role === "prey") {
      continue;
    }
    const d = Math.hypot(h.x - p.x, h.y - p.y);
    if (d < bestD) {
      bestD = d;
      best = h;
    }
  }
  return { human: best, dist: bestD };
}

function idleBot() {
  return {
    act() {
      return { mx: 0, my: 0 };
    },
    pick() {
      return 0;
    },
  };
}

// Reacts late, only runs from whatever is nearest, picks cards at random.
function noviceBot(seed) {
  const rng = createRng(seed + 7919);
  let decideIn = 0;
  let mx = 0;
  let my = 0;
  return {
    act(state) {
      decideIn -= 1 / S.stepsPerSecond;
      if (decideIn > 0) {
        return { mx, my };
      }
      decideIn = 0.3;
      const p = state.player;
      const near = nearestHostile(state);
      if (near.human && near.dist < 75) {
        mx = (p.x - near.human.x) / near.dist;
        my = (p.y - near.human.y) / near.dist;
      } else if (rng.chance(0.25)) {
        mx = 0;
        my = 0;
      } else {
        // Drift toward the nearest human or blood, with a wobble.
        let tx = S.arena.w / 2;
        let ty = S.arena.h / 2;
        let bestD = 1e9;
        for (let i = 0; i < state.humans.length; i++) {
          const h = state.humans[i];
          const d = Math.hypot(h.x - p.x, h.y - p.y);
          if (d < bestD && h.x > 0 && h.x < S.arena.w && h.y > 0 && h.y < S.arena.h) {
            bestD = d;
            tx = h.x;
            ty = h.y;
          }
        }
        const a = Math.atan2(ty - p.y, tx - p.x) + (rng.float() - 0.5) * 1.6;
        mx = Math.cos(a);
        my = Math.sin(a);
      }
      return { mx, my };
    },
    pick() {
      return rng.int(3);
    },
  };
}

// Plays with purpose: keeps humans at claw's length, steps out of wind-ups and arrows,
// goes for blood, and in Hunt runs down whoever is closest to getting away.
function hunterBot() {
  return {
    act(state) {
      const p = state.player;
      const rule = S.modes[state.mode].bloodRule;
      const reach = S.claws.reach * p.reachMul;
      let vx = 0;
      let vy = 0;
      let dangerNear = false;
      let hostileNear = 1e9;

      for (let i = 0; i < state.humans.length; i++) {
        const h = state.humans[i];
        if (h.dead || h.gone || h.role === "prey") {
          continue;
        }
        const dx = h.x - p.x;
        const dy = h.y - p.y;
        const d = Math.hypot(dx, dy) || 0.001;
        if (d < hostileNear) {
          hostileNear = d;
        }
        if (h.ai === "windup" && d < 70) {
          vx -= (dx / d) * 4;
          vy -= (dy / d) * 4;
          dangerNear = true;
        } else if (h.ai === "aim") {
          // Step sideways out of the line.
          vx += -h.ay * 1.6 * h.side;
          vy += h.ax * 1.6 * h.side;
        } else if (d < reach * 0.75) {
          vx -= (dx / d) * 1.4;
          vy -= (dy / d) * 1.4;
        } else if (d < 260) {
          const pull = h.role === "ranged" ? 0.9 : 0.6;
          vx += (dx / d) * pull * (260 - d) / 260;
          vy += (dy / d) * pull * (260 - d) / 260;
        }
      }
      for (let i = 0; i < state.shots.length; i++) {
        const s = state.shots[i];
        const dx = p.x - s.x;
        const dy = p.y - s.y;
        const speed = Math.hypot(s.vx, s.vy) || 1;
        const along = (dx * s.vx + dy * s.vy) / speed;
        if (along > 0 && along < 160) {
          const side = (dx * -s.vy + dy * s.vx) / speed;
          if (Math.abs(side) < 26) {
            const sign = side >= 0 ? 1 : -1;
            vx += (-s.vy / speed) * 3 * sign;
            vy += (s.vx / speed) * 3 * sign;
            dangerNear = true;
          }
        }
      }

      if (rule === "drops") {
        let best = null;
        let bestD = 240;
        for (let i = 0; i < state.drops.length; i++) {
          const d = Math.hypot(state.drops[i].x - p.x, state.drops[i].y - p.y);
          if (d < bestD) {
            bestD = d;
            best = state.drops[i];
          }
        }
        if (best && !dangerNear) {
          const w = p.blood < p.maxBlood * 0.5 ? 2.2 : 1.1;
          vx += ((best.x - p.x) / bestD) * w;
          vy += ((best.y - p.y) / bestD) * w;
        }
      } else if (rule === "pools") {
        let best = null;
        let bestD = 320;
        let inRange = 0;
        for (let i = 0; i < state.corpses.length; i++) {
          const c = state.corpses[i];
          if (c.blood <= 0) {
            continue;
          }
          const d = Math.hypot(c.x - p.x, c.y - p.y);
          if (d < S.blood.drinkRadius * 0.85) {
            inRange += c.blood;
          }
          if (d < bestD) {
            bestD = d;
            best = c;
          }
        }
        const hungry = p.blood < p.maxBlood * 0.6;
        if (inRange > 0 && !dangerNear && hostileNear > (hungry ? 46 : 62)) {
          return { mx: 0, my: 0 };
        }
        if (best && !dangerNear) {
          const w = hungry ? 2.4 : 1.0;
          vx += ((best.x - p.x) / bestD) * w;
          vy += ((best.y - p.y) / bestD) * w;
        }
      } else {
        // Hunt: go for the runner who is closest to a gate, then for anyone.
        let best = null;
        let bestScore = 1e9;
        for (let i = 0; i < state.humans.length; i++) {
          const h = state.humans[i];
          if (h.dead || h.gone || h.role !== "prey") {
            continue;
          }
          if (h.x < 0 || h.x > S.arena.w || h.y < 0 || h.y > S.arena.h) {
            continue;
          }
          const d = Math.hypot(h.x - p.x, h.y - p.y);
          const score = d - (h.witness ? 90 : 0);
          if (score < bestScore) {
            bestScore = score;
            best = h;
          }
        }
        if (best) {
          const lead = 0.25;
          const tx = best.x + best.vx * lead;
          const ty = best.y + best.vy * lead;
          const d = Math.hypot(tx - p.x, ty - p.y) || 0.001;
          const w = dangerNear ? 1.2 : 2.6;
          vx += ((tx - p.x) / d) * w;
          vy += ((ty - p.y) / d) * w;
        }
      }

      // Stay off the walls a little, so there is always somewhere to step.
      const margin = 50;
      if (p.x < margin) {
        vx += 0.8;
      }
      if (p.x > S.arena.w - margin) {
        vx -= 0.8;
      }
      if (p.y < margin) {
        vy += 0.8;
      }
      if (p.y > S.arena.h - margin) {
        vy -= 0.8;
      }
      const len = Math.hypot(vx, vy);
      if (len < 0.05) {
        // Nothing to do: drift toward the middle.
        const dx = S.arena.w / 2 - p.x;
        const dy = S.arena.h / 2 - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 30) {
          return { mx: 0, my: 0 };
        }
        return { mx: dx / d, my: dy / d };
      }
      return { mx: vx / len, my: vy / len };
    },
    pick(state) {
      const offer = state.offer;
      let best = 0;
      let bestRank = 99;
      for (let i = 0; i < offer.length; i++) {
        const rank = PREFERENCE.indexOf(offer[i].id);
        if (rank >= 0 && rank < bestRank) {
          bestRank = rank;
          best = i;
        }
      }
      return best;
    },
  };
}

export const BOT_KINDS = ["idle", "novice", "hunter"];

export function createBot(kind, seed) {
  if (kind === "idle") {
    return idleBot();
  }
  if (kind === "novice") {
    return noviceBot(seed || 1);
  }
  return hunterBot();
}
