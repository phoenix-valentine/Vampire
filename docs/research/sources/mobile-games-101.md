# Mobile Games 101 (pages 1 to 18)

Source: `75492a23-Mobile_Games_101.pdf`. 18 pages, all read, all readable. Dated Nov 4, 2026, author tag
@Phoenix [p. 1]. Link targets are not visible in the page images, only link text.

## What it is

A guide to what changes when a small one-file browser game is played on a phone [p. 1]. It assumes the reader
already knows "What Makes Games Great" (the general "why games are fun" guide) [p. 1]. Nine numbered sections,
each made of principles laid out as What / Why / Examples / Apply [p. 1]; section 8 is technical and uses
Problem -> Fix instead [p. 12]. It ends with a mobile-ready checklist, one prompt for Claude and a source list
[p. 15-18]. The publishing venue it assumes is itch.io [p. 9, 14]. It has nothing on builds, balance numbers,
naming or pricing.

Three rules "if you read nothing else" [p. 1]:

1. Design for one thumb, portrait, sound off. That is how most people hold a phone and play. Everything else
   is a bonus.
2. A session is one to five minutes and can end at any second. Make every run short, pause on its own, and
   leave the player wanting one more.
3. Test on a real phone every build. The desktop browser lies about touch, size and speed.

## Outline (the document's own section names, in order, with page numbers)

- How to use this guide (When to use it; How each principle is laid out; Three rules) [p. 1]
- 1. How people play on phones [p. 1-3]: The facts to design around [p. 1-2]; 1.1 Portrait, one thumb by
  default [p. 2]; 1.2 Silent-first [p. 2-3]; 1.3 Built to be dropped [p. 3]
- 2. The psychology of mobile games: evidence vs myths [p. 3-4]: 2.1 Unpredictable rewards, fair rules [p. 3];
  2.2 Near-misses (handle with care) [p. 3-4]; 2.3 Visible progress and the goal gradient [p. 4];
  2.4 Collection and completion [p. 4]; 2.5 Daily habit, without the guilt [p. 4]
- 3. Feel and feedback [p. 5-6]: 3.1 Answer every touch instantly [p. 5]; 3.2 Juice, sized for a small screen
  [p. 5]; 3.3 Escalate the celebration [p. 5-6]; 3.4 Haptics as a bonus, never a requirement [p. 6]
- 4. Controls and interface [p. 6-8]: The numbers [p. 6]; 4.1 Touch the thing itself [p. 6-7]; 4.2 One
  gesture, one meaning [p. 7]; 4.3 Thumb zones [p. 7]; 4.4 If you need a stick, let it float [p. 7];
  4.5 Less on screen [p. 7-8]
- 5. Loops and sessions [p. 8-9]: 5.1 A tight moment loop [p. 8]; 5.2 Runs that fit a bus stop [p. 8];
  5.3 Clean stopping points that pull you back [p. 9]; 5.4 A reason to return tomorrow [p. 9]
- 6. The first minute [p. 9-10]: 6.1 Playing within 5 seconds [p. 9]; 6.2 Teach through play, not text
  [p. 9-10]; 6.3 Early win, then the hook [p. 10]; 6.4 Mistakes cost little at first [p. 10]
- 7. Art and audio for small screens and silent play [p. 10-11]: 7.1 Readable at arm's length [p. 10-11];
  7.2 Contrast that carries meaning [p. 11]; 7.3 Fill any screen, never stretch [p. 11]; 7.4 Sound as a
  reward, not a requirement [p. 11]
- 8. Browser on mobile: technical basics [p. 12-14]: Problem -> Fix table [p. 12-13]; The core setup (code)
  [p. 13-14]; itch.io settings [p. 14]; Testing on a real phone [p. 14]
- 9. Compelling vs manipulative [p. 14-15]: pattern table [p. 14-15]; 9.1 Respect the player's time [p. 15]
- Mobile-ready checklist and a prompt to make a game mobile-friendly [p. 15-17]
- Sources [p. 17-18]

## Frameworks, lists and checklists

### F1. When to use which section [p. 1]

- Design (before code): sections 1, 4, 5 and 6. Decide orientation, one hand or two, and what one session
  looks like.
- Build: keep section 8 open. Paste the end prompt into Claude once the game runs on desktop.
- Polish: sections 3 and 7.
- Before you publish: run the checklist on a real phone, not just the browser's phone preview.

### F2. Section 1: the facts to design around [p. 2]

