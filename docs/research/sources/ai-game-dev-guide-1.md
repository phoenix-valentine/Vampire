# AI Game Dev Ultimate Guide (pages 1 to 24)

Cover title: "Making Profitable Games with AI. The Ultimate Guide, November 2026 Edition" [p. 1]. All 24 pages were readable. Pages 25 to 48 are not covered here.

## What it is

A playbook for a beginner solo developer who builds games with AI, mobile first, then Steam and Switch [p. 1, 4]. Thesis: in late 2026 AI has mostly solved building a small game, not selling one; earners treat AI as a fast builder, not the author [p. 4]. Route: ship 3 tiny games, then one focused mobile game, market from week one, test in a few countries, then scale and port [p. 4]. Labels: GEM (non-obvious advice backed by results), WARNING, DO THIS; confidence High / Medium / Low [p. 4]. "Your Drive notes" means the owner's Small Games Roadmap and Game Dev Toolkit [p. 4].

Limit: these pages say nothing specific about bullet heaven design, canvas versus WebGL, object pooling, enemy counts or iOS audio unlock. The advice for single-file web games is general.

## Outline (the document's own section names, in order, with page numbers)

- How to use this guide [p. 4]
- The 25 conclusions that matter most: Building; Art, audio and trust [p. 5]; Selling; Platforms and business [p. 6]
- Part 1 Strategy and expectations: 1.1 Where AI game development stands (late 2026); 1.2 Platform strategy [p. 7]; 1.3 Choosing your engine [p. 8]; 1.4 Expectations and the money reality [p. 8-9]
- Part 2 Ideas and validation: 2.1 Where good ideas come from; 2.2 Genres that fit your goals [p. 10]; 2.3 Research the market (free tools); 2.4 Validate before you build [p. 11]
- Part 3 Game design fundamentals: 3.1 The core loop; 3.2 The first 60 seconds; 3.3 Difficulty, flow and fairness; 3.4 Game feel and "juice" [p. 12]; 3.5 Designing for retention (mobile); 3.6 Mobile-specific UX; 3.7 Playtesting that actually helps [p. 13]
- Part 4 Building with AI: 4.1 The pipeline: idea to release [p. 14]; 4.2 Which AI for which task; 4.3 Claude effort levels [p. 15]; 4.4 MCP: connecting Claude to your engine; 4.5 Getting a web game onto phones (Capacitor) [p. 16]; 4.6 Code, systems and debugging [p. 16-17]; 4.7 What to learn yourself [p. 17]
- Part 5 Art, audio and worlds: 5.1 Art direction; 5.2 2D and 3D assets (fastest to slowest) [p. 18]; 5.3 Mobile asset checklist; 5.4 Animation; 5.5 Concept art; 5.6 Sound effects and music [p. 19]; 5.7 Worlds, levels and scenes [p. 20]
- Part 6 Testing, data and polish: 6.1 Quality checklist before any release; 6.2 Analytics [p. 21]; 6.3 Mobile retention benchmarks; 6.4 Soft launch (mobile); 6.5 Accessibility (cheap wins) [p. 22]; 6.6 Localization [p. 22-23]
- Part 7 Monetization: 7.1 The models, by platform; 7.2 Mobile ads that players don't hate; 7.3 first line only [p. 24]
- Listed in the contents, not read: 8 Marketing (27), 9 Publishing (30), 10 Legal, business and AI rules (33; 10.5 Names and trademarks, 34), 11 Making it loved, not labelled "AI slop" (36), 12 After launch (37), 13 The playbook (38), 14 What doesn't work, and the tool stack (41), 15 Templates and prompt library (43), 16 Glossary, sources and caveats (46) [p. 2-3]

## Frameworks, lists and checklists

**The pipeline: seven stages, each with a hard "done when" test** (times for a 2-week first game) [p. 14]

| Stage | Done when | Time |
|---|---|---|
| 1. Pitch | You can explain the game in 10 seconds; 5 must-haves at most | 1 day |
| 2. Prototype | The core action is fun for a minute using only rectangles and circles | 2-3 days |
| 3. Complete loop | Start, play, win or lose and restart work 10 times in a row | 2 days |
| 4. Content | 5-15 minutes of play, with at most 3 kinds of each content type | 2-3 days |
| 5. Juice | Every action has visual or sound feedback | 2 days |
| 6. Playtest | 3 strangers finish a round without help | 2 days |
| 7. Release | A public link works on another device | 1 day |

