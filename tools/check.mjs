// Everything that can be checked without a person: syntax, replay, a full night per variation
// with its effects, the build, and the real page in a phone-sized browser.
//   node tools/check.mjs            all checks
//   node tools/check.mjs --shots    also save screenshots to reports/shots/
//   node tools/check.mjs --quick    skip the browser
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { hashState } from "../src/core/sim.js";
import { MODES, SETTINGS as S } from "../src/core/settings.js";
import { playNight } from "./lab.mjs";
import { build } from "./build.mjs";
import { startServer } from "./serve.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const wantShots = process.argv.includes("--shots");
const quick = process.argv.includes("--quick");
const failures = [];
let passed = 0;

function check(name, ok, detail) {
  if (ok) {
    passed++;
    console.log("  ok   " + name);
  } else {
    failures.push(name + (detail ? ": " + detail : ""));
    console.log("  FAIL " + name + (detail ? ": " + detail : ""));
  }
}

function listFiles(dir, ext, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listFiles(full, ext, out);
    } else if (ext.some((e) => entry.name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

console.log("1. Syntax");
const sources = listFiles(path.join(root, "src"), [".js"], []).concat(listFiles(path.join(root, "tools"), [".mjs"], []));
let syntaxOk = true;
for (const file of sources) {
  try {
    execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
  } catch (err) {
    syntaxOk = false;
    check("syntax " + path.relative(root, file), false, String(err.stderr).split("\n")[0]);
  }
}
check(sources.length + " files parse", syntaxOk);

console.log("2. Replay: the same seed gives the same night");
for (const mode of MODES) {
  const a = hashState(playNight(mode, "hunter", 5));
  const b = hashState(playNight(mode, "hunter", 5));
  check("replay " + mode, a === b, a + " vs " + b);
}

console.log("3. A full night per variation, and what must have happened in it");
for (const mode of MODES) {
  const seen = {};
  let bad = 0;
  const state = playNight(mode, "hunter", 2, (e, st) => {
    seen[e.type] = (seen[e.type] || 0) + 1;
    const p = st.player;
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.blood)) {
      bad++;
    }
  });
  check(mode + ": ends (dawn or death)", state.over, "t=" + state.t);
  check(mode + ": no broken numbers", bad === 0, bad + " steps");
  check(mode + ": claws swung, humans died, blood was drunk", seen.swipe > 0 && seen.kill > 0 && seen.pickup > 0, JSON.stringify(seen));
  check(mode + ": a level-up was offered and taken", seen.levelup > 0 && seen.card > 0);
  check(mode + ": humans wound up or aimed before striking", (seen.windup || 0) + (seen.aim || 0) > 0);
  check(mode + ": no hit without its warning", state.stats.violations === 0, state.stats.violations + " hits");
  check(mode + ": first kill within 5 s", state.stats.firstKillT >= 0 && state.stats.firstKillT <= 5, state.stats.firstKillT.toFixed(1) + " s");
  check(mode + ": first card within 20 s", state.stats.firstLevelT >= 0 && state.stats.firstLevelT <= 20, state.stats.firstLevelT.toFixed(1) + " s");
  check(mode + ": never more humans than the limit", state.stats.peakHumans <= S.limits.humans, String(state.stats.peakHumans));
  if (mode === "hunt") {
    check("hunt: some got away and hunters answered", state.stats.escapes > 0 && seen.hunter > 0);
  }
  const idle = playNight(mode, "idle", 2);
  check(mode + ": a player who never moves does not see dawn", idle.result === "dead", idle.result + " at " + idle.t.toFixed(0) + " s");
}

console.log("4. Build");
const info = await build();
check("one HTML file, " + (info.releaseBytes / 1024).toFixed(0) + " KB", info.releaseBytes > 20000 && info.releaseBytes < 2000000);
const release = fs.readFileSync(path.join(root, "dist/vampire.html"), "utf8");
check("the playing build carries no test tools", !release.includes("window.GAME") && !release.includes("hunterBot"));