| Fact | Evidence |
|---|---|
| Most people hold the phone in one hand | 49% one-handed, 36% cradled, 15% two hands; 67% of one-handers use the right thumb; grips change every few seconds (Hoober, 1,333 observations, 2013) |
| Most people play with sound off | Over 91% play muted most of the time; puzzle, casual and older players even more (TapResearch, n=2,400, 2022) |
| Sessions are short and frequent | Top-25% mobile games average about 5 minutes per session and 5 to 6 sessions a day (GameAnalytics benchmarks, June 2026) |
| Play gets interrupted | Calls, notifications, a bus stop, someone talking. The game must survive being dropped mid-move |
| Players leave fast | Median day-7 return is under 4%; even top-25% games keep only 6 to 7% (GameAnalytics, 2026). First impressions decide almost everything |

- **1.1 Portrait, one thumb by default** [p. 2]. The most common grip and the only one that works on a bus,
  in bed or in a queue; landscape asks for two hands and full attention. Examples: Crossy Road (tap or swipe),
  Block Blast (one-thumb drag, 70 million daily players in 2026). Apply: default to portrait; put every input
  in the bottom two-thirds of the screen; landscape only on purpose, and tell itch.io.
- **1.2 Silent-first** [p. 2-3]. Fully playable and readable with sound off, because nine in ten players never
  hear the sounds. Examples: Two Dots, Threes! (every event shown by motion and colour). Apply: for every
  sound add a matching visual (flash, shake, pop, number); never put information only in audio (a warning
  beep with no visual).
- **1.3 Built to be dropped** [p. 3]. The player can stop at any second and lose nothing important; a game
  that punishes interruptions feels hostile. Examples: Block Blast waits forever, Monument Valley never
  rushes. Apply: auto-pause when the tab is hidden; save to localStorage after every level or run; prefer
  turn-based or "waits for you" designs; if it is real-time, keep runs short.

### F3. Section 2: psychology [p. 3-4]

Myth: "every reward is a dopamine hit". Berridge separates **wanting** (urge to continue, linked to dopamine)
from **liking** (actual enjoyment); they can come apart. Good games aim for both, manipulative ones settle for
wanting. Test: "would players say they had fun, or only that they couldn't stop?" [p. 3]

- **2.1 Unpredictable rewards, fair rules** [p. 3]. Reward size or type varies while the rules stay clear;
  surprising rewards hold attention longer than fixed ones (also why slot machines work, so use it in play,
  not purchases). Examples: Block Blast multi-line clears; Vampire Survivors' treasure chests. Apply: rare
  "jackpot" moments from skill or luck in play (a combo bonus, a rare enemy, a golden piece). Never put
  chance behind money.
- **2.2 Near-misses (handle with care)** [p. 3-4]. Losing by a tiny margin felt unpleasant but raised the
  desire to play again (Clark et al., Neuron, 2009). Examples: Flappy Bird, Crossy Road. Apply: show the gap
  on the game-over screen ("3 points from your best"). Never fake a near-miss by rigging outcomes.
- **2.3 Visible progress and the goal gradient** [p. 4]. People speed up near a goal; a nearly full bar pulls
  them on. Examples: Candy Crush level map; Royal Match star and renovation bars. Apply: a progress bar per
  level or run, plus a simple long-term track (levels 1 to 30, best scores). Start bars slightly filled.
- **2.4 Collection and completion** [p. 4]. Incomplete sets nag; each item is a small clear goal, and
  choosing what to chase is autonomy. Examples: Crossy Road's 100+ characters each with a small twist; Alto's
  Odyssey goals per level. Apply: 6 to 12 cosmetic unlocks earned by play ("score 50", "play 3 days"); show
  locked ones as silhouettes.
- **2.5 Daily habit, without the guilt** [p. 4]. Habits form from a small action repeated in the same
  context; Duolingo learners who reach a 7-day streak are 3.6 times more likely to finish their course
  (Duolingo, 2022). Streaks run on loss aversion, so they can turn into guilt. Examples: Wordle; Duolingo's
  streak freeze. Apply: a "daily seed" (same level for everyone today, saved locally); a forgiving streak
  (one free miss per week); no push notifications, no penalties.

### F4. Section 3: feel and feedback [p. 5-6]

Premise: the finger covers what it touches and there is no physical button, so every touch needs an answer
the player can see without sound, around the finger, within a frame [p. 5].

- **3.1 Answer every touch instantly** [p. 5]. Apple asks for a clear pressed state visible even under the
  finger (a glow that spills past the edge), plus sound and haptics where possible. Apply: on pointerdown,
  scale the touched thing by about 1.1, brighten it, and draw a small ring at the touch point that is bigger
  than the finger. On press, not on release.
- **3.2 Juice, sized for a small screen** [p. 5]. Squash and stretch, particles, screen shake, flashes,
  easing (Juice It or Lose It, GDC Europe 2012). On a small screen it must be bold but short, or it hides the
  game. Apply: about 0.1 to 0.3 seconds for small hits, under 1 second for big wins; 8 to 20 particles, not
  hundreds; shake the camera a few pixels only; pop a score number at the spot of the action, not only in
  the corner.