**What works when building with AI** [p. 14]: chat first, agent later (one playable file, then Claude Code once the project outgrows one file); spec file plus CLAUDE.md holding design, controls, rules and a "don't touch" list; one feature at a time with a git commit after each working step; roll back after two failed fixes instead of stacking fixes.

**GEM "Fix, move on, or cut"**: cut any feature still broken after 3 fix attempts or that takes more than 2 sessions [p. 5, 14].

**Code, systems and debugging** [p. 16-17]: one sentence per feature, naming one visible change; every tweakable number in a commented settings block at the top; the agent simulates play for balance, the human judges feel; bug reports need four things (what you did, what you expected, what happened, exact error text), then "Fix only this and keep everything else the same."; keep a short regression list (things that worked) and retest it after every change.

**Effort levels** [p. 15]: medium for edits, high for building a feature, max only for one stubborn correctness bug, then lower it. Higher effort tries to self-test, so grant permission to run checks. A clear spec saves more than a higher effort level. GEM "Planner and executor": a mid-tier model writes the detailed build prompt, the top model executes it; name the library in the first prompt.

**The three loops** [p. 12]

| Loop | Question to ask | Example (arcade runner) |
|---|---|---|
| Core (seconds) | Is the action satisfying on its own, even with grey boxes? | Swipe to dodge; near-misses feel great |
| Session (minutes) | Is there a clear goal, rising tension and a satisfying end? | Run gets faster; coins; crash ends the run |
| Meta (days) | Is there a reason to come back tomorrow? | Spend coins on characters, daily challenge, collection |

Session loop = one run or level, 2-10 minutes. The meta layer turns a 1-day game into a 30-day game [p. 12].

**The first 60 seconds** [p. 12]: playing within 5-10 seconds of launch (no long logos, logins or menus); teach by doing, one mechanic at a time, with a hand or arrow, never a wall of text; an early win in the first 30 seconds (reward, level-up, satisfying effect); show the hook (the twist) early, not after level 5; ask for nothing until the player has had fun.

**Difficulty, flow and fairness** [p. 12]: ramp gradually, then add breathers (hard-easy-harder beats a straight line); losses must feel fair, show clearly why they lost; fast restarts, one tap; tuning numbers in one settings block.

**Juice** [p. 12]: screen shake, particles, squash-and-stretch, hit-pause, sound, haptics. The cheapest way to make a simple game feel premium; AI adds it well once the effects are named.

**Retention levers (mobile)** [p. 13]: Progression (avoid "walls", a top day-30 killer); Daily reasons (do not punish missed days harshly); Collection (cosmetic or gentle, no pay-to-win); Goals (short, medium and long visible at once; too many overwhelms); Content cadence (only after the core retains).

**Mobile-specific UX** [p. 13]: key buttons in the bottom third, nothing vital under the notch or home bar; one-hand play wherever possible, "portrait suits casual, landscape suits action"; touch targets at least ~44-48 points, generous hit areas; pause automatically on calls or app switch, save often; stable 60 fps on a mid-range Android phone, small download, works offline; controller and keyboard support from day one if Steam or Switch is planned.

**Playtesting that actually helps** [p. 13]: 1. Watch silently; note where they hesitate, fail or smile. 2. Ask: What was the game about? What was frustrating? Would you play again tomorrow? 3. Group notes by problem, count players per problem, fix the top 3, test again. 4. Strangers, not only friends, on real phones.

**Validate before you build**: Market, Validate, Build, Launch, Scale [p. 11]. 1. Hook test (1 day): 10-second pitch, one-line tagline. 2. Clip test (1 week): core action in shapes, 3-5 clips, measure views, saves and "where can I play this?". 3. Page test (2-4 weeks). 4. Play test: 5-10 strangers; do they ask to keep playing? 5. Kill or commit: set the bar before testing.

**Where good ideas come from** [p. 10]: genre + one twist (exactly one new idea); borrow formats, not games; use your unfair advantage; design for clips (funny or satisfying 10-second moments such as chain reactions). Avoid: cloning a specific game, saturated clones, ideas you cannot explain in 10 seconds, huge first ideas.

