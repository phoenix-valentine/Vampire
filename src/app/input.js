// One-thumb input. Touch anywhere to place a stick under the thumb, drag to steer, lift to release.
// The same module reads keys so the game can be tried on a computer.

export function createInput(surface, options) {
  const state = {
    mx: 0, // steering, each from -1 to 1, length at most 1
    my: 0,
    held: false, // a thumb is on the glass (or a movement key is down)
    pressed: false, // went down since the last read
    released: false, // went up since the last read
    tapped: false, // went down and up quickly without moving
    flickX: 0, // direction of the last quick release, or 0,0
    flickY: 0,
    stickX: 0, // where the stick sits on screen, for drawing
    stickY: 0,
    knobX: 0,
    knobY: 0,
    stickVisible: false,
  };
  let pointerId = null;
  let downAt = 0;
  let maxTravel = 0;
  let lastX = 0;
  let lastY = 0;
  let lastT = 0;
  let velX = 0;
  let velY = 0;
  const keys = new Set();
  let enabled = true;

  function setVector(dx, dy) {
    const len = Math.hypot(dx, dy);
    const dead = options.deadZone;
    if (len <= dead) {
      state.mx = 0;
      state.my = 0;
      return;
    }
    // Full speed comes well before the rim, so small thumb movements are enough.
    const amount = Math.min(1, (len - dead) / (options.fullAt - dead));
    state.mx = (dx / len) * amount;
    state.my = (dy / len) * amount;
  }

  function onDown(e) {
    if (!enabled) {
      return;
    }
    if (e.pointerType === "mouse" && e.button !== 0) {
      return;
    }
    if (pointerId !== null) {
      // A newer touch takes over the stick, so a resting hand or a second thumb never leaves it dead.
      try {
        surface.releasePointerCapture(pointerId);
      } catch (err) {
        // Already released.
      }
    }
    pointerId = e.pointerId;
    try {
      surface.setPointerCapture(pointerId);
    } catch (err) {
      // Some embedded views refuse capture; the stick still works without it.
    }
    const rect = surface.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    state.stickX = x;
    state.stickY = y;
    state.knobX = x;
    state.knobY = y;
    state.stickVisible = true;
    state.held = true;
    state.pressed = true;
    downAt = performance.now();
    maxTravel = 0;
    lastX = x;
    lastY = y;
    lastT = downAt;
    velX = 0;
    velY = 0;
    setVector(0, 0);
    e.preventDefault();
  }

  function onMove(e) {
    if (e.pointerId !== pointerId) {
      return;
    }
    const rect = surface.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let dx = x - state.stickX;
    let dy = y - state.stickY;
    const len = Math.hypot(dx, dy);
    if (len > maxTravel) {
      maxTravel = len;
    }
    // If the thumb runs past the rim, drag the stick along so a reversal is instant.
    const max = options.maxRadius;
    if (len > max) {
      const over = len - max;
      state.stickX += (dx / len) * over;
      state.stickY += (dy / len) * over;
      dx = x - state.stickX;
      dy = y - state.stickY;
    }
    state.knobX = x;
    state.knobY = y;
    setVector(dx, dy);
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    const blend = 0.5;
    velX += (((x - lastX) / dt) * 1000 - velX) * blend;
    velY += (((y - lastY) / dt) * 1000 - velY) * blend;
    lastX = x;
    lastY = y;
    lastT = now;
    e.preventDefault();
  }

  function onUp(e) {
    if (e.pointerId !== pointerId) {
      return;
    }
    const heldMs = performance.now() - downAt;
    if (heldMs <= options.tapMs && maxTravel <= options.tapTravel) {
      state.tapped = true;
    }
    const sinceMove = performance.now() - lastT;
    const speed = Math.hypot(velX, velY);
    if (sinceMove < 80 && speed >= options.flickSpeed) {
      state.flickX = velX / speed;
      state.flickY = velY / speed;
    }
    pointerId = null;
    state.held = keys.size > 0;
    state.released = true;
    state.stickVisible = false;
    state.mx = 0;
    state.my = 0;
    applyKeys();
  }

  function applyKeys() {
    if (pointerId !== null) {
      return;
    }
    let x = 0;
    let y = 0;
    if (keys.has("ArrowLeft") || keys.has("KeyA")) {
      x -= 1;
    }
    if (keys.has("ArrowRight") || keys.has("KeyD")) {
      x += 1;
    }
    if (keys.has("ArrowUp") || keys.has("KeyW")) {
      y -= 1;
    }
    if (keys.has("ArrowDown") || keys.has("KeyS")) {
      y += 1;
    }
    const len = Math.hypot(x, y);
    state.mx = len > 0 ? x / len : 0;
    state.my = len > 0 ? y / len : 0;
  }

  const moveKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "KeyA", "KeyD", "KeyW", "KeyS"];

  function onKeyDown(e) {
    if (!enabled) {
      return;
    }
    if (moveKeys.indexOf(e.code) >= 0) {
      if (!keys.has(e.code)) {
        if (keys.size === 0 && pointerId === null) {
          state.pressed = true;
        }
        keys.add(e.code);
      }
      state.held = true;
      applyKeys();
      e.preventDefault();
    }
  }

  function onKeyUp(e) {
    if (keys.delete(e.code)) {
      if (keys.size === 0 && pointerId === null) {
        state.held = false;
        state.released = true;
      }
      applyKeys();
    }
  }

  function cancelAll() {
    if (pointerId !== null) {
      pointerId = null;
      state.stickVisible = false;
      state.released = true;
    }
    keys.clear();
    state.held = false;
    state.mx = 0;
    state.my = 0;
  }

  surface.addEventListener("pointerdown", onDown);
  surface.addEventListener("pointermove", onMove);
  surface.addEventListener("pointerup", onUp);
  surface.addEventListener("pointercancel", onUp);
  surface.addEventListener("lostpointercapture", (e) => {
    if (e.pointerId === pointerId) {
      onUp(e);
    }
  });
  surface.addEventListener("contextmenu", (e) => e.preventDefault());
  // Safari still needs these to stop the page from scrolling, zooming or selecting under the thumb.
  surface.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
  surface.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  surface.addEventListener("gesturestart", (e) => e.preventDefault());
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("blur", cancelAll);

  return {
    state,
    // Call once per simulation step, after reading the state.
    endStep() {
      state.pressed = false;
      state.released = false;
      state.tapped = false;
      state.flickX = 0;
      state.flickY = 0;
    },
    setEnabled(value) {
      enabled = value;
      if (!value) {
        cancelAll();
      }
    },
    cancelAll,
  };
}