- **3.3 Escalate the celebration** [p. 5-6]. If every action gets fireworks nothing feels special; a ladder
  of reactions teaches what matters. Examples: Candy Crush "Sweet", "Tasty", "Divine"; Block Blast combo text
  that grows. Apply, three levels: **small** (single action: pop and tiny sound), **medium** (combo: flash
  plus text), **big** (level clear or best score: slow-motion, burst, full-screen colour).
- **3.4 Haptics as a bonus, never a requirement** [p. 6]. `navigator.vibrate` works only on Android (Chrome,
  Firefox, Samsung Internet); no iPhone browser supports it. Apply: `navigator.vibrate?.(15)` for taps, 40 to
  60 ms for big hits; an on/off toggle; every haptic also has a visual.

### F5. Section 4: controls and interface [p. 6-8]

The numbers (in a browser, 1 iOS point and 1 Android dp are both about 1 CSS pixel) [p. 6]:

| Thing | Size | Source |
|---|---|---|
| Main buttons and touch targets | 44 to 48 px square or bigger | Apple 44x44 pt; Android 48x48 dp |
| Rare buttons (settings, close) | 28 px minimum | Apple HIG, Game controls (2025) |
| Body text | about 17 px; never under 11 px | Apple HIG, Designing for games (2025) |
| Space between buttons | about 8 px or more | Common practice, avoids mis-taps |

- **4.1 Touch the thing itself** [p. 6-7]. Players tap or drag the game object, not a button that controls
  it (Apple prefers this). Examples: Block Blast, Fruit Ninja, Two Dots. Apply: before adding a virtual
  joystick, ask "can the player just tap where they want to go, or drag the thing?" If yes, do that.
- **4.2 One gesture, one meaning** [p. 7]. Every added gesture must be discovered and remembered. Examples:
  Flappy Bird (tap only), Crossy Road (tap forward, swipe sideways), Alto's Odyssey (tap to jump, hold to
  flip). Apply: pick from tap, hold, swipe and drag; two gestures is plenty; tap versus hold on the same spot
  gives two actions from one thumb.
- **4.3 Thumb zones** [p. 7]. Bottom middle is easy, top corners are hard; top-left is the hardest spot
  because most one-handers use the right thumb. Apple puts frequent controls near the thumbs and menus at the
  top. Examples: Block Blast's tray at the bottom; Subway Surfers' swipes anywhere. Apply: play input in the
  lower half; pause and settings in a top corner (rare, so a stretch is fine); keep the board in the middle
  where the thumb does not hide it.
- **4.4 If you need a stick, let it float** [p. 7]. A stick that appears wherever the thumb lands; players
  cannot feel a fixed stick and drift off it. Apple recommends a floating stick on the left for movement with
  actions on the right. Examples: Archero, Brawl Stars. Apply: on pointerdown in the left half, store that
  point as the stick centre; movement is the offset from it, capped at about 60 px; draw a faint ring.
- **4.5 Less on screen** [p. 7-8]. A phone screen is about a quarter of a laptop's and the hand covers part
  of it. Examples: Monument Valley (almost no interface); Royal Match (moves left and the goal). Apply: at
  most 3 or 4 interface items during play (for example score, goal, pause); hide menus until needed; long
  text goes on the pause screen.

### F6. Section 5: three loops, designed in this order [p. 8]

| Loop | Length | Phone target | Example (Block Blast) |
|---|---|---|---|
| Moment | seconds | one action every 1 to 3 seconds | place a piece, see a line clear |
| Session | minutes | one run or level in 1 to 5 minutes | a game until the board fills |
| Return | days | a reason to open it tomorrow | beat your best, daily challenge |

- **5.1 A tight moment loop** [p. 8]. Input, instant feedback, a new decision, again. Short sessions leave no
  warm-up; the fun must start in the first action. Examples: Crossy Road (every tap is a decision and a
  risk); Stack by Ketchapp. Apply: time your own game; if more than about 3 seconds pass without a choice,
  cut or speed that part.
- **5.2 Runs that fit a bus stop** [p. 8]. One run or level takes 1 to 5 minutes; Clash Royale matches last 3
  minutes for this reason. Apply: set a target length and test it; if runs go long, raise the difficulty
  curve so they end naturally, or split into levels.
- **5.3 Clean stopping points that pull you back** [p. 9]. A clear end that also shows the next goal; clear
  endings let players stop without guilt. Examples: Candy Crush's map; Crossy Road's game-over screen (best
  and next unlock). Apply: end screen = result + best score + one next goal + a big "Play again" button where
  the thumb already is. Restart in one tap, under a second.