if (!quick) {
  console.log("5. The real page on a phone-sized screen");
  const require = createRequire(import.meta.url);
  const { chromium } = require("playwright");
  const { server, url } = await startServer(0);
  const browser = await chromium.launch();
  const shotsDir = path.join(root, "reports/shots");
  if (wantShots) {
    fs.mkdirSync(shotsDir, { recursive: true });
  }
  const INSETS = "47,0,34,0";

  async function openPage(width, height, query, sharpness) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: sharpness || 2, hasTouch: true, isMobile: true });
    const page = await context.newPage();
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error") {
        errors.push(m.text());
      }
    });
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto(url + "/vampire-test.html" + (query ? "?" + query : ""));
    await page.waitForFunction(() => window.GAME !== undefined);
    return { page, context, errors };
  }

  // Buttons must be big enough, inside the screen, and clear of the notch and home bar.
  async function layoutProblems(page, top, bottom) {
    return page.evaluate(
      ([insetTop, insetBottom]) => {
        const problems = [];
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (document.scrollingElement.scrollWidth > w + 1) {
          problems.push("page scrolls sideways");
        }
        for (const b of document.querySelectorAll("button")) {
          const r = b.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) {
            continue;
          }
          const name = (b.textContent || b.getAttribute("aria-label") || "button").trim().slice(0, 24);
          if (r.height < 44 || r.width < 44) {
            problems.push(name + " is smaller than 44 px");
          }
          if (r.left < 0 || r.right > w + 1) {
            problems.push(name + " runs off the side");
          }
          if (r.top < insetTop - 1 || r.bottom > h - insetBottom + 1) {
            problems.push(name + " is under the notch or home bar, or off screen");
          }
          if (b.scrollWidth > b.clientWidth + 1) {
            problems.push(name + " text is cut off");
          }
        }
        return problems;
      },
      [top, bottom],
    );
  }

  async function shot(page, name) {
    if (wantShots) {
      await page.screenshot({ path: path.join(shotsDir, name + ".png") });
    }
  }

  // A full night per variation with a bot in the seat, fast.
  for (const mode of MODES) {
    const { page, context, errors } = await openPage(390, 844, "mode=" + mode + "&seed=2&bot=hunter&speed=14&insets=" + INSETS);
    await page.waitForFunction(() => window.GAME.phase() === "end", null, { timeout: 90000 });
    const result = await page.evaluate(() => ({
      errors: window.GAME.errors,
      sounds: window.GAME.sounds,
      violations: window.GAME.state().stats.violations,
      result: window.GAME.state().result,
    }));
    check(mode + " in the browser: night ends, no errors", errors.length === 0 && result.errors.length === 0, errors.concat(result.errors).join(" | "));
    check(mode + " in the browser: sounds were asked for (swing, kill, blood, card)", result.sounds.swipe > 0 && result.sounds.kill > 0 && result.sounds.pickup > 0 && result.sounds.card > 0, JSON.stringify(result.sounds));
    const problems = await layoutProblems(page, 47, 34);
    check(mode + " end screen fits", problems.length === 0, problems.join("; "));
    await shot(page, "end-" + mode);
    await context.close();
  }

  // Screens and moments, at three phone sizes.
  const sizes = [
    [390, 844, "47,0,34,0", 47, 34],
    [390, 664, "0,0,0,0", 0, 0],
    [375, 667, "20,0,0,0", 20, 0],
  ];
  for (const [w, h, insets, top, bottom] of sizes) {
    const tag = w + "x" + h;
    const { page, context, errors } = await openPage(w, h, "insets=" + insets + "&debug=1");
    let problems = await layoutProblems(page, top, bottom);
    check("title fits at " + tag, problems.length === 0, problems.join("; "));
    await shot(page, "title-" + tag);

    await page.evaluate(() => {
      window.GAME.start("slaughter", 4);
      window.GAME.skip(24);
    });
    await page.waitForTimeout(350);
    await shot(page, "play-early-" + tag);

    // Stop at the next level-up so the cards are on screen.
    await page.evaluate(() => {
      const st = window.GAME.state();
      let guard = 0;
      while (!st.offer && !st.over && guard++ < 4000) {
        window.GAME.skip(0.05);
      }
    });
    await page.waitForFunction(() => window.GAME.phase() === "levelup" || window.GAME.state().over, null, { timeout: 5000 });
    await page.waitForTimeout(500);
    problems = await layoutProblems(page, top, bottom);
    check("level-up cards fit at " + tag, problems.length === 0, problems.join("; "));
    await shot(page, "cards-" + tag);
    await page.locator(".screen-cards .card").first().click();
    await page.waitForFunction(() => window.GAME.phase() === "play" || window.GAME.phase() === "levelup");

    await page.evaluate(() => window.GAME.pause(true));
    await page.waitForTimeout(150);
    problems = await layoutProblems(page, top, bottom);
    check("pause fits at " + tag, problems.length === 0, problems.join("; "));
    await shot(page, "pause-" + tag);
    await page.evaluate(() => window.GAME.pause(false));
    check("no errors at " + tag, errors.length === 0, errors.join(" | "));
    await context.close();
  }

  // The busiest moments, for the readability check, and frame times with the CPU slowed 4x.
  // This browser draws without a graphics chip, so the time to fill pixels says little about a phone.
  // The pass mark is set on the game's own work (one pixel per point); the sharper run is shown for information.
  for (const mode of MODES) {
    const { page, context } = await openPage(390, 844, "insets=" + INSETS + "&debug=1", 1);
    await page.evaluate((m) => {
      window.GAME.start(m, 7);
      window.GAME.skip(m === "hunt" ? 100 : 150);
      window.GAME.setBot("hunter");
    }, mode);
    const cdp = await context.newCDPSession(page);
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.waitForTimeout(3000);
    const perf = await page.evaluate(() => ({
      avg: window.GAME.loopStats.avgMs,
      humans: window.GAME.state().humans.length,
      over: window.GAME.state().over,
      t: window.GAME.state().t,
    }));
    console.log("       " + mode + " at " + perf.t.toFixed(0) + " s: " + perf.humans + " humans, " + perf.avg.toFixed(1) + " ms per frame with the CPU slowed 4x" + (perf.over ? " (night already over)" : ""));
    check(mode + ": busy frame under 25 ms with the CPU slowed 4x", perf.avg < 25, perf.avg.toFixed(1) + " ms");
    await context.close();
    const sharp = await openPage(390, 844, "insets=" + INSETS + "&debug=1", 2);
    await sharp.page.evaluate((m) => {
      window.GAME.start(m, 7);
      window.GAME.skip(m === "hunt" ? 100 : 150);
    }, mode);
    await sharp.page.waitForTimeout(400);
    await shot(sharp.page, "busy-" + mode);
    await sharp.context.close();
  }

  await browser.close();
  server.close();
}

console.log("\n" + passed + " checks passed, " + failures.length + " failed");
if (failures.length > 0) {
  for (const f of failures) {
    console.log("  - " + f);
  }
  process.exit(1);
}
