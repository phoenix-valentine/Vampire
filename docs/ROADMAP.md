# Roadmap

Each step below is a card: the prompt Claude gives itself. Run them in order. The loop for every
card is in `PROCESS.md` section 3. There are no dates; a step ends when its "Done when" is true or a
stop rule in `PROCESS.md` section 7 ends it.

## Checklist

- [ ] 0.1 Brief, budget and fairness numbers
- [ ] 0.2 Clean toolkit
- [ ] 0.3 Rendering test
- [ ] 1.1 Core prototype with difference 1 (blood)
- [ ] 1.2 Bot panel and balance lab
- [ ] 1.3 Tune the core; confirm the stand-in targets
- [ ] 1.4 Difference 2 (witnesses)
- [ ] 1.5 Research: genre guide, 5 teardowns, theme bible (runs beside 1.1 to 1.4)
- [ ] 1.6 Synthesis, design document v1, content system, slice content. Gate 1
- [ ] 2.1 Slice build plan
- [ ] 2.2 Blocks 1 to 4, Gate A
- [ ] 2.3 Blocks 5 to 8, Gate B
- [ ] 2.4 Blocks 9 to 12, Gate C
- [ ] 2.5 Blocks 13 to 16, Gate D
- [ ] 2.6 Difference 3 (drain or turn)
- [ ] 2.7 Difference 4 (dawn eats the map)
- [ ] 2.8 Difference 5 (forms are stances)
- [ ] 2.9 Slice report and first scorecard. Gate 2
- [ ] 3.1 Grow to the budget, one item at a time, in batches (repeat)
- [ ] 3.2 Batch check (repeat per batch)
- [ ] 3.3 Owner or outside feedback round (only if any arrives)
- [ ] 4.1 Feature freeze
- [ ] 4.2 Sideways phone, then desktop
- [ ] 4.3 Pre-release review
- [ ] 4.4 Performance pass
- [ ] 4.5 Release candidate and final scorecard
- [ ] 4.6 Postmortem

## The goal: a scorecard, filled from evidence

"Best bullet heaven ever" cannot be proven by Claude. What can be shown is where the game stands on
five blocks, with evidence. The bar games are provisional until step 1.5 confirms them.

| Block | Bar to beat | Evidence Claude produces | Target |
|---|---|---|---|
| 7 Builds and choices | Brotato, Halls of Torment | Balance lab: obvious-choice share, dead options, build-path table | Fewer than 1 in 5 level-ups obvious; 0 dead options; every build path beats the same boss within the band |
| 6 Pacing and fairness | Vampire Survivors | Fairness invariants; tension and death-cause tables | 0 violations; no cause over half of deaths |
| 9 Readability on a phone | The genre's late-run clutter | Readability reader on the busiest-moment screenshot | Player and three nearest dangers found, 5 fresh readers out of 5 |
| 8 and 13 Instant one-thumb play | Vampire Survivors | Taps from load to moving; first-ten-seconds reader | One tap; reader states what to do with no wrong guess |
| 12 Theme that explains the rules | Mutation | Theme reader on screenshots only | Blood and light rules guessed by 4 of 5 fresh readers |

Optional and human: the blind comparison against a bar game. If the owner ever runs it, its result replaces the proxy rows.

## The five differences

Added one at a time, in this order. Each must pass the four-part test in `PROCESS.md` section 6.

| # | Difference | First tested in |
|---|---|---|
| 1 | Blood is everything: health, XP and the cost of every power, and it drains as hunger | 1.1 |
| 2 | Witnesses drive the threat: humans who escape raise the alarm, so leaving no survivors is the skill | 1.4 |
| 3 | Drain or turn: each victim is blood now or a thrall for your coven | 2.6 |
| 4 | Dawn eats the map: light is terrain, and shade shrinks through the night | 2.7 |
| 5 | Forms are stances: swap bat, wolf and mist mid-fight | 2.8 |

Guard: the words "mutation", "hybrid" and "evolution" stay out of the design. The neutral word is
"power" until step 1.6 names the content system.

## The 16 blocks and four gates (from the owner's Game Blueprint and Game Building Blocks)

| Layer and gate | Blocks | The gate asks (Blueprint step 10) |
|---|---|---|
| 1 Core, Gate A | 1 Core loop. 2 Controls. 3 Feedback and feel. 4 Rules and systems | Controls and feel polished; the core is fun with plain shapes; all numbers in the settings object; smoke test passes |
| 2 Structure, Gate B | 5 Content. 6 Difficulty and pacing. 7 Progression and rewards. 8 Session structure | A full run works from start to retry; run length on target; difficulty rises and failure feels fair; upgrade choices are real; the busiest moment holds a steady frame rate |
| 3 Presentation, Gate C | 9 Readability and interface. 10 Art. 11 Audio. 12 Theme and story | The busiest moment is readable at phone size; no placeholders; fully playable muted; one consistent style |
| 4 Wrapper, Gate D | 13 Onboarding. 14 Menus and settings. 15 Saving. 16 Platform | A stranger can open, learn, play, lose, retry, mute and come back; saving works; smooth on a real phone after 10 minutes |

