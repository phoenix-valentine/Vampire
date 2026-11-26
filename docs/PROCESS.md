# Process: how this game gets built without the owner

Version 3 of the plan. It replaces "Game Plan (version 2)" and the "Prompts" pack, which both
assumed the owner would paste each prompt, choose between options, and playtest on an iPhone.
The owner now does none of that. This file says what takes their place.

## 1. What was kept, changed, removed and added

### Kept from version 2

- The standing rules: core sentence and budget before code; phone upright first; smallest playable
  version first; test tools from day one; content is data, rules are separate from drawing, fixed
  simulation steps, seeded randomness; fairness written as numbers; a cap or diminishing returns on
  every stacking stat; every reward usable now and readable before choosing; a cut removes code,
  data, art, sound and text in one change; English only until freeze; changes land in groups with a
  smoke test, a changelog entry and a version number; ideas only from other games.
- The five differences, added one at a time in the same order, each kept, simplified or cut on evidence.
- The order of milestones: foundations, prove the core with plain boxes, vertical slice at release
  quality, grow to the budget, freeze and finish.
- The scorecard's five blocks, the "what to cut first" order, and the engine portability rules.

### Changed

| Version 2 | Version 3 |
|---|---|
| The owner pastes one prompt at a time | Step cards in `ROADMAP.md`; Claude runs them in order |
| "Give me 3 options and wait" | Claude weighs the options, decides by the rule in section 4, logs it |
| The owner plays 10 runs, hands the phone to 2 people | A panel of bots plays thousands of seeded runs; fresh reviewer agents judge screenshots cold (section 5) |
| "Done when you and one other person want another run" | Measurable stand-ins for fun (section 6), named as stand-ins |
| Frame rate measured on the owner's iPhone | Chromium with iPhone 13 screen settings and the CPU slowed 4x; a real phone check is optional |
| Blind comparison against a bar game by outside players | A scorecard filled from evidence Claude can produce; the blind comparison becomes an optional last check by humans |
| One long chat plus a separate design document | Everything lives in this repository; `STATE.md` always names the next action |
| 11 full teardowns | A genre guide plus 5 focused teardowns of the bar games, time-boxed, run by research agents beside the prototype |
| itch.io draft, testers, launch | A release candidate: one HTML file in the repository and a private playable link. Going public is the owner's step |

### Removed

- Measuring Mutation on the owner's phone as a benchmark. Claude cannot do it.
- Every "You do" line.
- The rule that a difference needs a human playtest to survive. It now needs to pass the A/B test in section 6.

### Added

- A headless balance lab that runs the real simulation in Node at many times real speed.
- Fairness rules enforced as code: the simulation itself fails a run that breaks them.
- A determinism check and replay files, so every bug can be replayed from a seed.
- A fuzz bot, a soak run, and screenshot comparison of every screen at three phone sizes.
- Independent review at each gate by an agent that has not seen the code being written.
- Stop rules, so Claude cannot loop on one problem (section 7).
- A reconstruction of the 16 blocks and the four gates (in `ROADMAP.md`), because the "Game Blueprint"
  and the Mutation documents that version 2 points to were not provided.

## 2. What Claude can and cannot check

Honesty about this is part of the process. Every milestone report repeats the right-hand column.

| Question | How Claude checks it | Limit |
|---|---|---|
| Does it run without errors? | Smoke test: the autopilot finishes a full run, zero console errors | None |
| Is it balanced? | Balance lab: bot panel x build paths x many seeds | Bots are not people; they find dominant and dead options well, taste badly |
| Is it fair? | Fairness invariants inside the simulation | None for the rules as written |
| Does it look right on a phone? | Screenshots at 390 x 844, 390 x 664 (Safari bars showing) and 375 x 667, with notch insets; Claude and a fresh agent look at them | Chromium, not Safari. No WebKit here |
| Can a player read the busiest moment? | A fresh agent gets one screenshot and must point at the player and the nearest dangers; answers are compared with the true positions | An agent is not a human eye under stress |
| Does the theme explain the rules? | A fresh agent gets screenshots only and guesses what each thing does | Same |
| Does it hold frame rate? | Frame times in Chromium with CPU slowed 4x, at the busiest moment and after a 30 minute soak | A stand-in for an iPhone 13, not a measurement of one |
| Does the sound work? | Every sound rendered offline: length, peak level, no clipping, no two events sharing one sound | Claude cannot hear. Whether it sounds good is unchecked |
| Is it fun? | Only the stand-ins in section 6 | Unchecked. Only people can say |
| Is it the best bullet heaven ever? | The scorecard, from evidence | Unprovable without players. Claude reports the scorecard, never the superlative |

