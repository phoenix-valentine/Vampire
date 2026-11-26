# Mutation: Become the Monster. Game Design Document and Lessons v1.3 (pages 26 to 50)

Source: `68a24aa9-Mutation_Become_the_Monster._Game_Design_Document_and_Lessons_v1.3.pdf`, pages 26 to 50 of 75. All 25 pages were read; none was unreadable.

## What it is

These pages are the second third of Part 1, the game exactly as shipped in v1.3: the end of the act and spawn table, all seven bosses with every attack number (1.7), maps, props, animals, med kits and chests (1.8), growth inside one run (1.9), growth between runs (1.10), every screen, the HUD and the settings (1.11), and the first half-page of art and sound (1.12). [pp. 26-50]

Reading guide: this file is far longer than the 3000-word target (about 10,500 words, of which about 7,000 are the reference tables) because the 25 pages are almost only tables of numbers and the brief asked to keep every one. For a quick pass read "Numbers and thresholds", "What it means for Vampire: No Survivors", "Warnings and anti-patterns" and "Things the lead should decide or check" (about 2,700 words together). "Frameworks, lists and checklists" is a reference copy of the document's tables; look things up there by section number.

Important for the lead: **Part 2 "lessons" does not begin inside pages 26 to 50.** Page 50 ends in the middle of 1.12. There are no lesson sections (2.x), no prompts and no checklists on these pages. Everything below is the shipped design, almost all of it tables of numbers. Terms defined in earlier pages and used here without definition: Terrified, Stun, Lit, Marked Target, Elite Hunter, Veteran elites, modifiers, trophies, hybrids, the Chrysalis, forms, Overgrown, Luck, Apex gene, organisms (Ripper, Hydra, Larva, Carapace, Stalker), tags (CLAW, BLOOD, BONE, TOXIN, SPORE, BROOD, SHELL, NERVE), Dash and Apex buttons (1.2), Flesh orbs (1.3), Apex gene (1.4). See the notes for pages 1 to 25.

## Outline (the document's own section names, in order, with page numbers)

- (End of the section before 1.7; its heading is not on these pages.) Act table rows III and IV, Regroup rule [p. 26]
- 1.7 Bosses [pp. 26-35]
  - Which boss, when [p. 26]
  - Rules shared by every boss [p. 27]
  - Boss stat table (no heading) [p. 28]
  - 1. The Harvest Mob (crowd and objective) [pp. 28-29]
  - 2. Captain Ironwall (positioning duel) [pp. 29-30]
  - 3. The Black Ops Hunter (hide and seek) [pp. 30-31]
  - 4. The Steel Behemoth (machine breakdown) [p. 31]
  - 5. Death From Above (fight the sky) [p. 32]
  - 6. Project Apocalypse (counter-weapon) [pp. 32-33]
  - 7. Specimen Zero (mirror duel) [pp. 33-35]
  - Rewards [p. 35]
- 1.8 Maps, props, animals, med kits and chests [pp. 35-39]
  - The four maps [pp. 35-37]; Props [p. 37]; Animals [p. 38]; Med kits (supply crates) [p. 38]; Elite chests [pp. 38-39]
- 1.9 Run progression [pp. 39-42]
  - Run lengths [p. 39]; XP and levels [p. 39]; The level-up screen [p. 40]; Tools on the card screen [pp. 40-41]; Biomass [p. 41]; The Molting Chamber (between acts) [p. 41]; One run on a timeline [p. 42]
- 1.10 Long-term progression [pp. 42-45]
  - DNA earned at the end of a run [pp. 42-43]; The Nest (DNA shop) [p. 43]; Deeds (17) [p. 44]; Difficulty ladder [pp. 44-45]; The journal [p. 45]; Save data [p. 45]
- 1.11 Screens and the HUD [pp. 45-50]
  - Layout rules (no heading) [pp. 45-46]; HUD during play [pp. 46-47]; Screens [pp. 47-49]; Settings [p. 50]
- 1.12 Art and sound (start only) [p. 50]
  - Art style [p. 50]

## Frameworks, lists and checklists (keep every name, number, order and threshold exactly as written; paraphrase the prose around them)

### Act table, last two rows [p. 26]

| Act | Time | Stage banners | Squads (weight) | Events at peaks |
|---|---|---|---|---|
| III Extermination | 8:00 to 12:00 | HEAVY, then MILITARY at 10:00 | Pairs of flame trooper, rocket soldier, heavy gunner, juggernaut (3). Fireteams (2). Squads of 4: assault soldiers and a military sniper, from 10:00 (4). Machines. | Airstrike: a line of 7 circles (radius 30, 30 damage, 1 to 3.1 s). APC Drop. |
| IV Last Stand (finale) | 12:00 to 14:00 | EXTERMINATION | Squads of assault soldiers, military sniper, flame trooper (5). Pairs of hazmat troopers and juggernauts (3). Walkers. | Airstrike |

Regroup: in any breather there is a 45% chance of no spawns for 10 s and a supply crate landing. [p. 26]

### 1.7 Bosses

Seven bosses. Each is built on one idea the player has to read, has three phases, and ends its act. The fight is held in an arena-sized area of the current map. The spawn director stops while a boss is alive. [p. 26]

**Which boss, when** [p. 26]

| Act end | Time | Boss | Choice rule |
|---|---|---|---|
| I | 4:00 | The Harvest Mob | Always |
| II | 8:00 | Captain Ironwall or The Black Ops Hunter | The one never beaten on this save. If both or neither, random. If the Elite Hunter rival escaped this run, it is the Black Ops Hunter. |
| III | 12:00 | The Steel Behemoth or Death From Above | Same rule |
| Finale | 14:00 | Project Apocalypse, then Specimen Zero | Both, back to back, with a 15% heal between |

**Rules shared by every boss** [p. 27]

| Rule | Value |
|---|---|
| Before the fight | Banner "THEY PULL BACK", 4 s, 2 supply crates. Entering heals 20% (Act I) or 10%. |
| Intro | A 6 s banner says in one sentence how to beat it. The boss cannot be hurt for the first 2.2 s. |
| Phase change | At the health marks in the stat table. Boss cannot be hurt for 1.6 s, all ground warnings are cleared, 0.7 s of slow motion. In Act I the player also heals 8%. |
| Attack choice | Weighted random from the phase's list, never the same attack twice in a row |
| Rest between attacks | The "rest" in the tables. In phases 2 and 3 rests pass 1.3x faster (Black Ops Hunter: 1.4x always, on top). |
| Warning times | Circles, aim lines, beam lines and floor stripes last 1.15x the value in the code (Project Apocalypse 1.3x). The tables show the final time. |
| Phase 3 extra | Every 7 s (first after 4 s) one extra pattern, different per boss |
| Enrage | After 150 s: "IT IS DESPERATE". Boss deals +20% and takes more damage, rising from x1 to x2 over the next 90 s. |
| Escorts | Ordinary humans join every fight except the Harvest Mob: 2, 3, 4 alive by phase, a new pair every 4, 3, 2 s. They are food for kill-healing builds. |
| Rescue kit | When the player is below 25% health, a med kit appears on the far side of the arena (first after 8 s of fighting, then at most every 35 s). Heals 25%. |
| Animals | Animals on the map can still be eaten during the fight |
| Death | 3.4 s of explosions, all remaining humans Terrified 20 s |
| Stagger | 6 Stuns add up to one stagger, then 12 s of immunity |

Damage numbers in the boss tables are base values, multiplied by the boss's damage multiplier. A single boss hit can never exceed 45% of the player's max health. [p. 27]

**Boss stats** [p. 28]