Build order (Blueprint step 8): 2 and 3 polished first; then 1 and 4 good enough; then 5 to 8; then 9 to 12; then 13 to 16; polish everything in order after feature freeze.

**The owner's first stop is Blueprint step 7:** a plain-shapes prototype of blocks 1 to 4 with two or three
variations as toggles. It was built as v0.1.0 (see `docs/DESIGN.md` and `CHANGELOG.md`). The step cards for
milestones 0 and 1 below were written before the owner's documents arrived; where they disagree with
`docs/STATE.md`, `STATE.md` is right. After the owner's verdict the design document is locked as v1 and
the cards from 2.1 onward apply, using the block numbers in this table.

---

## Milestone 0: foundations

### 0.1 Brief, budget and fairness numbers

- **Read first:** `PROCESS.md`; the scorecard and the five differences above.
- **Do:** No code. Create `docs/DESIGN.md` with a first page, "Brief and budget":
  1. Three options for the core sentence (what I do, what grows, what pushes back). Each must hold the
     five differences. Choose one by `PROCESS.md` section 4.
  2. A working title that is not close to any existing game's name.
  3. The budget table, every limit a number: powers, hunter types, hunters on screen, bosses, forms,
     thralls, characters, arenas, HUD elements, settings, screens, run length (three candidates for 1.1).
  4. Fairness as numbers: shortest warning, largest single hit, grace after a hit, what the death screen shows.
  5. The "won't build" list and the "later" list (empty).
  6. The three biggest risks and how the first playable tests each.
- **Evidence:** the page itself.
- **Done when:** the core sentence fits in one breath and every limit has a number.

### 0.2 Clean toolkit

- **Read first:** the budget table.
- **Do:** A new codebase with nothing copied. An empty arena and one box that one thumb can move.
  - Source in separate files, joined into one HTML file by a build script. No runtime dependencies.
  - Content as data in one place. Rules separate from drawing. Fixed-step loop. Seeded randomness.
    All drawing behind one renderer interface. The simulation must also run in Node with no browser.
  - Phone layout kit: safe-area insets, one button height of about 44 px, text that wraps or fits,
    tap once to read and again to take.
  - Test build: test API, a first autopilot, a smoke test that must finish a run with no errors,
    a determinism check (same seed, same state hash), replay recording.
  - Screenshot tool at 390 x 844, 390 x 664 and 375 x 667 with notch insets.
  - Hidden debug line: version, screen size, insets. Changelog. Version number. `npm run check` runs everything.
  - One statement per line in the code.
- **Evidence:** `npm run check` output; three screenshots, looked at.
- **Done when:** the check passes, and in all three screenshots the arena fills the screen with nothing under the notch or the home bar.

### 0.3 Rendering test

- **Read first:** the on-screen limits in the budget table.
- **Do:** A stress page with two renderers behind the same interface, canvas and WebGL. Measure frame
  times at 500, 1,000, 2,000 and 3,000 moving sprites in Chromium with iPhone 13 screen settings and
  the CPU slowed 4x. Choose between canvas, WebGL, and WebGL with a canvas fallback. Write the
  on-screen limits into the budget table with a safety margin of half the measured ceiling.
- **Evidence:** the table of measurements in `reports/`.
- **Done when:** the choice rests on those numbers, and the report says plainly that they are a stand-in for a real iPhone.

---

## Milestone 1: prove the core with plain boxes

### 1.1 Core prototype with difference 1

- **Read first:** the brief, the budget table, difference 1.
- **Do:** Plain boxes, no art, menus or sound: move, one automatic attack, three hunter types, a
  level-up choice of three from six powers. Blood is health, XP and the cost of every power, and it
  drains as hunger. Toggles only where a choice is uncertain: three run lengths, three ways the hunger
  drain could work.
- **Evidence:** smoke test; screenshots.
- **Done when:** the autopilot finishes a run in every toggle combination.

### 1.2 Bot panel and balance lab

- **Read first:** `PROCESS.md` sections 5 and 6.
- **Do:** Build the five bots and the headless lab. The lab writes the table of stand-ins to `reports/`.
  Add the fairness invariants to the simulation so a violation fails the run.
- **Evidence:** a first lab table over at least 200 seeds per bot.
- **Done when:** the lab runs every bot against every toggle combination and the same command gives the same table twice.

