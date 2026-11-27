// The balance lab: plays many nights without drawing anything and prints what happened.
//   node tools/lab.mjs            every variation, every bot, 30 seeds
//   node tools/lab.mjs 60 hunt    60 seeds, Hunt only
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSim, stepSim, chooseCard, hashState } from "../src/core/sim.js";
import { MODES, SETTINGS as S } from "../src/core/settings.js";
import { createBot, BOT_KINDS } from "../src/test/bots.js";

export function playNight(mode, botKind, seed, onEvent) {
  const state = createSim(mode, seed);
  const bot = createBot(botKind, seed);
  const maxSteps = (S.run.seconds + 5) * S.stepsPerSecond;
  let guard = 0;
  while (!state.over && guard < maxSteps * 2) {
    guard++;
    if (state.offer) {
      chooseCard(state, bot.pick(state));
      continue;
    }
    stepSim(state, bot.act(state));
    if (onEvent) {
      for (let i = 0; i < state.events.length; i++) {
        onEvent(state.events[i], state);
      }
    }
    state.events.length = 0;
  }
  return state;
}

function median(list) {
  if (list.length === 0) {
    return 0;
  }
  const sorted = list.slice().sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function topCause(counts) {
  let best = "-";
  let bestN = 0;
  let total = 0;
  for (const key of Object.keys(counts)) {
    total += counts[key];
    if (counts[key] > bestN) {
      bestN = counts[key];
      best = key;
    }
  }
  return total === 0 ? "-" : `${best} ${Math.round((bestN / total) * 100)}%`;
}

export function runLab(seeds, modes) {
  const rows = [];
  for (const mode of modes) {
    for (const botKind of BOT_KINDS) {
      const survived = [];
      const firstKill = [];
      const firstLevel = [];
      const levels = [];
      const kills = [];
      const escapes = [];
      const low = [];
      const causes = {};
      let wins = 0;
      let violations = 0;
      for (let seed = 1; seed <= seeds; seed++) {
        const state = playNight(mode, botKind, seed);
        if (state.result === "dawn") {
          wins++;
        } else {
          causes[state.cause] = (causes[state.cause] || 0) + 1;
        }
        survived.push(state.t);
        if (state.stats.firstKillT >= 0) {
          firstKill.push(state.stats.firstKillT);
        }
        if (state.stats.firstLevelT >= 0) {
          firstLevel.push(state.stats.firstLevelT);
        }
        levels.push(state.player.level);
        kills.push(state.stats.kills);
        escapes.push(state.stats.escapes);
        low.push(state.t > 0 ? state.stats.lowBloodTime / state.t : 0);
        violations += state.stats.violations;
      }
      rows.push({
        mode,
        bot: botKind,
        win: Math.round((wins / seeds) * 100),
        survived: Math.round(median(survived)),
        firstKill: median(firstKill).toFixed(1),
        firstLevel: median(firstLevel).toFixed(1),
        level: median(levels),
        kills: median(kills),
        escapes: median(escapes),
        lowBlood: Math.round(median(low) * 100),
        cause: topCause(causes),
        violations,
      });
    }
  }
  return rows;
}

export function formatRows(rows) {
  const head = "| variation | bot | wins % | survived s | first kill s | first card s | level | kills | escapes | time under 30% blood | most common death | unfair hits |";
  const rule = "|---|---|---|---|---|---|---|---|---|---|---|---|";
  const lines = rows.map(
    (r) =>
      `| ${r.mode} | ${r.bot} | ${r.win} | ${r.survived} | ${r.firstKill} | ${r.firstLevel} | ${r.level} | ${r.kills} | ${r.escapes} | ${r.lowBlood}% | ${r.cause} | ${r.violations} |`,
  );
  return [head, rule].concat(lines).join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const seeds = Number(process.argv[2]) || 30;
  const modes = MODES.includes(process.argv[3]) ? [process.argv[3]] : MODES;
  const started = Date.now();
  const rows = runLab(seeds, modes);
  const table = formatRows(rows);
  console.log(table);
  console.log(`\n${seeds} seeds per row, ${((Date.now() - started) / 1000).toFixed(1)} s`);
  if (process.argv.includes("--save")) {
    const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
    fs.mkdirSync(path.join(root, "reports"), { recursive: true });
    fs.writeFileSync(path.join(root, "reports/lab-latest.md"), `# Balance lab\n\n${seeds} seeds per row. Medians unless marked.\n\n${table}\n`);
  }
  // A check that the same seed replays exactly.
  const a = hashState(playNight("slaughter", "hunter", 3));
  const b = hashState(playNight("slaughter", "hunter", 3));
  console.log(a === b ? "replay check: same seed, same night" : "REPLAY CHECK FAILED");
}
