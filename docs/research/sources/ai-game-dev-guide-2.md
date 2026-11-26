# AI Game Dev Ultimate Guide (pages 25 to 48)

Source: `be2e1a1d-AI_Game_Dev_Ultimate_Guide_2.pdf`; footer title "Making Profitable Games with AI - Ultimate Guide". All 24 pages were readable. Pages 1 to 24 are not covered here.

## What it is

The second half of a guide for a solo beginner who builds games with Claude to earn money. Mostly "Sell" and "Grow" (store cuts, marketing, publishing per platform, legal and AI disclosure, after launch, a 12-month playbook), then "Reference" (mistakes table, tool stack, prompt library, templates, glossary, sources, caveats). What bears on building: Phase A [p. 38], the mistakes table [p. 41], the prompt library [p. 43-44], the templates [p. 45]. It says it is not legal, tax or financial advice [p. 33, 48] and that prices and figures are from Oct-Nov 2026 and change often [p. 42, 48].

Only summarised here, because they do not bear on a web prototype: the Google Play, Apple, Steam, Switch and Roblox steps (9.2-9.4, 9.6, 9.7), taxes (10.6), child privacy (10.7), freelancers (10.8), tool prices (14.2).

## Outline (the document's own section names, in order, with page numbers)

- Part 7 (title is before p. 25): end of a "what to sell" list; 7.4 What each store takes; 7.5 Pricing a premium game (Steam, Switch) [p. 25]; 7.6 Mobile money math (simplified) [p. 26]
- Part 8, Marketing [p. 27-29]: 8.1 The timeline; 8.2 Short-form video: the main free channel; 8.3 Store pages that convert; 8.4 Wishlists and Steam Next Fest; 8.5 Creators, press and communities; 8.6 Paid user acquisition (mobile): the reality; 8.7 Trailers
- Part 9, Publishing, platform by platform [p. 30-32]: 9.1 Quick comparison; 9.2 Google Play; 9.3 Apple App Store; 9.4 Steam; 9.5 itch.io and web portals; 9.6 Nintendo Switch and Switch 2; 9.7 Roblox (optional)
- Part 10, Legal, business and AI rules [p. 33-35]: 10.1 AI disclosure rules by store (November 2026); 10.2 The EU AI Act (applies if you sell in the EU); 10.3 Who owns AI-generated assets; 10.4 The asset and licence ledger; 10.5 Names and trademarks; 10.6 Business setup and taxes; 10.7 Privacy, children and ads (mobile); 10.8 Working with freelancers
- Part 11, Making it loved, not labelled "AI slop" [p. 36]: 11.1 The landscape; 11.2 What works
- Part 12, After launch [p. 37]: 12.1 Launch week; 12.2 The first 90 days; 12.3 Growing a game that works; 12.4 When to stop
- Part 13, The playbook: zero to profitable [p. 38-40]: 13.1 The 12-month roadmap; 13.2 Phase A: first game in 2 weeks ($0-20); 13.3 Phase B: games 2-3 (weeks 3-8); 13.4 Phase C: your commercial mobile game (months 3-6); 13.5 Phase D: global mobile launch; 13.6 Phase E: Steam; 13.7 Phase F: Switch; 13.8 Your weekly rhythm; 13.9 Launch checklist (any platform)
- Part 14, What doesn't work, and the tool stack [p. 41-42]: 14.1 What doesn't work; 14.2 Tool stack by budget
- Part 15, Templates and prompt library [p. 43-45]: 15.1 Prompt library; 15.2 One-page game design document; 15.3 Playtest notes form; 15.4 Store page checklist
- Part 16, Glossary, sources and caveats [p. 46-48]: 16.1 Glossary; 16.2 Sources; 16.3 Caveats

## Frameworks, lists and checklists

### Phase A: first game in 2 weeks ($0-20) [p. 38]

