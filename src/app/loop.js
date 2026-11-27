// The frame loop. The simulation always advances in equal steps; drawing happens as often
// as the screen allows and blends between the last two steps.

export function createLoop(options) {
  const stepSeconds = 1 / options.stepsPerSecond;
  const maxStepsPerFrame = options.maxStepsPerFrame;
  let running = false;
  let paused = false;
  let rafId = 0;
  let last = 0;
  let accumulator = 0;
  let freezeLeft = 0; // seconds of hit-stop still to serve
  let timeScale = 1;
  const stats = {
    frames: 0,
    frameMs: 0,
    worstMs: 0,
    avgMs: 16.7,
    stepsThisFrame: 0,
    dropped: 0,
    workMs: 4, // how long the game itself spends on a frame, whatever the screen's rhythm
  };

  function frame(now) {
    rafId = requestAnimationFrame(frame);
    let elapsed = (now - last) / 1000;
    last = now;
    if (elapsed < 0) {
      elapsed = 0;
    }
    if (elapsed > 0.25) {
      // The tab was hidden or the phone stalled. Do not try to catch up.
      elapsed = stepSeconds;
      stats.dropped++;
    }
    const frameMs = elapsed * 1000;
    stats.frames++;
    stats.frameMs = frameMs;
    stats.avgMs += (frameMs - stats.avgMs) * 0.05;
    if (frameMs > stats.worstMs) {
      stats.worstMs = frameMs;
    }
    let steps = 0;
    const workStart = performance.now();
    if (!paused) {
      if (freezeLeft > 0) {
        freezeLeft -= elapsed;
      } else {
        accumulator += elapsed * timeScale;
        while (accumulator >= stepSeconds && steps < maxStepsPerFrame) {
          options.step(stepSeconds);
          accumulator -= stepSeconds;
          steps++;
          if (paused || freezeLeft > 0) {
            break;
          }
        }
        if (accumulator > stepSeconds * maxStepsPerFrame) {
          accumulator = 0;
          stats.dropped++;
        }
      }
    }
    stats.stepsThisFrame = steps;
    const alpha = paused ? 1 : Math.min(1, accumulator / stepSeconds);
    options.draw(alpha, elapsed, paused);
    stats.workMs += (performance.now() - workStart - stats.workMs) * 0.05;
  }

  return {
    stats,
    stepSeconds,
    start() {
      if (running) {
        return;
      }
      running = true;
      last = performance.now();
      rafId = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(rafId);
    },
    setPaused(value) {
      paused = value;
      if (!value) {
        last = performance.now();
        accumulator = 0;
      }
    },
    isPaused() {
      return paused;
    },
    freeze(seconds) {
      if (seconds > freezeLeft) {
        freezeLeft = seconds;
      }
    },
    setTimeScale(value) {
      timeScale = value;
    },
    resetStats() {
      stats.frames = 0;
      stats.worstMs = 0;
      stats.dropped = 0;
    },
  };
}
