# Core loop and feel: starting numbers and techniques

Research date: 2026-11-26. Feeds design document blocks 1 to 4 and the plain-shapes prototype.

## How far to trust this file

- Web search worked. Page fetching did not: the two wiki hosts tried (vampire-survivors.fandom.com,
  brotato.wiki.spellsandguns.com) are outside this session's allowed network domains. Every sourced
  number below therefore comes from a search-result summary of the cited page, not from reading the
  page in full.
- The shared search budget ran out after 40 queries. Four planned queries never ran: Brotato player
  speed, pickup range and enemy cap; Deep Rock Galactic: Survivor stage length; the chest "slot
  machine" quote; design writing on walk versus collect.
- Labels: **[S n]** sourced (n is the number in the source list), **[D]** my arithmetic on sourced
  numbers, **[M]** from memory, unverified, **[R]** my recommendation (a judgment, not a finding).
- Nothing here was played or measured in this project. Every [R] value is a starting point for the
  lab and for the owner's thumb.

## 1. The first 60 seconds and the loop, in numbers

### Vampire Survivors (the reference with the best public data)

| What | Number | Label |
|---|---|---|
| XP to reach level 2 | 5 | [S1] |
| XP growth | each level needs 10 more than the one before up to level 20 (5, 15, 25, 35 ...), then 13 more per level to 40, then 16 more | [S1] |
| Total XP to reach level 5 / 10 / 20 | 80 / 405 / 1,805 | [D] |
| Walls | 600 extra XP at level 20 and 2,400 at level 40, softened by +100% XP gain during that one level | [S2] |
| First wave, first stage, minute 0 | at least 15 enemies alive, one spawn per 1.0 s; the enemy has 5 health, 5 damage, speed 140 | [S3] [S4] |
| Wave change | one new wave per minute | [S5] |
| Late waves (minutes 27 to 28) | at least 300 alive, one spawn per 0.1 s | [S3] |
| Enemy cap | periodic spawning stops at 300 alive; another site claims a hard cap of 500 | [S5] [S6] |
| Run length | 30 minutes, then a run-ending boss arrives, one more each minute after | [S3] |
| Pull radius ("Magnet") | base 30 units, up to 119 with the pickup item (3.98 times); the permanent upgrade gives +25% per rank, +50% at most; chests are not pulled | [S7] |
| Player speed | "100%" base, +10% per level of the speed item, +50% at most | [S8] |
| Health scaling | some enemies get health times the player's level, fixed when they spawn; the Curse stat raises enemy health, speed, wave size and wave frequency by its percentage | [S5] |

What follows from the table:

- The first level-up costs 5 XP. If the first enemy drops 1 XP ([M]; one guide lists "XP reward 1"
  for another weak enemy), that is five kills.
- Over a run the enemy count grows 20 times (15 to 300) and the spawn rate 10 times [D]. Pressure
  comes mainly from count and from a new enemy mix each minute, not from health alone.
- **Not found:** seconds to first kill and to first level-up as a measured figure; the player's
  speed in the same unit as the enemy's 140. [M]: the player outruns almost every early enemy, the
  first kill comes within about 5 s and the first level-up within about 30 s. A hobby rebuild uses
  player 100, enemy 50 [S9], which is one person's guess, not game data.
- The other seven games gave no measured first-minute timings either.

### The other games

| Game | Sourced | Not found |
|---|---|---|
| Brotato | XP to next level = (level + 3) squared: 16, 25 ... 169 for the 10th, 529 for the 20th [S10]. 20 waves: 20 s, +5 s per wave up to 60 s at wave 9, then 60 s, last wave 90 s [S11]; 1,050 s (17.5 min) of fighting in all [D]. Enemy health grows by a flat amount per wave (examples +2 for the weakest, +25 for a tough one; old fan guides) [S12]. | pickup range (for speeds and cap see the cross-check below) |
| Survivor.io | Standard chapter is 15 min on the clock, but skill choices and bosses stop the clock, so about 30 min in practice; an early chapter is 8 min; reviewers ask for 8 to 10 min rounds. Sold on "one-hand controls" [S13]. The team reportedly spent heavy effort on stick responsiveness [S14, secondhand]. | XP curve, speeds |
| Magic Survival | XP orbs in three sizes; the bar fills more slowly each level; pick 1 of 3; a difficulty spike is reported at 30:30 [S15]. | all other numbers |
| Megabonk | about 10 min per stage before an endless final swarm; whole runs 20 to 60 min; XP pickup range named as a key early upgrade [S16]. | XP curve |
| Deep Rock Galactic: Survivor | a stage is a kill quota plus mining plus a boss, then 30 s to reach the exit; digging through rock turns terrain into a tool [S17]. | stage length, XP |
| Halls of Torment | its makers name 20 Minutes Till Dawn and Vampire Survivors as the spark [S18]. Runs of 30 min [M]. | all numbers |
| 20 Minutes Till Dawn | nothing found. The run length is in the name; aiming is manual [M]. | all numbers |