1. Day 1: get Claude Pro (or start free). Paste the session starter and scope-cutter prompts. Pick a one-sentence core loop with 3 controls at most.
2. Days 2-4: prototype with shapes only. Play it 10 times. If it isn't fun after 3 tweaks, change the core action.
3. Days 5-6: complete the loop: title, play, game over, restart, score, difficulty ramp.
4. Days 7-9: content (3 kinds of each at most). Then the fun-pass prompt.
5. Days 10-11: juice. A 4-colour palette, code-drawn art, coded sounds, a mute key, touch controls.
6. Days 12-13: feature freeze. 3 strangers play without help; fix the top 3 problems.
7. Day 14: publish on itch.io, disclose AI use, share the link, write a 3-line retro. Post a clip.

### 12-month roadmap and later phases [p. 38-40]

- Phases: A. First game (weeks 1-2). B. Games 2-3 + audience start (weeks 3-8). C. Commercial mobile game (months 3-6). D. Global mobile launch + iterate (months 6-9). E. Steam version (months 6-12). F. Switch (month 12+).
- Phase C order: pick and validate (10 ideas -> top 3 -> clip tests -> one with a hybrid-casual shape: simple core + meta progression); design the economy; build the vertical slice (core loop + first 10 minutes polished + meta loop working); art direction pass (lock palette and style); soft launch against retention thresholds set in advance; decide (hit thresholds -> launch; close -> fix onboarding and test again; far -> keep the lessons and move on).
- Weekly rhythm (a recommendation): building and polishing ~50%, marketing ~25-30%, playtesting and analytics ~10-15%, learning ~10%.

### Selling and marketing

- What to sell: cosmetics are least resented; convenience is fine if free players can still progress; avoid pay-to-win and loot boxes [p. 25].
- Timeline: post prototype clips and test hooks at the idea stage, under one consistent account name; 3-5 short clips a week from early production [p. 27].
- Short-form video: one vertical clip serves TikTok, Shorts and Reels. Hook in the first second: the funniest crash, the most satisfying moment, or an on-screen question. "Clip-first development": games go viral when the game itself produces clips worth sharing [p. 27].
- Trailers: gameplay in the first 3 seconds; 30-60 seconds; real gameplay only, never AI-generated video [p. 29].
- Ask for ratings only after a positive moment (a win), never on first launch [p. 28].

Store page checklist (15.4) [p. 45]:

- Capsule/icon readable at thumbnail size and in the game's real style
- First video shows gameplay in the first second
- Screenshots 1-2 show the hook; captions short
- Short description: genre + hook + why it's fun
- Tags/keywords match the audience; searched competitor terms
- AI statement specific and honest; links to Discord, socials and mailing list

### Web release [p. 25, 30-31]

- itch.io: upload an HTML project as a zip; free; same day; no discovery, you bring the players. AI disclosure is optional for games, "disclose anyway".
- Poki: curated and invite-style, every game human-reviewed, free to submit, mandatory SDK, review takes weeks. CrazyGames: quality review, SDK for ads.
- Requirements in common: fast load, works on mobile browsers, fun in the first seconds, no external ads.
- Many web developers combine self-hosting, itch.io and one non-exclusive portal; higher-share deals can require exclusivity.

### AI disclosure: Do and Don't (11.2) [p. 36]

Do: disclose specifically (what was AI, what was you); show your hand (devlogs, credits naming tools and choices); put human effort where players look (art direction, game feel, the first 60 seconds, icon and capsule, trailer); consider a human artist for icon or key art; make AI part of the concept when it fits; polish and respond (fix reported bugs fast).

Don't: hide AI use; market "100% AI-made"; ship AI voices without a human pass; use generated video in trailers; over-disclose what Valve doesn't ask for (AI coding help).

Rules [p. 33-34]: Steam requires disclosure of pre-generated AI art, audio and text that ships or appears in marketing; AI coding tools are exempt. EU AI Act Article 50 (since August 2, 2026): for creative works the duty is limited to disclosing that AI-generated content exists; a short honest statement on the store page and in credits covers the spirit. Works generated entirely by AI are not copyrightable in the US; human edits, design, selection and arrangement are protected. Never prompt for a named game's characters or art.

