// The level-up cards and the powers they give.
import { SETTINGS as S } from "./settings.js";
import { emit, damageHuman } from "./rules.js";

export function powerLevel(player, id) {
  return player.powers[id] || 0;
}

// Three different cards, never one that is already at its cap.
export function makeOffer(state) {
  const p = state.player;
  const eligible = [];
  const ids = Object.keys(S.powers);
  for (let i = 0; i < ids.length; i++) {
    if (powerLevel(p, ids[i]) < S.powers[ids[i]].max) {
      eligible.push(ids[i]);
    }
  }
  state.rng.shuffle(eligible);
  const cards = [];
  for (let i = 0; i < eligible.length && cards.length < 3; i++) {
    const id = eligible[i];
    const level = powerLevel(p, id) + 1;
    cards.push({ id, level, name: S.powers[id].name, text: S.powers[id].text[level - 1] });
  }
  while (cards.length < 3) {
    cards.push({ id: "gorge", level: 1, name: S.gorge.name, text: S.gorge.text });
  }
  return cards;
}

export function applyPower(state, id) {
  const p = state.player;
  if (id === "gorge") {
    p.maxBlood += S.gorge.max_blood;
    p.blood = Math.min(p.maxBlood, p.blood + S.gorge.max_blood);
    return;
  }
  p.powers[id] = powerLevel(p, id) + 1;
  const level = p.powers[id];
  if (id === "long") {
    p.reachMul = 1 + S.powers.long.reach * level;
    p.arcMul = 1 + S.powers.long.arc * level;
  } else if (id === "frenzy") {
    p.intervalMul = Math.pow(S.powers.frenzy.interval, level);
  } else if (id === "swift") {
    p.speedMul = 1 + S.powers.swift.speed * level;
  } else if (id === "thick") {
    p.maxBlood += S.powers.thick.max_blood;
    p.blood = Math.min(p.maxBlood, p.blood + S.powers.thick.max_blood);
  } else if (id === "lance") {
    p.lanceCd = 0.2;
  } else if (id === "nova") {
    p.novaCd = 1.5;
  }
}

export function updatePowers(state, dt, grid) {
  const p = state.player;

  // Bats circle the vampire and cut what they touch.
  const bats = powerLevel(p, "bats");
  if (bats > 0) {
    const def = S.powers.bats;
    const count = def.count[bats - 1];
    p.batAngle += def.spin * dt;
    for (let i = 0; i < count; i++) {
      const a = p.batAngle + (i * Math.PI * 2) / count;
      const bx = p.x + Math.cos(a) * def.radius;
      const by = p.y + Math.sin(a) * def.radius;
      grid.query(bx, by, 22, (h) => {
        if (h.dead || h.gone || h.batCd > 0) {
          return;
        }
        const dx = h.x - bx;
        const dy = h.y - by;
        const d = Math.hypot(dx, dy) || 0.001;
        if (d < 9 + h.r) {
          h.batCd = def.gap;
          const ox = h.x - p.x;
          const oy = h.y - p.y;
          const od = Math.hypot(ox, oy) || 0.001;
          damageHuman(state, h, def.damage, ox / od, oy / od, def.knock, "bats");
        }
      });
    }
  }

  // A shard of blood at the nearest human.
  const lance = powerLevel(p, "lance");
  if (lance > 0) {
    const def = S.powers.lance;
    p.lanceCd -= dt;
    if (p.lanceCd <= 0) {
      let best = null;
      let bestD = def.range;
      grid.query(p.x, p.y, def.range, (h) => {
        if (h.dead || h.gone) {
          return;
        }
        const d = Math.hypot(h.x - p.x, h.y - p.y);
        if (d < bestD) {
          bestD = d;
          best = h;
        }
      });
      if (best) {
        const dx = (best.x - p.x) / (bestD || 1);
        const dy = (best.y - p.y) / (bestD || 1);
        state.bolts.push({
          x: p.x,
          y: p.y,
          px: p.x,
          py: p.y,
          vx: dx * def.speed,
          vy: dy * def.speed,
          life: def.life,
          pierce: def.pierce[lance - 1],
          hit: [],
        });
        p.lanceCd = def.interval[lance - 1];
        emit(state, { type: "lance", x: p.x, y: p.y });
      } else {
        p.lanceCd = 0.15;
      }
    }
  }
  const bolts = state.bolts;
  for (let i = bolts.length - 1; i >= 0; i--) {
    const b = bolts[i];
    b.px = b.x;
    b.py = b.y;
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    const speed = Math.hypot(b.vx, b.vy) || 1;
    grid.query(b.x, b.y, 20, (h) => {
      if (h.dead || h.gone || b.pierce < 0 || b.hit.indexOf(h.id) >= 0) {
        return;
      }
      const d = Math.hypot(h.x - b.x, h.y - b.y);
      if (d < 6 + h.r) {
        b.hit.push(h.id);
        b.pierce--;
        damageHuman(state, h, S.powers.lance.damage, b.vx / speed, b.vy / speed, 90, "lance");
      }
    });
    if (b.life <= 0 || b.pierce < 0) {
      bolts[i] = bolts[bolts.length - 1];
      bolts.pop();
    }
  }

  // A burst around the vampire.
  const nova = powerLevel(p, "nova");
  if (nova > 0) {
    const def = S.powers.nova;
    p.novaCd -= dt;
    if (p.novaCd <= 0) {
      let any = false;
      grid.query(p.x, p.y, def.radius, (h) => {
        if (h.dead || h.gone) {
          return;
        }
        const dx = h.x - p.x;
        const dy = h.y - p.y;
        const d = Math.hypot(dx, dy) || 0.001;
        if (d < def.radius + h.r) {
          any = true;
          damageHuman(state, h, def.damage, dx / d, dy / d, def.knock, "nova");
        }
      });
      if (any) {
        p.novaCd = def.interval[nova - 1];
        emit(state, { type: "nova", x: p.x, y: p.y, radius: def.radius });
      } else {
        p.novaCd = 0.2;
      }
    }
  }
}