## 3. The loop for every step

1. **Read.** `STATE.md`, the step card, and the parts of `DESIGN.md` the card names.
2. **Plan in 3 lines** in the commit message draft: what changes, what it serves, what could be removed instead.
3. **Build in small groups.** One group is one idea that can be checked on its own.
4. **Check after each group:** `npm run check` (syntax, build, unit tests, determinism, smoke run).
   For anything visible: screenshots, and Claude looks at them. For anything that touches numbers: the balance lab.
5. **Compare with the card's "Done when".** If it falls short, say so in `STATE.md` and apply the stop rules.
6. **Record.** Changelog entry, version number, decisions logged, design document updated if a number or rule changed.
7. **Commit and push** to the working branch. One step is at least one commit; never leave finished work unpushed.
8. **Update `STATE.md`:** step done, evidence in one line, the next action.
9. **Go on to the next card.** No pause for approval.

At the end of each milestone: a gate review (section 5), a playable build, and a report to the owner
of at most ten lines: what exists, what was verified, what is proxy only, what could not be checked,
what was cut, the playable link. Then the next milestone starts.

## 4. How decisions are made without the owner

Wherever version 2 said "the decision is mine", Claude:

1. Writes 2 or 3 real options with one line of trade-off each.
2. Chooses by these tests, in order. The first test that separates the options decides.
   1. Which serves the core sentence?
   2. Which helps a scorecard block that is currently weakest?
   3. Which can be measured by the checks in section 2?
   4. Which is cheaper to undo?
   5. Which is smaller?
3. Logs one line in `DECISIONS.md`: date, step, decision, reason, how to undo.
4. Where the choice is uncertain and cheap to build both ways, builds both behind a toggle, lets the
   balance lab or a reviewer agent compare them, keeps one and deletes the other in the same change.

Decisions Claude does not take alone. It records them in `STATE.md` under "For the owner", carries on
with everything else, and uses the stated default until told otherwise:

- Publishing anything outside this repository, or making anything public.
- The public name of the game. A working title is used until then.
- Anything that costs money or needs an account of the owner's.
- Removing one of the five differences for a reason other than failing its test.

## 5. Who stands in for the human tester

### The bot panel (lives in the test build, drives the same input the thumb would)

| Bot | Behaviour | What it tells us |
|---|---|---|
| Idle | Never moves | The game must kill it. Time of death is the early threat level |
| Novice | Reacts 300 ms late, flees the nearest danger only, picks upgrades at random | Is the first minute survivable? Are deaths explained? |
| Average | Kites, picks by a simple greedy rule | The middle of the difficulty curve |
| Expert, one per build path | Plans its steering, follows a fixed build policy | Is every build path viable? Is any dominant? |
| Fuzz | Random touches everywhere, including menus, pause and resize | Crashes, stuck states, broken restarts |

### The balance lab (Node, no drawing)

Runs the simulation headless: every bot, every build path, at least 200 seeds each before any number
is trusted. It writes one table per run of the lab: win rate, time to kill the boss, blood lost,
death causes, pick rate and win rate per upgrade, and the stand-ins in section 6. Tables are saved
under `reports/` so a change can be compared with the build before it.

### Cold readers (fresh agents, briefs in `PROMPTS.md`)

- **Readability reader:** one busiest-moment screenshot, nothing else. Must mark the player and the
  three nearest dangers. Scored against true positions from the test API.
