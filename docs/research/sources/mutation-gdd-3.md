# Mutation: Become the Monster. Game Design Document and Lessons v1.3 (pages 51 to 75)

Source: `68a24aa9-Mutation_Become_the_Monster._Game_Design_Document_and_Lessons_v1.3.pdf`, pages 51 to 75 of 75. All 25 pages were read as images and cross-checked against a text extract; none was unreadable.

Length note: longer than the 2,500-word target because the brief asked for every table row, the checklist and the starter prompt in full. Own inference is marked "(inference)".

## Outline (the document's own section names, in order)

- 1.12 Art and sound, continued [pp. 51-54]: end of the style list [p. 51]; Art assets [pp. 51-52]; How each kind of art is made [p. 52]; Text and fonts [p. 52]; Sound effects [p. 53]; Music [pp. 53-54]
- 1.13 Technical setup [pp. 54-58]: The shipped game [p. 54]; Source files [pp. 54-55]; Main loop [p. 55]; Screen sizing [pp. 55-56]; Saving [p. 56]; Languages [pp. 56-57]; Build [p. 57]; Test tools [p. 58]; Release steps [p. 58]
- 1.14 Removed features and why [pp. 58-61]: Systems [pp. 59-60]; Content [p. 60]; Interface and feel [pp. 60-61]
- Part 2: Lessons for the next game [p. 61]
  - 2.1 What worked: reuse as is [pp. 61-63]
  - 2.2 What the playtests kept complaining about, and the rule each teaches [pp. 63-65]
  - 2.3 The mistakes that cost the most, ranked [pp. 65-68]
  - 2.4 Ideas we had but did not build [pp. 68-69]
  - 2.5 One-page checklist for starting the next game [pp. 69-71]
  - 2.6 Starter prompt for the next game [pp. 71-72]
- What could not be verified, and what was left out [pp. 72-75]: Not verified from the code or files [pp. 72-73]; Found while writing this [p. 74]; Left out on purpose [pp. 74-75]

## 1.12 Art and sound (continued)

Style rules [p. 51]:
- Warnings are faint and consistent: one amber colour at 45% strength for all ground warnings, so they inform without covering the fight.
- Gore is constant but short-lived: blood stains fade in about 7 s, particles are capped, no effect is brighter than the things it hides.
- Each act has its own light: dusk with fireflies, rainy night with streetlights, ash and floodlights, violet emergency light.

Art assets [pp. 51-52]:

- Creatures, 2.0 MB: 12 body sheets (5 organisms, 7 evolved forms), 64 x 64 px frames, 6 animations (idle, walk, dash, attack, hurt, death), 881 organ overlay sprites, 6 minion types, 26 effects.
- Humans and machines, 0.7 MB: 46 human sheets (walk, attack tell, strike, death), 11 machine sheets, 44 projectile and weapon effects, 44 player hit effects.
- Combat effects, 0.3 MB: 139 effects in 7 groups (one per tag family), death animations for 5 human body types, damage digits in 5 colours.
- Battlefields, 0.7 MB: ground tiles for 4 maps, about 100 props, 3 animals, 2 painted scenes at 480 x 270.
- Bosses, 0.3 MB: 74 sheets. Interface, 0.14 MB: pixel font in 2 sizes, 9-slice panels and buttons, card frames, icons.

Total about 4.1 MB of the 6.7 MB file (inference, my sum). The final boss has no art of its own: the player's current frames are recoloured pixel by pixel. [p. 52]

How each kind of art is made [p. 52]:
- Sprites: one Python script per subject (about 60 scripts) draws each frame with pixel primitives (Pillow) from a small palette, with outlines and two or three shades per colour. Animations are the same drawing function called with a pose parameter.
- Packing: export scripts pack frames into sheets and write one JSON file per sheet with the image inside as text (a data URI) plus frame sizes and anchor points.
- Painted scenes: larger scripts compose backgrounds from layered shapes, noise and lighting.
- Checking: every new sprite is rendered to a preview image and looked at before it goes in. A backup of a sheet is kept before each large change.
- Build step: images recompressed without loss (exact palette where 256 colours or fewer).