| Boss | Health | Damage x | Phase 2 at | Phase 3 at | Arena (px) | Escorts |
|---|---|---|---|---|---|---|
| The Harvest Mob | 3,000 (shown as MORALE) | 1.1 | 70% | 35% | 980 x 680 | none |
| Captain Ironwall | 8,050 | 0.8 | 65% | 30% | 900 x 620 | constables, SWAT |
| The Black Ops Hunter | 6,900 | 2.8 | 65% | 30% | 900 x 620, 62% dark | constables, SWAT |
| The Steel Behemoth | 25,500 | 1.2 | 60% | 30% | 1040 x 700 | soldiers, SWAT, constables |
| Death From Above | 12,100 | 2.9 | 65% | 30% | 1040 x 700, 22% dark | SWAT, soldiers, constables |
| Project Apocalypse | 36,750 | 1.3 | 70% | 35% | 1000 x 720 | hazmat guards, SWAT |
| Specimen Zero | 32,000 | 2.8 | 65% | 30% | 960 x 680 | hazmat guards |

Short runs: boss health x0.75. Difficulty V: +20% health, +15% damage. Difficulty II: +10% damage. Escort stats: constable 26 health, melee 8. SWAT 34 health, shoots for 5. Soldier 40 health, 6. Hazmat guard 30 health, melee 8. [p. 28]

**1. The Harvest Mob (crowd and objective).** Idea: the health bar is the crowd's morale. An effigy cart circles the arena with the Elder ringing a bell on it. [p. 28]

- Damage to morale: each villager killed -15 (-20 if Terrified). Hits on the cart count 30%. Hits on the Elder count 72%. [p. 28]
- Waves (phases 1 and 2): arrows on an arena edge for 1.4 s, then villagers walk in: 6 every 6 s in phase 1, 4 every 8 s in phase 2. Phase 1 keeps up to 2 torchbearers alive, phase 2 up to 2 archers. [p. 28]
- Bell (phases 1 and 2, every 10 s): 1.3 s wind-up, a ring filling over the Elder and the words "HIT HIM!". If it completes: morale +60 and every villager is faster for 4 s. Dealing 22 damage to the Elder during the wind-up interrupts it. [p. 28]
- Phase 2, Pitchfork Wall: a line of villagers (14 health, 70 px/s) marches across the whole arena with a two-slot gap, "FIND THE GAP". Marchers break formation at the arena edge. Rest 6 s. [p. 29]
- Phase 2, Volley: 5 arrows in a fan after a 1.04 s aim, 12 each, speed 470. Rest 3 s. [p. 29]
- Phase 3, Burning cart: ignites (1.4 s) and chases, up to 150 px/s, turning 1 radian per second. Leaves fire (radius 26, 10 per second, 5 s), rams for 30 with heavy knockback. Lead it into the arena edge: it crashes (blast radius 92, 14) and leaves fires for 30 s. [p. 29]
- Phase 3, The Elder: thrown clear, lies stunned 4 s and takes x2. Then runs from the player at 70 px/s and rallies 5 villagers every 7 s. Hits on him count 100%. [p. 29]
- Phase 3 extra, "THE TORCHES FLY!": 5 circles, radius 32, 1.15 s, 12 each. [p. 29]

**2. Captain Ironwall (positioning duel).** Idea: a riot shield that turns to face you. Get behind him, or make him charge into something. [p. 29]

- The shield (phases 1 and 2): turns at 1.75 radians per second toward the nearest threat (a minion within 120 px counts). Hits from the front 60 degrees each side: 10% damage (blasts 50%). Hits from behind: x1.5. He walks at 55 px/s. [p. 29]
- Charge: lane warning 0.8 s (width 44, follows you for the first 0.5 s), then 560 px at 580 px/s. 26 and heavy knockback. If he hits the arena edge or a prop he is STUCK 1.7 s and takes x1.5 more. A car he hits twice explodes (radius 60, 18). Phase 2: two charges in a row. [p. 29]
- Slam: 0.7 s wind-up, then a ring that expands at 340 px/s to 360 px. 20. Dash through the ring. [p. 29]
- Phase 2, Gas: 3 circles, radius 40, 1.15 s. Each leaves a cloud (radius 66, 4.5 s) that halves your speed. [p. 29]
- Phase 2, Form up: if fewer than 3 humans are alive, 4 riot officers march at you for 3.5 s. [p. 30]
- Phase 3: the shield breaks, its shards become cover. He walks at 120 px/s and always faces you. No more blocking. [p. 30]
- Phase 3, Combo: two swings (cone, reach 82, warnings 0.5 s and 0.4 s, 18 each) then a leap onto you (circle radius 64 that follows you, 0.86 s, 24). Rest 0.9 s. [p. 30]
- Phase 3, Shotgun: cone warning 0.6 s, then 8 pellets of 8. Rest 0.6 s. [p. 30]
- Phase 3, Rage sprint: runs at you at 200 px/s for 1.1 s (14 on touch), straight into a Combo. [p. 30]
- Phase 3 extra, "GRENADES!": a ring of 4 circles, radius 36, 1.27 s, 16 each. [p. 30]

**3. The Black Ops Hunter (hide and seek).** Idea: the arena is dark and she is cloaked. Follow her footprints, break her aim with cover. [p. 30]

- Cloak (phases 1 and 2): while cloaked only blasts, melee and minions can hit her. Any hit reveals her for 1.2 s. Within 60 px she is always visible. She leaves a footprint every 0.22 s. [p. 30]
- Marked Shot: she runs (210 px/s) to a spot at least 280 px away, uncloaks, aims a laser: 1.61 s in phase 1, 1.27 s after. The line locks at 82% of the time. 32 damage. A prop between you blocks it ("COVER!"). Then 0.9 s of visible recovery: the damage window. [p. 30]
- Phase 2, Decoys: 3 decoys that also aim lasers. Touching or hitting one removes it. [p. 30]
- Phase 2, Mines: 6 mines in a ring around you (about 78 px). Armed after 1 s. 22, radius 44. They blow on their own after 9 s. Airborne dashes cross them safely. [p. 30]
- Phase 2, Harpoon: 0.75 s aim. A hit does 6 and reels you in at 270 px/s. Dashing snaps the line: she is staggered 1.5 s and takes x1.5. If she reels you in: a slash for 26. [p. 30]
- Phase 3: lights come up to 32% dark. No cloak, no decoys. [p. 30]
- Phase 3, Blink slashes: 3 in a row, each a line through you (width 20), 0.75 s, 20. Rest 1.1 s. [p. 31]
- Phase 3, Bone fan: cone warning 0.5 s, then 5 bones of 12 at 330 px/s. [p. 31]
- Phase 3 extra, "CROSSFIRE!": one horizontal and one vertical line through you, 1.2 s and 1.44 s, 18 each. [p. 31]

**4. The Steel Behemoth (machine breakdown).** Idea: a tank with a slow turret and parts that break off. [p. 31]

- Parts: hull x1. Rear engine x2. Gun pod (2,040 health) and two treads (2,550 each): damage to a part also counts 30% on the boss. Each broken tread: -40% speed. Breaking the gun pod removes the Sweep. [p. 31]
- Touching it: 14 and knockback (34 during a Crush). [p. 31]
- Main gun: the turret turns at only 0.8 radians per second: circle it. When it lines up (every 3.4 s at most): 0.92 s aim, then a shell lands after 0.98 s where you are heading: radius 72, 32. Phase 2: two shells. [p. 31]
- Sweep: cone warning 0.6 s, then 1.2 s of bullets (one every 0.06 s, 7 each) swept across 63 degrees. Rest 1.4 s. [p. 31]
- Crush: lane warning 1 s (width 96), then it drives 330 px/s until it hits the arena edge: STUCK 2.2 s, "GET BEHIND IT". [p. 31]
- Phase 2: deploys 4 soldiers when fewer than 3 humans are alive. Drops a mine behind it every 3.2 s. [p. 31]
- Phase 3, Meltdown: the turret blows off and lands 1.1 s later (blast radius 60, 20; it becomes cover with a fire for 60 s). The hull takes x1.5. Four flame jets rotate around it (0.95 radians per second, 10 per fireball, reach about 480 px) while it chases at 70 px/s. [p. 31]
- Phase 3 extra, "SHELLING!": a ring of 6 circles (radius 38) around you and one on you, 1.27 s to 1.96 s, 18 each. [p. 31]

