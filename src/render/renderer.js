// Draws the night with plain shapes. It reads the simulation state and never changes it.
// Colours carry one meaning each: bone white is the vampire, red is blood, amber is what will hurt,
// humans are muted, the ground is dark. The vampire is always drawn last.
import { SETTINGS as S } from "../core/settings.js";
import { GATES } from "../core/humans.js";

const C = {
  outside: "#07060b",
  ground: "#17151f",
  groundLine: "#1d1b27",
  wall: "#34303f",
  stain: "#420a12",
  corpse: "#4b4539",
  corpseSteel: "#3a4049",
  corpseOlive: "#3f4636",
  drop: "#ff2b3c",
  pool: "#e01426",
  peasant: "#b8a98f",
  prey: "#ddd2bd",
  watchman: "#7c8896",
  archer: "#93a27e",
  outline: "#0b0a10",
  danger: "#ffb020",
  player: "#f6f1e7",
  cloak: "#231d2c",
  spurt: "#b3101d",
};

const TAU = Math.PI * 2;

export function createRenderer(canvas, screen) {
  const ctx = canvas.getContext("2d", { alpha: false });
  const fx = {
    particles: [],
    stains: [],
    arcs: [],
    rings: [],
    gateFlash: [0, 0, 0, 0],
    trauma: 0,
    hurt: 0,
    pulse: 0,
    time: 0,
  };
  let shakeEnabled = true;
  let hurtGradient = null;
  let gradientFor = "";

  function reset() {
    fx.particles.length = 0;
    fx.stains.length = 0;
    fx.arcs.length = 0;
    fx.rings.length = 0;
    fx.gateFlash[0] = fx.gateFlash[1] = fx.gateFlash[2] = fx.gateFlash[3] = 0;
    fx.trauma = 0;
    fx.hurt = 0;
  }

  function spurt(x, y, dirX, dirY, count, speed) {
    for (let i = 0; i < count; i++) {
      if (fx.particles.length >= S.feel.particleCap) {
        fx.particles.shift();
      }
      const spread = (Math.random() - 0.5) * 1.5;
      const a = Math.atan2(dirY, dirX) + spread;
      const v = speed * (0.35 + Math.random() * 0.9);
      const life = 0.22 + Math.random() * 0.25;
      fx.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life, max: life, size: 2 + Math.random() * 2.2 });
    }
  }

  function stain(x, y, r) {
    if (fx.stains.length >= S.feel.stainCap) {
      fx.stains.shift();
    }
    fx.stains.push({ x, y, r, age: 0, squash: 0.6 + Math.random() * 0.35, rot: Math.random() * Math.PI });
  }

  function onEvent(e) {
    if (e.type === "swipe") {
      fx.arcs.push({ x: e.x, y: e.y, ang: e.ang, reach: e.reach, half: e.half, t: 0 });
    } else if (e.type === "hit") {
      spurt(e.x, e.y, e.dirX, e.dirY, 3, 150);
    } else if (e.type === "kill") {
      spurt(e.x, e.y, e.dirX, e.dirY, e.gib ? 16 : 7, e.gib ? 260 : 180);
      stain(e.x, e.y, (e.gib ? 17 : 10) + Math.random() * 6);
      const sprays = e.gib ? 5 : 2;
      for (let i = 0; i < sprays; i++) {
        const d = 14 + Math.random() * (e.gib ? 44 : 24);
        const side = (Math.random() - 0.5) * 16;
        stain(e.x + e.dirX * d - e.dirY * side, e.y + e.dirY * d + e.dirX * side, 2.5 + Math.random() * 3.5);
      }
    } else if (e.type === "hurt") {
      fx.hurt = 1;
      fx.trauma = Math.min(1, fx.trauma + S.feel.shakeHurt);
      const dx = e.x - e.fromX;
      const dy = e.y - e.fromY;
      const d = Math.hypot(dx, dy) || 1;
      spurt(e.x, e.y, dx / d, dy / d, 8, 200);
    } else if (e.type === "nova") {
      fx.rings.push({ x: e.x, y: e.y, radius: e.radius, t: 0, life: 0.28 });
      fx.trauma = Math.min(1, fx.trauma + S.feel.shakeNova);
    } else if (e.type === "escape" || e.type === "hunter") {
      fx.gateFlash[e.gate] = 1;
    } else if (e.type === "mist") {
      fx.rings.push({ x: e.x, y: e.y, radius: 46, t: 0, life: 0.35, pale: true });
    }
  }

  function updateFx(dt) {
    fx.time += dt;
    for (let i = fx.particles.length - 1; i >= 0; i--) {
      const p = fx.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        fx.particles[i] = fx.particles[fx.particles.length - 1];
        fx.particles.pop();
        continue;
      }
      const drag = Math.max(0, 1 - 6 * dt);
      p.vx *= drag;
      p.vy *= drag;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    for (let i = fx.stains.length - 1; i >= 0; i--) {
      fx.stains[i].age += dt;
      if (fx.stains[i].age > S.feel.stainLife) {
        fx.stains.splice(i, 1);
      }
    }
    for (let i = fx.arcs.length - 1; i >= 0; i--) {
      fx.arcs[i].t += dt;
      if (fx.arcs[i].t > 0.15) {
        fx.arcs.splice(i, 1);
      }
    }
    for (let i = fx.rings.length - 1; i >= 0; i--) {
      fx.rings[i].t += dt;
      if (fx.rings[i].t > fx.rings[i].life) {
        fx.rings.splice(i, 1);
      }
    }
    for (let i = 0; i < 4; i++) {
      fx.gateFlash[i] = Math.max(0, fx.gateFlash[i] - dt * 1.2);
    }
    fx.trauma = Math.max(0, fx.trauma - S.feel.shakeDecay * dt);
    fx.hurt = Math.max(0, fx.hurt - dt * 3.2);
  }

  function dawnGround(state) {
    const toDawn = S.run.seconds - state.t;
    if (toDawn >= 25) {
      return C.ground;
    }
    const k = Math.max(0, Math.min(1, 1 - toDawn / 25)) * (state.result === "dawn" ? 1.6 : 1);
    const r = Math.round(23 + 46 * k);
    const g = Math.round(21 + 30 * k);
    const b = Math.round(31 + 14 * k);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function drawArena(view, state) {
    const W = S.arena.w;
    const H = S.arena.h;
    ctx.fillStyle = dawnGround(state);
    ctx.fillRect(0, 0, W, H);
    // A faint paving grid, only where the camera looks.
    ctx.strokeStyle = C.groundLine;
    ctx.lineWidth = 1;
    ctx.beginPath();
    const step = 60;
    const x0 = Math.max(0, Math.floor(view.left / step) * step);
    const x1 = Math.min(W, view.right);
    const y0 = Math.max(0, Math.floor(view.top / step) * step);
    const y1 = Math.min(H, view.bottom);
    for (let x = x0; x <= x1; x += step) {
      ctx.moveTo(x, Math.max(0, view.top));
      ctx.lineTo(x, Math.min(H, view.bottom));
    }
    for (let y = y0; y <= y1; y += step) {
      ctx.moveTo(Math.max(0, view.left), y);
      ctx.lineTo(Math.min(W, view.right), y);
    }
    ctx.stroke();
    // Walls, with an opening at each gate.
    const g = S.arena.gateWidth / 2;
    ctx.strokeStyle = C.wall;
    ctx.lineWidth = 10;
    ctx.lineCap = "butt";
    ctx.beginPath();
    ctx.moveTo(-5, -5);
    ctx.lineTo(W / 2 - g, -5);
    ctx.moveTo(W / 2 + g, -5);
    ctx.lineTo(W + 5, -5);
    ctx.lineTo(W + 5, H / 2 - g);
    ctx.moveTo(W + 5, H / 2 + g);
    ctx.lineTo(W + 5, H + 5);
    ctx.lineTo(W / 2 + g, H + 5);
    ctx.moveTo(W / 2 - g, H + 5);
    ctx.lineTo(-5, H + 5);
    ctx.lineTo(-5, H / 2 + g);
    ctx.moveTo(-5, H / 2 - g);
    ctx.lineTo(-5, -5);
    ctx.stroke();
    // Gate thresholds. They flash amber when someone gets out or a hunter comes in.
    for (let i = 0; i < 4; i++) {
      const gate = GATES[i];
      const tx = -gate.ny;
      const ty = gate.nx;
      ctx.globalAlpha = 0.28 + 0.72 * fx.gateFlash[i];
      ctx.strokeStyle = C.danger;
      ctx.lineWidth = 3 + 5 * fx.gateFlash[i];
      ctx.setLineDash([10, 8]);
      ctx.beginPath();
      ctx.moveTo(gate.x - tx * g, gate.y - ty * g);
      ctx.lineTo(gate.x + tx * g, gate.y + ty * g);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.globalAlpha = 1;
  }

  function drawStains() {
    ctx.fillStyle = C.stain;
    ctx.beginPath();
    const fadeFrom = S.feel.stainLife - 4;
    for (let i = 0; i < fx.stains.length; i++) {
      const s = fx.stains[i];
      if (s.age > fadeFrom) {
        continue;
      }
      const grow = Math.min(1, 0.35 + s.age * 1.6);
      ctx.moveTo(s.x + s.r * grow, s.y);
      ctx.ellipse(s.x, s.y, s.r * grow, s.r * grow * s.squash, s.rot, 0, TAU);
    }
    ctx.fill();
    for (let i = 0; i < fx.stains.length; i++) {
      const s = fx.stains[i];
      if (s.age <= fadeFrom) {
        continue;
      }
      ctx.globalAlpha = Math.max(0, (S.feel.stainLife - s.age) / 4);
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, s.r, s.r * s.squash, s.rot, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawCorpses(state) {
    const corpses = state.corpses;
    for (let pass = 0; pass < 3; pass++) {
      const type = pass === 0 ? "peasant" : pass === 1 ? "watchman" : "archer";
      ctx.fillStyle = pass === 0 ? C.corpse : pass === 1 ? C.corpseSteel : C.corpseOlive;
      ctx.beginPath();
      for (let i = 0; i < corpses.length; i++) {
        const c = corpses[i];
        if (c.type !== type || c.gib) {
          continue;
        }
        const a = Math.atan2(c.dirY, c.dirX);
        ctx.moveTo(c.x + c.r * 1.25, c.y);
        ctx.ellipse(c.x, c.y, c.r * 1.25, c.r * 0.7, a, 0, TAU);
      }
      ctx.fill();
    }
    // Feed: a body that still holds blood shows a bright core that dims as the blood cools.
    if (S.modes[state.mode].bloodRule === "pools") {
      const pulse = 0.75 + 0.25 * Math.sin(fx.time * 6);
      for (let i = 0; i < corpses.length; i++) {
        const c = corpses[i];
        if (c.blood <= 0) {
          continue;
        }
        const left = Math.max(0, 1 - c.age / S.blood.poolLife);
        ctx.globalAlpha = (0.35 + 0.65 * left) * pulse;
        ctx.fillStyle = C.pool;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 3.5 + c.blood * 1.6, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  function drawDrops(state, alpha) {
    const drops = state.drops;
    ctx.fillStyle = C.drop;
    ctx.beginPath();
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const x = d.px + (d.x - d.px) * alpha;
      const y = d.py + (d.y - d.py) * alpha;
      const fade = d.age > S.blood.dropLife - 2 ? 0.6 : 1;
      const r = 3.4 * fade;
      ctx.moveTo(x + r, y);
      ctx.arc(x, y, r, 0, TAU);
    }
    ctx.fill();
  }

  function drawWarnings(state, alpha) {
    const p = state.player;
    const humans = state.humans;
    ctx.strokeStyle = C.danger;
    for (let i = 0; i < humans.length; i++) {
      const h = humans[i];
      if (h.dead || h.gone) {
        continue;
      }
      if (h.ai === "windup") {
        const def = S.humans[h.type];
        const full = def.reach + h.r + p.radius + def.strikeSlack;
        const share = Math.max(0, h.aiT / def.windup);
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.r + (full - h.r) * share, 0, TAU);
        ctx.stroke();
      } else if (h.ai === "aim") {
        const def = S.humans.archer;
        const len = def.shotSpeed * def.shotLife;
        ctx.lineWidth = h.locked ? 2.5 : 1.5;
        ctx.globalAlpha = h.locked ? 0.95 : 0.5;
        ctx.setLineDash(h.locked ? [] : [8, 7]);
        ctx.beginPath();
        ctx.moveTo(h.x, h.y);
        ctx.lineTo(h.x + h.ax * len, h.y + h.ay * len);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    ctx.globalAlpha = 1;
    // Arrows in flight.
    ctx.strokeStyle = C.danger;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < state.shots.length; i++) {
      const s = state.shots[i];
      const x = s.px + (s.x - s.px) * alpha;
      const y = s.py + (s.y - s.py) * alpha;
      const speed = Math.hypot(s.vx, s.vy) || 1;
      ctx.moveTo(x, y);
      ctx.lineTo(x - (s.vx / speed) * 14, y - (s.vy / speed) * 14);
    }
    ctx.stroke();
  }

  function drawHumans(state, alpha) {
    const p = state.player;
    const humans = state.humans;
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = C.outline;
    // Peasants: round. Prey are paler than the mob.
    for (let pass = 0; pass < 2; pass++) {
      ctx.fillStyle = pass === 0 ? C.peasant : C.prey;
      ctx.beginPath();
      for (let i = 0; i < humans.length; i++) {
        const h = humans[i];
        if (h.type !== "peasant" || h.dead || h.gone || (h.role === "prey") !== (pass === 1)) {
          continue;
        }
        const x = h.px + (h.x - h.px) * alpha;
        const y = h.py + (h.y - h.py) * alpha;
        ctx.moveTo(x + h.r, y);
        ctx.arc(x, y, h.r, 0, TAU);
      }
      ctx.fill();
      ctx.stroke();
    }
    // Watchmen: a larger diamond.
    ctx.fillStyle = C.watchman;
    ctx.beginPath();
    for (let i = 0; i < humans.length; i++) {
      const h = humans[i];
      if (h.type !== "watchman" || h.dead || h.gone) {
        continue;
      }
      const x = h.px + (h.x - h.px) * alpha;
      const y = h.py + (h.y - h.py) * alpha;
      const r = h.r * 1.25;
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r, y);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x - r, y);
      ctx.closePath();
    }
    ctx.fill();
    ctx.stroke();
    // Archers: a triangle that points where they look.
    ctx.fillStyle = C.archer;
    ctx.beginPath();
    for (let i = 0; i < humans.length; i++) {
      const h = humans[i];
      if (h.type !== "archer" || h.dead || h.gone) {
        continue;
      }
      const x = h.px + (h.x - h.px) * alpha;
      const y = h.py + (h.y - h.py) * alpha;
      const a = h.ai === "aim" ? Math.atan2(h.ay, h.ax) : Math.atan2(p.y - h.y, p.x - h.x);
      const r = h.r * 1.35;
      ctx.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
      ctx.lineTo(x + Math.cos(a + 2.4) * r, y + Math.sin(a + 2.4) * r);
      ctx.lineTo(x + Math.cos(a - 2.4) * r, y + Math.sin(a - 2.4) * r);
      ctx.closePath();
    }
    ctx.fill();
    ctx.stroke();
    // Anyone just hit flashes white. A townsperson who has seen the vampire carries an amber mark.
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    for (let i = 0; i < humans.length; i++) {
      const h = humans[i];
      if (h.flash > 0 && !h.dead && !h.gone) {
        // Kept smaller than the vampire, so a flash is never mistaken for it.
        ctx.moveTo(h.x + h.r * 0.85, h.y);
        ctx.arc(h.x, h.y, h.r * 0.85, 0, TAU);
      }
    }
    ctx.fill();
    ctx.fillStyle = C.danger;
    ctx.beginPath();
    for (let i = 0; i < humans.length; i++) {
      const h = humans[i];
      if (h.witness && !h.dead && !h.gone) {
        const x = h.px + (h.x - h.px) * alpha;
        const y = h.py + (h.y - h.py) * alpha;
        ctx.moveTo(x + 3, y - h.r - 6);
        ctx.arc(x, y - h.r - 6, 3, 0, TAU);
      }
    }
    ctx.fill();
  }

  function drawAttacks(state, px, py) {
    const p = state.player;
    for (let i = 0; i < fx.arcs.length; i++) {
      const a = fx.arcs[i];
      const k = 1 - a.t / 0.15;
      ctx.fillStyle = "rgba(246,241,231," + (0.55 * k).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.reach + 6, a.ang - a.half, a.ang + a.half);
      ctx.arc(a.x, a.y, (a.reach + 6) * (0.45 + 0.3 * (1 - k)), a.ang + a.half, a.ang - a.half, true);
      ctx.closePath();
      ctx.fill();
    }
    for (let i = 0; i < fx.rings.length; i++) {
      const r = fx.rings[i];
      const k = r.t / r.life;
      ctx.globalAlpha = 1 - k;
      ctx.strokeStyle = r.pale ? C.player : C.drop;
      ctx.lineWidth = 6 * (1 - k) + 1;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius * (0.25 + 0.75 * k), 0, TAU);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (state.bolts.length > 0) {
      ctx.strokeStyle = C.drop;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let i = 0; i < state.bolts.length; i++) {
        const b = state.bolts[i];
        const speed = Math.hypot(b.vx, b.vy) || 1;
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x - (b.vx / speed) * 18, b.y - (b.vy / speed) * 18);
      }
      ctx.stroke();
    }
    const bats = p.powers.bats || 0;
    if (bats > 0) {
      const def = S.powers.bats;
      const count = def.count[bats - 1];
      ctx.fillStyle = C.player;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const a = p.batAngle + (i * TAU) / count;
        const bx = px + Math.cos(a) * def.radius;
        const by = py + Math.sin(a) * def.radius;
        const flap = 3 + Math.sin(fx.time * 22 + i) * 1.5;
        ctx.moveTo(bx - 7, by - flap);
        ctx.lineTo(bx, by + 2);
        ctx.lineTo(bx + 7, by - flap);
        ctx.lineTo(bx, by - 1);
        ctx.closePath();
      }
      ctx.fill();
    }
    const gaze = p.powers.gaze || 0;
    if (gaze > 0) {
      ctx.strokeStyle = "rgba(246,241,231,0.09)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, S.powers.gaze.radius[gaze - 1], 0, TAU);
      ctx.stroke();
    }
    if (p.drinking) {
      ctx.strokeStyle = "rgba(255,43,60,0.22)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, S.blood.drinkRadius, 0, TAU);
      ctx.stroke();
    }
  }

  function drawParticles() {
    ctx.fillStyle = C.spurt;
    for (let i = 0; i < fx.particles.length; i++) {
      const q = fx.particles[i];
      const size = q.size * (0.4 + 0.6 * (q.life / q.max));
      ctx.fillRect(q.x - size / 2, q.y - size / 2, size, size);
    }
  }

  function drawPlayer(state, px, py) {
    const p = state.player;
    const mist = p.mistT > 0;
    const blink = p.invuln > 0 && !mist && Math.floor(fx.time * 20) % 2 === 0;
    ctx.globalAlpha = mist ? 0.4 : blink ? 0.45 : 1;
    // The cloak trails behind the way the vampire faces, so direction reads at a glance.
    const fxn = p.swipeT < 0.15 ? Math.cos(p.swipeAng) : p.fx;
    const fyn = p.swipeT < 0.15 ? Math.sin(p.swipeAng) : p.fy;
    const lunge = p.swipeT < 0.1 ? 4 * (1 - p.swipeT / 0.1) : 0;
    const x = px + fxn * lunge;
    const y = py + fyn * lunge;
    const r = p.radius;
    ctx.fillStyle = C.cloak;
    ctx.strokeStyle = C.player;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x - fyn * r * 1.05, y + fxn * r * 1.05);
    ctx.lineTo(x - fxn * r * 2.3, y - fyn * r * 2.3);
    ctx.lineTo(x + fyn * r * 1.05, y - fxn * r * 1.05);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = C.player;
    ctx.strokeStyle = C.outline;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU);
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawOverlays(state, input, w, h, phase) {
    const key = w + "x" + h;
    if (gradientFor !== key) {
      gradientFor = key;
      const reach = Math.hypot(w, h) / 2;
      hurtGradient = ctx.createRadialGradient(w / 2, h / 2, reach * 0.45, w / 2, h / 2, reach);
      hurtGradient.addColorStop(0, "rgba(160,0,14,0)");
      hurtGradient.addColorStop(1, "rgba(160,0,14,0.95)");
    }
    const p = state.player;
    const low = p.blood < p.maxBlood * S.player.lowBlood && !state.over;
    let edge = fx.hurt * 0.75;
    if (low) {
      const beat = 0.5 + 0.5 * Math.sin(fx.time * 7);
      edge = Math.max(edge, 0.3 + 0.25 * beat);
    }
    if (state.over && state.result === "dead") {
      edge = 0.9;
    }
    if (edge > 0.01) {
      ctx.globalAlpha = edge;
      ctx.fillStyle = hurtGradient;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;
    }
    if (input && input.stickVisible && phase !== "levelup") {
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = C.player;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(input.stickX, input.stickY, S.input.maxRadius, 0, TAU);
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = C.player;
      ctx.beginPath();
      ctx.arc(input.knobX, input.knobY, 14, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function draw(state, phase, alpha, dt, input) {
    const sc = screen.state;
    const dpr = sc.dpr;
    const w = sc.cssW;
    const h = sc.cssH;
    updateFx(dt);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = C.outside;
    ctx.fillRect(0, 0, w, h);
    if (!state) {
      return;
    }
    const p = state.player;
    const px = p.px + (p.x - p.px) * alpha;
    const py = p.py + (p.y - p.py) * alpha;
    let shakeX = 0;
    let shakeY = 0;
    if (shakeEnabled && fx.trauma > 0) {
      const amount = S.feel.shakeMax * fx.trauma * fx.trauma;
      shakeX = (Math.random() * 2 - 1) * amount;
      shakeY = (Math.random() * 2 - 1) * amount;
    }
    const scale = sc.scale;
    const originX = w / 2 - px * scale + shakeX;
    const originY = h * S.view.playerScreenY - py * scale + shakeY;
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * originX, dpr * originY);
    const view = {
      left: px - w / 2 / scale - 8,
      right: px + w / 2 / scale + 8,
      top: py - (h * S.view.playerScreenY) / scale - 8,
      bottom: py + (h * (1 - S.view.playerScreenY)) / scale + 8,
    };
    drawArena(view, state);
    drawStains();
    drawCorpses(state);
    drawDrops(state, alpha);
    drawHumans(state, alpha);
    drawWarnings(state, alpha);
    drawAttacks(state, px, py);
    drawParticles();
    drawPlayer(state, px, py);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawOverlays(state, input, w, h, phase);
  }

  return {
    draw,
    onEvent,
    reset,
    setShake(value) {
      shakeEnabled = value;
    },
    counts() {
      return { particles: fx.particles.length, stains: fx.stains.length };
    },
  };
}