### Asset and licence ledger (10.4) [p. 34]

Columns: File name; Type (sprite / music / SFX / model / text); Tool and model; Plan (free / paid, with date); Licence terms (commercial? credit required?); Prompt or source; Human edits made; Disclosed on store? (Y/N). Keep it from day one.

### Names and trademarks (10.5) [p. 34]

Search the stores, Google and trademark databases (USPTO, EUIPO) before naming. Avoid names close to famous games; that is also how "copycat" listings get rejected or buried. Secure matching social handles and a domain early.

### After launch [p. 37, 40]

- Launch week: watch crash reports and reviews daily, fix within days; check tutorial drop-off, first-session length, day-1 retention.
- Web portals, first 90 days: watch play time and ad revenue per player; small balance tweaks can change portal ranking.
- Launch checklist (13.9) has 9 items; those that apply to a web game: AI disclosure complete and honest; ledger up to date, no free-tier assets in a paid build; store art matches the in-game style; analytics events verified live, crash reporting on; tested on low-end and high-end devices; a first-week patch plan.

### Free tool column (14.2) and glossary (16.1)

- Free stack: HTML5 + Phaser/three.js; Capacitor as mobile wrapper; code-drawn art, Kenney CC0; jsfxr, ChipTone, coded sounds; coded music, CC0 loops; itch.io and web portals [p. 41-42].
- Core / session / meta loop: the repeated action (seconds) / one run (minutes) / long-term progress (days). Vertical slice: a small, fully polished piece that represents final quality [p. 46].

## Numbers and thresholds

| What | Value | Page |
|---|---|---|
| Controls in the core loop | 3 at most | 38 |
| Shapes-only prototype | play 10 times; not fun after 3 tweaks -> change the core action | 38 |
| Content at first-game stage | 3 kinds of each at most | 38 |
| Palette | 4 colours | 38 |
| Stranger test | 3 strangers, no help; fix top 3 problems | 38 |
| Must-have features | max 5, plus a Later list | 43, 45 |
| Vertical slice | core loop + first 10 minutes polished + meta loop | 39 |
| Human effort focus | the first 60 seconds | 36 |
| Hit-pause | 60 ms | 44 |
| Touch controls | large hit areas in the bottom third | 44 |
| Frame rate | steady 60 fps on a mid-range Android phone | 44 |
| Sprite example | 32x32, 8 frames in one row, 10 fps, scaled 3x, no smoothing | 44 |
| Failed fixes before rollback | 2 | 41 |
| Max effort | ~10-20x the cost of medium, marginal gains | 41 |
| Most first games earn | under $100 | 41 |
| Stop rule (mobile) | 2-3 months of updates with day 1 under ~25% and flat | 37 |
| Update cadence (mobile) | every 2-4 weeks | 37 |
| Clips | 3-5 a week; hook in the first second | 27 |
| Trailer | gameplay in first 3 s; 30-60 s long | 29 |
| Steam wishlists before launch (Zukowski) | at least about 7,000 | 28 |
| Store shares to developer | Apple 85% under $1M/yr, else 70%; Google 85% on first $1M/yr; Steam 70% up to $10M; itch.io 90% default; Poki 100% of ad revenue on your traffic, 50% on Poki's; CrazyGames ~60% ads, ~70% purchases | 25 |
| Fees | itch.io and portals free; Google Play $25 once (plus 12 testers for 14 continuous days); Apple $99/year; Steam $100 per game | 30 |
| Premium pricing | small indies $5-15; $15 nets about $9.50 | 25 |
| Mobile math (illustrative) | ARPDAU $0.10 x 5 days = LTV ~$0.50, against CPI $1.55 to $21.63 | 26 |
| New Steam games disclosing AI | 49.9% in Oct 2026 (1.7% in Jan 2024) | 36 |
| Recommended share | 68.4% AI-disclosing vs 86.3% procedurally generated (508,192 reviews) | 36 |
| Hidden or boasted AI | Big Walk fell to 36% positive (under 0.1% of code); CODEX MORTIS launched with 32 concurrent players | 36 |

