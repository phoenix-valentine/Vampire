# Decisions

One line per decision. Newest last.

| Date | Step | Decision | Why | How to undo |
|---|---|---|---|---|
| 2026-11-26 | Process | The owner reviews nothing; Claude decides by `PROCESS.md` section 4 and logs here | The owner asked for the least possible work on their side | Restore the "3 options and wait" rule in `CLAUDE.md` |
| 2026-11-26 | Process | Human playtests are replaced by a bot panel, a headless balance lab and fresh reader agents | They are the checks Claude can actually run; their limits are stated in `PROCESS.md` section 2 | Add human rounds through roadmap step 3.3 |
| 2026-11-26 | Process | Plans and design live in this repository, not in a separate document | A new session or a summarised chat can continue from `STATE.md` alone | Export the files to a shared document |
| 2026-11-26 | Process | 11 teardowns become a genre guide plus 5 teardowns of the bar games | The other six were there to feed discussion with the owner; the bar games carry the scorecard | Add teardowns in step 1.5 |
| 2026-11-26 | Process | The 16 blocks and gates A to D are reconstructed | The Game Blueprint was not provided | Align the table in `ROADMAP.md` when it is |
| 2026-11-26 | Process | Version 2's two documents are not committed here | They are superseded, and what was kept from them is written into `PROCESS.md` and `ROADMAP.md` | Add them under `docs/source/` |
| 2026-11-26 | Owner | The five differences from Mutation are suggestions; violence realistic; name kept; first stop is a plain-shapes core loop the owner tests | The owner's second message | Ask the owner |
| 2026-11-26 | Owner | Pause when the five-hour usage window reaches 80% | The owner's third and fourth messages | Ask the owner |
| 2026-11-27 | Research | Lean research before the prototype: five briefs, a genre guide, core loop numbers, four teardowns. The theme bible, six teardowns and three research files wait until after the owner's test | A dozen parallel agents used most of a usage window; the prototype does not need the rest | Run the scripts in `tools/workflows/` for the missing items |
| 2026-11-27 | Design | Three variations that differ in the core action: Slaughter (drops at the kill site), Feed (stand still to drink, claws only while moving), Hunt (prey flees to gates, every escape fetches a hunter) | Step 0 and Twisting the Classics ask for variants of different twist kinds; the owner asked for up to three | Remove a mode from `MODES` and its entry in `SETTINGS.modes` |
| 2026-11-27 | Design | One resource: blood is health and growth; hunger only in Feed and Hunt | Blueprint twist 1; Slaughter is the control with no twist | `hunger` per mode in the settings |
| 2026-11-27 | Design | A walled square with four gates instead of an endless field | Hunt needs somewhere to escape to; gates make the direction of the threat readable | `arena` in the settings; spawn code in `director.js` |
| 2026-11-27 | Design | The night waits for the first touch | Nobody should die while reading the hint | `ready` phase in `main.js` |
| 2026-11-27 | Build | The lead wrote the code itself in large steps instead of using builder agents; one small independent review at the end | Cost: agents re-read everything; the owner set a usage limit | Use the builder approach when usage allows |
| 2026-11-27 | Build | esbuild joins the source into one HTML file; it is a build-time tool only | Reliable, and the same modules run in Node for the lab | Replace `tools/build.mjs` |
| 2026-11-27 | Build | Canvas 2D drawing. The canvas-against-WebGL comparison of roadmap step 0.3 was not run | With plain shapes and at most 110 humans the canvas holds its frame time in the stand-in test; the drawing sits behind one module so it can be swapped | Write a second renderer with the same `draw` and `onEvent` |
| 2026-11-27 | Build | If frames stay slow for 2 s the game draws fewer pixels | A phone that cannot keep up should lose sharpness, not smoothness | `watchSpeed` in `main.js` |