- **5.4 A reason to return tomorrow** [p. 9]. Examples: Wordle's daily puzzle; Crossy Road's free gift every
  few hours. Apply: pick one: a daily seed level, a best-score chase, or unlocks that need a few days of
  play. Store dates and scores in localStorage. Skip everything that needs a server.

### F7. Section 6: the first minute [p. 9-10]

A player clicks, waits for the load and decides in seconds; the first minute is its own design task [p. 9].

- **6.1 Playing within 5 seconds** [p. 9]. Every screen before play loses players. Apply: no logo screens, no
  menus first, no account. One "Tap to play" button that also unlocks audio, then straight into level 1.
- **6.2 Teach through play, not text** [p. 9-10]. People skip text on phones. Examples: Candy Crush's
  pointing hand; Monument Valley (no instructions). Apply: level 1 has one mechanic and cannot be lost; a
  small animated hand or arrow over the first input, removed the moment the player does it; one new idea per
  level after that.
- **6.3 Early win, then the hook** [p. 10]. A guaranteed success in the first 10 to 20 seconds, then a
  glimpse of what is coming. Apply: make the first goal tiny and celebrate it with the biggest effect; then
  show the next goal or a locked unlock.
- **6.4 Mistakes cost little at first** [p. 10]. Losing in the first minute feels like the game's fault.
  Apply: first levels forgiving, restart in one tap, difficulty starts climbing only after the player has
  won once.

### F8. Section 7: art and audio [p. 10-11]

- **7.1 Readable at arm's length** [p. 10-11]. Clear at phone size, in sunlight, at a glance. Examples:
  Crossy Road's chunky blocks; Two Dots' flat shapes on plain backgrounds. Apply: big simple shapes with
  strong outlines; key objects at least about 32 px on screen; test at arm's length or by squinting, and
  simplify if you cannot tell what is what.
- **7.2 Contrast that carries meaning** [p. 11]. Player, dangers and rewards each stand out from the
  background and from each other; not by colour alone (colour-blind players, sunlight). Apply: background
  dark and quiet, interactive things bright; each type has its own shape or icon; 3 to 5 main colours.
- **7.3 Fill any screen, never stretch** [p. 11]. Screen shapes vary (about 16:10, 19.5:9 and 4:3). Apply:
  keep the play area a fixed shape and scale it to fit; fill the extra space with background colour or art
  that can extend ("letterbox scaling with a fixed logical size").
- **7.4 Sound as a reward, not a requirement** [p. 11]. Examples: Two Dots' rising notes; Royal Match's pops.
  Apply: short sounds (under 0.3 s) for actions; rising pitch for combos; a visible mute button whose setting
  is remembered; music loops smoothly and stays quiet; jsfxr makes sounds in seconds.

### F9. Section 8: Problem -> Fix [p. 12-13]

| Problem on a phone | Fix |
|---|---|
| Page scrolls, zooms or bounces when you drag | Viewport meta tag, `touch-action: none` on the canvas, `overflow: hidden` and `overscroll-behavior: none` on the page |
| Long-press opens a menu or selects text | Block `contextmenu`; CSS `user-select: none` and `-webkit-touch-callout: none` |
| Touch and mouse need separate code | Pointer events (`pointerdown`, `pointermove`, `pointerup`): one set of code for finger, mouse and pen |
| Game looks blurry | Size the canvas by `devicePixelRatio` (cap it at 2 to save battery) |
| Game cut off or stretched when the phone rotates | Re-fit on `resize`; fixed logical game size scaled to fit |
| Buttons hidden under the notch or home bar | Keep interface about 40 px from the top and 30 px from the bottom; read safe-area insets with CSS `env(safe-area-inset-*)` |
| No sound on iPhone | Browsers block audio until the player taps. Create or resume the AudioContext inside the first tap |
| Game keeps running when the player switches apps, or jumps forward on return | Pause on `visibilitychange`; clamp the frame time step so a long gap does not teleport things |
| Fullscreen doesn't work on iPhone | `requestFullscreen` is only partly supported in iPhone Safari. Design to fit with browser bars visible; fullscreen is a bonus |
| Haptics do nothing on iPhone | Expected: no iOS browser supports `navigator.vibrate` |
| Phone gets hot, battery drains, game stutters | Cap DPR at 2; draw static backgrounds once to an offscreen canvas; avoid `shadowBlur` and big blurs; keep particles modest; stop the loop while paused |

- itch.io settings (Edit game -> Embed options): tick Mobile friendly and pick the orientation if offered;
  set the embed size to the game's shape; keep "click to launch" on, because that click also counts as the
  tap browsers need before sound [p. 14].
- Testing on a real phone: upload a draft (Restricted or Draft) to itch.io and open it on the phone. Test on
  an iPhone and an Android if possible, both orientations, sound off and on, and after switching apps and
  coming back. Keep keyboard controls so desktop players still have a good time [p. 14].