## What it means for Vampire: No Survivors

### (a) Process for an AI building alone

- One feature or fix at a time; keep everything else working exactly as it is [p. 43].
- Before changing code, state in 2-3 lines what changes and why [p. 43]. Inference: with no reader, put it in the commit message or step log.
- Keep tweakable numbers in one settings section at the top with plain comments; juice strengths go there too [p. 43, 44].
- After each change write a short test list [p. 43]. Inference: the lead runs it, since no human will.
- Do not stack fixes on failed fixes; roll back after 2 failures [p. 41].
- Bugs: find and explain the cause first, then fix only that [p. 44].
- Scope: core loop in one sentence, up to 5 must-haves, a Later list, top 3 risks, kill criteria set before testing [p. 43, 45].
- No giant one-shot prompt (generic, cannot be steered); max effort is not the default [p. 41].
- Order of passes: shapes prototype -> complete loop -> content -> fun pass -> juice -> feature freeze and outside test [p. 38].

### (b) Core loop, controls and feel

- Write the loop as "The player does X to get Y while avoiding Z" [p. 43, 45], with 3 controls at most [p. 38].
- Judge fun on shapes: 10 plays, at most 3 tweaks, then change the core action [p. 38]. This matches the owner's first stop. Inference: the three variations should differ in the core action, not only in tuning.
- A complete loop is title, play, game over, restart, score, difficulty ramp [p. 38].
- Juice changes feel, not gameplay: 60 ms hit-pause, small screen shake on impact, particles on collect, squash-and-stretch, rising-pitch sound for combos, light haptics [p. 44].
- Spend the most care on game feel and the first 60 seconds [p. 36].

### (c) Content, difficulty, builds and balance

- Early cap: 3 kinds of each at most [p. 38].
- Target shape: simple core + meta progression; the GDD template asks for a session loop and a meta loop ("why come back tomorrow") [p. 39, 45].
- Balance tweaks move play time, which moves portal ranking [p. 37].
- The pages give no formulas for difficulty curves, builds or balance.

### (d) Phone: layout, input, performance, audio

- Mobile-ready list: touch controls with large hit areas in the bottom third, safe-area margins, auto-pause when the app loses focus, save progress, a mute button that remembers its setting, steady 60 fps, then a list of what to test on a real phone [p. 44].
- Audio and art at this budget: coded sounds and music, code-drawn art, 4-colour palette [p. 38, 42].
- Portal bar: fast load, works on mobile browsers, fun in the first seconds [p. 31].
- Test on low-end and high-end devices [p. 40].
- Inference: "save after every level" maps to saving after each run and each meta change; haptics may not exist in iPhone Safari, so check before relying on them.

### (e) Testing and playtests

- Self-test: 10 plays of the prototype [p. 38].
- Outside test: 3 strangers without help, fix the top 3 problems [p. 38]. Inference: the project's only human tester is the owner; say so in reports.
- Record with the playtest notes form [p. 45].
- Metrics the guide names for later: tutorial drop-off, first-session length, day-1 retention [p. 37].

### (f) Market, positioning, name, release

- Name: the guide warns against names close to famous games [p. 34] and lists "cloning a specific game" as a top mistake [p. 41]. Inference: "Vampire: No Survivors" sits close to a famous title; the owner chose to keep it for now, so log the risk and revisit before any release.
- Cheapest path for one HTML file: itch.io zip, then one non-exclusive portal [p. 25, 31].
- Design moments that make a 10-second vertical clip with a hook in the first second [p. 27, 43].
- Disclose AI art, audio and text specifically; AI coding help need not be volunteered on Steam [p. 33, 36].
- Paid installs rarely pay back for a beginner [p. 26]; most first games earn under $100 [p. 41].
- The repo forbids publishing unless the owner asks, so this part is for later.

