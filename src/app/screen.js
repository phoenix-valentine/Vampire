// Canvas sizing for phones. One place decides how big the picture is, how sharp it is,
// and how much of the world the player sees.

export function createScreen(canvas, host, options) {
  const state = {
    cssW: 0,
    cssH: 0,
    dpr: 1,
    scale: 1, // canvas pixels per world unit, before dpr
    viewW: 0, // world units visible across
    viewH: 0, // world units visible down
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
    dprCap: options.dprCap,
  };
  const listeners = [];
  const probe = document.createElement("div");
  probe.className = "inset-probe";
  host.appendChild(probe);

  function readInsets() {
    const forced = options.forcedInsets;
    if (forced) {
      state.insets.top = forced[0];
      state.insets.right = forced[1];
      state.insets.bottom = forced[2];
      state.insets.left = forced[3];
      return;
    }
    const cs = getComputedStyle(probe);
    state.insets.top = parseFloat(cs.paddingTop) || 0;
    state.insets.right = parseFloat(cs.paddingRight) || 0;
    state.insets.bottom = parseFloat(cs.paddingBottom) || 0;
    state.insets.left = parseFloat(cs.paddingLeft) || 0;
  }

  function applyInsetVars() {
    const s = host.style;
    s.setProperty("--inset-top", state.insets.top + "px");
    s.setProperty("--inset-right", state.insets.right + "px");
    s.setProperty("--inset-bottom", state.insets.bottom + "px");
    s.setProperty("--inset-left", state.insets.left + "px");
  }

  function resize() {
    const rect = host.getBoundingClientRect();
    const cssW = Math.max(1, Math.round(rect.width));
    const cssH = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, state.dprCap);
    readInsets();
    applyInsetVars();
    if (cssW === state.cssW && cssH === state.cssH && dpr === state.dpr) {
      return;
    }
    state.cssW = cssW;
    state.cssH = cssH;
    state.dpr = dpr;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    // Upright phones see a fixed width of world. Wide screens see a fixed height instead,
    // so a desktop window does not show a tiny or a huge slice of the world.
    const upright = cssW / cssH < options.uprightAspect;
    state.scale = upright ? cssW / options.viewWidth : cssH / options.viewHeightWide;
    state.viewW = cssW / state.scale;
    state.viewH = cssH / state.scale;
    for (let i = 0; i < listeners.length; i++) {
      listeners[i](state);
    }
  }

  function setDprCap(value) {
    state.dprCap = value;
    state.dpr = -1;
    resize();
  }

  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", () => {
    setTimeout(resize, 60);
    setTimeout(resize, 400);
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", resize);
  }
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(resize).observe(host);
  }
  resize();

  return {
    state,
    resize,
    setDprCap,
    onResize(fn) {
      listeners.push(fn);
    },
  };
}
