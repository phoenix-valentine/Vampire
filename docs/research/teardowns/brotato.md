# Brotato: block teardown

Research status, 2026-11-26. Web search worked; opening pages did not (hosts outside this session's allowed network), and the shared search budget ran out after about 30 queries. Sourced facts come from search summaries of the cited pages, not full reads. "(from memory, unverified)" means no source was seen today. "Derived" is my arithmetic on sourced numbers.

## Header

- **Game:** Brotato (Blobfish; mobile port by Erabit Studios; led by Evil Empire since September 2025 [15]).
- **Genre:** arena survivor-like with a shop between waves. The developer called it survivor-like hordes plus "autochess games with a shop" [10].
- **Platforms and price:** PC $4.99 [1]; Switch, PlayStation, Xbox (Game Pass from 30 January 2024 [18]); iOS and Android as a free app with ads and purchases, plus a paid Premium app at $3.49 to $4.99 depending on snapshot [3].
- **Release:** early access 27 September 2022, 1.0 on 23 June 2023 [1]; mobile 28 March 2023 [4].
- **Review standing:** Steam Overwhelmingly Positive, 117,582 reviews, 96% positive (August 2026) [2]. Metacritic 76 from 4 critics; OpenCritic 76 [5]. App Store US: free 4.8 from 5.4K ratings, Premium 4.7 from 3K (undated snapshots) [3]. Google Play: free 4.6 from about 129,000 ratings, 10M+ downloads; Premium 4.8 [3]. Over 10 million copies sold by 2025 [4].

**Core sentence:** You steer a potato through a small arena, collecting what dead aliens drop, to survive 20 timed waves and buy a build that outgrows them, while the horde thickens and your money never covers everything you want.

## What players love

1. Build variety: weapons and items combine into very different runs (block 7) [11][12].
2. The roster: each character changes how to play (block 7) [11].
3. The quick "one more run" loop (blocks 1, 8) [12].
4. The shop: "a thinking game disguised as an action game", in one press description (block 4) [13].
5. Easy and cheap: one stick, auto-fire, $4.99 (blocks 2, 16) [3][11].

## What players complain about

1. Repetition: the same flat arena, no level choice (block 5) [11][12].
2. Luck: runs that feel decided by shop rolls (block 6) [11].
3. A solved meta: the same decisions each run to win (block 7) [12].
4. Stat and text overload on a simple interface (blocks 9, 13) [12].
5. Phone: ads and paywalls in the free app, the thumb hiding the arena, pace too fast for touch (blocks 2, 16) [3].

## The 16 blocks

| # | Block | How this game does it | Score and why | For our game |
|---|---|---|---|---|
| 1 | Core loop | Move and collect; weapons fire by themselves. Outlast a timed wave, then spend. Materials are both XP and money. Cycle: 20 to 60 s of fighting, then upgrade picks and a shop [6][10]. | 5. Fight, collect, choose and grow all fit in the first minute, then repeat 20 times. | Take: the hard-stop timed wave. Our night can be cut into short hunts. |
| 2 | Controls | One stick or WASD; auto-aim by default, manual aim optional [16]. Phone: one joystick [3]. Player speed 450, common enemies 200 to 400 [6][8]. | 4. Excellent on pad and keys. On phone, reviewers report the thumb covering the arena [3]. | Take: movement as the only input, player faster than every common enemy. Avoid: a joystick over the action. |
| 3 | Feedback and feel | From memory, unverified: hit flash, damage numbers, light knockback, pickups that fly to the player, a level-up chime. Kills are quick pops. | 3. Clear but modest. Reviews praise the loop, rarely the impact. | Take: restraint that stays readable at 100 enemies. Beat: make our kill, the bite, the best moment. |
| 4 | Rules and systems | Player, six auto-weapons, aliens, trees, materials. Lose at 0 HP; win after wave 20. Shop and upgrade rolls are random but steered by reroll, lock, and odds favouring weapons already owned [6][9]. | 5. Few rules, yet every stat trades against another and every purchase costs something real. | Take: one resource with several uses. Blood can be health, growth and currency. |
| 5 | Content | 66 enemy types over two maps (45 regular, 17 elite, 4 bosses), one behaviour each [8]. 20 waves per map; elites or hordes in waves 11 to 18; boss on wave 20 [14]. One arena at launch (from memory, unverified), three now [17]. | 3. Good enemy roles. Arena sameness is the most repeated criticism [12]. | Take: one behaviour per enemy, introduced by wave. Avoid: a featureless arena; our town should matter. |
| 6 | Difficulty and pacing | Wave 1 lasts 20 s against slow 3 HP enemies. Enemy HP rises by a fixed step per wave; speed does not [7][8]. Every wave ends in a guaranteed stop. The player picks Danger 0 to 5 [6]. | 4. The clearest tension-and-release rhythm in the genre. Loses a point for luck-decided runs [11]. | Take: a linear enemy ramp against multiplying player growth, with a breather the player can count down to. Avoid: starved runs. |
| 7 | Progression and rewards | Level-up: +1 max HP and a pick from 4 upgrades, taken at wave end [6][7]. Shop: 4 offers, reroll, lock; 6 weapon slots, pairs merge up to tier 4, class bonuses [9]. Danger levels unlock by achievement [7]; characters and items too (from memory, unverified). | 5. The bar for builds: width against merging, spend against save, items with drawbacks, each character one strong rule change. | Take: a character as a single loud rule-bend; visible downsides. Ignore: the 282-item catalogue. |
| 8 | Session structure | 17.5 minutes of combat per run (derived [7]). Ends in a win at wave 20 or death, then optional Endless. A stop every 20 to 60 s; a quit run can be resumed [16]. | 5. Fits a break and always offers a clean place to stop. | Take: an end visible from the first second; dawn is ours. Aim shorter on phone. |
| 9 | Readability and interface | Pale flat ground, dark-outlined enemies, green pickups, a mark where enemies will spawn (from memory, unverified). The shop is dense stat text; critics called it "a bit much" [12]. | 3. Fights read well until late-wave clutter. Menus are a spreadsheet. | Take: spawn warnings; one colour reserved for "collect this". Avoid: cards needing more than one line at 390 px. |
| 10 | Art | Hand-drawn, thick outlines, limbless potato with floating weapons (from memory, unverified). | 3. Legible and cheap to extend, not striking. "Bland" enemies in user reviews [5]. | Take: a new enemy is a silhouette and a colour. |
| 11 | Audio | Licensed electronic tracks, not a composed score [12]. Light weapon and pickup sounds (from memory, unverified). | 3. Fits and stays out of the way. | Ignore for the prototype. |
| 12 | Theme and story | A potato crash-lands among aliens and fights until rescue. The fiction explains neither the shop nor the timer. | 2. Deliberately thin; "no story" is a stated complaint [11]. | Avoid the gap: give every rule a reason (blood, dawn, hunters). |
| 13 | Onboarding | No tutorial (from memory, unverified). Character, weapon and Danger menus, then a 20 s wave that is hard to lose. | 3. Fast, but three menus precede the first move, and systems are learned from shop text. | Take: a first wave too easy to lose and too short to bore. Avoid: any choice before the first move. |
| 14 | Menus and settings | Title, character grid, options with sliders for enemy health, damage and speed [16]. End screen shows the build (from memory, unverified). | 4. Plain, fast, generous. | Take: a death screen that shows the build and restarts in one tap. |
| 15 | Saving | Unlocks persist. A run saves at each shop and can be resumed, latest run only [16]. | 4. Resume crashes needed a patch in October 2025 [16]. | Take: save at each breather. |
| 16 | Platform | Built in Godot [19]; runs everywhere. Enemies reportedly capped near 100 [20]. Mobile is a port by another studio; portrait play not confirmed [20]. | 4. Strong on PC and console, weaker on phone. | Take: a hard enemy cap as a budget. Avoid: the phone as a port target. |

**Heaviest blocks:** 7, 4, 6, 8. **Deliberately simple:** 12, 10, 11, 13, and the arena half of 5.

**Best block:** 7, progression and rewards. **Weakest block:** 12, theme and story.

## The numbers

- **Run:** 20 waves. Timers: 20, 25, 30, 35, 40, 45, 50, 55 s for waves 1 to 8; 60 s for 9 to 19; 90 s for wave 20 [6][7]. Sum 1,050 s (derived). Wall-clock with shops: not found (from memory, unverified: 25 to 30 minutes).
- **Time to first kill:** not found (from memory, unverified: 3 to 5 s).
- **First level-up:** 16 XP; reaching level L costs (L + 3) squared. The pick is shown only when the wave ends [6].
- **Level-ups per run:** not found. Level 10 needs 805 total XP and level 20 needs 4,310 (derived). From memory, unverified: runs end near level 20 to 25.
- **Choices:** 4 per level-up, pick 1, reroll for materials; levels 5, 10, 15, 20, 25 guarantee better tiers; no banish or skip found [6][7].
- **Shop:** 4 offers, unlimited rerolls. First reroll costs floor(0.75 x wave) plus an increase of floor(0.40 x wave), minimum 1; each further reroll adds the increase again. Lock keeps an offer and its price [6][9]. Each slot is a weapon 35% of the time, with a 20% chance of a copy of an owned weapon and 35% of its class [9].
- **Slots:** 6 weapons, with characters that have 0, 1 or 12 [9]. Items unlimited (from memory, unverified).
- **Catalogue now:** 74 characters, 95 weapons, 282 items [9]; 66 enemy types before the third map [8]; 3 maps [17].
- **Catalogue at launch:** early access counts not found. At 1.0: 44 characters (from memory, unverified); other counts not found. The 1.0 patch added 6 characters, 7 weapons, 6 items, 5 elites [10].
- **Enemies on screen:** about 100, one weak source [20].
- **Speeds:** player 450; Baby Alien 200 to 300; Fly 325 to 375; Chaser 380; Charger 400 [6][8]. Units not stated.
- **Scaling:** HP is base plus a step per wave: Baby Alien 3 + 2, Chaser 1 + 1, Charger 4 + 2.5 [8]. A Baby Alien reaches 41 HP by wave 20 (derived), 14 times wave 1. Danger 3, 4 and 5 add 12%, 26% and 40% to enemy health and damage; Danger 5 brings both bosses [6]. One to three elite or horde waves, by Danger [14].

## The first minute

From memory, unverified, except the timers.

- **0 to 20 s:** title, Start, character grid (a handful unlocked), starting weapon, Danger (only 0 offered).
- **20 s:** wave 1. Potato at the centre of a small arena, a 20 s countdown at the top, HP and XP bars top left. Marks appear on the ground and small aliens rise from them.
- **22 to 25 s:** the weapon fires at the nearest alien. First kill. A green material drops.
- **25 to 40 s:** the one skill is learned: walk into danger to collect, walk out to live. Ten to twenty kills; the XP bar fills once.
- **40 s:** the timer hits zero and every enemy dies.
- **40 to 60 s:** level-up screen (4 cards, pick one), then the first shop: 4 offers, money for about one. Most buy a second weapon and press Go.

One full loop and two decisions inside 60 seconds, but the first move comes after three menu screens, and only a third of the minute is action.

## For our game

**Three ideas to take**

1. **The timed hunt with a hard stop.** Split the night into short hunts, the first about 20 s, each ending in a guaranteed calm beat. "Dawn approaches" becomes a clock the player reads, and the prototype proves the whole loop in one minute.
2. **One resource, several uses, dropped where the danger is.** Materials pull the player back into the horde. Blood can be health, growth and currency: drink to heal now, or bank to grow. Hold upgrade picks for the calm beat so the hunt is never interrupted.
3. **Randomness the player can steer.** Few offers, a reroll that costs more each time, a lock, and odds tilted toward what the player already holds. The three prototype variations could be three "character" rule-bends on one loop.

**Three mistakes to avoid**

1. **Stat-sheet upgrades.** About 16 stats (from memory, unverified) and paragraphs of item text need a monitor. Our offers: one line, one upside, at most one downside, a change visible in play.
2. **Long menu stops.** Upgrade screens and a shop after every 20 to 60 s wave put much of a session in menus. On a phone, cap the calm beat at one decision of a few seconds.
3. **The phone as a port.** Reviewers describe a thumb over the arena, PC pace on touch, then ads and paywalls [3]. Build upright first: action in the upper two thirds, thumb below, speeds tuned on touch.

**What it would take to beat it**

- **Builds and choices (Brotato is the bar).** It wins on breadth, which we cannot match. Beat it on quality per choice: every offer readable in 3 s on a phone; every pick changes what the thumb does (route, target, risk), not only a number; every build visible on the vampire; the fiction makes the trade obvious (blood spent is health lost). Test: across 20 lab runs no offer is taken more than 60% or less than 5% of the times shown, and three clearly different builds can win.
- **Pacing and fairness (a contender).** Keep the guaranteed breather and the faster-than-enemies rule. Add a pity rule against starved runs, a spawn warning for every enemy, a death screen that names the killer, and a breather of 5 s, not 30.
- **Readability on a phone, instant one-thumb play, theme that explains the rules.** Brotato is not the bar. Match its in-fight clarity (flat ground, one pickup colour, spawn marks, an enemy cap); starting play on the first touch, upright, with a reason for every rule, would pass it.

## Sources

All accessed 2026-11-26 through search summaries.

1. Steam store page: https://store.steampowered.com/app/1942280/Brotato/
2. Steambase, August 2026 row: https://steambase.io/games/brotato
3. App Store: https://apps.apple.com/us/app/brotato/id6445884925 and https://apps.apple.com/us/app/brotato-premium/id1668755109 ; Google Play: https://play.google.com/store/apps/details?id=com.brotato.shooting.survivors.action.roguelike and https://play.google.com/store/apps/details?id=com.brotato.shooting.survivors.games.paid.android ; AppBrain: https://www.appbrain.com/app/brotato/com.brotato.shooting.survivors.action.roguelike
4. Wikipedia: https://en.wikipedia.org/wiki/Brotato ; sales also https://indiemakerlist.com/revenue/brotato/ (2026)
5. https://www.metacritic.com/game/brotato/ ; https://opencritic.com/game/15137/brotato
6. Brotato Wiki pages Waves, Shop, Experience, Upgrades, Speed, Danger_Levels: https://brotato.wiki.spellsandguns.com/Waves (and siblings)
7. Brotato Fandom pages Zones, Upgrades, Danger_Levels, Enemies: https://brotato.fandom.com/wiki/Zones
8. Brotator enemy tables: https://brotator.com/enemies (2026)
9. Shop and slots: https://gemelog.jp/en/games/brotato/shop/ (version 1.1.15.4) ; https://brotatodb.com/builds ; https://fantasywarden.com/games/brotato-beginners-guide (2024) ; counts https://gamehandbooks.com/brotato/
10. 1.0 release: https://www.gamespress.com/Brotato-10-Release ; https://godisageek.com/2023/06/brotato-hits-1-0-today-and-gets-a-launch-discount/ (June 2023) ; https://survivorslikes.com/patch-feed/brotato-1-0-release/
11. Vaporlens Steam review analysis, updated 31 July 2025: https://vaporlens.app/app/1942280/brotato
12. Critic reviews: https://tryhardguides.com/brotato-review/ ; https://nichegamer.com/reviews/brotato-review/ ; https://moviesgamesandtech.com/2023/06/23/review-brotato/ (23 June 2023) ; https://catholicgamereviews.com/brotato/
13. New York Times article, mirrored, 16 March 2023: https://dnyuz.com/2023/03/16/why-are-a-million-people-playing-brotato/
14. Elite and horde waves: https://gameplay.tips/guides/brotato-ultimate-guide-to-enemies-and-waves.html ; https://psnprofiles.com/trophy/25624-brotato/7-danger-5
15. Evil Empire takeover, 29 September 2025: https://worthplaying.com/article/2025/9/29/news/147770-brotato-development-taken-over-by-rogue-prince-of-persia-dev-evil-empire-new-content-coming-in-october/
16. Steam discussions (player reports, some years old): https://steamcommunity.com/app/1942280/discussions/0/3843305417839071182/ ; https://steamcommunity.com/app/1942280/discussions/0/3363649883734762509/ ; https://steamcommunity.com/app/1942280/discussions/0/3548301990162477364/ ; patch of 30 October 2025: https://steamdb.info/patchnotes/20607724/ ; manual aim: https://www.dualshockers.com/brotato-beginner-tips-tricks/
17. Primal Dread, 2 November 2026: https://www.gamegrin.com/news/brotatos-primal-dread-dlc-is-out-now-watch-the-launch-trailer/ ; https://brotator.com/primal-dread
18. Xbox Wire France interview, 9 February 2024: https://news.xbox.com/fr-fr/2024/02/09/entretien-exclusif-avec-thomas-gervraud-brotato-le-jeu-qui-a-de-la-patate/
19. Godot: https://dev.to/wlz/why-brotato-bet-on-godot-and-gdscript-the-free-2d-engine-behind-a-1-million-copy-potato-4ip7
20. 100-enemy limit: https://en.namu.wiki/w/Brotato ; portrait not found by a beta reviewer: https://m.taptap.io/post/4594200