**Quality checklist before any release** [p. 21]: plays start to finish 10 times in a row with no crash or soft-lock; tested on a low-end Android phone and a recent iPhone; stable frame rate (target 60 fps), no overheating or battery drain in 15 minutes; survives calls, app switching, losing internet, rotating the phone; saves reliably, progress kept after an update; all text fits every screen size and language; sound and music volume settings work and are remembered; controller works everywhere if listed; ads never interrupt mid-action or block the close button.

**Mobile asset checklist** [p. 19]: icon of one bold shape, high contrast, no small text; small download; UI scales across aspect ratios and respects safe areas; screenshots show real gameplay; haptics and sound for key actions; a mute toggle that remembers its setting.

**Accessibility (cheap wins)** [p. 22]: colour-blind-safe palette, never colour alone for meaning; text size option; remappable controls, hold/toggle options, no required rapid tapping; reduce-motion and screen-shake toggles; difficulty or assist options.

**Art** [p. 18-19]: styles that work are pixel art at 16/32/64 px with a locked palette, flat vector shapes, low-poly 3D, code-drawn 3D or 2D; palette of 8-16 colours (3-5 for code-drawn games), all UI and backgrounds snapped to it. Assets fastest to slowest: 1. Code-drawn art (free, perfectly consistent, never looks like "AI art"; limited to geometric or stylised looks), 2. Free CC0 packs (Kenney), 3. Pixel-art AI, 4. 3D AI. Code tweens (scale, rotate, bounce) give "alive" UI and characters for free; frame animation 4-8 frames. "Slop" giveaways: glossy generic fantasy illustration, garbled text in images, details that change between frames, mixed styles, store art unlike the game.

**Free sound and music** [p. 19]: jsfxr, ChipTone, sounds generated in code, Kenney audio (CC0); music composed in code by Claude (the Battle Drones soundtrack changes per map and intensifies in combat); CC0 loops.

**Worlds** [p. 20]: grow in rounds of 1-3 concrete additions; ask for an in-game level editor early; do five-minute jobs by hand.

**Text handling** [p. 23]: keep all text in one file, leave room for longer words, use fonts that cover the needed scripts.

**Self-checking through tools** [p. 16]: with an engine connected over MCP, Claude can run the game, read errors and take screenshots; in one cited test it ran a game, fixed a score bug and confirmed the fix from a screenshot. Avoid servers with huge permission surfaces.

**Free market research tools** [p. 11]: SteamDB; Gamalytic / VG Insights; Steam search by tag (read negative reviews for gaps to fill); App Store / Google Play top charts; Sensor Tower / AppMagic free tiers; TikTok / YouTube Shorts search.

**Events to track first** [p. 21]: `tutorial_step_N` / `tutorial_complete`; `level_start`, `level_complete`, `level_fail`; `session_start` / session length; `ad_offer_shown`, `ad_watched`; `store_open`, `purchase`; `settings_changed`, `crash`. One event SDK only.

**Platforms and engine** [p. 7-8, 16]: web portals + itch.io = practice ground and first income; mobile = main commercial target; Steam = second; Switch = third; Roblox only for a social game. Web stack: fastest with AI, all plain text; mobile via Capacitor, Steam via a desktop wrapper, "no practical path" to Switch. Capacitor: build to a folder; `npm install @capacitor/core @capacitor/cli`, `npx cap init`; `npx cap add android` / `ios`; add plugins (ads, haptics, purchases); build and sign in Android Studio and Xcode.

**Monetization defaults** [p. 24]: mobile = free + hybrid (rewarded ads + in-app purchases); web portals = free + ad revenue share; Steam and Switch = premium. Rewarded video is the highest-earning and best-liked format; interstitials never mid-action and not in the first session; banners never over gameplay or buttons.

## Numbers and thresholds