Text and fonts [p. 52]: Latin text uses the game's own pixel font. Other scripts are drawn from GNU Unifont 15.1.01 glyphs at 16 px; its licence notice ships in the page source. No credits screen.

Sound effects [p. 53]:
- Method: each sound is a small function that builds a waveform from oscillators, noise, envelopes and filters (a pure JavaScript DSP kit at 44.1 kHz). Sounds are rendered in a background worker at load and played through Web Audio with position-based panning.
- Count: 170 sound definitions.
- Groups: monster 38, bosses 34, weapons 26, cards 11, machines 11, interface 11, hits 10, props 9, warnings 9, pickups 5, animals 3, voices 2. (These add to 169, not 170; inference, my sum.)
- Per-sound settings: number of variations, most copies playing at once, a minimum gap between plays, a level in decibels.
- Rules: every boss move has its own sound and always the same one. A warning sound matches its shape (circle, line, cone). Loud repeated sounds have a cooldown. All sound stops when the page is hidden.

Music [pp. 53-54]: a step sequencer with 39 synthesised instruments (drums, bass, pads, strings, brass, choir, bells, fiddle, banjo, power chords, braams and more). Every song has 3 layers. On the field the layers follow the spawn director: layer 1 in breathers, layer 2 joins during a push, layer 3 at a peak. In a boss fight the layers follow the boss's phases. 14 songs: title; menus and Nest (tempo 70, D minor); Act I (100, E minor); Act II police (122, A minor); Act II SWAT (128, A minor); Act III (132, C minor); finale (138); seven boss themes at 118, 132, 100, 140, 152, 136 and 146 (final boss, F sharp minor). Tempo unit is not printed; beats per minute (inference). Plus four short stingers: act begins, boss defeated, victory, defeat.

## 1.13 Technical setup [pp. 54-58]

- Shipped game: one HTML file, 6.7 MB, JavaScript and canvas, no engine, no outside files. No network needed; only the Feedback screen sends (a form post to a mailbox). Source is about 1 MB of JavaScript in 28 files. Published as an itch.io HTML game (zip with index.html) and as an installable web app on GitHub Pages with an offline cache. [p. 54]
- Source files [pp. 54-55]: `data.js` (all content as data, tuning constants); `run.js` (run rules with no drawing: stats, XP curve, card offers); `enemies.js` (unit table, behaviour templates, spawn director; talks to the game only through a small adapter so it can be tested alone); `planner.js`, `bot.js` (a movement planner that scores directions against threat shapes; the test autopilot and the final boss both use it); `ui_core.js` (interface toolkit: text, 9-slice panels, buttons, hit regions); `core.js` (canvases, sizing, input, saving); plus map, boss, combat, flow, render, language, feedback and audio files.
- Main loop [p. 55]: simulation runs in fixed steps of 1/60 s, so play is the same at any frame rate. The interface has its own clock, so menus animate while the game is paused. Slow motion and hit-stop scale only the simulation. The game pauses itself when the page is hidden.
- Screen sizing [pp. 55-56]: two stacked canvases, the world (pixel art) and the interface (finer resolution so text stays sharp). Phone upright: world view 320 px wide, as tall as the screen ratio allows (up to 2.4 x the width); interface 270 units wide; scaled to cover the whole screen, no bars. Phone sideways: 320 px tall, up to 2.6 x as wide; interface 270 units tall, 480-unit layouts centred. Computer (window 720 px or taller): 360 to 600 px tall at a whole-number pixel scale (960 x 540 at 1080p); interface 270 to 420 units tall. Zoom setting: Auto is about 12% closer on phones; Far and Close change the view by one step.
- Notch and home bar [p. 56]: the page asks for the full screen area. The game measures the safe-area insets, converts them to interface units and keeps HUD, buttons and text inside them while backgrounds fill to the edge. A setting switches to "Safe area" (everything inside).
- Saving [p. 56]: localStorage, one key for the save and one for a run checkpoint, under a name unique to the game (itch.io games share one storage area). The save is versioned and never trusted: checked on load, damaged saves cleaned up, numbers guarded. The game asks the browser to keep its storage.
- Languages [pp. 56-57]: 20 (English plus 19), 1,585 keys. The English text is the key; numbers are replaced by `#` and names by `@`. Every text call can say "fit this width" (shrinks or cuts with an ellipsis) or "wrap to this width, at most n lines".
- Build [p. 57]: one Python script. It reads the sprite sheets, recompresses images, builds language data, joins the source files in order, converts the code for older Safari (esbuild, ES2019 target, a handful of polyfills), minifies, and fills a small HTML shell. It writes two files: the release, and a test build that keeps a test API (`window.GAME`) and the autopilot (`?bot=1`).