### F10. Section 9: compelling vs manipulative [p. 14-15]

The test: "does this feature make the game more fun while you play, or does it only make you play longer,
return out of guilt, or pay?" [p. 14]

| Manipulative pattern | What it does | Honest version |
|---|---|---|
| Energy or lives timers | Stops play to make you wait or pay | Unlimited play. For scarcity, use it inside a run (3 lives per run, refill on restart) |
| Fake urgency ("Offer ends in 02:59!") | Made-up pressure | Real deadlines only, such as "today's daily puzzle" |
| Pay to skip | Makes the game annoying so skipping is worth money | No skips needed: tune difficulty so the game is fair |
| Loot boxes and rigged near-misses | Gambling mechanics; fake "so close" results | Random rewards from play only; never rig outcomes |
| Punishing streaks | Lose everything for missing a day | Forgiving streaks: a free miss, or count total days played |
| Endless loop with no end | No natural place to stop | Clear end screens; finite levels or runs |
| Guilt prompts ("Your pet is sad you left") | Uses emotion to pull you back | A friendly welcome back, nothing lost |

**9.1 Respect the player's time** [p. 15]. Every minute in the game is spent playing, not waiting or being
sold to. Fair games earn trust, reviews and word of mouth, which is how small itch.io games spread. Aim for
"that was fun", not "I couldn't stop". Examples: Monument Valley, Alto's Odyssey, Wordle. Apply: before adding
any return or reward feature, run the test; "if you would be embarrassed to explain how it works to a player,
cut it."

### F11. Mobile-ready checklist ("Run this on a real phone before every release") [p. 15-16]

Hold and play
- Playable in portrait with one thumb (or landscape chosen on purpose and set on itch.io)
- All play input in the lower half; pause and settings in a top corner
- Main touch targets at least 44 to 48 px, rare ones at least 28 px, with gaps between
- Players touch game objects directly; no more than two gestures

Feel and look
- Every touch reacts on press, visibly, around the finger
- Every sound has a matching visual; fully playable muted
- Text at least about 17 px for reading, nothing under 11 px
- Key objects readable at arm's length; meaning shown by shape, not colour alone
- At most 3 or 4 interface items during play

Sessions
- Playing within 5 seconds of opening; first level teaches by doing
- A run or level takes 1 to 5 minutes; restart in one tap
- End screen shows result, best, next goal and a big Play again button
- Progress saved locally; auto-pause when the tab is hidden
- No timers, fake urgency or punishing streaks

Browser
- No page scroll, zoom, bounce, text selection or long-press menu
- Canvas sharp (DPR) and re-fits on rotate and resize; nothing under the notch
- Sound starts after the first tap on iPhone; mute button remembered
- Smooth on a mid-range phone; phone doesn't get hot after 5 minutes
- Still works with mouse and keyboard on desktop
- itch.io: Mobile friendly ticked, orientation and embed size set, tested from the draft page on a phone

## Numbers and thresholds

| What | Value | Page |
|---|---|---|
| Grip: one-handed / cradled / two hands | 49% / 36% / 15% | 2 |
| One-handers using the right thumb | 67% | 2 |
| Players muted most of the time | over 91% ("nine in ten") | 2 |
| Top-25% games: session length, sessions per day | about 5 min; 5 to 6 | 2 |
| Day-7 return: median, top-25% | under 4%; 6 to 7% | 2, 9 |
| Block Blast daily players (2026) | 70 million | 2 |
| Input zone | bottom two-thirds [p. 2]; lower half [p. 7, 15] | 2, 7, 15 |
| Duolingo 7-day streak effect | 3.6 times more likely to finish | 4 |
| Cosmetic unlocks | 6 to 12 | 4 |
| Long-term track example | levels 1 to 30 | 4 |
| Forgiving streak | one free miss per week | 4 |
| Press feedback scale | about 1.1 | 5 |
| Effect length: small hit, big win | about 0.1 to 0.3 s; under 1 s | 5 |
| Particles per effect | 8 to 20, not hundreds | 5 |
| Screen shake | a few pixels only | 5 |
| Celebration levels | 3 (small, medium, big) | 6 |
| Vibration: tap, big hit | 15 ms; 40 to 60 ms (Android only) | 6 |
| Main touch targets | 44 to 48 px square or bigger (the prompt says at least 48 px) | 6, 17 |
| Rare buttons | 28 px minimum | 6 |
| Body text | about 17 px; never under 11 px | 6 |
| Space between buttons | about 8 px or more | 6 |
| Gestures | two is plenty; no more than two | 7, 15 |
| Floating stick offset cap | about 60 px | 7 |
| Phone screen versus laptop | about a quarter | 8 |
| Interface items during play | at most 3 or 4 | 8 |
| Moment loop | one action every 1 to 3 s; over about 3 s without a choice: cut or speed | 8 |
| Run or level length | 1 to 5 minutes (Clash Royale: 3 minutes) | 8 |
| Restart | one tap, under a second | 9 |
| Time to playing | within 5 seconds | 9 |
| First guaranteed success | first 10 to 20 seconds | 10 |
| Key object size | at least about 32 px | 11 |
| Main colours | 3 to 5 | 11 |
| Screen shapes | about 16:10, 19.5:9, 4:3 | 11 |
| Action sound length | under 0.3 s | 11 |
| devicePixelRatio cap | 2 | 12, 13 |
| Safe margins | about 40 px top, 30 px bottom | 12 |
| Frame time-step clamp | 1/30 s | 14 |
| Lives, if scarcity is wanted | 3 per run, refill on restart | 14 |
| Heat check | not hot after 5 minutes | 16 |