| What | Value | Page |
|---|---|---|
| Must-haves in the pitch | 5 at most | 14 |
| Pitch length | 10 seconds | 10, 14 |
| Prototype test | fun for a minute, rectangles and circles only | 14 |
| Full loop reliability | 10 times in a row | 14, 21 |
| First content | 5-15 minutes of play; at most 3 kinds per content type | 14 |
| Playtest pass | 3 strangers finish a round without help | 14 |
| Prototype play test | 5-10 strangers | 11 |
| Roll back | after two failed fixes | 14 |
| Cut a feature | after 3 fix attempts or more than 2 sessions | 5, 14 |
| Time to playing | 5-10 seconds from launch | 12 |
| Early win | first 30 seconds | 12 |
| Session length | 2-10 minutes (concept advice: 3-10) | 12, 11 |
| Touch targets | at least ~44-48 points | 13 |
| Frame rate | stable 60 fps, mid-range Android | 13, 21 |
| Heat and battery check | 15 minutes | 21 |
| Palette | 8-16 colours; 3-5 if code-drawn | 18 |
| Retention median | day 1 ~26%, day 7 ~3-4%, day 30 ~1% | 22 |
| Retention "good" / top quartile | 35/15/5 / 40+/20+/10+ | 6, 22 |
| Example go/no-go | day 1 >= 35% and day 7 >= 12% | 22 |
| Soft-launch sample | 500-2,000 installs, 1-3 countries | 22 |
| AI balance simulation | 1,200 AI-vs-AI matches (Battle Drones) | 13 |
| Effort test, same prompt | low 32 s $0.48; medium 52 s $0.56; high 1 min 50 s $0.75; xhigh 4 min 32 s $1.36; max 22 min 22 s $5.25 | 15 |
| Max versus medium cost | roughly 10-20x, not reliably better | 5 |
| Willison's games | 4 browser games, 4 hours or less each | 5 |
| Most first games earn | under $100 | 9 |
| Reported AI-game results | from ~300k iOS + 700k+ Android downloads (38-0-0) down to 121 downloads, ~$6 (Sprout) and 1,000 downloads, $0 after $1,500 of AI costs (Dusk Climber) | 9 |
| AI games on Steam | 42% of launches, about 12% of sales | 7 |
| Top two AI games | 83-92% of AI-game revenue per quarter | 9 |
| AI-disclosing paid games | median sales 71 vs 200; followers 17 vs 47 | 9 |
| Steam AI disclosure | 49.5% fewer reviews (correlation) | 6 |
| Art share of AI disclosures | 63% | 5 |
| Poki ad share | 100% on traffic you bring, 50% on its own | 6 |
| US paid install | $4.90 average; $9-22 iOS puzzle and match | 6 |
| Beginner timing | first game 2 weeks; first meaningful income 6-18 months, many never | 8 |

## What it means for Vampire: No Survivors

**(a) Process for an AI building alone**
- Do not leave a pipeline stage until its "done when" test passes [p. 14]. The plain-shapes prototype the owner asked for is stage 2.
- One feature per step, a commit after each working step; roll back after two failed fixes; cut after 3 attempts or 2 sessions [p. 14].
- Keep a "don't touch" list in CLAUDE.md and a regression list that is retested after every change [p. 14, 17]. Inference: add both once the loop is approved.
- Make fun a separate pass: once the game ran, "Make it a LOT more fun" triggered self-playtesting and rebalancing (Medium confidence) [p. 5].
- Simulated play may tune balance but must not be reported as fun: "only humans tell you whether it's fun" [p. 13, 17].
- Claude Code refuses to recreate specific existing games, even renamed; genre games and own designs are fine [p. 5, 10].

**(b) Core loop, controls and feel**
- The core action must satisfy with grey boxes before anything is added [p. 12, 14].
- In control within 5-10 seconds, early win within 30 seconds, the twist visible early, restart in one tap [p. 12]. Inference: the first feed or level-up lands inside 30 seconds.
- Name each juice effect and specify feel as moment + feeling + reference [p. 12, 13].
- "Portrait suits casual, landscape suits action" [p. 13]: Vampire is action in portrait, so the prototype must prove the upright layout (inference).
- State the loop as "The player does X to get Y while avoiding Z" with exactly one twist [p. 10].

**(c) Content, difficulty, builds and balance**
- 5 must-haves; at most 3 kinds of each content type; 5-15 minutes of play first [p. 14]. Inference: at most 3 enemy kinds and 3 weapon kinds in the first complete loop.
- Hard-easy-harder rhythm; show why the run ended [p. 12].
- All tuning numbers in one commented block at the top of the file [p. 12, 17].
- Meta progression only after the core is fun; avoid progression walls [p. 13].

**(d) Phone: layout, input, performance, audio**
- Controls in the bottom third, safe areas, ~44-48 point targets, one hand [p. 13].
- Auto-pause on app switch; survive rotation and lost internet; offline; small download [p. 13, 21].
- 60 fps and no overheating in 15 minutes [p. 13, 21]. Inference: the hard part for a bullet heaven.
- Code-drawn 2D with 3-5 colours is the fastest, most consistent, safest style [p. 5, 18].
- Sound made in code; music in code can intensify in combat; mute and volume remembered; shake and reduce-motion toggles [p. 19, 21, 22].