Test tools [p. 58]:

| Tool | What it does |
|---|---|
| Smoke test | Opens the test build in a headless browser. The autopilot, invulnerable, plays a whole run fast-forwarded through all bosses. It must end with a win and no errors. A second pass runs with a phone-sized touch screen |
| Screenshot tools | Step through every screen at a given size and orientation, with simulated notch insets, and save images to look at |
| Logic tests | Small scripts that set up one situation through the test API and check the numbers |
| Language audit | Lists text still in English and text that was cut to fit |
| Syntax check | `node --check` on every edited file before building |
| Sound tools | Render sounds and songs to files outside the browser (the DSP kit runs in Node) for listening and level checks |
| Balance tools | Scripts that measure boss damage per second and time to kill for sample builds |

Release steps [p. 58]: build, syntax check, smoke test (computer and phone), publish the file, rebuild the web app page, make the itch.io zip, commit with a changelog entry and a version tag.

## 1.14 Removed features and why [pp. 58-61]

"The game was much larger before release. One planned simplification pass cut it down, and four playtest rounds cut more." Some removed things remain as unused code or data.

Systems [pp. 59-60]:
- Doctrines (humans sent counter-units against the player's build): being punished for a build read as unfair and was hard to see.
- Terror meter (fast killing filled a meter that brought a bonus card and the boss early): a second clock competing with the real one.
- Encounters (5), Contracts, Flesh Pods (side objectives): pulled the player away from the core act of eating.
- Call the boss button: extra decision with little payoff once the clock was clear.
- Strains (7) and Tissues (12): too many card kinds. Tissues replaced by +1 max health per level.
- Mutators and Daily Hunt: needed an audience and a leaderboard to mean anything.
- Boss Rehearsal: menu clutter. Organism Mastery: a third long-term track. Endless mode: balance cost for a mode few would reach.
- Lock and the paid "+1 card" button: Reroll, Banish and Skip are enough.
- "Bounty" as the name of the difficulty ladder: "Difficulty" needs no explanation.
- The Elite Hunter's own reward screen: it now drops a chest like any elite, one rule fewer.
- Arena edge ring of fire or wire: replaced by a plain boundary.

Content [p. 60]:
- 16 mutations: overlap. The pool was cut to a budget of 47 so each card is recognisable.
- 2 hybrids, 2 elite modifiers: hard to read in a crowd.
- 14 unit types, a vehicle and a drone: too many behaviours on screen at once. The target is 4 to 6 enemy types visible at a time.
- Two events: stacked on an already dense act. Villagers and archers in the city: wrong place.
- Birds, and corn that hid the player: birds were noise; hiding did not really stop enemies finding you, so it read as a bug.

Interface and feel [pp. 60-61]:
- Rarity colours on cards: coloured cards looked like the correct choice, which killed real choices.
- Organ strip on the HUD, most status chips, strobing edge bars: the body shows the build; the HUD shows only what asks for an action.
- Damage numbers on ordinary enemies, heal and Biomass popups, "!" over every human, health bars on non-elites: visual noise that hid the fight.
- "CHEST" tag over elites: the glow already says it.
- Eleven settings (Save code, Credits, Big touch buttons, Low-effects mode, Colourblind statuses, Assist mode, Auto-aim toggle, Gore level, Impact flashes, Shapes mode, Effect opacity, Fewer repeat sounds): a settings list people can read in one screen; defaults were fixed to the best value instead. "Left-handed touch" was removed in v1.1 and came back in v1.2 as "Buttons on the left" after a real need appeared.
- Seed number, DNA count and controls line on the main menu: not useful to a player.
- Two first-run tips: showed as an empty box on the tester's iPhone, could not be reproduced, removed.
- Aim bonus under auto-aim: auto-aim plus the bonus made upright play too strong.

## 2.1 What worked: reuse as is [pp. 61-63]

"Ordered by how much each one protected the project."

1. A core sentence and a budget table, written down, with the rule "before adding anything, say what could be removed instead". Once it existed, cuts were easy and nothing crept back. It arrived late; next time it comes first.
2. A test build that plays itself: a test API, an autopilot, and a smoke test that must win the whole game with no errors before every release. Made 25 to 58 changes per round safe.
3. Screenshot tools at the tester's exact screen size, both orientations, with simulated notch insets. The only way layout problems were found before the tester found them.
4. All content as data in one file, rules separate from drawing. Balance changes were one-line edits.
5. Fairness rules as hard numbers: every big hit warned 0.6 s ahead, a cap on any single hit, a death recap that names the killer. Across four playtest lists almost nothing was about unfair deaths; related notes asked for warnings to be fainter, and longer for heavy weapons.
6. The body shows the build. The game's identity, and it removed a HUD element.
7. A clock the player can see (threat bar with boss marks) and push, peak, breather pacing with music layers that follow it. The competing Terror meter was what got cut.
8. Bosses built on one idea each, with a one-sentence instruction at the start and a visible, named opening (STUCK, IT'S LOW, OVERHEATED).
9. Two taps to choose (first tap reads, second takes), Undo in the shop, Skip that pays.
10. Everything made by code (art from scripts, sound from synthesis): consistent style, any asset changed by editing a number, no licence questions except one font notice.
11. One HTML file: works on itch.io, as a web app, and as a file sent in chat.
12. Checkpoint save between acts: a phone game gets interrupted; nobody lost a run.
13. Long-term progress that buys options, not power, plus a difficulty ladder that adds one rule per level (ten levels from ten one-line rules).
14. A feedback form inside the game that attaches version, device and run details.
15. A fixed release checklist, a changelog entry and a version tag every time. The bugs that did ship were on paths the smoke test did not walk.
16. Playtest notes as one numbered list per round, each item answered in the changelog.
17. Translation keys with `#` for numbers and `@` for names.
18. A menu that grows with the player: a first-timer sees one button.

## 2.2 What the playtests kept complaining about [pp. 63-65]

Four playtest lists (58, 25 and 38 items, plus the first round recorded in the v1.0.1 changelog), sorted by theme, ordered by item count. Counts are approximate.

| # | Theme | Share | Typical items | Rule for the next game |
|---|---|---|---|---|
| 1 | Layout on the phone | about 1 in 3 | Text not centred. Buttons of different sizes. Text that does not fit its frame. Buttons over a description. Buttons too close to the edge. A black bar under the game. Wasted space | Design every screen for the tester's phone, upright, first. One button height, one set of margins, safe-area insets from day one. Before each release look at a screenshot of every screen at that phone's size in both orientations |
| 2 | "Remove this" | about 1 in 5 | Settings, modes, tags, numbers, birds, the Terror meter, Daily Hunt, the seed | Ship less. A setting, mode or HUD element needs a reason a player would give. Pick the best default instead of adding a setting |
| 3 | Things I cannot read before choosing | about 1 in 8 | What do glowing elites mean. What does a hybrid replace. What does the next level do. How long is a Short run. What is my form's power | Everything that can be chosen or met can be inspected first: tap once to read, tap again to take |
| 4 | Rewards that are not rewards | about 1 in 10 | A boss reward that replaces something wanted. "Reaches Level 3" when already Level 2. A heal card at full health. A med kit picked up at 95% health. A minion card offered with no minions | Never offer what the player cannot use right now. Gate cards on prerequisites. Do not consume a pickup that would be wasted. A reward adds; it never takes away |
| 5 | Noise and readability | about 1 in 10 | Warnings too strong. Orbs too small. A bright blood firework. Everything too small after the computer changes. A message shown for a fraction of a second | Fix the visual order early: enemies, then warnings, then pickups, then effects. Text shown during play stays long enough to read (1.8 s plus time per character) and wraps. A change for one device must be checked on the other |
| 6 | Balance: one best choice | about 1 in 12 | Regeneration always wins and always ends in the same form. Auto-aim plus the aim bonus. The first level-up too fast. Too many med kits in Act II | Put diminishing returns on any stat that stacks, from the start. Let the autopilot run each build path and compare. Convenience (auto-aim) must not also carry a bonus |
| 7 | Sound | about 1 in 15 | The same sound for every boss attack. An annoying aim sound. A cow that does not sound like a cow. A whip that clicks | Make the sound list when the move list is made: one sound per distinct event. Send a short audio preview of new sounds before release. Anything heard every few seconds gets a second pass |
| 8 | Getting stuck | a few, but severe | Stuck in broken props. Pulled into a prop by a boss. Villagers stuck at the arena edge. A freeze when one form was chosen | The player can never be held by geometry: walk through anything broken, free them if wedged. The smoke test must walk every organism and every form, not one path |
| 9 | Things in the wrong place | a few | Villagers in the city. Corn that hides you but does not | Each act's cast and props belong to that act. If a rule does not visibly work, remove it |
| 10 | "Still not fixed" | two items, two rounds each | The empty message box. The boss text that did not fit | Reproduce before fixing. If it cannot be reproduced on the test machine, say so, ask for a screenshot, and fix the cause, not the symptom |

## 2.3 The mistakes that cost the most, ranked [pp. 65-68]

"Ranked by how much time or rework each would have saved." A judgement from the size of the changes, not a measured figure.

| Rank | Mistake | What it cost | How to avoid it |
|---|---|---|---|
| 1 | Built far more than the game needed, then cut it. 12 systems, 16 mutations, 14 unit types, 2 hybrids, 2 elite kinds and a dozen settings were designed, coded, drawn, given sounds and (some) translated, then removed | The largest single waste in the project. A whole release cycle went to simplifying | Write the core sentence and the budget table before any code. Build one act, one boss and ten mutations. Play it on the phone. Only then add, one block at a time, each against the budget |
| 2 | The phone, upright, was not the first target. Screens were laid out sideways first; upright layouts, notch, home bar, zoom and thumb reach were fitted afterwards. Then computer support changed sizes on the phone by accident | Roughly a third of all playtest items in every round. Every screen was laid out at least twice | Ask on day one: which device, which way up. Build the layout toolkit (safe insets, one button size, margins, two-tap cards) before the first screen. Add other devices last and re-check the first |
| 3 | Translated into 19 languages before the text settled | Hours on every round, and a standing reason to avoid improving wording | English only until feature freeze and at least two playtest rounds. Translate once, at the end |
| 4 | No way to test on the tester's real browser. The test machine has no Safari. Notch problems, a blank tip box and a black bar were found by the player; two fixes were reported "still not fixed" | Several whole round-trips of a day each. One feature was removed because the bug could not be seen | Simulate what can be simulated (insets, sizes). Add a hidden on-screen debug line (screen size, insets, version) so one screenshot from the tester answers the question. Ask for a screenshot with the first report. Say plainly when something could not be reproduced |
| 5 | Silent breakage from dense code and blind edits. Many statements to a line; inserting a comment mid-line cut off the rest of it, five times. All boss warning voices were dead for two versions. Nothing crashed, so no test noticed | The "every boss sounds the same" complaint was partly this bug. Found only by reading code | One statement per line in code that will be edited. Edit through a helper that refuses risky edits. Add tests that check effects, not just the absence of errors: this sound was played, this button changed the screen |
| 6 | Balance tuned by feel, late. Regeneration won every run. Auto-aim also got the manual-aim bonus. Boss rewards could make a build worse. First level-ups, med kit counts and knockback were retuned after release | Repeated retuning across three rounds. Every boss health value was multiplied again by a correction table | Decide caps and diminishing returns when a stat is created. Use the autopilot to run each build path to the same boss and compare time to kill and health lost. Write the target (for example "level 10 by the first boss") next to the number |
| 7 | Sound treated as a last layer. Bosses shared one attack sound and one warning sound until round 3 | A full rewrite of boss sound and seven new themes after release | List sounds per move when the move is designed. Review by listening to a rendered preview, not by reading code |
| 8 | Rules the player could not see (Doctrines, corn cover, the Terror meter, rarity colours as a hidden hint). Each was built, explained with extra interface, then removed | Several systems and their interface | A rule ships only if the player can see it working without reading about it. Test: can it be shown in one sentence on the boss-intro style banner? |
| 9 | Text that did not fit or did not stay | A steady trickle in every round | Every text call must say how it fits (shrink, wrap, or a maximum number of lines). Timed text gets a minimum reading time. Run the fit check on the longest language before release |
| 10 | Dead code and data left in | Slower reading; the document needed a code check to tell live rules from dead ones | When a feature is cut, delete its code and data in the same change and note it in the changelog. Version control keeps the old copy |
| 11 | Large mixed batches: 25 to 58 unrelated changes per release | When something regressed it was hard to say which change did it | Still take the whole list, but land it in groups (layout, balance, sound, content), run the smoke test after each group, and commit each group separately |

## 2.4 Ideas we had but did not build [pp. 68-69]

- Automatic low-effects fallback when a device keeps dropping frames: yes, with no setting.
- A reduced-effects option: only if a slow phone shows up in testing.
- Encounters as a rare event using the normal event banner: maybe, if runs feel the same.
- Strains as a difficulty rule instead of a card: a cheap way to add difficulty levels.
- Mastery as a cosmetic-only frame: low priority. Endless as its own menu mode: only if players ask.
- The 14 built-but-unused unit types: a ready pool for a new act or for difficulty rules.
- Humans that answer the player's build: reuse only where the player can see it.
- A native iPhone app (needs a Mac): decide before starting; it changes the test setup.
- A save code to move progress between devices: small, useful once people play on two devices.
- Daily run, mutators, leaderboards: not for a solo single-file game.
- Testing on real Safari: never possible on the build machine; "the single most useful process fix (see 2.3, rank 4)".

## 2.5 One-page checklist for starting the next game [pp. 69-71]

Before any code
- [ ] One core sentence: what the player does, what grows, what pushes back
- [ ] A budget table with hard limits: upgrades, enemy types (and how many on screen at once), bosses, HUD elements, settings, screens
- [ ] The target device and how it is held (for this team: iPhone 13, upright), and the other devices to support later
- [ ] Fairness rules as numbers: minimum warning time, largest single hit, what the death screen shows
- [ ] A "won't build" list (servers, accounts, daily modes, anything the player cannot see working)

First build: stop and play it before going further
- [ ] One arena, the player, one attack, three enemy types, one upgrade screen, one boss. Placeholder shapes are fine.
- [ ] The layout toolkit first: safe-area insets, one button height (about 44 px on the phone), margins, text that must say how it fits, two-tap selection
- [ ] Fixed-step simulation, content as data in one file, rules separate from drawing
- [ ] The test build from day one: test API, an autopilot, a smoke test that must finish a run with no errors, screenshots at the phone's size in both orientations with notch insets
- [ ] A hidden debug line (version, screen size, insets) that the tester can screenshot
- [ ] One statement per line; edits through a helper that refuses risky ones
- [ ] Played on the real phone, upright, before anything is added

Growing it
- [ ] Add one block at a time, each checked against the budget and the core sentence. Say what could be removed instead.
- [ ] Every stat that stacks gets a cap or diminishing returns when it is created
- [ ] Every reward is usable now, adds and never takes away; cards have prerequisites; pickups are not wasted
- [ ] Everything choosable can be read first. Every rule can be seen working.
- [ ] Sounds are listed with the moves they belong to, one per distinct event, and reviewed by listening
- [ ] The autopilot runs each build path to the same boss; compare time to kill and health lost
- [ ] When something is cut, its code, data, art, sound and text go in the same change

Each playtest round
- [ ] One numbered list in, grouped by theme before starting
- [ ] Reproduce each bug first. If it cannot be reproduced, say so and ask for a screenshot.
- [ ] Land changes in groups; smoke test and commit after each group
- [ ] Look at every changed screen at the phone's size, both ways up
- [ ] Changelog entry answering each item; version tag

Only at feature freeze
- [ ] Other devices (computer, sideways), then re-check the phone
- [ ] Languages: translate once, then run the fit check on the longest language
- [ ] Final art and music passes
- [ ] Store page, release build without test tools, a build ID shown in feedback reports

## 2.6 Starter prompt for the next game [pp. 71-72]

"Paste this to begin. Fill the three lines in square brackets first. It asks for the smallest playable version and then stops, which is the main lesson of this project."

```
I want to build a new game in the same family as Mutation: Become the Monster
(attached: its game design document and lessons). Reuse what that document
says worked. Do not repeat the mistakes in its section 2.3.

The new game in one sentence: [what the player does, what grows, what pushes back]
What is different from Mutation: [theme, the one new mechanic]
What I want to keep from Mutation: [for example: the body shows the build,
the visible clock, bosses built on one idea]

About me and the setup:
- Solo beginner developer, working with you. Single-player only.
- One HTML file, JavaScript and canvas, no engine, no server. Published on itch.io.
- I play on an iPhone 13 held upright, with one thumb. That is the first and
  main target. Sideways and computer come last.
- All art and sound made by you in code. Placeholder shapes until I say otherwise.
- English only until I call feature freeze.
- No emoji. Compact answers. Stop at each checkpoint below and wait for me.

Step 1 (no code yet). Give me, on one page:
- The core sentence, tightened.
- A budget table with hard limits: upgrades, enemy types and how many on
  screen at once, bosses, HUD elements, settings, screens.
- Fairness rules as numbers: shortest warning, largest single hit.
- A "won't build" list.
- The three biggest risks and how the first build will test them.
Then stop and wait for my approval.

Step 2 (first playable). Build only this:
- One arena, the player, one automatic attack, a dash, three enemy types,
  one level-up screen with three cards, ten upgrades, one boss.
- Phone-first layout toolkit before the first screen: safe-area insets for
  the notch and home bar, one button height of about 44 px, text that
  always wraps or fits, tap once to read and again to take.
- Fixed-step loop, all content as data in one file, rules separate from drawing.
- A test build with a test API, an autopilot, and a smoke test that must
  finish a run with no errors. Screenshot every screen at 390 x 844 with
  iPhone insets and look at them before you send me anything.
- A hidden debug line (version, screen size, insets) I can screenshot.
- One statement per line in the code.
Send me the file, tell me what you tested and what you could not test
(you have no Safari), then stop. I will play it and send a numbered list.

Rules for every later step:
- Add one block at a time. For each, say how it serves the core sentence,
  what it costs in clarity, and what could be removed instead. Stay inside
  the budget unless I change it.
- Any stat that stacks gets a cap or diminishing returns when you add it.
- Never offer a reward the player cannot use right now.
- Everything choosable can be read first. No rule the player cannot see working.
- List the sounds with the moves they belong to, one per distinct event, and
  send me an audio preview of new sounds.
- When we cut something, delete its code, data, art, sound and text in the
  same change.
- For my playtest lists: group by theme, reproduce each bug before fixing,
  say so if you cannot reproduce it, land changes in groups with a smoke
  test after each, and answer every item in a changelog.
- Keep a changelog, a version tag and the same release checklist every time.
```

## Budget advice gathered in one place

- The budget table has six rows with hard limits: upgrades, enemy types (and how many on screen at once), bosses, HUD elements, settings, screens. The document gives no values for the next game's table. [pp. 69, 71]
- First playable: one arena, one automatic attack, a dash, three enemy types, one level-up screen with three cards, ten upgrades, one boss (2.6). 2.5 lists the same without the dash, the card count and the upgrade count; 2.3 rank 1 says "one act, one boss and ten mutations". [pp. 65, 70, 71]
- Mutation's own shipped limits: 47 mutations; 4 to 6 enemy types visible at a time. [p. 60]
- Button height about 44 px on the phone; screenshots at 390 x 844. [pp. 70-72]
- Fairness: every big hit warned 0.6 s ahead; a cap on any single hit. [p. 62]
- In-play text: 1.8 s plus time per character. [p. 64]
- English only until feature freeze and at least two playtest rounds. [p. 66]
- Balance target example: "level 10 by the first boss". [p. 67]

## What could not be verified, and what was left out [pp. 72-75]

Not verified by the document's author: other organs' behaviour was not checked line by line against card text; the 45% warning strength and the 7 s blood fade come from notes and the changelog, not the drawing code; nothing was ever tested on a real iPhone or Safari (layouts only at simulated sizes and insets); the theme shares in 2.2 are estimates, not counts; the ranking in 2.3 is a judgement, not measured time; the statement that screens were laid out sideways first is an inference from how the code is organised. [pp. 72-73]

Found while writing [p. 74]: the enemy table is defined twice in the source and the second overrides the first, so a v1.2 change to sniper aim time (1.35 s) never took effect (the game uses 1.2 s, 30 damage). Harvest Mob morale numbers are leftovers from a bar of 1,000 against a bar now 3,000. Dead code remains.

Left out of the document on purpose [pp. 74-75]: exact layout coordinates; all game text; map generator details; synthesis recipes (how each of the 170 sounds and 39 instruments is built, and the note data); drawing code and palettes as colour codes; per-organ targeting and the movement planner's algorithm; feel constants (camera shake, hit-stop and slow-motion values, particle limits); web-app wrappers. "Someone recreating the game from this document would reproduce its rules, numbers, structure and content list. They would have to write their own text, draw their own art, compose their own sound and choose their own screen coordinates."

## Things the lead should decide or check

1. The starter prompt says "stop at each checkpoint and wait for me" and "wait for my approval". `CLAUDE.md` forbids waiting; replace each wait with the decision rule in `docs/PROCESS.md` section 4 (inference).
2. Feel constants and synthesis recipes are not in this document; they must come from other research or be tuned.
3. 2.5 and 2.6 disagree slightly on the first build (dash, three cards, ten upgrades appear only in 2.6); 2.6 is the fuller one.
4. Whether the prototype includes a boss: 2.5 and 2.6 both say one boss; the lead's deliverable is the core loop with a pressure ramp.
5. Real Safari and a real iPhone remain uncheckable; report them as "could not check" and ship the hidden debug line.
