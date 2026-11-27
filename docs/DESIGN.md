# Game design document: Vampire: No Survivors

Version: v0.1 (prototype of the core, not locked). Locks as v1 after the owner's test (Blueprint step 7).
Every number named here lives in `src/core/settings.js`; that file is the settings table.

## 1. One-page overview

- **Pitch:** a survivor-like where you are the vampire, feeding on a town through one night.
- **Core sentence:** You hunt the townsfolk and drink their blood to grow stronger, while the town turns on you and dawn approaches.
- **Must-feel words:** powerful, hungry, hunted.
- **Controls (phone):** one thumb. Touch anywhere to place a stick, drag to move, lift to stand still. Claws swing by themselves at whoever is in reach. No buttons during play except pause.
- **Controls (computer):** arrow keys or WASD. Keys 1, 2, 3 choose a card.
- **Three loops** (What Makes Games Great): the action is a kill and a drink (seconds); a stage is a push, a peak and a breather (about a minute); the night is three minutes and ends at dawn, win or die, with one tap to go again.
- **Core loop:** act (move into reach) > challenge (the crowd, their wind-ups, the arrows) > result (a kill, a body, blood) > reward (blood heals and fills the level bar; a full bar offers one of three powers).
- **Screen sketch (390 x 844):** blood bar and level bar across the top, night clock under them, pause in the top right corner. The vampire sits a little above the middle so the thumb, in the lower half, never covers it. Level-up cards stack in the lower half.
- **Limits:** one HTML file; upright phone first; night of 3:00.

### The three variations (the owner's first test)

The same game, the same controls, the same powers. Only the core action changes. Each is one twist of a different kind (Twisting the Classics), and each can be switched off by choosing another variation.

| | Slaughter | Feed | Hunt |
|---|---|---|---|
| In one line | Cut them down and walk into the blood | Stand still to drink. Move to live | Let no one escape |
| Who the humans are | An angry mob that comes at you | The same mob | Townsfolk who run for the gates, and the watch they fetch |
| How blood reaches you | Kills spill drops; walk near and they fly to you | Blood stays in the bodies; stand still near them and it streams to you | A kill is a bite: the blood is yours at once |
| Hunger | None | Blood drains slowly | Blood drains |
| Where the threat comes from | The clock | The clock | Your own misses: each one who escapes returns with a hunter |
| The decision every few seconds | Step into the crowd for the blood, or back off | Where and when is it safe to stop | Which runner to cut off first, and when to turn on the hunters |
| Kind of twist | None: the proven loop, as the control | One smart verb (stillness) | Flip the role (prey flees; threat is self-made) |
| Learns from | Vampire Survivors: reward at the kill site | Archero and 20 Minutes Till Dawn: attacking costs mobility | The gap no studied game fills |

## 2. Research summary

