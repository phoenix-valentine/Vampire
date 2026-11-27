# Small Games Roadmap (12 pages)

Source: `359a924f-Small_Games_Roadmap_2.pdf`, Oct 22, 2026, @Phoenix. All 12 pages read; none unreadable. Written in Claude's voice to a beginner "who can't read code yet". "(inference)" marks my own reading.

## Outline

1. How to use this map: stage table, four standing rules [p. 1]
2. Toolchain: one HTML file with JavaScript [p. 2]
3. Two rules for every stage: the build loop [p. 2-4]; fix, move on, or cut [p. 4]
4. The 7 stages [p. 4-10]
5. Session starter and project tracker [p. 10-11]
6. Prompting basics [p. 11-12]
7. My limits and how you compensate [p. 12]

## Stage table [p. 1]

Seven stages, in order. Do the next unchecked step; move on only when the stage's **Done when** is true. An original game takes about 2 weeks part-time.

| Stage | What you finish | Time |
|---|---|---|
| 1. Pitch | a one-page plan for a tiny game | 1/2 day |
| 2. Prototype | a fun core action, tested on one person | 3 days |
| 3. Complete loop | start, play, win or lose, restart | 2 days |
| 4. Content | enough variety for 5-15 minutes of play | 2 days |
| 5. Juice | sound, effects, art and a clear first minute | 1 1/2 days |
| 6. Playtest and fix | strangers can play it without help | 2 days |
| 7. Release | a public link anyone can play | 1 day |
| Buffer | everything takes longer than planned | 2 days |

Standing rules [p. 1]:
- **Golden rule:** a finished small game beats an unfinished big one. When in doubt, cut.
- **First 3 games are remakes** (Pong, Flappy Bird, Breakout, Snake, Asteroids) with one twist, 3-7 part-time days each; originals start at game 4.
- **Always shippable:** from the end of Stage 3 the latest working backup must be a game you could upload today. If Day 10 arrives and you're not in Stage 6, cut content and go straight to playtesting.
- **Pace:** short sessions; stop mid-task so the next starts easy. Skipping a week means scope down.

## Toolchain [p. 2]

One HTML file, JavaScript, canvas, no engine, no libraries at the start: nothing to install, instant testing, Claude sees everything as text, easy release. Essential: Claude, Chrome, a folder called `games`, a free itch.io account. Optional: VS Code, Kenney.nl art, jsfxr. "Build on a computer"; keyboard games need added touch controls for a phone. Move to Godot when Claude begins dropping features when rewriting, the file passes about 1,500 lines, or you want 3D, big worlds or heavy physics.

## The build loop [p. 2-4]

"Build one feature at a time, and save a backup every time something works." Diagram caption: "Test every change; save only what works" (6 steps, 1 decision).

1. **Plan:** name one feature; Claude describes the change before writing code.
2. **Build:** the updated file plus a list of what changed.
3. **Run** it in the browser.
4. **Test** the new feature, then run the **Smoke test**: a 5-10 line checklist of everything that already works ("title shows -> Space starts -> player moves -> can score -> can die -> R restarts"). Takes a minute.
5. **Fix:** one problem at a time.
6. **Save a backup:** a numbered copy, like `mygame_v07.html`. Whenever the whole game works, also save `mygame_GOOD.html`, the last known good version.

Run, test and fix repeat until the feature works; only then is it saved. Then update the tracker.

## Fix, move on, or cut [p. 4]

- **Fix now:** crashes, can't be finished, controls don't work.
- **Move on:** works but isn't perfect; add to Known bugs; polish happens in Stage 5.
- **Cut:** still broken after 3 fix attempts, or taking more than 2 sessions. Reopen the last backup; move the feature to Cut ideas.
- **Revert:** if a fix makes things worse, go back to the GOOD file instead of stacking fixes.
- **Scope checkpoints** at the end of Stages 1, 2 and 4: "can I still finish by my deadline?" If not, cut the biggest unfinished item.

## The 7 stages

**Stage 1: Pitch** [p. 4-5]. Steps: an idea you'd enjoy making; core loop in one sentence ("The player does X to get Y while avoiding Z"); 1 or 2 things the game will be great at (where polish time goes); controls of 3 inputs at most; up to 5 must-haves, everything else on the Later list; a deadline; the tracker. Done when: tracker filled and the game explained in 10 seconds. Traps: dream game; multiplayer, online, big stories, save systems, procedural worlds; more than 5 must-haves.

**Stage 2: Prototype** [p. 5-6]. Goal: the core action playable with plain shapes; find out whether it's fun.
- Toy first: just the player shape; moving it should feel good for 30 seconds, no enemies or score.
- Add the core action, one build loop at a time.
- Add one challenge: an enemy, an obstacle or a timer.
- Feel pass (30 minutes): instant response to input, one sound on the core action, one tiny hit effect (a flash or a brief freeze).
- Silent test: one person, told only the controls, watched 2 minutes without help; note confusion and whether they play again on their own.
- Scope checkpoint: not fun after 2-3 tweaks? Find the most fun 10 seconds and make that the core, or switch to a remake. "Never add features to fix 'not fun.'"
- Done when: the core action is fun with plain shapes, and the silent tester played again without being asked.
- Traps: adding art now, adding menus or scores, asking for the whole game in one prompt, pushing on with a core that isn't fun.
- Tweak prompt: "Suggest 3 small tweaks ranked by impact, and apply only the first."