## Warnings and anti-patterns

"What doesn't work" (14.1), all 15 rows [p. 41]:

| Mistake | Why it fails |
|---|---|
| One giant prompt for a "AAA" game, then trying to sell it | Burns a whole session per build; generic results you can't steer |
| Cloning a specific game | Claude Code refuses; IP infringement; players call it slop; Apple 4.3 rejections |
| Building in secret, marketing at the end | No followers means no launch |
| Hiding AI use, or bragging "100% AI" | Both backfire |
| Free-tier assets in commercial builds | No commercial rights; upgrading later doesn't fix it |
| Max effort as your default | ~10-20x the cost of medium for marginal gains |
| Stacking fixes on failed fixes | Code rot; roll back after 2 failures |
| Starting in Unreal, or switching engines mid-project | Slowest with AI; switching costs more than any gain |
| Mixed art styles, glossy generic AI art, AI text in images | The clearest "slop" signals |
| Bolting ads onto a finished mobile game | Intrusive placements; poor revenue; bad reviews |
| Scaling paid installs before retention is proven | CPI of $5-20 vs lifetime value of cents |
| Relying on Next Fest to create an audience | It multiplies the audience you bring |
| Generic AI-written store copy and screenshots | Triggers Apple 4.3 and turns players away |
| Planning Switch first | Prove the game elsewhere first |
| Spending more on tokens than a realistic revenue estimate | Most first games earn under $100 |

Also:

- Apple guideline 4.3 "spam" is the most common rejection for AI-era apps; fixes are original screenshots, specific descriptions, real native features (haptics, Game Center, widgets) and a clear explanation [p. 31].
- "Slop" is about carelessness, not the tool; players forgive AI-assisted code far more than visible AI art [p. 36].
- Avoid targeting children unless planned for [p. 35].
- Caveats: much tool coverage comes from vendors; "which AI makes the best games" rests mainly on one expert's reports; revenue figures are mostly self-reported or estimated; model names, effort defaults and prices are likely outdated soon [p. 48].

## Prompts and templates in the document

All from 15.1 [p. 43-44] unless noted; the guide's own groups are Plan, Build, Sell. The six most useful for this project come first.

**Scope cutter** (plan; cuts an idea to its smallest fun version): "Here's my idea: [describe it]. Act as a strict producer. Cut it to the smallest version that's still fun: core loop in one sentence, up to 5 must-have features, and a Later list. Then list the 3 biggest risks for a solo beginner."

**Session starter (beginner mentor mode)**: "You're my game dev mentor. I'm a beginner who can't read code well yet. We're building [game] in [engine / one HTML file with JavaScript and canvas]. RULES: 1. Before changing code, tell me in 2-3 lines what you'll change and why. 2. One feature or fix at a time. Keep everything else working exactly as it is. 3. Keep tweakable numbers in a settings section at the top, with plain-English comments. 4. After each change, give me a short test list. 5. If my request is too big for my scope or deadline, say so and suggest a smaller version."

**Fun pass**: "This game isn't fun enough yet. Make it a LOT more fun."

**Juice pass**: "Add juice without changing gameplay: a 60ms hit-pause and small screen shake on impact, particles on collect, squash-and-stretch on jump and land, a rising-pitch sound for combos, and light haptic feedback on mobile. Put every strength value in the settings block so I can tune them."

**Mobile-ready pass**: "Make this game mobile-ready without changing the gameplay: touch controls with large hit areas in the bottom third, safe-area margins, auto-pause when the app loses focus, save progress after every level, a mute button that remembers its setting, and a steady 60 fps on a mid-range Android phone. Then list what I should test on a real phone."

**Bug report**: "BUG. What I did: [steps]. What I expected: [x]. What happened: [y]. Error text: [paste console / output]. Device: [phone / browser / OS]. Recent change: [what changed]. Find the cause first and explain it, then fix only this and keep everything else the same."

