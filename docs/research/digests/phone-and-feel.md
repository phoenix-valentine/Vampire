# Phone and feel: digest

MG = Mobile Games 101, CL = core-loop-and-feel.md, LB = Less but Better. [S] sourced (search summaries only), [M] memory, [R] CL's judgment. In tables, * = judgment with a sourced basis, unstarred = judgment only. Nothing was measured.

## 1. Controls
- One thumb, portrait, at most 2 gestures (MG 4.2).
- Floating stick, origin where the thumb lands, anywhere on screen [R] (MG 4.4: left half).
- Dead zone 7 px [R] ([S]: 4 to 8 px, hysteresis). Full speed from 30 px. Max radius 50 px (MG: 60), then the origin follows the thumb [R].
- Clamp vector length, not each axis; remap smoothly past the dead zone [S].
- Ring at 25% opacity. Player at 44% of height from top; test 50% [R].
- Pointer events, one pointer; `setPointerCapture`; handle `pointercancel`; keep keyboard.
- No drag-to-follow: finger hides the player [M].
- Input in the lower half; pause in a top corner (MG 4.3).
- Targets: main 48 px, rare 28, gaps 8, text 17 (never under 11), key objects 32 (MG 4, 7.1).
- Forgiveness: hitboxes smaller than drawn (LB 7.2); level-up cards locked 350 ms, then need a fresh touch [R].

## 2. Skeleton checklist (MG 8)
1. Viewport meta: `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover`.
2. Page: `overflow:hidden; overscroll-behavior:none; user-select:none; -webkit-user-select:none; -webkit-touch-callout:none`. Canvas: `touch-action:none`. Block `contextmenu`.
3. `dpr = min(devicePixelRatio, 2)`; canvas = inner size x dpr; `ctx.setTransform(dpr,0,0,dpr,0,0)`; re-fit on `resize`.
4. Choose: fill the window (MG code) or fixed logical size, letterboxed (MG 7.3).
5. UI 40 px from top, 30 from bottom, plus `env(safe-area-inset-*)`; fit with browser bars visible. iPhone: no fullscreen, no vibrate.
6. `dt = min((now - last) / 1000, 1/30)`; pause on `visibilitychange`; loop stopped while paused.
7. AudioContext created or resumed inside the first tap ("Tap to play").
8. localStorage after every run: best, mute.
9. No `shadowBlur`; static background drawn once offscreen.

## 3. Feedback and feel
One clear response per event, medium strength (LB 6.1, 6.4): start every effect at half, raise only what is missed. Frequent events get small, local effects; rare ones may be global [R]. Ladder (MG 3.3): small kill, medium combo, big level-up (inference). Small 100 to 300 ms, big under 1 s. Every sound has a visual twin.

|Technique|Start|Easing|Limit|
|---|---|---|---|
|Hit flash|white 60 ms|none|1 per enemy per 100 ms|
|Hit stop*|tough kill 50 ms, hurt 90, boss/death 150; ordinary 0|none|250 ms apart; stick stays live|
|Knockback*|8 px in 100 ms; corpse 18 px|ease-out|enemies stay in reach|
|Squash|1.25 x 0.8, back in 120 ms|ease-out, overshoot|under 1.3|
|Shake*|5 px x trauma squared; +0.25 tough kill, +0.4 hurt, +0.7 boss; decay 2.0/s|noise|6 px; 2 or 3 events (LB); never ordinary kills; off switch|
|Kill|white 50 ms, shrink 140 ms; 5 particles (3 px, 300 ms); stain 10 s|ease-in|gem drops at once; caps 300 particles, 150 stains (darker than gems)|
|Numbers|12 px, rise 22 px, 500 ms|ease-out|cap 30|
|Gem|pop 10 px in 120 ms; pull 100 + 1,200t px/s|ease-in|must not trail the player|
|Level-up|stop over 180 ms; cards slide 200 ms|overshoot|600 ms safe after|
|Hurt|red edge 150 ms; blink 10 Hz; 600 ms no damage|none|never skip|

Never hidden: player, danger, gems. Brightness (LB 6.3): player and danger brightest, pickups middle, background dark; 3 to 5 colours, one meaning each. About 4 kinds of moving thing; 3 or 4 HUD items (LB 6.2, MG 4.5).

## 4. Core loop: CL's starting values
[S] Vampire Survivors: level 2 at 5 XP, +10 per level; 15 alive and 1 spawn/s at start, 300 and 10/s late. Brotato teardown, not re-checked: enemy speed 0.44 to 0.89 of player, cap near 100. [M]: first kill about 5 s, first level-up about 30 s.

|Setting|Start|
|---|---|
|Run*|3:00, ends on a peak|
|Player|12 px radius; 150 px/s|
|Enemy speed|0.6 of player*; fast type 1.1|
|Alive*|12, 40 at 1:00, 80 at 2:00, peak 120, cap 150|
|Spawn*|1/s to 4/s|
|Enemy health*|1 hit for 30 s, then +20% per 30 s|
|First kill|by 3 s|
|Level-ups*|0:12 (5 kills), 0:28, 0:48, then every 20 to 25 s|
|XP*|5, 10, 15 ...; 1 per kill; 3 cards|
|Collect; pull*|14 px; 45 px, upgradable|

## 5. Sessions, onboarding, audio
- MG: playing within 5 s (6.1), first win by 20 s (6.3), a choice every 1 to 3 s (5.1), run 1 to 5 min (5.2).
- Restart in one tap, under 1 s; end screen: result, best, "Play again" under the thumb (5.3).
- Playable muted; remembered mute button (7.4).
- Sounds under 0.3 s, one per event kind (LB 6.4). Pickup -14 dB, kill -10, hurt -3, level-up 0 [R].
- Fatigue: 50 ms gap, 3 voices per type, pitch within 5% [S]; 12 in all [R]. Pickup: +1 semitone per pickup within 400 ms.
- Priority [R]: hurt, level-up, pickup, kill, hit.

## 6. Less but Better
- Core sentence: "You [action] to [goal] while [pressure]." One per variation (inference); two sentences = two games.
- Core test (3.2): a feature stays only if it makes the core action more interesting, readable or satisfying.
- Section 5: combine before adding; 1 base enemy + 2 variations beats 3 unrelated; ramp with 3 dials: speed, number at once, mix.
- Section 6: see part 3.
- Cutting (4): one cut, then 2 or 3 runs; retune by doubling or halving; cut what appears less than once a run.