Cross-check with the teardowns in this folder (their sources, not re-checked by me):

- Brotato: player speed 450 against common enemies at 200 to 400, so 0.44 to 0.89 of the player,
  and an enemy cap near 100 (`teardowns/brotato.md`).
- HoloCure: sample character 1.35 against a first enemy at 0.35, if both share one scale
  (`teardowns/holocure.md`).
- Vampire Survivors: slow enemies 100 and bats 140 in wiki units; the starting weapon hits every
  1.35 s for 10 damage, so the first hit kills; one floating stick on phones
  (`teardowns/vampire-survivors.md`).

Patterns [D]: level-up cost grows in a straight line (Vampire Survivors) or as a square (Brotato)
while the kill rate grows faster early, so level-ups come quickly at first and then thin out. Phone
versions of the genre shorten the run (15 min, then 8 min). The owner's guides ask for 1 to 5 min.

## 2. Why the loop works, and where it goes flat

What analyses and makers say:

- Constant reward: the game "barely lets you go a few seconds without something good happening",
  and everything hangs on one verb, move [S19].
- Competence and freedom of choice, with pacing that keeps the threat close to the player's power
  (one psychologist's reading) [S20].
- The chest opening is the one part its maker ties to his past in the gambling industry [S21];
  academics describe the reward loop in gambling terms [S22]. He has also said he has "no idea" why
  the game succeeded [S23], so tidy explanations deserve some doubt.
- Deep Rock Galactic: Survivor deliberately adds goals that pull the player off the safe path:
  mining, a quota, a timed exit [S17].

Where players say it goes flat [S24] [S25]:

- Too few enemies and a slow pace: "had to go out and find enemies".
- Upgrades too rare: a clone "lacked getting more weapons and upgrades all the time".
- It "plays itself when you're tooled up"; one columnist calls the genre an idle clicker; late
  stages are called repetitive.
- **Not found** as a sourced quote: walking in circles, standing still. [M]: both are common
  complaints. The safest path is one wide circle around the horde, and once area damage outgrows
  the horde, standing still wins.

Consequences for the prototype [R]:

- Walk versus collect is the only real decision in the first minute. XP lies where enemies died,
  which is where the horde is. Start the pull radius small so each gem is a small risk, and sell
  radius as an upgrade.
- Three beats per minute: build (count rises), spike (a surge or a tough enemy), release (level-up).
- Break the circle with things that are not on it: pickups that expire, prey that runs away and
  must be chased (fits a vampire hunting humans), enemies that cut ahead of the player.

## 3. Feel techniques that work with plain shapes

Sources used: Vlambeer's "Art of Screenshake" (2013), as rebuilt step by step by a fan: lower enemy
health, higher fire rate, bigger shots, impact effects, hit reaction, knockback, permanence (bodies
and marks stay), camera smoothing, screenshake, hit pause [S26]. Nuclear Throne numbers: camera
kick 6 px, shake +4 px per shot, fast decay [S27]. The "trauma" shake model: a 0 to 1 value that
decays, shake = trauma squared, from smooth noise [S28]. Hit stop ranges from five practitioner
guides: light hits 33 to 50 ms, heavy 100 to 170 ms, multi-hit about 30 ms, and past about 120 ms
it reads as a dropped frame [S29]. Feedback within about 100 ms reads as instant [S30]. The owner's
guide says 60 ms hit-pause [S31]. "Juice it or lose it" (2012), Swink's book and the Game Maker's
Toolkit video were not reached, so no number here rests on them.

Rule for a horde game [R]: how often an effect fires sets how big it may be. Something that fires
five times a second must be small and local. Something that fires once in ten seconds may be large
and global.

| Technique | Starting value at 390 px wide | Easing | Risk when overdone |
|---|---|---|---|
| Hit flash | enemy drawn solid white for 60 ms; at most one flash per enemy per 100 ms | none | the whole horde strobes; photosensitivity |
| Hit stop | ordinary hit: no global freeze (optional 40 ms freeze of that enemy only). Tough enemy killed: 50 ms. Player hurt: 90 ms. Boss killed or player dead: 150 ms. At least 250 ms between freezes. Keep reading the thumb during a freeze | none | constant stutter that feels like lag; a frozen stick feels like a dropped touch |
| Knockback | 8 px over 100 ms; 3 px for heavy enemies; a killed body slides 18 px | ease-out | pushes enemies out of weapon reach and makes the player safe for free |
| Squash and stretch | on hit 1.25 by 0.8 along the hit direction, back to 1.0 in 120 ms; player stretches 1.08 along movement; keep area constant | ease-out with slight overshoot | shapes read as jelly, which fights a realistic tone; stay under 1.3 |
| Screen shake | offset = 5 px times trauma squared. Add 0.25 for a tough kill, 0.4 for player hurt, 0.7 for a boss kill. Trauma falls 2.0 per second. No rotation. Nothing for ordinary kills | smooth noise | the phone is in the hand and fills the view: over 6 px (1.5% of width) or continuous shake blurs everything. Anything that happens more than once a second must not shake. Offer an off switch and obey the reduced-motion setting |
| Particles | 5 squares per kill, 3 px, 60 to 180 px/s, life 300 ms, shrinking to 0; cap 300 alive | linear with drag | frame drops on a phone; hides gems |
| Permanence | one stain per kill, stays 10 s, fades over 2 s; cap 150 | linear fade | ground clutter hides pickups; keep stains darker than gems |
| Damage numbers | 12 px bold, rises 22 px over 500 ms, fades in the last 150 ms; merge hits on one enemy within 150 ms; cap 30; big hits 1.4 times size | ease-out | at this width a number is as big as an enemy; consider off for ordinary enemies |
| Death effect | white 50 ms, swell to 1.2 then shrink to 0 over 140 ms, plus particles and stain; drop the gem at once | ease-in | any delay between the kill and the gem dulls the reward |
| Pickup attraction | gem pops 10 px outward over 120 ms; inside the pull radius its speed is 100 + 1,200 times t px/s; ring pulse on the player for 80 ms on collect | ease-in (accelerating) | too slow and gems trail behind a moving player; too eager and walk versus collect disappears |
| Level-up moment | game slows to a stop over 180 ms; ring grows 0 to 180 px in 300 ms; screen tint 25% for 120 ms; cards slide in over 200 ms; cards ignore touches for 350 ms and need a fresh touch; 600 ms of no damage on resume | ease-out with overshoot for cards | each pause breaks flow; the thumb is already down from steering, so cards get picked by accident |
| Player hurt | hit stop 90 ms, trauma 0.4, red edge flash 150 ms, 600 ms without further damage, player blinks at 10 Hz | none | never skip this one: damage the player did not notice is the worse failure |
| Low health | under 30%: red edge pulsing once a second between 15% and 35% opacity; heartbeat sound that stops after 6 s while the edge stays | sine | nagging; more than 3 flashes a second is a seizure risk [M] |

## 4. One-thumb controls

Sourced:

- 49% of people hold the phone in one hand, 36% cradle it, 15% use two hands (about 1,300 people
  observed, 2013). The bottom of the screen is the comfortable zone and the top needs a stretch
  [S32]. A 2020 article warns against treating one thumb map as true for every user [S32].
- Floating against fixed: one study of a portrait game found no significant difference; floating
  scored slightly better on fatigue (4.22 against 4.09) and ease of learning (4.36 against 4.07)
  [S33]. Practitioner guides make floating the default for action games, and one playtest reports
  that a fixed stick causes thumb drift in fast fights [S34] [S35].
- Dead zone: ignore the first 10 to 18% of travel and add hysteresis, or use 1 to 2% of screen
  width (4 to 8 px here). Clamp the length of the vector, not each axis, or diagonals run faster.
  Remap smoothly past the dead zone so there is no step [S34].
- Vampire Survivors on phones opens in portrait with a single stick; reviewers call it well suited
  to portrait thumb play, and less precise than a physical stick [S36].
- Archero: one thumb, stick at the bottom, attacks only while standing still, so stopping is the
  decision. Some players dislike that rule; some ask for a fixed stick option [S37].
- Survivor.io: one hand, single stick, automatic attack [S13] [S14].
- **Not found:** dead zone and radius values used by any of these games; anything on drag-to-move.

Drag-to-move, where the character follows the finger [M] [R]: the finger sits on the character and
hides the exact area the player must read. A floating stick is the same gesture with the thumb kept
low, so it wins.

Recommendation [R]: floating stick, origin wherever the thumb lands, anywhere on the screen. Dead
zone 7 px. Full speed from 30 px, with no slower walking band beyond a short ramp. Maximum radius
50 px, and past that the origin follows the thumb, so a reversal starts after at most 57 px of
thumb travel. Stick drawn faint (25% opacity). Player drawn at 44% of the screen height from the
top, because the thumb hides part of the lower third; test against 50%.

Common mistakes [R], most from [S34] [S35]:

1. A fixed stick the thumb slides off.
2. A dead zone so big the first movement feels late.
3. Faster diagonals from per-axis clamping.
4. An opaque stick drawn over enemies.
5. The page scrolling, zooming or refreshing under the thumb (set `touch-action: none`, handle
   `pointercancel`, follow one pointer only).
6. Buttons in the phone's top and bottom safe areas.
7. Level-up cards appearing under a thumb that is already pressed.

## 5. Sound without audio files

What the browser can make [S38] [S39]: sine, square, sawtooth and triangle tones; noise from a
buffer of random numbers, shaped by a filter; volume and pitch envelopes (a ramp down to near zero
is the simplest); drum-like hits from a falling sine plus a noise burst. ZzFX shows a whole effects
synthesiser fits in very little code [S39]; take the idea and write our own. On iPhone, sound can
only start from a touch, and the silent switch may mute it [M].

Sourced rules for many sounds at once: a semitone is the natural step for a rising chain, and small
random pitch changes cut repetition [S40]. Cap each sound at 3 to 4 copies, drop retriggers within
about 50 ms, lower the volume of each extra copy; random pitch within 0.95 to 1.05 (too wide sounds
silly); a cap set too low takes the impact out of chaos [S41].

Events that most need a sound, in order [R]: player hurt, level-up, XP pickup, kill, weapon hit,
danger arriving, low health, card pick, run end.

Starting recipes [R]:

- Pickup: triangle tone at 660 Hz for 60 ms. Each pickup within 400 ms of the last is one semitone
  higher (times 1.0595), 12 steps at most; reset after a 600 ms gap.
- Kill: 40 ms of low-passed noise plus a sine falling from 180 to 60 Hz in 80 ms. Low and short
  suits a realistic tone better than a high blip.
- Player hurt: sawtooth falling from 200 to 80 Hz over 150 ms, plus noise.
- Level-up: three rising notes of 80 ms (523, 659, 784 Hz).
- Heartbeat: two 55 Hz sine thumps of 100 ms.

Against fatigue [R]: 50 ms minimum gap per sound type; 3 voices per type and 12 in all; kills in
the same 50 ms play once, 2 dB louder per extra kill up to +6 dB; random pitch of plus or minus 5%
on kills and hits; the most frequent sounds are the quietest (pickup -14 dB, kill -10 dB, hurt
-3 dB, level-up 0 dB); frequent sounds stay below 2 kHz; a limiter on the output; a mute button.

## Recommended starting values for the prototype

All [R] unless a basis is named. Distances are CSS px on a 390 x 844 screen.

| Area | Setting | Start value | Basis |
|---|---|---|---|
| Run | length | 3:00, ending on a peak | owner's guides, 1 to 5 min |
| Player | body radius | 12 px | judgment |
| Player | speed | 150 px/s (2.6 s to cross the width); test 130 and 170 | judgment |
| Enemy | ordinary speed | 0.6 of the player (90 px/s) | Brotato teardown: 0.44 to 0.89; [S9] uses 0.5 |
| Enemy | fast type | 1.1 of the player (165 px/s) | judgment |
| Enemy | alive at start, spawn rate | 12 alive, 1 per second | [S3]: 15 and 1 per second on a far larger view |
| Enemy | alive at 1:00 / 2:00 / peak | 40 / 80 / 120, hard cap 150 | [S3] [S5]: count grows 20 times, cap 300 on a wide screen; Brotato teardown: cap near 100 |
| Enemy | spawn rate at peak | 4 per second | [S3]: rate grows 10 times over 30 min |
| Enemy | ordinary health | dies in 1 hit for 30 s, then +20% per 30 s | [S12] flat growth; [D] count over health |
| Pace | first kill | by 3 s | judgment |
| Pace | first level-up | by 12 s, after 5 kills | [S1] |
| Pace | later level-ups | about 0:28, 0:48, then every 20 to 25 s; 8 or 9 in a run | [S19] [S24] |
| XP | to next level | 5, then 5 more each level (5, 10, 15 ...); 1 XP per ordinary kill; retune to hit the pace above | shape of [S1] |
| XP | choices per level-up | 3 cards | [S15] |
| Pickup | collect radius | 14 px from the player's centre | judgment |
| Pickup | pull radius | 45 px (11.5% of width), grows by upgrade | [S7] small base, about 4 times at most |
| Pickup | drop pop, pull speed | 10 px in 120 ms; 100 + 1,200 times t px/s | judgment |
| Stick | type | floating, anywhere on screen | [S33] [S34] [S35] |
| Stick | dead zone | 7 px (14% of radius, 1.8% of width) | [S34] |
| Stick | full speed from, max radius | 30 px; 50 px, then the origin follows | judgment |
| Stick | opacity; player position | 25%; 44% from the top | [S32] thumb zone |
| Flash | hit flash | 60 ms white, once per enemy per 100 ms | judgment |
| Hit stop | ordinary / tough kill / hurt / boss or death | 0 / 50 / 90 / 150 ms, 250 ms apart | [S29] [S31] |
| Knockback | ordinary / heavy / killed body | 8 px in 100 ms / 3 px / 18 px | [S26] |
| Squash | on hit | 1.25 by 0.8, 120 ms back | judgment |
| Shake | max offset; trauma added | 5 px; 0.25 tough kill, 0.4 hurt, 0.7 boss | [S27] [S28] |
| Shake | decay; ordinary kills | 2.0 per second; none | [S28] |
| Particles | per kill; life; cap | 5 of 3 px; 300 ms; 300 | judgment |
| Stains | life; cap | 10 s plus 2 s fade; 150 | [S26] permanence |
| Numbers | size; rise; life; cap | 12 px; 22 px; 500 ms; 30 | judgment |
| Death | effect | 50 ms white, 140 ms shrink | judgment |
| Level-up | slow-in; card lock; safe time after | 180 ms; 350 ms and a fresh touch; 600 ms | judgment |
| Hurt | no-damage time; blink | 600 ms; 10 Hz | judgment |
| Low health | threshold; pulse | 30%; once a second, 15 to 35% opacity | judgment |
| Sound | pickup ladder | 660 Hz, +1 semitone within 400 ms, 12 steps, reset at 600 ms | [S40] |
| Sound | limits | 50 ms gap, 3 voices per type, 12 in all | [S41] |
| Sound | random pitch | plus or minus 5% | [S41] |

## Could not confirm

- Player speed against enemy speed, by my own search, in any of the eight games. The Brotato
  teardown in this folder has the only clean ratio.
- Measured seconds to first kill and first level-up in any of them.
- Enemies on screen for every game except Vampire Survivors (and Brotato, by the teardown).
- Dead zone and stick radius used by Survivor.io, Archero, Magic Survival or Vampire Survivors.
- Exact values from "Art of Screenshake", "Juice it or lose it", Swink's book and the trauma talk;
  only summaries by others were reached.
- iPhone sound start rules and safe-area sizes (from memory only; Safari cannot be tested here).

## Sources

All opened as search-result summaries on 2026-11-26. "No date" means the result showed none.

| No. | Source | Date |
|---|---|---|
| S1 | Vampire Survivors Wiki, "Level up". https://vampire.survivors.wiki/w/Level_up | copy about 288 days old |
| S2 | Vampire Survivors Fandom wiki, "Level up" and "Growth". https://vampire-survivors.fandom.com/wiki/Level_up , https://vampire-survivors.fandom.com/wiki/Growth | copy about 119 days old |
| S3 | Both wikis, "Mad Forest". https://vampire.survivors.wiki/w/Mad_Forest , https://vampire-survivors.fandom.com/wiki/Mad_Forest | no date |
| S4 | Vampire Survivors Wiki, "Pipeestrello". https://vampire.survivors.wiki/w/Pipeestrello | no date |
| S5 | Fandom wiki, "Enemies", "Debuff resistance", "Curse". https://vampire-survivors.fandom.com/wiki/Enemies , https://vampire-survivors.fandom.com/wiki/Debuff_resistance , https://vampire-survivors.fandom.com/wiki/Curse | no date |
| S6 | Rogue Ranker, Curse guide. https://rogueranker.com/vampire-survivors-curse/ | no date |
| S7 | Fandom wiki "Magnet" and "PowerUps"; NamuWiki stats page. https://vampire-survivors.fandom.com/wiki/Magnet , https://vampire-survivors.fandom.com/wiki/PowerUps , https://en.namu.wiki/w/Vampire%20Survivors/%EB%8A%A5%EB%A0%A5%EC%B9%98 | no date |
| S8 | Vampire Survivors Wiki, "Move Speed". https://vampire.survivors.wiki/w/Move_Speed | no date |
| S9 | Emanuele Feronato, hobby rebuild in Phaser. https://emanueleferonato.com/2024/11/29/quick-html5-prototype-of-vampire-survivors-built-with-phaser-like-the-original-game/ | 2024-11-29 |
| S10 | Brotato Wiki, "Experience". https://brotato.wiki.spellsandguns.com/Experience | no date |
| S11 | Brotato Wiki, "Waves"; Biligame mirror. https://brotato.wiki.spellsandguns.com/Waves , https://wiki.biligame.com/brotato/Enemies | no date |
| S12 | Mejoress, "Brotato all enemies explained"; Brotato Wiki beta patch notes. https://www.mejoress.com/en/brotato-all-enemies-explained/ , https://brotato.wiki.spellsandguns.com/Beta_Patches_1.0.0.x | 2022-11-25; no date |
| S13 | App Store, Survivor.io listing and user reviews. https://apps.apple.com/gb/app/survivor-io/id1528941310 | no date |
| S14 | Naavik, Survivor.io deep dive. https://naavik.co/deep-dives/survivorio-archeros-footsteps/ | no date |
| S15 | Magic Survival guides. https://www.talkandroid.com/18898-magic-survival-walkthrough-guide-tips/ , https://medium.com/@dreestv/what-to-play-magic-survival-review-and-complete-guide-ac938716eb98 | no date |
| S16 | Megabonk guides. https://gamerblurb.com/articles/megabonk-difficulty-and-duration-guide , https://www.dtgre.com/2025/10/megabonk-beginners-guide-survive-first-10-minute-run.html | no date; 2025-10 |
| S17 | NME feature and Sports Illustrated first look on Deep Rock Galactic: Survivor. https://www.nme.com/features/deep-rock-galactic-survivor-finds-joy-in-breaking-the-rules-of-vampire-survivors-3461649 , https://videogames.si.com/features/deep-rock-galactic-survivor-first-look | no date |
| S18 | Interviews with Chasing Carrots. https://www.w4games.com/blog/w4-games-news-1/interview-with-chasing-carrots-developer-of-halls-of-torment-120 , https://fullcleared.com/?p=16901 | no date |
| S19 | Design analyses of Vampire Survivors (the summary did not say which page holds which line). https://www.kokutech.com/blog/gamedev/design-patterns/power-fantasy/vampire-survivors , https://nowloading.co/vampire-survivors-weapons | no date |
| S20 | Platinum Paragon, "The Psychology of Vampire Survivors". https://platinumparagon.info/psychology-of-vampire-survivors/ | no date |
| S21 | PC Gamer, on the maker's gambling-industry past. https://pcgamer.com/vampire-survivors-saved-its-creator-from-working-on-mobile-gambling-games | no date |
| S22 | University of Portsmouth, on gambling psychology in the game. https://www.port.ac.uk/news-events-and-blogs/blogs/popular-culture/vampire-survivors-how-developers-used-gambling-psychology-to-create-a-bafta-winning-game | 2023-04 |
| S23 | PCGamesN, maker has "no idea" why it succeeded. https://www.pcgamesn.com/vampire-survivors/creator-roguelike-successful | no date |
| S24 | Player comments (the summary did not say which page holds which line). https://itch.io/post/5844812 , https://itch.io/post/12438939 , https://steamcommunity.com/app/1794680/discussions/0/6589423683861746051 , https://vaporlens.app/app/1918040/army_of_ruin.md , https://tvtropes.org/pmwiki/review_comments.php?id=22046 | no date |
| S25 | TechRadar column. https://techradar.com/sg/features/vampire-survivors-is-everything-i-resent-in-a-game-and-i-cant-stop-playing-it | no date |
| S26 | Game Developer on the "Art of Screenshake" talk; DK Liao's fan rebuild of its steps. https://gamedeveloper.com/design/vlambeer-co-founder-shares-advice-on-building-better-action-games , https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects | 2014-01 (talk 2013); no date |
| S27 | Infovore, write-up of an October 2013 interview on Nuclear Throne. https://infovore.org/?p=5275 | no date |
| S28 | Squirrel Eiserloh, "Juicing Your Cameras With Math", and two summaries. https://gdcvault.com/play/1023146/Math-for-Game-Programmers-Juicing , https://gamejuice.pages.dev/articles/screen-shake-guide , https://kidscancode.org/godot_recipes/3.x/2d/screen_shake/ | 2016; no date |
| S29 | Five hit stop guides (the summary did not tie each number to a page). https://gamedesignerx.com/blog/hit-feedback-in-frames-designing-impact-with-hit-stop-shake-and-knockback , https://swordarcade.xyz/guides/game-feel-hitstop-and-screen-shake/ , https://uhiyama-lab.com/en/notes/unity/unity-game-feel-hit-feedback/ , https://paragraph.com/@repokuaaa/finding-the-weight-how-i-built-a-tactile-combat-system , https://yuzukikaku.itch.io/yuzukikakulab-samples/devlog/1778417/make-hits-feel-strong-4-small-parts-hit-stop-screen-shake-white-flash-damage-numbers | no date |
| S30 | On the 100 ms rule. https://www.gamedeveloper.com/design/measuring-responsiveness-in-video-games , https://gamejuice.pages.dev/articles/controls-responsiveness-100ms-rule | no date |
| S31 | The owner's guide, as noted in `docs/research/sources/ai-game-dev-guide-2.md` (p. 44) | attached 2026-11-26 |
| S32 | A List Apart on Steven Hoober's 2013 observations; Smashing Magazine on the thumb zone; Addy Osmani on its limits. https://alistapart.com/1-2-phone-grips-jpg/ , https://smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users , https://addyosmani.com/blog/touch-friendly-design/ | no date; 2016-09; 2020 |
| S33 | Study of floating against fixed stick in a portrait game, Universitas Pendidikan Indonesia. https://oalib-perpustakaan.upi.edu/Record/repoupi_101077/Description?print=1 | no date |
| S34 | Touch control guides (the summary did not tie each number to a page). https://simplified.media/guides/mobile-touch-controls , https://scriptsforunity.com/blog/touch-input-best-practices-unity/ , https://www.gamedeveloper.com/business/doing-thumbstick-dead-zones-right | no date |
| S35 | Playtest report in a GitHub issue. https://github.com/jbogaardt/me_rpg/issues/16 | no date |
| S36 | Vampire Survivors on phones. https://toucharcade.com/2022/12/09/vampire-survivors-mobile-review-controller-cloud-save-sync-dlc-unlock-iphone-ipad-pro/ , https://www.pcgamer.com/vampire-survivors-gets-surprise-mobile-release-and-its-free , https://www.commonsensemedia.org/app-reviews/vampire-survivors | 2022-12-09; no date; no date |
| S37 | Archero. https://apps.apple.com/us/story/id1466746068 , https://www.pocketgamer.com/archero/how-to-play-archero-the-latest-free-mobile-rogueli , https://gamedeveloper.com/design/finding-the-fun-archero-part-1---gameplay | no date |
| S38 | Web Audio synthesis. https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques , https://www.redblobgames.com/x/1618-webaudio/index.org , https://www.oreilly.com/library/view/web-audio-api/9781449332679/ch06.html , https://dev.opera.com/articles/drum-sounds-webaudio | no date |
| S39 | LittleJS audio module, which uses ZzFX. https://killedbyapixel.github.io/LittleJS/docs/src_engineAudio.js.html | no date |
| S40 | Game Developer, "The Power of Pitch Shifting". https://gamedeveloper.com/audio/the-power-of-pitch-shifting | no date |
| S41 | Mixing many sounds. https://aigamedev.ai/tutorials/game-audio-mixing/ , https://www.screambeast.com/blog/unity-sound-variations-randomize-creature-voices , https://www.premiumbeat.com/blog/tips-for-using-sound-in-apps-and-games/ | no date |