**Idea generator** (plan; finds and ranks ideas): "I want to make a [mobile / Steam] game I can finish in [time]. My interests: [list]. Give me 10 ideas. For each: one-sentence core loop ("player does X to get Y while avoiding Z"), the one twist, a reference game players already buy, why it would make good 10-second clips, and the biggest risk. Then rank the top 3 for a beginner solo developer and say why."

**One-shot opener (Willison)** (an example of a short first prompt): "Build a three js game called "Tree appreciator" - it shows you two algorithmically generated trees and the game mechanics is about appreciating the differences between them. Think hard about how to make sure it is both fun and beautiful."

**Demo to game** (grows a demo): "Now turn this into an actual game - quadruple the size of the playable area, introduce fun game mechanics, add a plot that isn't too cliche, some twists, a magic system, make it really good"

**Asset handoff** (swaps a shape for a sprite sheet): "Attached: hero_run_32x32_8f.png, an 8-frame run cycle, 32x32 per frame, in one row. Replace the player rectangle with this animation at 10 frames per second, scaled 3x with crisp pixels (no smoothing). Keep all gameplay the same, and tell me how to test it."

**Analytics setup**: "Add [GameAnalytics / Firebase] to this game. Track exactly these events: tutorial_step (with step number), tutorial_complete, level_start, level_complete, level_fail (with level number), ad_offer_shown, ad_watched, store_open, purchase. Explain how I can verify each one in the live dashboard."

**Store page draft** (sell; "then rewrite it in your own voice"): "Write 3 options for my store short description (max 2 lines each) for [game]: genre, the one hook, and why it's fun. Avoid buzzwords and generic phrases. Then suggest 5 screenshot captions of 3-5 words each."

**One-page game design document (15.2)** [p. 45], fields in order: Title; Platform(s); Target session (min); 10-second pitch; Core loop ("The player does ___ to get ___ while avoiding ___."); The one twist; Reference games players already buy; Session loop; Meta loop (why come back tomorrow); Must-haves (max 5); Later list; Art style + palette; Audio approach; Monetization (rewarded ads at ___; purchases ___; or premium price); Controls (touch / controller / keyboard); Top 3 risks; Kill criteria (set before testing).

**Playtest notes form (15.3)** [p. 45]: Tester (stranger / friend); Device; Build; Time to first action (s); Finished first level? Y/N; Total play time (min); Where they hesitated; Where they failed; Where they smiled; Q1 What was the game about? Q2 What was frustrating? Q3 Would you play again tomorrow?

The asset and licence ledger [p. 34] and store page checklist [p. 45] are given above.

## Things the lead should decide or check

1. Order of polish: the guide puts juice after loop and content [p. 38]; the owner wants a polished shapes prototype first. Decide how much juice goes into the prototype and log it.
2. Kill criteria for the prototype, written before the owner tests [p. 45].
3. Whether the core loop fits the one-sentence form and "3 controls at most" [p. 38, 45].
4. Name risk under 10.5 [p. 34]: log it; search stores, Google and trademark databases before any release.
5. Fill the one-page GDD fields [p. 45].
6. Frame-rate target: the guide names a mid-range Android phone [p. 44]; the project targets an upright iPhone. Pick the test profile.
7. Haptics and auto-pause in iPhone Safari: not covered by the guide; check.
8. The stranger test cannot be run by an AI [p. 38]; name the stand-in and label it a proxy.
9. Start the ledger when any outside or generated art, audio or text enters the repo [p. 34].
10. AI statement wording: the guide's "Do" example names AI-assisted code, while its "Don't" list and gem say not to volunteer coding help on Steam [p. 36]. The two pull apart; decide the wording before any release.
11. Starred sources on building with AI, not read here: Simon Willison, "The October inflection point for vibe game development" (Oct 28, 2026); AY Automate, "Claude Opus 5.5 games: how to vibe-code one, with the real prompts behind 4 builds" (Nov 3, 2026) [p. 47].