**5. Death From Above (fight the sky).** Idea: a helicopter that cannot be hit while high. Its own attack brings it low. [p. 32]

- Altitude: high means untouchable. It circles the arena. [p. 32]
- Searchlight: a light (radius 62) chases you at 150 px/s. Stay in it 1.5 s: "LOCKED!", a barrage of 7 circles, radius 40, 1.09 to 1.44 s, 18 each. [p. 32]
- Strafing run: lane warning 1.1 s (width 58, 900 px long through you), then it crosses in 0.75 s: 22. It then hovers LOW for 3 s ("IT'S LOW - HIT IT!"). Its rotor wash pushes you away inside 170 px. [p. 32]
- Guaranteed window: after 12 s high it always starts a strafing run. [p. 32]
- Phase 2, Door gun: every 2.2 s, 6 bullets of 7. [p. 32]
- Phase 2, Rocket rain: 12 circles in a spiral out from you, radius 38, 1.15 to 2.67 s, 18 each. [p. 32]
- Phase 2, Winch: if fewer than 3 humans, it comes low for 3.6 s and drops 4 soldiers. [p. 32]
- Phase 3, Going down: it spins at low height for 6.5 s (it can be hit), spraying two opposite bullet streams (9 each, one pair every 0.075 s). Then "CRASH ZONE": radius 118, 1.96 s, 36. [p. 32]
- Phase 3, The wreck: keeps fighting from the ground: a gun sweep (cone 0.6 s, then 1 s of bullets, 8 each) or a cook-off (4 circles, radius 44, 1.15 to 2.0 s, 18 each). [p. 32]
- Phase 3 extra, "FLARES!": 4 circles that follow you, radius 34, 14 each. [p. 32]

**6. Project Apocalypse (counter-weapon).** Idea: a walker fitted with three modules chosen against the player's own build. Break the modules to switch them off. [p. 32]

- Body: takes 50% (40% in phase 3). Knee joints x1.5. [p. 32]
- Modules: three, chosen from the player's most-held tags, each 2,250 health. Damage to a module counts 25% on the boss. [p. 33]
- Shock Plating (CLAW, BLOOD): stand within 150 px for 0.6 s: a circle of radius 160, 0.91 s, 18. Then 2.4 s rest. [p. 33]
- Shield Drones (BONE): 3 drones (375 health) orbit and block shots. A dead drone returns after 8 s. [p. 33]
- Purge Sprinklers (TOXIN, SPORE): every 8 s all Poison, Bleed and Acid are washed off the boss. [p. 33]
- Flame Turret (BROOD): every 5 s: cone warning 0.7 s, then 16 fireballs of 10 at the nearest minion or you. [p. 33]
- Mortar Pods (SHELL, NERVE): stay within 40 px of one spot for 1.2 s: 3 circles, radius 42, 1.3 s, 18 each. [p. 33]
- Beam cannon (always): every 5 s (4 s from phase 2): a line across the arena, width 26, 1.63 s warning, lit 0.5 s, 34. [p. 33]
- Missiles (always): every 7 s (5 s from phase 2): 6 homing rockets, 16 each, speed 170, 4.2 s life. [p. 33]
- Stomp: when you are within 260 px, every 4.5 s: circle radius 56, 1.17 s, 26. [p. 33]
- Phase 2, Electrified floor: every 8 s (10 s in phase 3) every other 70 px stripe of the floor lights: 1.69 s warning, live for 1 s, 18. The pattern alternates. [p. 33]
- Phase 3, Recapture beam: the core opens. A beam drags you toward it at 35 to 75% of your own speed. Within 44 px you are CAGED 1.8 s (9 every 0.45 s) and then thrown out. The core takes x3 if you are within 190 px, x1 from further away. [p. 33]
- Below 20% health, "YOUR KIND AWAKENS": two siblings break out and fight for the player until the end. [p. 33]
- Phase 3 extra, "PURGE!": three horizontal lines, 20 each. [p. 33]

**7. Specimen Zero (mirror duel).** Idea: a copy of the player's own creature and build, drawn in bone white and steel with a control collar. It reads the player's attacks and dodges them the way a player would. [p. 33]

| Element | Phase 1 | Phase 2 | Phase 3 |
|---|---|---|---|
| Reaction time | 0.45 s | 0.30 s | 0.25 s |
| Share of attacks it notices | 70% | 85% | 92% |
| Speed | 150 | 165 | 185 |
| Distance it circles at | 150 px | 140 px | 120 px |
| Rest between attacks | 1.1 to 1.6 s | 0.85 to 1.35 s | 0.65 to 1.15 s |

[p. 34]

- Dodge: 2 dash charges, shown as pips over its head. 2.6 s per charge. A dash is 0.2 s at 850 px/s and cannot be hit. It cannot dodge while it attacks. [p. 34]
- Overheat: 4 dodges within 8 s: OVERHEATED, stunned 1.6 s and takes x1.3. [p. 34]
- Servo Claws: 3 swings, cones of reach 92 that follow you, warnings 0.7, 0.6, 0.6 s (phase 3: 0.65, 0.55, 0.55), 16 each. Then 1.1 s recovery (1.3 s in phase 3). [p. 34]
- Rail Spine: aim line 1.15 s (0.98 s from phase 2), locks at 72%. A slug of 22 at 620 px/s. From phase 2: three slugs, aimed ahead of you. 0.8 s recovery. [p. 34]
- Thruster Lunge: lane warning 0.7 s (width 40, follows you for 0.35 s), then 380 px at 760 px/s. 22 and knockback. 0.9 s recovery. [p. 34]
- Phase 2, Handler drones: two drones (640 health each) hover near it and each repairs 0.22% of its health per second until destroyed. [p. 34]
- Phase 2, Coolant Vents: 3 circles (on you and two ahead of you), radius 46, 1.09 to 1.32 s, 10. They leave frost for 5 s that slows you. [p. 34]
- Phase 2, Mimic Graft: copies the player's style, set once from tags. Melee (CLAW, BLOOD, SHELL): a 150 degree sweep, reach 135, 0.75 s, 20. Ranged (BONE, NERVE): 7 bones of 9. Status (TOXIN, SPORE): 3 circles that leave gas, 8 per second for 4 s. Minion (BROOD): up to 3 hounds (70 health). [p. 34]
- Phase 3, Frenzy: the drones explode. Every 14 s or more: 1.2 s build-up, then 3.5 s with +20% speed, a third of the rest time and 4-hit claws. When it ends it is EXHAUSTED: stunned 2.2 s, takes x1.3. [p. 35]

**Rewards** [p. 35]

| After | Reward |
|---|---|
| Bosses 1 to 5 | +60 Biomass, +1 Reroll, then one of three cards: the boss's Apex gene (1.4), Ripen (+1 level to your two strongest mutations below Level 3), or Growth (+1 body slot). Then the Molting Chamber (1.9). |
| Act III boss | A choice: enter the finale, or end the run as a win |
| Specimen Zero | A final choice: devour it or let it go. Each unlocks a different coat (1.10). Then the victory screen. |

### 1.8 Maps, props, animals, med kits and chests

Each act has its own map: 100 x 64 tiles of 16 px (1600 x 1024 px), generated from the run's seed so the layout differs each run but the landmarks are always there. The camera follows the player and shows about a fifth of the map. The player starts in the middle. [p. 35]

Each map defines an edge for boss fights (a ring that closes in), but v1.3 never switches it on; boss fights are simply held inside the arena rectangle. The last column records design intent only. [p. 35]