### 1.3 Tune the core; confirm the stand-in targets

- **Read first:** the lab table; `PROCESS.md` section 6.
- **Do:** Use the lab to choose the run length and the hunger rule. Tune until the skill ladder holds
  (idle dies, novice survives the first minute, average sometimes wins, expert usually wins) and
  blood passes its four-part test. Confirm or change each starting target, logging why. Up to three rounds.
- **Evidence:** before and after tables.
- **Done when:** difference 1 passes its test, the losing toggles are deleted, and the settings are in the design document.

### 1.4 Difference 2 (witnesses)

- **Read first:** difference 2; the core sentence.
- **Do:** Smallest form: humans who escape raise the alarm and bring harder hunters. Behind a toggle.
  Give the expert bots a "hunt witnesses" and an "ignore witnesses" policy. Run the four-part test.
- **Evidence:** A/B tables, toggle on and off.
- **Done when:** it passes and the toggle is removed, or it is cut whole and logged.

### 1.5 Research (runs beside 1.1 to 1.4, by research agents)

- **Read first:** the scorecard; the briefs in `PROMPTS.md`.
- **Do:** Three pieces, saved under `docs/research/`:
  1. Genre guide, one page: must-haves, differentiators, common failures; the true bar game for each
     scorecard block, with the reason. Sources cited with dates; what could not be confirmed is marked.
  2. Teardowns of the five bar games on the 16 blocks: how the game does each block, a score from 1 to 5,
     and take, avoid or ignore. The five things players love and the five they complain about most.
  3. Vampire theme bible: traits from folklore, books, film, series, anime, comics and games, each
     marked as a shared idea (free to use) or one creator's invention (never used). The 30 strongest
     traits turned into game ideas. A long candidate list of powers, forms, thralls, hunters and
     characters. A "do not use" list.
- **Evidence:** the three files.
- **Done when:** the scorecard names a confirmed bar game for each block and there are more good ideas than the budget can hold.

### 1.6 Synthesis, design document v1, content system, slice content

- **Read first:** all research, the lab tables, the decisions log.
- **Do:**
  1. One table: 16 blocks by the games studied, the best version of each block marked. For each
     block: the decision, the game it learns from, the bad part it removes. The gaps no game fills.
  2. The design document: one-page overview; one entry per block with starting numbers, how it is
     tested, what "good enough" and "polished" look like; one settings table with every tunable number;
     the fixed visual order (hunters, warnings, pickups, effects); the riskiest assumption.
  3. The content system under its own names: how powers, forms, thralls and characters combine.
     A job grid (how a power hits, against what it asks the player to do) with every power in its own
     cell. Hunters as counters: each type asks a question one build answers badly, none shuts a build out.
  4. The slice: ten powers, the hunter types, one boss built on one idea. For each power, one sentence
     on how it changes play, its cost or condition, and why a smart player would pick it.
  5. Balance targets for the lab.
- **Evidence:** `DESIGN.md` marked v1 (locked).
- **Done when:** every block has an entry, every number a starting value, no two powers share a cell or a sentence.
- **Gate 1:** a gate reviewer reads the design document cold and must be able to build any block without guessing. Milestone report to the owner.

---

## Milestone 2: the vertical slice

One arena, one night, one boss, ten powers, at release quality on the phone.

### 2.1 Slice build plan

- **Do:** In the design document: the 16 blocks in build order with each one's target and gate; the
  four gate checklists adapted to the phone; the sound list, one sound per distinct event; what the
  smoke test covers and what the lab checks.
- **Done when:** the order is written and the next block is unambiguous.

### 2.2 to 2.5 Build the blocks, one layer at a time

For each block, in order:

- **Read first:** the block's entry and the build plan.
- **Do:** Build this block to its target without changing any other block. Where the plan marks the
  choice uncertain, build 2 or 3 variations as toggles, compare them by the lab or by a cold reader
  shown them side by side, keep one, delete the rest.
- **Evidence:** `npm run check`; screenshots of every changed screen at three sizes; for sound, the offline-render report.
- **Done when:** the block matches its target.

At the end of each layer, a gate review by a fresh reviewer (`PROMPTS.md`):

| Gate | Evidence handed to the reviewer |
|---|---|
| A Feel (after block 4) | Input-to-motion delay in frames; replay of ten runs; screenshots |
| B Systems (after block 8) | The lab's full table: every build path against the boss, time to kill, blood lost; fairness violations |
| C Presentation (after block 12) | Busiest-moment screenshot and readability reader result; theme reader result; sound report; one run recorded with sound off |
| D Shell (after block 16) | First-ten-seconds reader result; fuzz bot result; 30 minute soak; frame times; every screen at three sizes |

