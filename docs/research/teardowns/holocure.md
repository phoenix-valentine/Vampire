# Teardown: HoloCure - Save the Fans!

Research limits (2026-11-26): web search worked; page fetching was blocked (the wiki and Wikipedia
are outside this session's allowed network) and the shared search budget ran out before the last
four queries. Sourced facts come from search extracts, not full pages. **(M)** marks memory,
unverified. The game was not played or heard here. Ideas only, never copies.

## Header

- **Game:** HoloCure - Save the Fans! · **Genre:** bullet heaven fan game · **Developer:** Kay Yu, an
  animator who made about 75% of it alone, in GameMaker [S1][S2]
- **Platforms and price:** Windows on itch.io and Steam; reported to run well on Linux and Steam
  Deck [S3]. Free, no purchases [S4]. No phone version; 2023 guides report "no plans" [S5].
- **Release:** itch.io 23 June 2022 (some list 24 June); Steam 16 or 17 August 2023, alongside update
  0.6 [S1][S6]. Update 0.7 added 9 characters [S7]. Update 0.8 "expected in 2026", late [S8];
  whether it shipped: not found.
- **Review standing:** Steam "Overwhelmingly Positive". One tracker: 37,980 positive and 367 negative
  of 38,347 (99%); store snapshots 38,651 and 39,642; another listing 40,858. Snapshot dates not
  shown, read 2026-11-26 [S9]. 99% after 2,300 reviews in 10 hours, and 46th on the Steam Top 250
  within two weeks (Aug 2023) [S4]. Peak 41,260 concurrent, 21 Aug 2023 (another tracker: 46,155)
  [S9]. Metacritic user score 8.3 from 12 ratings [S3]. App Store and Google Play: not listed.
  itch.io rating: not found.

**Core sentence:** "You steer an idol through a field of crazed fans to survive 20 minutes and beat
the stage boss while the crowd thickens and a mini-boss arrives every two minutes."

## What players love

1. Each character has their own weapon and skills, so the roster is real build variety: "honestly a
   better Vampire Survivors than Vampire Survivors" [S10]. Block 7.
2. Free, no microtransactions, yet large and cared for [S4][S10][S11]. Block 16.
3. Colour, personality, polish; "watertight" combat [S10][S12]. Blocks 3 and 10.
4. Works for people who do not know the source material [S13][S11]. Block 12.
5. Weapon fusions ("collabs") and the house, fishing and farming give reasons to return [S14][S15].
   Blocks 7 and 8.

## What players complain about

1. Side minigames that are not fun [S3]. Block 8.
2. Steep difficulty spikes [S3]. Block 6.
3. Material and coin grinding [S3][S10]. Block 7.
4. Language and reference barriers; guides needed [S3][S10]. Blocks 12 and 13.
5. Late-run slowdown, some crashes, a save-sync bug; one 2023 thread reports a run lasting 40 minutes
   instead of 20 [S3][S16]. Blocks 16 and 15.

## The 16 blocks

| # | Block | How this game does it | Score and why | For our game |
|---|---|---|---|---|
| 1 | Core loop | Move, aim by facing, weapons fire alone, collect EXP, pick 1 of 4. Goal: boss at 20:00. A level every few seconds early; a mini-boss box every 2 minutes [S17][S18]. | 4. The proven loop, plus a kit that makes the first weapon matter. | **Take** the signature weapon as the heart of the loop. **Avoid** the 20-minute cycle. |
| 2 | Controls | Movement plus three buttons: confirm/strafe, cancel/special, pause [S19]. Strafe locks facing so you can retreat while firing (M). Keyboard, mouse, pad. | 4. Tight, and strafe adds skill. Not one-thumb, no touch. | **Take** aim as a skill, folded into movement. **Avoid** a second button. |
| 3 | Feedback and feel | Animator-led [S2]: snappy hit reactions, readable attack arcs, a ceremony when a box opens, a full-screen special (M). | 5. The game's reputation. Not verified by play. | **Take** the order: polish the main attack and the reward moment first. |
| 4 | Rules and systems | 6 weapon slots (one is the starter), 6 item slots, up to 3 stamps [S20]; two maxed weapons fuse at a golden anvil and free a slot; one super fusion per run [S18]. EXP and coins. Weighted random offers [S18]. | 4. Deep and coherent, opaque without a wiki. | **Take** fusion that refunds a slot. **Avoid** five overlapping upgrade layers. |
| 5 | Content | 94 weapons [S21]; 6 stages plus 4 hard variants, each with Stage and Endless modes, plus one Time mode [S22]. Authored stats per enemy [S23]. | 5. Enormous for a free game. | **Ignore** the volume. Three enemy roles done well. |
| 6 | Difficulty and pacing | Gentle start (first enemy 8 HP, speed 0.35) [S23]. Fixed clock: mini-boss every 2 min, boss every 10 [S17]. Timed events force formations and change spawn rate and cap [S17]. | 3. The clock is excellent; players still report spikes [S3]; strong builds coast late (M). | **Take** the fixed beat clock. **Avoid** spikes only meta upgrades solve. |
| 7 | Progression and rewards | 4 options; reroll (max 10), eliminate (once per level), hold (max 5), all unlocked first [S18]. Between runs: coin shop and a character gacha paid in earned coins only [S24][S29]. | 5. The best draft tools in the genre and a roster that changes play. Grind is the cost. | **Take** reroll, eliminate, hold. **Avoid** making players buy them. |
| 8 | Session structure | At least 20 minutes to clear [S15]; Endless beyond. Several menu steps before play (M). House, fishing, farming between runs [S14]. | 3. Generous, not short-session. | **Avoid.** Our run must fit a bus stop. |
| 9 | Readability and interface | Clean HUD and slot grids (M). Fusion recipes on the level-up menu since 0.6 [S18]. Late screens fill with effects (M; slowdown sourced [S16]). | 3. Menus clear, late action noisy, built for a wide monitor. | **Take** recipes on the card. **Avoid** uncapped effect stacking. |
| 10 | Art | Bright pixel art, heavy character animation, one hand throughout [S12][S2]. | 5. | **Ignore** for plain shapes. Later: one hand. |
| 11 | Audio | Chiptune arrangements of the source catalogue, mainly one composer [S26]. | 4, by reputation. Not heard. | **Take** one musical identity. |
| 12 | Theme and story | Idols save crazed fans (M). Items are in-jokes [S3]. Affection, not explanation. | 3. Joyful for fans; the fiction does not teach the rules (my judgement). | **Avoid.** Our theme must explain blood, dawn and hunters. |
| 13 | Onboarding | Drop in and play; the first enemy is nearly harmless [S23]. Special attack, reroll, eliminate and hold must be unlocked in the shop first [S24][S18]. | 3. Easy first minute, incomplete first hour. | **Take** the harmless first enemy. **Avoid** gating core verbs. |
| 14 | Menus and settings | Title, character select with kit preview, shop, collections (M). | 4. | **Ignore** until after the prototype. |
| 15 | Saving | Coins, unlocks and upgrades persist; a save-sync bug is reported [S3]. Mid-run save: not found. | 3. | Nothing new. Save on every state change. |
| 16 | Platform | PC only; reportedly single-core, late-run slowdown; 0.6 about doubled frame rates [S16]. | 3. Superb store standing, weak reach. | **Avoid.** Hard body and particle caps from day one. |

**Most weight:** blocks 3, 7, 5 and 10. **Deliberately simple:** 12 (a one-line premise), 2 (three
buttons), and block 1 itself: the genre loop left almost untouched so the characters carry the
difference.

**Best block:** 3, feedback and feel (7 close behind). **Weakest block:** 16, platform (PC only,
landscape, no touch, late slowdown), then 13.

## The numbers

| Number | Value | Status |
|---|---|---|
| Run length | 20:00 to the stage boss; Endless beyond | [S17][S15] |
| Mini-boss / boss interval | every 2 min / every 10 min | [S17] |
| First mini-boss | 02:00, 600 HP, 6 ATK, speed 0.5, 150 EXP | [S23], v0.5 guide |
| First enemy | 8 HP, 2 ATK, speed 0.35, 6 EXP, from 00:00 | [S23], v0.5 guide |
| EXP to level 2 | 79, so 14 first-enemy kills with no bonus | [S27]; division is mine |
| Time to first kill, first level-up | not found; my estimate 3 to 6 s and 30 to 45 s | estimate only |
| Level-ups per run | not found; level 50 is a mid-run trigger for super fusions | [S18] |
| Choices per level-up | 4; reroll max 10 per run, eliminate 1 per level, hold max 5; skip: not found | [S18] |
| Slots | 6 weapons including the starter, 6 items, 3 stamps; at most 4 fusions, 1 super fusion | [S18][S20] |
| Weapons | launch: not found; now 94 in total | [S21], undated |
| Passives (items) | not found; an older list names 14 super items | [S25], older version |
| Characters | launch 11 (one preview says 10); +9 in 0.7; now about 47 **(M)** | [S6][S7] |
| Stages | launch 1; now 6 regular + 4 hard + 1 time stage | [S6][S22] |
| Enemy types | total not found; stage 1 lists at least 6 normal types | [S23] |
| Enemies on screen | a cap exists and timed events change it; the number: not found | [S17] |
| Speeds | sample character speed 1.35 (75 HP); about 3.9 times the first enemy if both share one scale | [S28]; ratio is my inference |
| Special attack cooldown | 45 to 100 s by character; an item cuts up to 40% | [S24] |
| Scaling | weighted spawn pool changes over time; timed events alter stats, rate and cap; a few enemies use HP exponential in minutes with linear ATK and speed. Global multiplier: not found | [S17] |

## The first minute

Reconstructed from the anchors above plus memory. Timings are estimates, not measured.

- **Before play (M):** title, Play, mode, character grid (stats, weapon, skills shown), stage. Four
  or more confirmations.
- **0 to 3 s:** character centred on an open field. The starting weapon fires on its own in the
  facing direction. Slow, weak fans walk in from the edges.
- **3 to 10 s:** first kills in one or two hits (8 HP). Each leaves an EXP pickup, drawn in when you
  walk close.
- **10 to 40 s:** learning by doing: face the crowd to hit it, sweep the pickups. The player is about
  four times faster than the enemy, so nothing threatens yet.
- **About 30 to 45 s:** kill 14 fills the bar. Pause; four cards: typically a weapon, an item, a
  character skill, a stat boost (M for the mix).
- **45 to 60 s:** second level; denser, still safe. The first test is the 600 HP mini-boss at 02:00.

## For our game

**Three ideas worth taking**

1. **A signature attack that grows and visibly transforms.** The character's own weapon levels in the
   same draft and changes at the top [S10]. For us: the bite is the weapon every run is built around,
   so "drinking blood to grow stronger" shows in the main attack, not a stat line.
2. **A fixed clock of named threats that pay out.** A tough enemy every 2 minutes that drops a sure
   upgrade is tension, release and reward in one beat [S17]. For us: a named hunter every 30 to 40
   seconds makes "hunters close in" a rhythm, with dawn as the last beat.
3. **Draft tools with the goal on the card.** Reroll, eliminate, hold, and recipes on the level-up
   menu [S18]. For us: three big cards, one free reroll, and each card says what it combines with.

**Three mistakes to avoid**

1. Core tools sold in a shop [S24][S18]. Our first run must be the whole game; the owner judges it
   in one sitting.
2. A long run whose back half is a victory lap with slowdown [S16]. End while choices still matter.
3. Meaning that needs a wiki or outside knowledge [S3]. Every pickup and danger must read cold.

**What it would take to beat it**

- **Builds and choices (it may be the genre's best).** We cannot win on volume. Win on decisions per
  minute: every card changes what the thumb does next, no pure stat cards in the first five levels,
  one fusion reachable in every run before the midpoint, draft tools free.
- **Pacing and fairness.** Its clock is the bar; its spikes are the opening. Same clock at phone
  scale, each spike telegraphed about 3 seconds ahead, a death recap naming the killer, and a lab
  check that an unupgraded first run can reach the end.
- **Readability on a phone.** It does not run on one. Pass our R1 reader test at the busiest moment
  on 390 x 844: reserved colours for player, prey and threat, own effects dimmed, a body cap.
- **Instant one-thumb play.** It needs three buttons and a menu chain. One tap from load to control
  in under 5 seconds, a floating stick, and aim that follows movement so strafing survives as "how
  you circle", with no button.
- **Theme that explains the rules.** Its theme is a love letter, not a rulebook. Our clearest win:
  blood is growth and health, dawn is the timer, hunters are the escalation, light is the hazard.
  Pass the R2 theme reader with no confident wrong answers.

## Sources

Read as search extracts on 2026-11-26. Page dates given where the result showed one.

- [S1] Wikipedia: https://en.wikipedia.org/wiki/HoloCure_%E2%80%93_Save_the_Fans!
- [S2] MoguraVR developer interview: https://www.moguravr.com/holocure-developer-interviews/ ; TV Tropes: https://www.tvtropes.org/pmwiki/pmwiki.php/VideoGame/HoloCure
- [S3] VaporLens, updated 2026-07-04 (automated digest of Steam reviews): https://vaporlens.app/app/2420510/holo_cure_save_the_fans
- [S4] GamesRadar, Aug 2023: https://www.gamesradar.com/the-hottest-roguelike-on-steam-is-like-a-free-anime-vampire-survivors-and-its-got-2400-glowing-reviews-after-just-10-hours and https://www.gamesradar.com/in-2-weeks-this-free-roguelike-has-cracked-steams-top-50-all-time-best-rated-games-but-the-dev-refuses-to-make-any-money-off-it
- [S5] Gfinity, 2023: https://www.gfinityesports.com/guides/holocure-mobile
- [S6] Wiki changelog 0.3: https://holocure.wiki.gg/wiki/Changelog/Version_0.3 ; Siliconera: https://www.siliconera.com/preview-holocure-is-worth-playing-even-if-new-to-hololive/ ; ANN 2023-05-16: https://www.animenewsnetwork.com/interest/2023-05-16/holocure-fan-game-announces-future-steam-release/.198117
- [S7] Wiki, update 0.7: https://holocure.wiki.gg/wiki/Version_0.7
- [S8] PCGamesN: https://www.pcgamesn.com/holocure/update-0-8-plans
- [S9] Steam store: https://store.steampowered.com/app/2420510/HoloCure__Save_the_Fans/ ; SteamSpy: https://www.steamspy.com/app/2420510 ; stmstat: https://stmstat.com/cn/app/2420510
- [S10] Game8 review (score 90): https://game8.co/articles/reviews/770
- [S11] Sportskeeda: https://sportskeeda.com/esports/meet-holocure-surprise-hit-free-to-play-game-indie-dev-kayanimate
- [S12] PC Gamer, 2022: https://pcgamer.com/this-free-vampire-survivors-clone-has-one-thing-nobody-knew-it-needed-vtubers
- [S13] Siliconera preview (as S6)
- [S14] SuperJump, Sept 2023: https://superjumpmagazine.com/holocure-setting-the-standard-for-fan-made-games
- [S15] Wiki, getting started: https://holocure.wiki.gg/wiki/Help:Getting_started_guide
- [S16] Steam discussion "Really bad optimization", Aug 2023: https://steamcommunity.com/app/2420510/discussions/0/3810661765912850445 ; Gamepressure: https://www.gamepressure.com/newsroom/holocure-how-to-fix-lagging/z15d35
- [S17] Wiki, Enemy: https://holocure.wiki.gg/wiki/Enemy ; Stage 1: https://holocure.wiki.gg/wiki/Stage_1
- [S18] Wiki, Level Up: https://holocure.wiki.gg/wiki/Weight ; Collab: https://holocure.wiki.gg/wiki/Collab ; 0.6 notes: https://holocure.wiki.gg/wiki/Update_0.6_Release_Patch/undocumented ; Pocket Tactics: https://www.pockettactics.com/holocure/collab
- [S19] Samurai Gamers controls (v0.5): https://samurai-gamers.com/holocure/game-controls-56/
- [S20] The Nerd Stash (v0.6): https://thenerdstash.com/holocure-beginners-guide-tips-tricks-version-0-6/
- [S21] Wiki, Weapon: https://holocure.wiki.gg/wiki/Weapon
- [S22] Wiki, Stage: https://holocure.wiki.gg/wiki/Stage ; https://holocure.wiki.gg/wiki/Time_Stage_1_-_Concert_Stage
- [S23] Samurai Gamers stage 1 enemies (v0.5, v0.6): https://samurai-gamers.com/holocure/stage-1-grassy-plains-enemy-list/
- [S24] Gfinity special attacks: https://www.gfinityesports.com/guides/holocure-special-attacks ; wiki character pages
- [S25] The Nerd Stash, super items (older version): https://thenerdstash.com/holocure-all-super-items-list/
- [S26] Wiki, Soundtrack: https://holocure.wiki.gg/wiki/Soundtrack
- [S27] Wiki, EXP: https://holocure.wiki.gg/wiki/EXP
- [S28] Samurai Gamers character guide (v0.6): https://samurai-gamers.com/holocure/amelia-watson-character-guide
- [S29] DBLTap (gacha uses earned in-game currency): https://www.dbltap.com/posts/holocure-character-tier-list-01g6p03ca5t9
