# Mutation lessons: brief

Source: Mutation GDD v1.3, pp. 51-75 (all read). Notes: `docs/research/sources/mutation-gdd-3.md`.

## 1-2. Section 2.3, exact order (1 = most costly), as rules

1. Overbuilt, then cut (a release cycle lost). Core sentence and budget table before code. Build one act, one boss, ten upgrades; play on the phone; then add one block at a time against the budget.
2. Phone upright was not first target (1/3 of playtest items). Build the layout toolkit before the first screen; other devices last, then re-check the phone.
3. Translated 19 languages too early. English only until feature freeze plus 2 playtest rounds.
4. No real-browser test (no Safari). Simulate insets and sizes; show a hidden debug line; ask for a screenshot with each report; say what could not be reproduced.
5. Silent breakage from dense code. One statement per line; edit helper refuses risky edits; tests assert effects ("this sound played"), not only "no errors".
6. Balance tuned late by feel. Cap or diminishing returns when a stat is created; autopilot runs each build path to the same boss; write the target beside the number ("level 10 by the first boss").
7. Sound as last layer. List one sound per move at design time; review by listening to a rendered preview.
8. Invisible rules. Ship a rule only if the player sees it working and it fits one banner sentence.
9. Text that did not fit or stay. Every text call declares shrink, wrap or maximum lines; timed text gets a minimum reading time.
10. Dead code. Delete a cut feature's code and data in the same change.
11. Large mixed batches. Land in groups; smoke test and commit after each.

Other rules:
- 2.1 #5: warn every big hit 0.6 s ahead, cap any single hit, death screen names the killer.
- 2.1 #7: one visible clock; push, peak, breather pacing.
- 2.1 #6: HUD shows only what asks for an action.
- 2.2 #4: a reward adds, never takes away; never offer what is unusable now.
- 2.2 #5: visual order: enemies, warnings, pickups, effects; in-play text stays 1.8 s plus time per character.
- 2.2 #6: auto-aim carries no bonus. 2.2 #8: geometry never holds the player.

## 3. Tools (2.1, 2.5; detail 1.13)

- [ ] Core sentence and budget table: decide every cut.
- [ ] Layout toolkit: safe-area insets, one button height (about 44 px), margins, fit-declaring text, two-tap selection (first tap reads, second takes).
- [ ] Fixed-step simulation (1/60 s); content as data in one file; rules separate from drawing.
- [ ] Test API (`window.GAME`): set up one situation, read numbers.
- [ ] Autopilot (`?bot=1`): plays runs, compares build paths.
- [ ] Smoke test: headless run finishes with no errors; second pass phone-sized touch.
- [ ] Screenshots: every screen at 390 x 844, both orientations, notch insets; look before sending.
- [ ] Hidden debug line: version, screen size, insets.
- [ ] `node --check` on edited files; edit helper refuses risky edits.
- [ ] Sound renderer in Node: files for listening and level checks.
- [ ] Balance scripts: damage per second, time to kill per build.
- [ ] Release checklist, changelog, version tag.

## 4. Playtest complaints not to repeat (2.2, share of items)

1. Phone layout, 1 in 3: off-centre text, mixed button sizes, overflowing text, buttons at the edge, black bar.
2. "Remove this", 1 in 5: settings, modes, numbers, a second meter.
3. Cannot read before choosing, 1 in 8.
4. Useless rewards, 1 in 10: heal card at full health, med kit taken at 95% health.
5. Noise, 1 in 10: warnings too strong, orbs too small, bright blood, sub-second messages.
6. One best choice, 1 in 12: regeneration always wins; first level-up too fast.
7. Sound, 1 in 15: one sound for every attack; annoying repeated sound.
8. Getting stuck. 9. Things in the wrong place. 10. "Still not fixed".

## 5. Budget and starter prompt (2.5, 2.6)

- Budget table, hard limits for: upgrades, enemy types and how many on screen at once, bosses, HUD elements, settings, screens. No values given; Mutation shipped 47 upgrades, 4 to 6 enemy types visible (1.14).
- First playable (2.6): one arena, one automatic attack, a dash, three enemy types, one level-up screen with three cards, ten upgrades, one boss; placeholder shapes.
- Before code: shortest warning, largest single hit, "won't build" list, three biggest risks.
- Three lines: "The new game in one sentence: [what the player does, what grows, what pushes back]"; "What is different from Mutation: [theme, the one new mechanic]"; "What I want to keep from Mutation: [for example: the body shows the build, the visible clock, bosses built on one idea]".
- The prompt's "stop and wait" checkpoints conflict with `CLAUDE.md` (inference: decide by PROCESS.md section 4).

## 6. Art and sound to reuse (1.12, 1.13)

- Each sound is a function: oscillators, noise, envelopes, filters at 44.1 kHz; rendered in a worker at load; Web Audio playback with position-based panning.
- 170 sounds in the full game. Per sound: variations, maximum copies at once, minimum gap, level in dB.
- Mixing: one fixed sound per move; warning sound matches its shape (circle, line, cone); loud repeats get a cooldown; all sound stops when the page is hidden.
- Music: step sequencer, 3 layers (breather, push, peak).
- Ground warnings: one amber at 45% strength. Blood fades in about 7 s. Particles capped. No effect brighter than what it hides.
- Removed as noise: damage numbers and health bars on ordinary enemies.
- Hit-stop and slow motion scale only the simulation.
- Not in the document: synthesis recipes, shake, hit-stop and particle values (p. 74).