A failed gate: fix each item (bug card or change-after-lock card), then a new reviewer runs the gate again.

### 2.6 to 2.8 Differences 3, 4 and 5, one at a time

- **Read first:** the difference; the core sentence; the budget table.
- **Do:** Before building: the smallest version that tests it, how it serves the core sentence, what
  it costs in clarity, what could be removed to make room, how the player will see the rule working.
  Build only that, behind a toggle. Run the four-part test.
- **Done when:** it passed and the toggle is gone, or it is cut whole and the idea is on the "later" list. The smoke test passes either way.

### 2.9 Slice report and first scorecard

- **Do:** Fill the scorecard from evidence. Say plainly what the slice proves and what it does not.
  Choose: grow to the budget, another slice round, or rethink a difference. Publish the playable
  build as a private page.
- **Gate 2:** all four gates pass on the slice with every surviving difference in. Milestone report to the owner.

---

## Milestone 3: grow to the budget

### 3.1 Add one item (repeat for each power, form, thrall, hunter, boss, character, arena)

- **Read first:** the content tab of the design document (job grid, caps, hunters as counters); the budget table.
- **Do:** Before building, write: its cell in the job grid, one sentence on how play changes with it,
  its cost or condition, what it combines with, which hunter answers it, what could be removed to make
  room. If it shares a cell or a sentence with an existing item, change it or drop it. Build it as a
  data entry using existing behaviours where possible. Run the lab on every build path before and after.
- **Done when:** it plays differently from every other item, no build path leaves the balance band, the budget holds, the busiest moment still fits the on-screen limits.

### 3.2 Batch check (after every batch of about five items)

- **Do:** Add nothing. Variety: any two items whose sentences match. Balance: the lab table, and how
  many different builds win. Clutter: the readability reader on a new busiest-moment screenshot. For
  each problem: tune (double or halve first), merge or cut. Then decide: next batch or stop.
- **Done when:** all three checks pass. Growth stops when the budget is reached or the stop rule on growth without improvement fires.

### 3.3 Feedback round (only if the owner or anyone else sends notes)

- **Do:** One numbered list grouped by theme. Reproduce each bug before fixing it. For anything that
  asks for a new feature, run the budget check first. Land the fixes in groups. Write a changelog
  that answers every numbered item: fixed, changed, or not done and why.
- **Done when:** every item has an answer and nothing from an earlier round is still open without a reason.

---

## Milestone 4: freeze and finish

### 4.1 Feature freeze

- **Do:** No new features, rules or content from here. A freeze report: what is in, what was cut, and any cut code or data still in the source. Delete what is left.

### 4.2 Sideways phone, then desktop

- **Do:** Add the two layouts in that order without changing the upright phone layout.
- **Done when:** the game plays in all three, and the upright phone screenshots are pixel-identical to before.

### 4.3 Pre-release review

- **Do:** A fresh reviewer, no code changes during the review. Bugs and likely bugs (restart and state
  reset, collision, stuck in geometry, timing, input, audio start and overlap, saving, resize and
  rotation, anything that piles up over a long run). Paths the smoke test does not walk: every
  character, form and boss. Missing finishing touches: title, pause, settings, death recap, credits,
  mute. Leftovers: debug code, dead data, placeholder text, typos. One table by severity.
- **Done when:** no Blocker or Major is open.

### 4.4 Performance pass

- **Do:** Measure the busiest moment over ten seconds and again after a 30 minute soak, CPU slowed 4x.
  Fix in order: loop, drawing, logic, memory. One fix at a time, measured before and after. No change to how the game plays or looks.
- **Done when:** the busiest moment holds a steady frame rate with no slowdown after the soak.

### 4.5 Release candidate and final scorecard

- **Do:** A release build without test tools. The final scorecard. Text for a store page (hook,
  description, controls, credits, tags), three options for the public name with a recommendation.
  Publish the candidate as a private page. Going public is listed under "For the owner".
- **Done when:** the candidate passes every check from a clean checkout.

### 4.6 Postmortem

- **Do:** "Design document and lessons": part 1 describes the game exactly as shipped, written from
  the code and data; part 2 covers what worked, what the checks kept catching, the mistakes that cost
  the most, what the proxies could not tell us, and a checklist for the next game.

---

## What to cut first

If the game grows too big, cut in this order and stop as soon as it fits:

1. A difference that failed its test.
2. Content beyond the budget table.
3. Extra arenas.
4. Story beyond a title and a few lines.
5. Long-term unlocks beyond new options.
6. Languages.
7. Music. Sound effects stay.

Never cut: slice quality, the fairness numbers, the balance checks, phone performance.