| Map | Act | Look | Layout | Map hazards | Helpful features | Boss-fight edge (not active) |
|---|---|---|---|---|---|---|
| Farmland [p. 36] | I | Dusk, fireflies, torches | Two dirt roads cross. Two quadrants hold a farmyard (farmhouse, shed, coop, washing line, woodpile, outhouse), two hold livestock pens. Wheat fields in the gaps. Hedgerow trees at the edge. | Haystacks, hay bales, carts and woodpiles catch fire from any flame or blast, burn 5 to 7 s, and spread to hay within 58 px (55% chance per second). Breaking a torch post lights what is next to it. Fire also hurts humans (5 per 0.5 s). | Pens and the coop (animals). Sheds and carts as cover. | A ring of fire (10 per second) |
| Main Street [p. 36] | II | Night, rain, streetlights | Two streets with shops on the north side, kerbside parked cars, a car park, a plaza, crossings with traffic lights, a police checkpoint, ruins and barricades. | Car alarms: the first hit on a car starts a 5 s alarm, then a police pair arrives. A destroyed car burns 2.4 s inside a warning circle (radius 46), then explodes for 30 and leaves fire. | Storefronts: smash one and a supply crate drops (at most 5 per map). Jersey barriers and dumpsters as cover. | A police cordon |
| Forward Base [p. 36] | III | Night, ash and embers, floodlights | A gravel compound with gates, a fuel depot, container yard, motor pool, helipad, bunker. Sandbag nests and watchtowers at the corners. Wire and tank traps outside, trenches on both sides. | Floodlights: a sweeping cone (190 px); inside it you are Lit and every marksman leads its shots. Barbed wire: -45% speed and 2 damage per second until cut. Fuel barrels: 0.6 s warning, then 28 in radius 44 and fire for 4 s. Barrel stacks: 36 in radius 60. Generators: 24 in radius 42. Blasts set off other barrels. | Sandbags and blast walls as cover. Lure a squad into the fuel depot. | Wire and tank traps |
| Research Complex [p. 37] | Finale | Emergency power, violet lights, sparks | Two long grated corridors with lab cells between them: glass walls with doors, specimen tanks, benches, server racks, pipes. | Containment lasers across the corridors: off 2 s, violet warning 1 s, on 1.5 s, staggered so a gap travels. 22 to the player, 14 per 0.3 s to humans. Hazard barrels: 22 in radius 40, then Acid on the floor for 6 s. | One terminal per corridor: break it and that corridor's lasers stay off. Specimen tanks: break one for a pool that heals 12 per second for 12 s. | A laser fence (14 per second) |

**Props** [p. 37]

- Everything breaks: every prop has health and one to three damage looks (for example intact, damaged, destroyed). Trees 45 to 70, ruins 120, tank traps 80, old wrecks 130 to 160, stores 60, dumpsters 140, containers 260, bunkers 320.
- How the player breaks them: any attack that covers an area damages props in it. Blasts do x2.5 to props. Pushing against a prop while moving rams it every 0.25 s for 14 + level.
- Walking through rubble: the player walks through anything already broken or wrecked, so rubble never traps them.
- Cover: solid props stop bullets, both ways. Each bullet stopped chips the prop for 60% of its damage.
- Humans and props: humans slide around props toward the player. War machines flatten any prop with 140 health or less.
- Explosions: map explosions hurt humans for x1.6 and kill animals.
- Materials: each prop has a material (wood, stone, straw, water, glass, metal, paper, sand) that decides its debris and break sound.

**Animals** [p. 38]. Chickens, pigs and cows stand in pens on the Farmland map; three hens inside each coop. Breaking a fence, gate or coop frees them and they run from the player. Touching an animal eats it, also during a boss fight.

| Animal | Heals | XP | Flee speed |
|---|---|---|---|
| Chicken | 3 | 1 | 95 |
| Pig | 6 | 3 | 80 |
| Cow | 10 | 5 | 70 |

**Med kits (supply crates)** [p. 38]

- Look: a white box with a red cross, with a pulsing first-aid cross as an off-screen pointer.
- Heal: 10% of max health.
- Pickup: within 24 px. Only taken when at least 10% health is missing, so none is wasted. Exception: builds whose overheal becomes a shield take it whenever the shield is not full.
- Sources: 2 crates near the player on every Regroup event. 2 crates before each boss. 1 per smashed storefront. In boss fights, the rescue kit (25%, see 1.7).

**Elite chests** [pp. 38-39]

- Drop: every elite and the Elite Hunter drop a chest where they die. It lands after 0.3 s and stays 40 s. [p. 38]
- Open: walk over it (18 px). It opens after 0.5 s and pauses the game on a card screen. [p. 38]
- Cards: 1. The elite's trophy if its kind has one (or +1 level if you own it), otherwise a Rare or better mutation. 2. An upgrade of something you own. 3. Digest: heal 25%. Digest is not shown when less than 10% health is missing. [p. 38]
- Rich chest: from Veteran elites, two-modifier elites and the Elite Hunter. The first card is Epic. Ordinary chests have a 30% chance of Epic. [p. 39]
- Leave it: a "skip" button gives +20 Biomass instead. [p. 39]

### 1.9 Run progression

Inside one run the player grows through four things: levels (cards), elite chests, boss rewards and the Molting Chamber between acts. Two currencies inside a run: XP (Flesh) and Biomass. [p. 39]

**Run lengths** [p. 39]

| Length | Acts | Clock | Changes |
|---|---|---|---|
| Full | I, II, III, optional finale | 14:00 | none |
| Short | The same, faster | 12:00 on the bar | The director's clock runs 1.6x faster, spawn budget x0.78, boss health x0.75, XP x1.35, DNA halved |
| Sprint | Act I only | 4:00 | Clock 1.3x faster, budget x0.78, DNA a third. After the boss the player may "Keep hunting" into Acts II and III as a Short run. |

**XP and levels** [p. 39]. XP comes from Flesh orbs (1.3). XP needed for the next level: levels 1 to 5 need 5, 8, 12, 18, 26. From level 6: round(6 + 3L + 0.35L^2), plus 12 for levels 6 to 9.

| Level | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| XP to next | 5 | 8 | 12 | 18 | 26 | 49 | 64 | 71 | 92 | 130 | 206 | 300 | 411 |
| Total so far | 5 | 13 | 25 | 43 | 69 | 118 | 238 | 382 | 555 | 906 | 1,776 | 3,080 | 4,905 |

Tuning target: a player who hunts actively reaches level 10 by the Act I boss. Each level gives +1 max health and a card screen. Levels 15 and 25 first show a Growth screen: pick one of three body slots to add (never legs). [p. 39]

**The level-up screen** [p. 40]. The game pauses and shows 3 cards; the player picks one.

| Rule | Value |
|---|---|
| Number of cards | 3. A 4th with the Nest's "Fourth Card" or the "6 hybrids" deed, or when a hybrid is ready. Never more than 4. |
| What a card is | 40% chance: an upgrade of something owned. When every slot is full, half of those are Overgrown (Level 4) offers instead. Otherwise: a new mutation. |
| Rarity of a new mutation | Epic 5% + 0.1% per Luck. Rare 30% + 0.5% per Luck. Otherwise Common. |
| Pity | After 5 offers with no Rare or Epic, the next card is Rare (15% chance it is Epic) |
| Weights | x1.5 if the mutation shares a tag with something owned. x the organism's own weights. |
| Full slot | The card says what it replaces: the lowest-level organ in that slot. The new organ starts one level below the old one's level, and the player gets +15 Biomass. |
| Guarantees | At least one card is always useful. If nothing can be offered the slot is filled by Gorge: heal 15%, +10 Biomass. |
| Starting organ | Before the run the player's first organ comes from the organism (a choice of two for Ripper and Hydra) |

**Tools on the card screen** [p. 40]

- Reroll: redraws all cards. 1 free per run (0 at Difficulty VII and above), +1 per boss, more from the Nest. With none left it costs 40 Biomass.
- Banish: removes one card from this run for good and replaces it. 1 per run, more from the Nest.
- Skip: take nothing, +20 Biomass.

Touch: the first tap on a card selects it and shows its details; the second tap takes it. Computer: keys 1 to 4 pick, R rerolls, B banishes, S skips. [p. 41]