- **Theme reader:** five screenshots, no documentation. Must say what blood, light, witnesses and
  each pickup do. Scored against the design document.
- **First-ten-seconds reader:** the title screen and the first three frames of play. Must say what to
  do and how. One wrong guess fails the onboarding.
- **Gate reviewer:** the build, the gate checklist and the block entries. Has not seen the code being
  written. Reports only what fails the gate, then Pass or Fail.

Claude does not grade its own work at a gate. If a reviewer fails a gate, Claude fixes and asks a new
reviewer, not the same one.

## 6. Stand-ins for "fun", and the test a difference must pass

These are not fun. They are the conditions under which fun is possible, and they are measurable.
Starting numbers; step 1.3 confirms or changes them.

| Stand-in | Measure | Starting target |
|---|---|---|
| Choices are real | Share of level-ups where one option beats the second-best by a wide margin for every bot | Under 1 in 5 |
| No dead options | Upgrades whose pick lowers win rate for every expert bot | 0 |
| No dominant build | Gap between best and worst build path: win rate and time to kill the same boss | Within 15 points and 25 percent |
| Builds differ | Different final builds among winning runs | At least 5 distinct in any 20 wins |
| Tension rises and falls | Share of a run spent under 30 percent blood | Between 10 and 25 percent |
| Close calls happen | Runs with at least one recovery from under 15 percent blood | Over half of winning runs |
| Skill matters | Win rate: novice, average, expert | About 0 to 5, 10 to 30, 60 to 85 percent |
| Deaths vary and are explained | No single cause over half of deaths; the death screen names the cause in every case | Both true |
| Fair | Every hit had a warning at least as long as the shortest warning; no hit over the largest single hit | 0 violations, enforced in code |

### The test for each of the five differences

A difference is built in its smallest form behind a toggle, then:

1. **It matters:** the best bot policy with it on is different from the best policy with it off.
   A rule the best player can ignore is dead weight.
2. **It is not solved:** at least two different policies for it land within 10 points of each other.
   A rule with one right answer is a chore, not a choice.
3. **It is readable:** the theme reader explains it from screenshots alone.
4. **It costs no fairness:** the invariants still hold, and the stand-ins above do not get worse.

Pass all four: keep, and remove the toggle. Fail after three rounds of changes: simplify once, test
once more, then cut it whole and move the idea to the "later" list.

## 7. Stop rules

- **Three tries.** A failing check, bug or "Done when" gets three attempts at the cause. After the
  third, Claude writes down three other possible causes, tries the most likely, and if that fails
  takes the smaller path: simplify, cut, or park. It logs which.
- **Scope.** Before adding anything: how it serves the core sentence, what it costs in clarity, what
  could be removed instead. Nothing passes the budget table without a logged decision that changes the table.
- **Growth without improvement.** If two batches in a row add content and the stand-ins do not
  improve, growth stops and the next step is the scope card in `PROMPTS.md`.
- **Locked design.** After the design document is locked, a rule or mechanic changes only through
  the "change after lock" card: document first, then code, then the gates it touches run again.
- **No silent loss.** A feature that disappears must have a changelog line. The smoke test lists
  every system it expects to see alive.

## 8. Where things live

- Source in separate files; a build script joins them into one HTML file. `dist/` holds the latest build.
- A release build has no test API, autopilot or debug tools in it.
- `reports/` holds balance tables, performance numbers and screenshots that a decision rests on.
- The version number appears in the build, the hidden debug line, the changelog and the commit message.
- At each milestone the build is also published as a private page the owner can open on a phone.

## 9. What the owner can do, if they want to. None of it is required

- Open the playable link at any milestone and write anything that comes to mind, in any form.
  Claude turns it into a numbered list, reproduces what it can, and answers every item in the changelog.
- Send a screenshot with the debug line showing when something looks wrong on a real iPhone.
- Answer the items under "For the owner" in `STATE.md`.
- Send the Mutation design document and the Game Blueprint, if the reconstruction in `ROADMAP.md` should follow them more closely.