**(e) Testing and playtests**
- Machine gates: full loop 10 times in a row, regression list, interruption cases [p. 14, 17, 21].
- Human gates the lead cannot pass alone: fun for a minute, 3 strangers finishing a round, real phones [p. 13, 14]. Report as "could not check".
- For the owner's test: watch-silently method, the three questions, and a pass bar set beforehand [p. 11, 13].

**(f) Market, positioning, name, release**
- AI lowers cost, not odds; the realistic first-year goal is skill plus a small audience [p. 6, 9].
- Fitting genre labels: "arcade with meta-progression" (mobile), roguelites (Steam, Switch); web portals need fast load and fun in the first 10 seconds and are a real income route [p. 6, 10].
- Disclose AI use honestly and specifically; do not brag "100% AI" [p. 5]. Decide monetization before designing the economy [p. 24].

## Warnings and anti-patterns

- Building the wrong thing well is the expensive mistake [p. 10]. Scope is the beginner killer [p. 5].
- Asking for the whole game in one prompt; art before the core loop is fun; switching engines or models mid-project [p. 14].
- Multiplayer, accounts, online saves, big stories or procedural worlds in the first 3 games [p. 14]. Do not expand the world before the core loop is fun [p. 20]. Content cannot fix a weak core [p. 13].
- Do not leave max effort on by default: cost roughly doubles per tier; xhigh "dropped some features"; one creator burned 100% of a session's usage on a 4-hour build [p. 15]. Higher effort without permission to run checks is wasted [p. 15].
- A wishlist is a "maybe"; interest does not prove fun [p. 6, 11].
- Free tiers rarely include commercial rights and upgrading later does not license old outputs; never ship Suno free-tier tracks in a paid game [p. 5, 20]. Purely AI-generated assets generally cannot be copyrighted in the US [p. 5].
- Hidden AI that is discovered is punished harder than disclosed AI [p. 5]. Store art must match the in-game style [p. 18].
- Juice can cause discomfort; offer toggles [p. 22].
- Bolting ads or purchases onto a finished game gives awkward placements [p. 24].
- App Store uploads need a Mac with Xcode 26 or a cloud build service; Google Play requires targeting Android 16 (API 36) [p. 16].
- Prices, model names and platform rules change fast; recheck before paying or shipping [p. 1].

## Prompts and templates in the document

The prompt library, one-page design document, playtest notes form and store page checklist are in Part 15 (p. 43-45), outside these pages. "Idea generator" [p. 11] and "Juice pass" [p. 12] are only named here. Short ones given in full:

- Loop sentence: "The player does X to get Y while avoiding Z." [p. 10]
- Fun pass: "Make it a LOT more fun" [p. 5]
- Feel description: "The jump feels floaty, like on the moon. I want it snappy like Celeste: faster fall, shorter hang time, coyote time of 0.1 seconds." [p. 13]
- Bug fix closer: "Fix only this and keep everything else the same." [p. 17]
- Teach as you build: "Before changing code, explain in 2-3 lines what you'll change and why." [p. 17]
- First build prompt, naming the library: "Build a mobile-friendly three.js game where..." [p. 15]
- Concept reference: "match this palette and silhouette" [p. 19]

## Things the lead should decide or check

1. Portrait action against "landscape suits action" [p. 13].
2. The pass bar for the owner's test, written before the test [p. 11, 22].
3. Which checks stay "could not check": fun, strangers, real phones [p. 13, 14].
4. The 5 must-haves and the 3-kinds cap in the design document [p. 14].
5. A settings block, regression list and "don't touch" list in the repository [p. 14, 17].
6. A way to verify 60 fps and the 15-minute heat check on low-end Android and iPhone [p. 21]; the document gives no method.
7. Keyboard or controller support: from day one only if Steam or Switch is planned [p. 13]. The web stack has no practical Switch path [p. 8].
8. The name: names are covered in 10.5 "Names and trademarks" (p. 34), not here. Inference: check the working title's closeness to an existing genre leader against that section.
9. The effort table was measured on a model named Opus 5.5 [p. 15]; whether it transfers to the lead's model is unverified (inference).
10. Contents inconsistency: Monetization is listed at p. 22 but starts on p. 24 [p. 2, 24].
11. Read the notes for Parts 13, 14 and 15 from the second half of the guide.