**Biomass** [p. 41]: elite kill 15; boss kill 60; skipping a card screen or a chest 20; replacing an organ 15; Gorge card 10; leftover at the end of the run: each 10 becomes 1 DNA.

**The Molting Chamber (between acts)** [p. 41]. A calm shop screen after each boss reward. The run is saved here, so closing the game loses nothing; the menu then offers "Resume".

| Action | Cost in Biomass | Rule |
|---|---|---|
| Buy a mutation | 60 | 3 on offer, drawn from mutations the player does not own and has a slot type for |
| Upgrade | 50 | +1 level to any owned mutation below Level 3. The card shows what the next level does. |
| Heal | 40 | +30% health, once per visit |
| Reroll the shop | 15, then +5 each time | |
| Undo | free | Takes back the last purchase, Biomass and all (one step) |
| Emerge | free | Starts the next act. Health is raised to at least 40%. 2 s of invulnerability. |

At Difficulty VII and above every price is x1.25. [p. 41]

**One run on a timeline** [p. 42]

| Time | What happens |
|---|---|
| 0:00 | Start on Farmland with one organ. The first minute is softer (damage 60% to 100%, no riflemen for 45 s). |
| 1:10, 2:20, 3:20 | Marked Targets (elites) |
| 3:00 | Mob Surge |
| 4:00 | The Harvest Mob. Reward, then Molting Chamber. |
| 4:00 to 8:00 | Main Street: police, then SWAT from 6:00 |
| 5:00 to 6:00 | The Chrysalis: evolution |
| 6:20 | The Elite Hunter may appear |
| 8:00 | Captain Ironwall or the Black Ops Hunter. Reward, Molting Chamber. |
| 8:00 to 12:00 | Forward Base: heavy troops, the army from 10:00, war machines |
| 12:00 | The Steel Behemoth or Death From Above. Reward. Choice: finale or end. |
| 12:00 to 14:00 | Research Complex |
| 14:00 | Project Apocalypse, then Specimen Zero. Devour or spare. Victory. |

### 1.10 Long-term progression

Between runs the player keeps four things: DNA (currency), Nest purchases, deeds (achievements that unlock content) and the journal (what has been discovered). Nothing bought between runs makes the monster stronger in raw numbers. Purchases widen the card pool and add tools. The difficulty ladder is the long-term challenge. [p. 42]

**DNA earned at the end of a run** [pp. 42-43]

| Part | DNA |
|---|---|
| Time survived | 1 per full minute |
| Bosses killed | 5 each |
| First discoveries (a new human, mutation, hybrid or form in the journal) | 3 each |
| Acts reached | 2 each |
| Win | 10 (+10 more with the "1,000 kills" deed) |
| Difficulty | The sum above x (1 + 15% per difficulty level) |
| Leftover Biomass | +1 per 10 |
| Short run | Total halved |
| Sprint | Total divided by 3 |
| Quit before 0:30 | 0 |
| First win at a difficulty level | A one-time bonus of 15 + 25 x level, and the next level opens |

**The Nest (DNA shop)** [p. 43]

| Purchase | Cost | Effect |
|---|---|---|
| Extra Reroll | 60, then 120 | +1 Reroll per run (max 2) |
| Extra Banish | 60, then 120 | +1 Banish per run (max 2) |
| Fourth Card | 200 | Level-ups show 4 cards |
| Hunter Pack | 40 | Adds Gut Hooks, Stinger Tail, Rupture Pulse, Death Bloom, Hive Heart to the pool |
| Predator Pack | 60 | Adds Sonic Organ, Symbiotic Organ, Berserker Tissue, Apex Instinct, Cellular Rebirth |
| Evasion Pack | 70 | Adds Spring Limbs, Wings, Emergency Shedding, Phase Membrane |
| Coat: Dusk | 30 | A colour scheme for the monster |
| Coat: Bone | 30 | |
| Coat: Toxic | 40 | |

Everything in the Nest costs 830 DNA in total. The Nest screen has three tabs: Upgrades (tools and packs in one list), Skins (coats) and Deeds. [p. 43]

**Deeds (17)** [p. 44]

| # | Deed | Unlocks |
|---|---|---|
| 1 | Reach Act II | Larva |
| 2 | Hold SHELL 4 in one run | Carapace |
| 3 | Reach Act III | Stalker |
| 4 | Win a run | Hydra, the finale, Difficulty I |
| 5 | Open 10 elite chests in total | The three deed-gated trophies |
| 6 | Discover 6 hybrids | A 4th card on level-ups |
| 7 | Kill Captain Ironwall without taking a hit from the front | Coat: Scarred |
| 8 | Win without a Back organ | Coat: Shadow |
| 9 | Gib 500 humans in one run | Coat: Arterial |
| 10 | Kill Project Apocalypse with every module broken | Coat: Sibling |
| 11 | Become all seven forms | Coat: Chimera |
| 12 | Devour Specimen Zero | Coat: Chrome |
| 13 | Let Specimen Zero go | Coat: Leash |
| 14 | Win as every organism | (mark of completion) |
| 15 | Win at Difficulty V | (mark of completion) |
| 16 | Win at Difficulty X | (mark of completion) |
| 17 | Kill 1,000 humans in one run | +10 DNA per win |

**Difficulty ladder** [pp. 44-45]. Ten levels. Each adds one rule and keeps all the earlier ones. Each adds +15% DNA. Picked on the organism screen with minus and plus buttons, shown on the pause screen.

| Level | Name | Added rule |
|---|---|---|
| I | Wanted | Elites +25% health. One extra Marked Target per act (2:30 into the act). |
| II | Hunted | Humans and bosses deal +10%. The soft first minute is removed. |
| III | Organized | Squads have one more member. Each new squad type arrives 30 s earlier. |
| IV | Rationed | Healing -20% |
| V | Escalation | Bosses +20% health and +15% damage |
| VI | Hardened | Humans +25% health |
| VII | Taxed | Molting Chamber prices +25%. No starting Reroll. |
| VIII | Swarming | 25% more humans |
| IX | Veterans | Elites carry two modifiers (their chests are rich) |
| X | Extinction | Humans deal +15%. The finale is mandatory. The largest single hit rises to 40% (55% from bosses). |