## What it means for Vampire: No Survivors

### (a) Process for an AI building alone

- Read order by phase is F1 [p. 1]. Three things are decided at design time: orientation, one hand or two,
  and what one session looks like [p. 1].
- The loops are designed in the order moment, session, return [p. 8]. Inference: this matches the owner's
  first stop (the core loop), so the plain-shapes prototype should prove the moment loop and a full session;
  the return loop can wait.
- The guide's own order is "desktop first, then paste the mobile prompt" [p. 1, 16]. Inference: Vampire is
  phone-first from the first commit, so the prompt's eight numbered items work better as acceptance criteria
  for the skeleton than as a later retrofit.
- The prompt contains a human gate ("Wait for my OK before changing anything") [p. 17]. Inference: in this
  project that gate is replaced by decide-and-log.
- "Test on a real phone every build" [p. 1] and the checklist header [p. 15] cannot be done by the lead, and
  the guide says the desktop preview "lies about touch, size and speed" [p. 1]. Inference: tag each checklist
  line as machine-checkable (sizes, meta tags, pause, time-step clamp, restart time, run length) or
  owner-only (heat, real touch, arm's-length readability, iPhone sound) and hand the owner-only lines over
  with the prototype.

### (b) Core loop, controls and feel

- Moment loop target: one action every 1 to 3 seconds; anything over about 3 seconds without a choice is cut
  or sped up [p. 8]. Inference: with auto-attack, the "action" is a movement decision, so standing still or
  circling must not stay the best play for more than about 3 seconds.
- The fun starts in the first action [p. 8]; playing within 5 seconds [p. 9]; a guaranteed success in 10 to
  20 seconds, celebrated with the biggest effect, then a glimpse of what is coming [p. 10]. Inference: first
  feed or kill inside 20 seconds, then show the first level-up or a locked thing.
- Controls: at most two gestures [p. 7, 15]. Ask whether tap-to-go or dragging works before adding a stick
  [p. 7]; if a stick, it floats, offset capped at about 60 px, faint ring drawn [p. 7]. Inference: these are
  natural candidates for the control variations (floating stick, drag, tap or hold to go).
- Document tension: 4.4 starts the stick "in the left half" (Apple's two-thumb layout) [p. 7], while rule 1
  and 4.3 want one thumb in the lower half and 67% of one-handers use the right thumb [p. 1, 2, 7].
  Inference: with no action buttons, accept the stick anywhere in the input zone.
- The finger covers what it touches [p. 5]; keep the board where the thumb does not hide it [p. 7].
  Inference: keep the vampire and the nearest threats above the thumb area.
- Juice budget and the three-level ladder are in F4 [p. 5-6]. Inference: small = hit or kill, medium = combo
  or multi-kill, big = level-up, boss kill or new best. A swarm game needs a global particle cap to respect
  "8 to 20, not hundreds".
- Pop numbers at the spot of the action [p. 5]. End screen recipe and one-tap restart under a second [p. 9];
  show the gap to the best result [p. 4].
- Haptics do nothing on iPhone, the main target [p. 6, 12].

### (c) Content, difficulty, builds and balance

- A run takes 1 to 5 minutes; real-time games keep runs short; if runs go long, raise the difficulty curve
  or split into levels [p. 3, 8]. Inference: this is shorter than the genre's habit, so the run length is a
  decision to make and test.
- First run forgiving; difficulty climbs only after the player has won once [p. 10]; one new idea at a time
  after the first level [p. 10]. Inference: "won once" needs a definition for a survival run.
- Rare jackpots from play: combo bonus, rare enemy, golden piece; treasure chests in Vampire Survivors are
  the guide's own example [p. 3]. Never rig outcomes [p. 4, 14].
- A progress bar per run that starts slightly filled, plus a simple long-term track [p. 4]. Inference: the
  XP bar is the per-run bar.
- Later: 6 to 12 cosmetic unlocks as silhouettes [p. 4]; one return reason out of daily seed, best-score
  chase or multi-day unlocks, all in localStorage, no server [p. 9]; forgiving streak [p. 4].
- If lives are wanted: 3 per run, refilled on restart [p. 14].
- The document says nothing about weapon builds, synergies or balance numbers.

### (d) Phone: layout, input, performance, audio

- Layout: input in the lower half; pause and settings in a top corner; at most 3 or 4 HUD items; long text on
  the pause screen; interface about 40 px from the top and 30 px from the bottom, or safe-area insets
  [p. 7, 8, 12].
- Sizes: F5 table [p. 6]; key objects at least about 32 px [p. 11]. Inference: on a 390 px wide screen that
  is about 12 objects across, so decide whether swarm fodder counts as "key".
- Readability: dark quiet background, bright interactive things, a shape per type, 3 to 5 colours, strong
  outlines [p. 11]. This fits a plain-shapes prototype directly.
- Skeleton: F9 and the core setup code below [p. 12-14]. Design to fit with the browser bars visible
  [p. 12]. Inference: the visible Safari viewport is shorter than the full device height, so check shorter
  heights.
- Performance: DPR capped at 2, static background on an offscreen canvas, no `shadowBlur` or big blurs,
  modest particles, loop stopped while paused; smooth on a mid-range phone and not hot after 5 minutes
  [p. 13, 16]. Inference: glow should be pre-rendered, since swarms multiply every per-entity cost.
- Audio: silent-first, every sound has a visual twin [p. 2-3]; sounds under 0.3 s, rising pitch for combos,
  visible remembered mute, quiet looping music [p. 11]; AudioContext created or resumed in the first tap,
  which is also the "Tap to play" tap [p. 9, 12].
- Dropping the game: pause on `visibilitychange`, clamp the time step to 1/30 s, save to localStorage after
  every run [p. 3, 12, 14].

### (e) Testing and playtests

- Real-phone matrix: iPhone and Android, both orientations, sound off and on, after switching apps and
  coming back; keyboard still works on desktop [p. 14].
- Arm's-length or squint test for readability [p. 11].
- Timing tests: seconds without a choice (limit about 3) [p. 8]; run length against a set target [p. 8];
  time to playing (5 s) [p. 9]; first success (10 to 20 s) [p. 10]; restart (under 1 s) [p. 9].
- Playtest question: did players have fun, or only could not stop? [p. 3]
- The full checklist is F11 [p. 15-16].

### (f) Market, positioning, name, release

- Base rates: median day-7 return under 4%, top quarter 6 to 7%; first impressions decide almost everything
  [p. 2].
- The assumed venue is a free itch.io page; small itch.io games spread by trust, reviews and word of mouth
  [p. 14, 15]. itch.io settings are in F9 [p. 14].
- Nothing on name, positioning or pricing. Publishing is outside the project's current rules unless the
  owner asks (project rule, not from this document).

## Warnings and anti-patterns

- Designing on desktop and trusting the browser's phone preview [p. 1].
- Landscape or two-hand controls by accident rather than on purpose [p. 2].
- Information carried only by sound [p. 3]; meaning carried only by colour [p. 11].
- Punishing interruptions; a real-time game with long runs [p. 3].
- Chance behind money; rigged or faked near-misses [p. 3, 4].
- Feedback on release instead of press [p. 5]; a fixed joystick the thumb drifts off [p. 7].
- Juice that hides the game: long effects, hundreds of particles, big shakes [p. 5]; fireworks for every
  action, so nothing feels special [p. 5].
- Relying on haptics or on fullscreen on iPhone [p. 6, 12].
- More than two gestures; more than 3 or 4 HUD items; walls of instruction text [p. 7, 8, 10].
- Logo screens, menus or accounts before play [p. 9]; losing in the first minute [p. 10].
- Stretched art [p. 11]; `shadowBlur` and big blurs; a loop that keeps running while paused or hidden; an
  unclamped time step that teleports things after a gap [p. 12-13].
- Energy timers, fake urgency, pay to skip, loot boxes, punishing streaks, endless loops with no stopping
  point, guilt prompts, push notifications, anything that needs a server [p. 4, 9, 14-15].

## Prompts and templates in the document

**1. The core setup** (what Claude adds to the top of the file) [p. 13-14]. Copied in full:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<style>
  html, body { margin: 0; height: 100%; overflow: hidden; overscroll-behavior: none;
               background: #000; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; }
  canvas { display: block; touch-action: none; }
</style>
```

```js
// Sharp canvas on any screen
function fit() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels from here on
}
addEventListener('resize', fit); fit();

// One input path for finger and mouse
canvas.addEventListener('pointerdown', e => { canvas.setPointerCapture(e.pointerId); /* press */ });
canvas.addEventListener('contextmenu', e => e.preventDefault());

// Sound only after a tap
const audio = new AudioContext();
addEventListener('pointerdown', () => { if (audio.state !== 'running') audio.resume(); });

// Pause when hidden; clamp the time step
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });
// in the loop: const dt = Math.min((now - last) / 1000, 1 / 30);
```

**2. "Prompt: make an existing game mobile-friendly"** [p. 16-17]. For converting a finished desktop HTML
game; the user attaches the file and pastes it. Copied in full:

```
Make this game play well on phones while keeping it working on desktop. It is a single HTML file using
JavaScript and canvas, published on itch.io.