**Stage 3: Complete loop** [p. 6-7]. Steps: a goal (score, win condition or survival time); a way to lose; game states (title, playing, game over, restart); **fast retry** (one key, back in play in under 2 seconds, no menus); **readable losses** (flash what got them, or a short message); score or health on screen; a difficulty ramp "starting easier than you think. You're the best player your game will ever have"; play 10 full rounds. Done when: start, play, win or lose and restart 10 times in a row without a bug or reload. Traps: endless tweaking, new mechanics, settings menus. Prompt: harder every [30 seconds / level]; all tweakable numbers in a settings section at the top of the file, each with a plain-English comment.

**Stage 4: Content** [p. 7]. Variety for 5 to 15 minutes. List levels, enemy types, power-ups and **cap each at 3 kinds**; one item at a time, introduced alone before mixing; numbers in the settings section; balance by play-through; scope checkpoint (cut anything not started); save the GOOD file. Done when: a new player could enjoy 5+ minutes and every must-have is done (the minimum release). Traps: "just one more feature", a fourth enemy type, balancing forever.

**Stage 5: Juice and presentation** [p. 7-8]. In order, biggest payoff first: sound on every player action and every hit, score and death ("the biggest upgrade and the one most often skipped"); screen shake and a brief freeze on hits; particles, flashes, a score pop; art (flat shapes with a 3-5 colour palette in code, or one free pack); first 60 seconds (controls in one line on the title screen, playing within 10 seconds, goal understood within a minute); readability (turn down any effect that hides the action; mute key; music optional). Done when: every player action has visual or sound feedback, the look is consistent, a stranger passes the first-60-seconds check. Traps: days on art, changing gameplay, assets without rights (stick to CC0).

**Stage 6: Playtest and fix** [p. 8-9]. Feature freeze (fixes only); full bug review of the code; silent playtest with 3 people (afterwards: "What was confusing? What would you do differently next time?"); fix the top 3 problems; a second browser (Firefox or Safari) and a different window size; itch.io draft (kind HTML, single file, no ZIP; check size, click-to-play, sound starting after the first click). Done when: 3 people have played a full round without help, and no known bug crashes the game or stops someone finishing. Traps: features because a tester asked, endless polish, skipping testers.

**Stage 7: Release** [p. 9-10]. Embed settings (viewport = canvas size, Click to Play; Mobile Friendly only if it really works on a phone); cover 630x500 and 3-5 screenshots, a GIF if possible; page text (one-line hook, description, controls, credits); free, then public; play on another device; share in 1-2 places; **stop rule:** crash-level fixes for up to 3 days, then stop; 3-line retro (what went right, what went wrong, one rule to add to this roadmap). Done when: the public link works on another device and someone else has played it.

## Session starter [p. 10-11]

Eight rules: (1) before changing code, say in 2-3 lines what changes and why; (2) one feature or fix at a time, everything else unchanged; (3) under about 800 lines give the complete file, after that complete replacement functions with exact names; (4) tweakable numbers (speeds, health, spawn rates) in a settings section at the top with plain-English comments; (5) after each change list what changed, confirm every Smoke test item still exists, name anything removed or renamed; (6) give a short test list (what to try, what to see) and add new features to the Smoke test; (7) if a request is too big for scope or deadline, say so and suggest a smaller version; (8) plain language.

Tracker fields, in order: Game; Pitch; Core loop; Great at; Controls; Deadline; Current stage; Current task; Done; Must-haves left; Known bugs; Cut / Later ideas; Smoke test; `Latest backup: [mygame_v07.html]   GOOD file: [mygame_GOOD.html, saved after v05]`.

## Prompting basics [p. 11-12]

- Bug report, four parts: what you did; what you expected; what actually happened; any error message (Chrome F12, Console tab, copy the red text).
- "Feels wrong" report: name the moment, the feeling, and a game that does it better. Faster: "Show me the settings numbers that control [jumping], and give me a snappier and a floatier version to compare."
- A strong report ends: "No errors in the Console. Fix only this and keep everything else the same."
- Going in circles: fix fails twice, ask "What else could cause this?"; fails 3 times, reopen the GOOD file and start a fresh chat.

## Claude's limits [p. 12]

Can't see the screen (send a screenshot of the moment); can't judge fun (the human and silent testers do); can't remember past chats; loses sharpness in long chats and huge files; can't guarantee code works or notice a rewrite that quietly drops a feature (Smoke test after every change, numbered backups plus GOOD file); isn't always right even when sure (after two failed fixes ask what else, or revert).