**The journal** [p. 45]. Six tabs: Mutations (every organ with all levels; undiscovered ones shown dark), Hybrids (recipes, tap for a detail sheet), Evolutions (requirements, tap for a detail sheet), Bestiary (every human met, with its template's counter-advice, plus a "Glowing elites" sheet explaining modifiers), Bosses (defeated, undefeated or not met yet, with the one-line tell) and Records (best runs and totals). Deeds live in the Nest, next to what they unlock.

**Save data** [p. 45]. One save in the browser (localStorage key `mutationbtm.save.v1`): DNA, Nest purchases, deeds, discoveries, boss kills, highest difficulty, statistics, the chosen organism, coat and difficulty, and all settings. A run in progress is saved separately at each Molting Chamber (key `mutationbtm.run`). The code can turn the save into a text code for copying to another device, but the v1.3 settings screen has no button for it (the document says it was not verified that any screen reaches it).

### 1.11 Screens and the HUD

- Every screen is drawn on the interface canvas in "units". Sideways and on a computer the layout is 480 x 270 units. Upright it is 270 units wide and as tall as the phone allows (about 585 on an iPhone 13). Every screen has two hand-made layouts, one per orientation, not one stretched layout. [p. 45]
- Upright layout rules: one column; buttons 27 units tall (about 40 to 44 px on a phone); the main action in the lower half where the thumb is; cards two per row at full size; nothing in the thumb zone during play except the Dash and Apex buttons. [p. 46]
- Phone edges: the battlefield and screen backgrounds fill the whole screen, under the notch and home bar; text and buttons stay inside the safe area. [p. 46]

**HUD during play** [pp. 46-47]

| Place | Element | Details |
|---|---|---|
| Top left | Level badge, health bar, XP bar | Health bar is red, flashes under 30%, shows the number beside it. A pale strip on top is the overheal shield. The XP bar under it is cyan. Status chips stack below. |
| Top centre | Threat bar | Six segments for the six stages (VILLAGE to EXTERMINATION), a marker for the clock, a boss icon at each boss time, and the text "STAGE · mm:ss". Upright it sits on a second row. |
| Under the threat bar | Boss bar | Slides in. Boss name, "PHASE n" (or "MORALE"), a pale lag bar behind the red one, and ticks at the phase marks. |
| Top right | Biomass count, pause button | Biomass sits right beside the pause button. It turns gold at 60 (enough to buy). |
| Bottom, computer only | Dash ring and Apex ring | Fill as they recharge |
| Bottom corner, touch only | Dash button, Apex button | See 1.2 |
| Screen edges | Arrows | Gold: a Marked Target. Orange: incoming fire from off screen. A pulsing first-aid cross: a med kit off screen. |
| Centre top | Banner | One at a time, each with its own duration (boss briefs 6 s). Act names, stage names, events, boss phases. |
| Lower centre | Tip box | Short first-time tips (8 in total), each shown once per save |
| On the monster | The build | There is no organ strip during play. Every organ is drawn on the creature's body, so the body is the build display. |
| In the world | Warnings and numbers | Ground circles that fill, dashed aim lines that turn solid just before firing, lanes, cones. Damage numbers only on big enemies by default. Flesh orbs coloured by value from burgundy to glowing yellow. |

**Screens** [pp. 47-49]

| Screen | What is on it | Notes |
|---|---|---|
| Title [p. 47] | Animated logo, tagline, "Tap to start", a live battlefield running behind it | "Headphones recommended" |
| Main menu [p. 47] | "Hunt · (organism)" as the big button. After the first run: Choose organism, Journal, The Nest. Feedback. Gear (settings) and flag (language) in the corner. "Resume hunt · Act · Level" if a checkpoint exists. A "Last hunt / Best" box. | The menu grows with the player: a first-timer sees only Hunt and Feedback |
| Choose organism [p. 47] | Five cards: creature drawn large, name, two-line description, its special rules (starting weapon first), the seven slot icons with counts (green if above default, red if below). Locked ones shown as silhouettes with the unlock condition. Below: the difficulty row (name, rule text, large minus and plus), a Length button (Full, Short, Sprint), "Start the hunt". | A badge marks organisms that have won |
| First organ [p. 47] | A card screen: "Choose your first organ" (only when the organism offers two) | No tools |
| Level-up [p. 47] | Title "LEVEL n", the creature at the left with the target slot glowing, the cards in a row, a detail box for the selected card, tool buttons (Reroll, Banish, Skip +20), Biomass count | Upright: cards two per row, tools above the home bar |
| Elite chest [p. 48] | Same card layout, title "ELITE CHEST", the elite's name, a Skip button | |
| Boss reward [p. 48] | Three cards: Apex gene, Ripen, Growth | No tools |
| Chrysalis [p. 48] | One large card per available form: the form's creature art, name, passive changes, Apex power | Chimera always present |
| Boss intro [p. 48] | Black bars slide in. Boss portrait at the right, a panel with "WARNING · ACT n BOSS", the name, its quote and its one-line tell. "Tap to fight". | Specimen Zero's portrait is the player's own creature in white |
| Pause [p. 48] | Organism, level, time, difficulty line. Four tabs: Body (the creature large, in its evolved form, with every organ and level listed by slot), Tags (counts and bonuses), Forms (progress toward each evolution), Stats. Buttons: Feedback, Resume, Settings, Restart, Quit to Nest. | Restart and Quit ask for confirmation |
| Molting Chamber [p. 48] | Its own painted background. Three shop cards with prices, a detail box, an Actions panel (Upgrade, Reroll shop, Heal 30%, Undo), Biomass count, "Emerge". Upgrade opens a list of owned mutations showing "Lv 1 -> 2" and the next level's text. | "No time limit. Next: Act II" |
| Death recap [p. 48] | "WHAT KILLED YOU": the killer's name and attack with the damage. "THE LAST 5 SECONDS": up to 6 hits with time, source, damage and whether each was warned. One tip chosen by the kind of damage. Continue. Report / feedback. | Meant to be read in under 5 seconds |
| End of run [p. 49] | Title (win, death or quit), the final creature large, its form and organism, seven result rows (time, reached, bosses, kills and gibs, level, most-used organ, hybrids), damage by organ as bars with percentages, Biomass and DNA earned, any new unlock or record, the closest deed with a progress bar. Buttons: Mutate again, Nest, Organism, Back to menu. | |
| Victory [p. 49] | Three variants: Sprint cleared (Keep hunting or finish), The army is broken (descend to the finale or end as a win), and the finale (Devour it or Let it go, then the ending text) | |
| The Nest [p. 49] | DNA total, three tabs: Upgrades, Skins, Deeds. Each row: icon, name, effect, price or progress. | |
| Journal [p. 49] | Six tabs (1.10), paged lists, detail sheets | |
| Settings [p. 49] | 14 settings in three columns sideways, two pages upright. Touch-only settings are hidden on a computer. | List below |
| Language picker [p. 49] | 20 languages by their own names | Opens from the flag |
| Feedback [p. 49] | Six categories (Bug, Balance and others), name, email, message (1,000 characters), a preview of the game details sent with it, Send, Cancel. If sending fails the message is queued and an "Email it instead" button appears. | Reachable from the menu, pause, death recap and victory |

**Settings** [p. 50]

| Setting | Options | Default |
|---|---|---|
| Language | Auto or one of 20 | Auto |
| Device | Auto, PC, Mobile | Auto |
| Screen layout | Auto, Portrait, Landscape | Auto |
| Master volume, Music, Effects | 0 to 100 | 80, 70, 90 |
| Zoom | Auto, Far, Normal, Close | Auto |
| Screen shake | Off, Reduced, Full | Off |
| Damage numbers | Big enemies, All, Off | Big enemies |
| Screen edges | Fill, Safe area | Fill |
| Buttons on the left | On, Off | Off |
| Aim stick (upright) | On, Off | On |
| Vibration | On, Off | On (Android only; iPhones cannot vibrate from a web page) |
| Full screen | Button | |

### 1.12 Art and sound (first half-page only) [p. 50]

- Everything was made by code. No drawn image files and no recorded audio. Art is generated by Python scripts into sprite sheets. Sound is synthesised in JavaScript when the game loads.
- Art style, three points:
  1. Pixel art, top-down with a slight tilt (things further up the screen are further away; circles on the ground are drawn squashed to about 72% height).
  2. Dark horror palette. The monster is flesh reds, bone and dark crimson. Humans are muted cloth, khaki and steel so the monster always stands out. Interface accents: gold for rewards, cyan for dash and XP, amber for warnings, violet for lab hazards.
  3. The body is the build. Each mutation is drawn on the creature at an anchor point for its slot and changes look with level. The player reads the build from the monster, not from a list.

## Numbers and thresholds (a table: what | value | page)

Per-boss attack values are in the boss lists above. This table collects the values most likely to be reused.

| What | Value | Page |
|---|---|---|
| Full run length; act boundaries | 14:00; 4:00, 8:00, 12:00, 14:00 | 26, 39, 42 |
| Short run | 12:00 on the bar, clock 1.6x, spawn budget x0.78, boss health x0.75, XP x1.35, DNA halved | 39 |
| Sprint run | Act I only, 4:00, clock 1.3x, budget x0.78, DNA a third | 39 |
| Soft first minute | Damage 60% to 100%, no riflemen for 45 s | 42 |
| Elites (Marked Targets) in Act I | 1:10, 2:20, 3:20; Mob Surge at 3:00 | 42 |
| Regroup | 45% chance in any breather; no spawns 10 s; a supply crate | 26 |
| Level target | Level 10 by the Act I boss (4:00) | 39 |
| XP to next, levels 1 to 5 | 5, 8, 12, 18, 26 | 39 |
| XP to next, from level 6 | round(6 + 3L + 0.35L^2), plus 12 for levels 6 to 9 | 39 |
| Per level | +1 max health and a card screen | 39 |
| Cards per level-up | 3 (never more than 4) | 40 |
| Upgrade-of-owned chance | 40% | 40 |
| Rarity | Epic 5% + 0.1% per Luck; Rare 30% + 0.5% per Luck | 40 |
| Pity | After 5 offers with no Rare or Epic: Rare (15% Epic) | 40 |
| Tag weight | x1.5 for a shared tag | 40 |
| Fallback card (Gorge) | Heal 15%, +10 Biomass | 40 |
| Reroll, Banish | 1 each per run; extra Reroll costs 40 Biomass | 40 |
| Skip | +20 Biomass | 40, 41 |
| Biomass sources | Elite 15, boss 60, skip 20, replace 15, Gorge 10 | 41 |
| Shop prices (Biomass) | Mutation 60, upgrade 50, heal 40 (+30% health, once), reroll 15 then +5 | 41 |
| Leaving the shop | Health raised to at least 40%; 2 s invulnerable | 41 |
| Boss count; phases | 7; 3 each | 26 |
| Boss health range | 3,000 to 36,750 | 28 |
| Boss damage multipliers | 0.8 to 2.9 | 28 |
| Phase marks | Phase 2 at 60 to 70%, phase 3 at 30 to 35% | 28 |
| Boss intro | 6 s banner; boss cannot be hurt for 2.2 s | 27 |
| Phase change | 1.6 s cannot be hurt; warnings cleared; 0.7 s slow motion | 27 |
| Warning-time multiplier | 1.15x code value (Project Apocalypse 1.3x) | 27 |
| Enrage | After 150 s: +20% damage dealt; damage taken x1 to x2 over 90 s | 27 |
| Largest single boss hit | 45% of player max health (Difficulty X: 40% normal, 55% from bosses) | 27, 45 |
| Stagger | 6 Stuns, then 12 s immunity | 27 |
| Rescue kit | Below 25% health; first after 8 s; at most every 35 s; heals 25% | 27 |
| Pre-boss heal | 20% (Act I) or 10%; 2 supply crates; finale 15% between the two bosses | 26, 27 |
| Cone warnings on these pages | 0.4 to 0.75 s (my summary of the boss tables) | 29-34 |
| Lane warnings | 0.7 to 1.1 s (my summary) | 29-34 |
| Ground-circle warnings | 0.86 to 2.67 s, most single circles 1.09 to 1.3 s; airstrike 1 to 3.1 s (my summary) | 26, 29-34 |
| Aim-line, line and beam warnings | 0.75 to 1.63 s; floor stripes 1.69 s (my summary) | 30-34 |
| Aim line lock point | 82% (Marked Shot), 72% (Rail Spine) of the aim time | 30, 34 |
| Map size | 100 x 64 tiles of 16 px = 1600 x 1024 px; camera shows about a fifth | 35 |
| Boss arenas | 900 x 620 to 1040 x 700 px | 28 |
| Med kit | Heals 10% of max; pickup radius 24 px; only if at least 10% missing | 38 |
| Animals | Chicken 3 heal / 1 XP, pig 6 / 3, cow 10 / 5 | 38 |
| Elite chest | Lands after 0.3 s, stays 40 s, pickup 18 px, opens after 0.5 s; Digest heals 25%; 30% Epic chance | 38, 39 |
| Prop cover | A stopped bullet chips the prop for 60% of its damage; blasts x2.5 to props | 37 |
| Nest total | 830 DNA | 43 |
| DNA per run | 1 per full minute, 5 per boss, 3 per first discovery, 2 per act, 10 per win; x(1 + 15% per difficulty level); 0 if quit before 0:30 | 42, 43 |
| Difficulty levels; deeds | 10; 17 | 44 |
| Interface units | 480 x 270 sideways; 270 wide x about 585 tall upright (iPhone 13) | 45 |
| Upright button height | 27 units, about 40 to 44 px | 46 |
| Health bar flash | Under 30% | 46 |
| First-time tips | 8 in total, each once per save | 46 |
| Death recap | Last 5 seconds, up to 6 hits, readable in under 5 seconds | 48 |
| Settings; languages | 14; 20 | 49, 50 |
| Default volumes | Master 80, Music 70, Effects 90 | 50 |
| Feedback message | 1,000 characters, six categories | 49 |
| Ground circle squash | About 72% height | 50 |

## What it means for Vampire: No Survivors

Everything in this section applies Mutation's shipped design to another game, so every "for Vampire" statement is inference unless marked as a document fact.

### (a) Process for an AI building alone

- Document fact: all art and sound were made by code (Python scripts into sprite sheets, sound synthesised in JavaScript at load), with no image or audio files. [p. 50] Inference: a code-only asset pipeline carried the whole shipped game, so the same route is open for Vampire after the plain-shapes prototype.
- Document fact: the GDD separates "design intent" from "shipped" (the closing boss-fight ring is defined on every map but v1.3 never switches it on) and says "not verified" where a path was not checked (save transfer code). [pp. 35, 45] Inference: copy this habit in DESIGN.md: mark each rule as live, defined-but-off, or not verified.
- Inference: every system here is specified as a table of numbers with one rule per row. That format is easy for an AI to implement and to check against code.

### (b) Core loop, controls and feel

- Document fact: the tuning target is level 10 by the 4:00 boss, with XP steps 5, 8, 12, 18, 26 for the first five levels. [p. 39] Inference: assuming a run starts at level 1, that is nine card screens in four minutes, heavily front-loaded (first card after 5 XP), and by the formula about 311 XP in 240 s, roughly 1.3 XP per second on average. A plain-shapes prototype of about 4:00 (Mutation's Sprint length) with this cadence is a ready reference for one of the three variations.
- Document fact: the first minute is softer (damage 60% to 100%, no ranged riflemen for 45 s), with elites at 1:10, 2:20, 3:20 and a surge at 3:00. [p. 42] Inference: a paced first act needs a soft start, three spikes and one surge before the boss.
- Document fact: breathers can become a Regroup (45%, 10 s without spawns, a heal crate). [p. 26] Inference: tension and release is built into the director, not left to chance.
- Document fact: every level-up guarantees at least one useful card, has a pity rule and a fallback card. [p. 40] Inference: the choice screen must never present a dead choice; implement the guarantee before adding content.
- Document fact: warnings are ground circles that fill, dashed aim lines that turn solid just before firing, lanes and cones. [p. 47] Inference: these read well in plain shapes, so the prototype can already test telegraph fairness.
- Document fact: screen shake defaults to Off; damage numbers default to big enemies only. [p. 50] Inference: on a small upright screen Mutation chose readability over juice by default. The reason is not on these pages; check the Part 2 notes.
- Document fact: "the body is the build", no organ strip in the HUD. [pp. 46, 50] Inference: for Vampire, visible changes on the player figure (even in plain shapes) can replace a weapon list and save screen space.
- Inference (theme): animals and boss escorts are explicitly "food" for kill-healing builds [pp. 27, 38]. Feeding to heal fits a vampire directly.

### (c) Content, difficulty, builds and balance

- Document fact: content at ship included 7 bosses with 3 phases each, 4 maps, 5 organisms, seven forms, 17 deeds, 10 difficulty levels, 3 run lengths, 14 settings and 20 languages. [pp. 26-50] Inference: this is the full size of the earlier game; the Vampire loop prototype needs none of it, and a first release can be far smaller.
- Document fact: each boss is one readable idea told in one sentence in a 6 s intro banner. [pp. 26, 27] Inference: write the one-sentence tell first; if a boss cannot be explained in one sentence, cut it.
- Document fact: fairness guards are global rules, not per-boss: single-hit cap 45% of max health, no attack twice in a row, warnings cleared on phase change, rescue kit under 25% health, guaranteed vulnerability window (helicopter after 12 s), enrage after 150 s that raises both the boss's damage and the damage it takes. [pp. 27, 32] Inference: the enrage rule puts a ceiling on fight length; adopt all of these as engine-level rules, not per-enemy exceptions.
- Document fact: meta-progression gives no raw power; it widens the card pool and adds tools (Reroll, Banish, a 4th card), the whole shop costs 830 DNA, and difficulty is a ladder of ten stacked rules each worth +15% DNA. [pp. 42-45] Inference: this keeps balance to one power curve, which is much easier for an AI to tune without human playtests.
- Document fact: bosses react to the player's build (Project Apocalypse modules by most-held tags, Specimen Zero's Mimic Graft). [pp. 33, 34] Inference: tags on upgrades are worth having from the start; they drive card weights (x1.5) and later content.
- Document fact: each difficulty level changes exactly one thing. [pp. 44-45] Inference: one-variable steps are easy to verify by simulation.

### (d) Phone: layout, input, performance, audio

- Document fact: upright layout is 270 units wide and about 585 tall on an iPhone 13; one column; buttons 27 units (about 40 to 44 px); main action in the lower half; cards two per row; nothing in the thumb zone during play except Dash and Apex. [pp. 45, 46] Inference: 390 / 270 gives about 1.44 CSS px per unit on the 390 x 844 target, so 27 units is about 39 px, slightly under the common 44 px touch guideline; check button sizes on the target.
- Document fact: two hand-made layouts per screen, not one stretched layout. [p. 45] Inference: since Vampire is upright-first, build only the upright layout until feature freeze.
- Document fact: the playfield fills under the notch and home bar; text and buttons stay in the safe area. [p. 46]
- Document fact: on touch, first tap selects a card and shows details, second tap takes it. [p. 41] Inference: prevents mis-taps when the game pauses mid-swipe; adopt in the prototype.
- Document fact: iPhones cannot vibrate from a web page; vibration is Android only. [p. 50] Inference: no haptics on the main target, so hit feedback must come from picture and sound.
- Document fact: touch settings include "Buttons on the left" (default Off) and "Aim stick (upright)" (default On); zoom has Auto, Far, Normal, Close. [p. 50]
- Document fact: off-screen pointers on the screen edge (gold elite, orange incoming fire, first-aid cross). [p. 46] Inference: needed more on a narrow upright view.
- Document fact: title screen says "Headphones recommended"; volumes default to 80, 70, 90. [pp. 47, 50]
- Performance: nothing on these pages.

### (e) Testing and playtests

- Document fact: the death recap lists the last 5 seconds, up to 6 hits, with source, damage and whether each hit was warned. [p. 48] Inference: the same log can serve as an automated fairness check (count unwarned hits) when no human playtests.
- Document fact: a Feedback screen (six categories, 1,000 characters, game details attached, queued if sending fails) is reachable from the menu, pause, death recap and victory. [p. 49] Inference: the owner's test of the prototype would benefit from a one-tap way to send run details.
- Document fact: the end-of-run screen shows damage by organ as bars with percentages. [p. 49] Inference: the same data is a balance probe for bots.

### (f) Market, positioning, name, release

- Almost nothing on these pages. Document facts only: 20 languages chosen by their own names, and a main menu that grows with the player (a first-timer sees only Hunt and Feedback). [pp. 47, 49]

## Warnings and anti-patterns

These pages contain no explicit warnings section. The items below are safeguards and gaps visible in the shipped design.

- Design that is defined but never switched on stays in the document as dead weight: the closing ring for boss fights. [p. 35]
- A feature without a reachable button: save transfer code exists, no button, reach not verified. [p. 45]
- Do not waste heals: med kits are not picked up unless at least 10% health is missing; the Digest card is hidden in the same case. [p. 38]
- Do not let debris trap the player: broken props can be walked through. [p. 37]
- Do not allow one-shot deaths: single boss hit capped at 45% of max health. [p. 27]
- Do not repeat the same boss attack twice in a row. [p. 27]
- Do not leave warnings on the ground across a phase change. [p. 27]
- Do not let an untouchable boss stay untouchable: guaranteed window after 12 s. [p. 32]
- Do not let a fight drag: enrage after 150 s raises both damage dealt and damage taken. [p. 27]
- Do not offer a dead card screen: at least one useful card, pity after 5, Gorge fallback. [p. 40]
- Do not lose a run on a closed tab: the run is saved at each shop. [p. 41]
- Do not sell raw power between runs. [p. 42]
- Do not rely on phone vibration: iPhones cannot vibrate from a web page. [p. 50]
- Do not stretch one layout across orientations: two hand-made layouts. [p. 45]
- Destructive buttons (Restart, Quit) ask for confirmation. [p. 48]
- No reward for instant quits: 0 DNA before 0:30. [p. 43]

## Prompts and templates in the document (name each and say what it is for; copy short ones in full)

No AI prompts or prompt boxes appear on pages 26 to 50. Reusable design templates that do appear:

- Boss template: "one idea the player has to read", three phases, a stat row (Health, Damage x, Phase 2 at, Phase 3 at, Arena, Escorts) and an Element / Rule table per boss. [pp. 26-28]
- Shared boss rules table (13 rows: Before the fight, Intro, Phase change, Attack choice, Rest between attacks, Warning times, Phase 3 extra, Enrage, Escorts, Rescue kit, Animals, Death, Stagger). [p. 27]
- Map row template: Map, Act, Look, Layout, Map hazards, Helpful features, Boss-fight edge. [p. 36]
- Run timeline table (time, what happens). [p. 42]
- Death recap layout: "WHAT KILLED YOU" plus "THE LAST 5 SECONDS" plus one tip, readable in under 5 seconds. [p. 48]
- Boss intro panel: "WARNING · ACT n BOSS", name, quote, one-line tell, "Tap to fight". [p. 48]
- Short on-screen call-outs used as tells: "HIT HIM!", "FIND THE GAP", "COVER!", "GET BEHIND IT", "LOCKED!", "IT'S LOW - HIT IT!", "CRASH ZONE", "THEY PULL BACK", "IT IS DESPERATE". [pp. 27-32]

## Things the lead should decide or check

1. Part 2 lessons are not in these pages. Take every 2.x lesson from the notes for pages 51 to 75; do not assume this file covers them.
2. Run length of the first prototype: Mutation's Sprint is one act of 4:00 ending in a boss. Decide whether the plain-shapes loop test is a 4:00 run, and whether it ends in a boss or a surge.
3. Real duration of Short and Sprint is unclear here: "12:00 on the bar" at a 1.6x clock suggests about 7:30 real time (inference); for Sprint the document only says 4:00 and 1.3x. Do not quote real-time lengths without checking earlier pages.
4. Level cadence: adopt or adjust "level 10 by 4:00" and the XP curve (5, 8, 12, 18, 26, then the formula).
5. Player max health, speed, dash and attack values are not on these pages; boss damage numbers cannot be judged without them (see notes for pages 1 to 25).
6. Button size: 27 units is about 39 px on a 390 px wide screen by my arithmetic; confirm against the 390 x 844 target and the thumb.
7. Arena and map sizes are in world pixels (arenas 900 to 1040 px wide) while the upright view is narrow; check how much of an arena is visible upright before copying sizes.
8. Screen shake Off and damage numbers "big enemies only" as defaults: look for the reason in Part 2 before choosing Vampire's defaults.
9. Whether to adopt the global fairness rules (45% hit cap, warned-hit log in the death recap, no-repeat attacks, rescue kit) in the prototype or later.
10. Whether meta-progression follows "no raw power, only wider pool and tools".
11. Haptics are not available on iPhone web; decide what replaces them.
12. Names, bosses and text on these pages belong to the owner's earlier game. The owner said Vampire may look and feel similar to Mutation; decide which structures to reuse and give Vampire its own names and theme.
13. Save keys were versioned (`mutationbtm.save.v1`) with a separate run checkpoint; decide Vampire's save layout early.
14. The rest of 1.12 (sound, and anything after "Art style") starts on page 51 and is not covered here.