First, read the file and tell me in 5 bullets or fewer: how input works now, what will break on a phone,
and whether it should be portrait or landscape. Wait for my OK before changing anything.

Then, in one pass:
1. Viewport meta (no zoom, viewport-fit=cover); stop page scroll, bounce, text selection and long-press menu.
2. Pointer events for all input (finger and mouse). Keep the keyboard controls.
3. Canvas sized by devicePixelRatio (capped at 2), fixed logical game size scaled to fit, re-fit on resize
   and rotate, interface kept out of safe-area insets.
4. Touch targets at least 48 px; text at least 17 px; play input in the lower half; pause in a top corner.
5. A visible pressed state on every touch; every sound gets a matching visual; optional navigator.vibrate
   on Android with a toggle.
6. A "Tap to play" start that also resumes the AudioContext; a mute button saved to localStorage.
7. Pause on visibilitychange; clamp the frame time step; save progress to localStorage.
8. Performance: no shadowBlur, static layers pre-rendered, loop stopped while paused.

Don't change the game's rules, art style or difficulty. Return the full file, then list what you changed
and what I should test on a real phone.
```

**3. Short phrases to give Claude**: "letterbox scaling with a fixed logical size" [p. 11].

**4. Templates**: end screen = result + best score + one next goal + big "Play again" [p. 9]; the three-level
celebration ladder [p. 6]; the mobile-ready checklist (F11) [p. 15-16].

## Things the lead should decide or check

1. Run length. The guide says 1 to 5 minutes and "real-time: keep runs short" [p. 3, 8]. Set a target, test
   it, and say how a run ends naturally.
2. Control scheme: floating stick, drag or tap-to-go [p. 7], and whether the stick may start anywhere in the
   input zone rather than only the left half (inference, see (b)).
3. Input zone: the guide says both "bottom two-thirds" [p. 2] and "lower half" [p. 7, 15]. Pick one.
4. Touch target minimum: table 44 to 48 px [p. 6], prompt 48 px [p. 17]. Inference: use 48.
5. Canvas sizing: the core setup code fills the window in CSS pixels [p. 13], while 7.3 and prompt item 3
   ask for a fixed logical size scaled to fit [p. 11, 17]. Pick one model before writing the camera.
6. AudioContext: the code creates it at load and resumes on pointerdown [p. 13]; the table says create or
   resume inside the first tap [p. 12]. Check which behaves on iPhone Safari (owner-only check).
7. Which 3 or 4 HUD items survive during play [p. 8].
8. What counts as the first "win" (for the 10 to 20 second early win and for "difficulty climbs only after
   the player has won once") [p. 10].
9. Minimum on-screen size for swarm enemies against the 32 px guide for key objects [p. 11].
10. A global particle and effect budget for many simultaneous kills [p. 5, 13].
11. How the game pauses and resumes for a real-time run: on `visibilitychange` is required [p. 12]; what the
    player sees on return is not specified.
12. Which checklist lines can be machine-checked and which go to the owner (inference, see (a)).
13. Sources were checked November 4, 2026 [p. 17]; the browser-support claims (vibrate Android only,
    fullscreen partial on iPhone Safari) come from MDN, Can I use and web-haptics [p. 18] and were not
    re-verified here.

Source list in the document [p. 17-18]: Hoober, UXmatters, Feb 18, 2013; TapResearch, May 18, 2022;
GameAnalytics benchmarks via Game Dev Reports, June 4, 2026; Business Wire on Block Blast, Mar 12, 2026;
Berridge (Hear This Idea interview); Clark et al., Neuron, 2009; goal-gradient effect (ModelThinkers);
Duolingo, Jan 31, 2022; arXiv 2412.05039, Dec 2024; Zendle and Cairns, 2018; Apple HIG Designing for games
and Game controls (updated June 9, 2025) and Layout (updated Sept 9, 2026); Android Developers (48x48 dp);
Jonasson and Purho, Juice It or Lose It, GDC Europe 2012; King, Candy Crush Saga postmortem, GDC 2013, and
"How King defines a good level"; Crossy Road (Wikipedia); MDN autoplay guide; Can I use
(requestFullscreen); web-haptics (navigator.vibrate); itch.io, Uploading HTML5 games.
