# Vampire — operating contract

This repository is built by Claude working alone. The owner does not review, playtest or approve steps.
Any session that opens this repository continues the work without asking what to do.

## Start of every session and every step

1. Read `docs/STATE.md`. It names the current step and the next action.
2. Read the step's card in `docs/ROADMAP.md` and the rules in `docs/PROCESS.md`.
3. Do the step. Do not work from memory of an earlier conversation: the repository is the memory.
4. Finish the step the way `docs/PROCESS.md` section 3 says (checks, evidence, commit, push, update `STATE.md`).

## Rules that never bend

- Never wait for approval. Where the old plan said "give 3 options and wait", decide by the rule in
  `docs/PROCESS.md` section 4, log one line in `docs/DECISIONS.md`, and continue.
- Never claim what was not checked. Every report separates "verified by a check I ran" from
  "proxy only" and "could not check" (real iPhone, Safari, human fun, how the sound actually sounds).
- Never skip, weaken or delete a failing check to get green. Fix the cause, or cut the feature whole.
- Phone upright (390 x 844, one thumb) is the first and main target until feature freeze.
- Only ideas are taken from other games and media. No copied names, characters, art, sound, levels or code.
- Work only on branch `claude/zealous-wright-tbdv02`. No pull request, no publishing outside the
  repository, no public release, unless the owner asks.
- No emoji. Compact answers.

## Map of the documents

| File | What it holds |
|---|---|
| `docs/PROCESS.md` | How the work runs without the owner: the loop, decision rules, the stand-ins for human testing, honesty limits |
| `docs/ROADMAP.md` | Milestones and step cards. Each card is the prompt Claude gives itself |
| `docs/PROMPTS.md` | Briefs for reviewer and research subagents, and the "along the way" cards (bug, feel, cut, scope) |
| `docs/STATE.md` | Where the work stands and the exact next action |
| `docs/DECISIONS.md` | One line per decision: what, why, how to undo |
| `docs/DESIGN.md` | The design document (created in step 0.1, locked as v1 in step 1.6) |
| `CHANGELOG.md` | One entry per version (created in step 0.2) |