- **Sources:** the owner's guides and the Mutation document (`docs/research/sources/`), five briefs (`docs/research/digests/`), a genre guide, core loop numbers, and four teardowns (`docs/research/`). Web pages could not be read in full, so research marks what is sourced and what is memory.
- **Must-haves kept:** one input; a small reward every few seconds; a choice of one from three; a power curve inside one run; a visible clock with a hard end.
- **Failures avoided:** late clutter (player drawn above every effect, amber reserved for what hurts, caps on bodies, stains and particles); standing still wins (hunger, wind-ups that punish standing in reach); slow start (first kill inside 5 seconds, first card inside 20); menus before the first move (one tap from the title to play).
- **From Mutation's lessons:** core sentence and budget first; phone upright first; every big hit warned and capped; the death screen names the killer; a reward never takes away and is never useless; one statement per line; tests assert effects.
- **Deferred research** (after the owner's test): theme bible, six more teardowns, phone layout survey.

## 3. Budget (hard limits for the prototype)

| Thing | Limit |
|---|---|
| Variations | 3 |
| Human types | 3 (peasant, watchman, archer) |
| Humans alive at once | 110 |
| Powers | 9, three levels each |
| Arenas, bosses | 1, 0 |
| HUD items during play | 4 (blood, level, clock, pause), plus the count of escapes in Hunt |
| Screens | 4 (title, level-up, pause, end) |
| Settings | 2 (sound, screen shake) |
| Kinds of moving thing | 5 (vampire, humans, blood, arrows, the vampire's own attacks) |

**Fairness as numbers:** shortest warning before any hit 0.3 s (melee wind-up 0.32 s, arrow aim 0.75 s); largest single hit 30% of full blood; 0.5 s without damage after a hit; damage starts at 60% and rises to full over the first 45 s; the end screen names what killed you and lists the last hits. The simulation counts any hit that breaks these rules and the checks fail on it.

**Won't build in the prototype:** bosses, forms, thralls, dawn light as terrain, unlocks, characters, music, story, languages, landscape and desktop layouts.

## 4. Blocks

Blocks 1 to 4 are built and polished for this prototype. Blocks 6 and 7 are present in their smallest form because players judge this genre through them. The rest wait for v1.

| Block | In this game, now | Good enough | Polished |
|---|---|---|---|
| 1 Core loop | The three variations above | The owner wants another run with plain shapes | Every cycle holds a small real decision |
| 2 Controls | Floating stick: dead zone 7 px, full speed at 34 px, the base follows past 50 px. Lifting the thumb is the "stand still" input | Never misreads the thumb | Feels like the vampire is under the thumb; stopping is instant |
| 3 Feedback and feel | One response per event at medium strength: see section 5 | Every action visibly and audibly reacts | A kill is satisfying with nothing else on screen |
| 4 Rules and systems | Blood is health and growth. Claws, wind-ups, arrows, gates, hunger, escapes. All numbers in one file | Consistent, nothing breaks | Rules combine into situations nobody scripted |
| 5 Content | 3 human types, 9 powers | | Later |
| 6 Difficulty and pacing | Stage table per variation: push, peak, breather, final push; named beats on a banner | A new player dies sometimes and knows why | Waves of tension and relief, hardest at the end |
| 7 Progression | Level-up: one of three cards, never a useless one. Levels need 5, 10, 15... blood | Choices are not obvious | Builds that combine |
| 8 Sessions | 3:00, one-tap restart | | Later |
| 9 Readability | Vampire bone white, drawn last. Humans muted. Amber only for what will hurt. Red only for blood | Player and danger found in a second | The screen explains itself |
| 10 Art | Plain shapes on purpose | | Later |
| 11 Audio | Synthesised: one sound per event kind, gaps and voice limits, heartbeat when blood is low | Playable muted | The sound tells you how you are doing |
| 12 Theme | Night town, blood, gates, the watch, dawn | | Later |
| 13 to 16 | One hint line per variation; pause; no saving beyond the sound setting; phone upright only | | Later |

### The nine powers

Each changes how you play, and each has a cap (three levels).

| Power | What it does | Why a smart player picks it |
|---|---|---|
| Longer Claws | Reach and arc grow | Kill before they reach you |
| Frenzy | Claws swing faster | More kills when surrounded |
| Bat Swarm | Bats circle you and cut | Protects the side you are not facing |
| Blood Lance | A shard flies at the nearest human | Reaches archers and runners |
| Blood Nova | A burst around you every few seconds | Clears the space you need to stop |
| Hypnotic Gaze | Humans near you move slower | Easier catches, softer crowds |
| Mist Form | A hit turns you to mist for a moment | A second chance when cornered |
| Swift | Faster movement | Outrun and cut off |
| Thick Blood | More blood to hold, and some now | Survive bigger mistakes |

## 5. Feedback: what the player sees and hears

| Event | See | Hear |
|---|---|---|
| Claw swing | A pale arc, the vampire nudges forward | A short whoosh |
| Hit | The human flashes white and is knocked back, a spurt of blood | A dull thud |
| Kill | The body falls and stays, a pool spreads and stays, a spray along the blow | A wet crunch |
| Blood taken | Drops fly into the vampire; the bar jumps | A tick that climbs in pitch with each drop |
| Level-up | The world stops, three cards slide up | A rising chord |
| Wind-up | An amber ring closes on the attacker | A short tick |
| Archer aiming | An amber dashed line that turns solid when it locks | A creak, then the release |
| Hurt | Red edge of the screen, the vampire blinks, a short freeze, a small shake | A heavy hit |
| Low blood | The screen edge pulses dark red | A heartbeat that quickens |
| Stage beat | A banner with one sentence | A bell |
| Escape (Hunt) | An amber flash at the gate | A distant cry, then the bell |
| Dawn | The ground lightens | A long bell |

Violence is realistic in what remains, not in decoration: bodies stay where they fall, blood stays on the ground, nobody explodes into numbers.

## 6. Riskiest assumption, and the test

**Assumption:** with one thumb and plain shapes, at least one of the three loops makes the owner want another night.

**Pass bar, written before the test:** for a variation to go forward the owner plays it at least twice without being asked to, can say what killed them, and can name what the variation asks of them in their own words. If none passes after three rounds of changes, the core changes (Blueprint step 7).

**Kill criteria per variation:** Slaughter is cut if it feels like "walking in circles". Feed is cut if stopping feels like a chore rather than a risk. Hunt is cut if chasing feels like frustration rather than hunting.

**What the bots and checks can and cannot say:** they show the game runs, is fair by its own numbers, and is neither trivial nor impossible. They do not say it is fun. That is the owner's call.

## 7. Scope

- **v0.1 (this prototype):** everything above.
- **Later list:** dawn light as terrain; drain or turn (thralls); forms; bosses built on one idea; characters; unlocks; music; the theme bible's content.

## 8. Decision log

See `docs/DECISIONS.md`.
