# Mutation: Become the Monster. Game Design Document and Lessons v1.3 (pages 1 to 25)

Reader notes. Source: the PDF, pages 1 to 25 of 75, read as page images and cross-checked against the PDF text layer. All 25 pages were readable. "inference" marks my own reading or arithmetic, not the document. Size: about 10,000 words, not the 3000 asked for, on purpose: these 25 pages are almost all data tables (the source text is about 7,400 words), and every organ, unit and formula is kept whole because the lead will not read the PDF. Short path if context is tight: read "Numbers and thresholds", "What it means for Vampire: No Survivors", "Warnings and anti-patterns" and "Things the lead should decide or check" (about 3,000 words together) and use "Frameworks, lists and checklists" as a look-up sheet by section number.

## What it is

- Dated Nov 12, 2026, author tag @Phoenix, 75 pages [p. 1].
- Two parts: Part 1 describes the game exactly as it is in version 1.3; Part 2 is what the project taught [p. 1]. Pages 1 to 25 cover Part 1, sections 1.1 to 1.6 (1.6 is cut off mid-table at page 25). No lessons text and no prompts are in these pages.
- Part 1 was written from the v1.3 source code and data files, not from memory; where an older note disagrees, the document follows the code [p. 1].
- Conventions: numbers are the values in the code; times in seconds; distances in world pixels (the phone view is 320 world pixels on its short side); damage and health in points [p. 1]. "(not verified)" marks anything from notes or chat that could not be confirmed in code [p. 1]. The last section of the document lists what was left out and why [p. 1].
- Author's sources: game source at tag v1.3, the changelog (v0.9 to v1.3), the project notes files, four playtest lists [p. 1].
- The game: single-player action roguelite for phones and computers, played in a browser. A "survivors" game (attacks fire by themselves, you move and choose upgrades) turned around: the player is the monster and the enemies are humans [p. 1].

## Outline (the document's own section names, in order, with page numbers)

- How to read this document [p. 1]
- Part 1: Game design document (v1.3) [p. 1]
- 1.1 Overview [p. 1]: facts table [p. 1-2]; Design pillars [p. 2]; One full run, start to finish [p. 2-3]; How the blocks connect [p. 3-4]
- 1.2 Core loop and controls [p. 4]: The loop [p. 4]; Phone held upright (the main way to play) [p. 4-5]; Phone held sideways [p. 5]; Computer [p. 5]; Gamepad (paragraph) [p. 6]; Touch details that matter [p. 6]
- 1.3 The player: stats, organisms, dash, health and damage [p. 6]: Base stats and caps [p. 6-7]; Body slots [p. 7]; The five organisms [p. 7-8]; Dash [p. 8]; Dealing damage [p. 8-9]; Taking damage [p. 9]; Statuses the player applies [p. 9]; Bloodlust and the Apex button [p. 10]; Flesh (XP) and kills [p. 10]
- 1.4 Mutations and tags [p. 10]: Head [p. 11]; Arms [p. 11]; Back [p. 12]; Tail [p. 12]; Legs (each replaces the dash) [p. 12-13]; Hide [p. 13]; Core (passive traits) [p. 13-14]; Trophies (from elite chests) [p. 14-15]; Apex genes (boss rewards, Legendary, one level) [p. 15]; Tags and set bonuses [p. 15-16]
- 1.5 Hybrids, evolutions and Apex powers [p. 16]: Hybrids (14) [p. 16-17]; The Chrysalis (evolution) [p. 17-18]; The seven forms [p. 18-19]; How these connect [p. 19]
- 1.6 Humans: units, elites and spawning [p. 19]: Behaviour templates [p. 20-21]; Unit table (values before scaling) [p. 21-23]; War machines [p. 23]; Scaling during a run [p. 23-24]; Elites [p. 24]; The spawn director [p. 24-25]; Acts, stages and squads [p. 25, continues on p. 26]

Sections these pages point to but do not contain: 1.7 bosses [p. 3]; 1.8 elite chest [p. 24]; 1.9 levels, cards, Biomass [p. 3]; 1.10 DNA, Nest, deeds, difficulty [p. 3-4, 10, 24]; 1.14 removed systems (Doctrine) [p. 23]; Part 2 lessons [p. 1].

## Frameworks, lists and checklists

### 1.1 Overview

Core sentence (every feature was tested against it): "You eat humans to grow a monster body, one visible mutation at a time, while humanity escalates from villagers to an army to stop you." [p. 1]

Facts:
- Run length: 14 minutes of clock for a Full run, plus boss fights. Short runs the same clock 1.6x faster (about 8 minutes plus bosses). Sprint is Act I only (about 3 minutes plus one boss) [p. 1].
- Structure: 3 acts of 4 minutes, each on its own map and ending in a boss, plus an optional 2-minute finale with two bosses [p. 1].
- Player's inputs: move, dash, optional aim, one super-power button [p. 1].
- Content: 5 organisms, 47 mutations, 14 hybrids, 7 evolved forms, about 20 human types in play (37 built), 6 war machines (4 in play), 7 bosses, 4 maps, 10 difficulty levels, 17 deeds [p. 2].
- Session: start a hunt from the menu in one tap. A run in progress is saved between acts [p. 2].

Design pillars, in order [p. 2]:
1. You are the monster. The fantasy is power and hunger. Kills are messy, humans panic, the body visibly grows. Nothing in the fiction makes the player the victim.
2. The body is the build. Every mutation appears on the creature. Seven slots give the build a shape the player can read at a glance and plan around.
3. Humanity escalates on a clock. A bar at the top shows the stage and when the next boss comes. The player always knows what is coming and roughly when.
4. Fair hits only. Any hit worth more than 10% of max health is warned on screen at least 0.6 s ahead. A single hit can never take more than 30% (45% from a boss). Deaths are explained on a recap screen.
5. One thumb is enough. The whole game is playable upright on a phone with one thumb: a floating stick, auto-aim, a Dash button. Skill expression (manual aim for +25% attack speed, perfect dashes) is optional.
6. Every build path should win. Tags, hybrids and seven forms give distinct ways to play. Enemies and bosses are tuned so no single stat (regeneration was the offender) is always right.
7. Clarity has a budget. Limits were set for how many mutations, enemy types, HUD elements and settings may exist. Adding something means saying what could be removed instead. (The limits themselves are not given in pages 1 to 25.)

One full run, start to finish [p. 2-3]:
1. Menu. The player taps "Hunt". The chosen organism (Ripper at first) and difficulty are remembered. Ripper picks one of two starting organs [p. 2].
2. Act I, Farmland (0:00 to 4:00). Villagers trickle in, then mobs, archers and torchbearers. The player kills, eats Flesh, and levels about ten times, picking one of three mutation cards each time. Three glowing elites arrive on a schedule; each drops a chest with a better reward. At 4:00 the humans pull back, two med kits drop, and the Harvest Mob (boss) arrives [p. 2].
3. Reward and Molting Chamber. The boss gives a choice of its Apex gene, two level-ups, or an extra body slot. Then a calm shop screen: spend Biomass on a mutation, an upgrade or a heal. The run is saved here [p. 3].
4. Act II, Main Street (4:00 to 8:00). Police with shields, shotguns and snipers, then SWAT fireteams with a medic. Between 5:00 and 6:00 the monster enters the Chrysalis and picks an evolved form based on what it has grown; from then on the super-power button fires that form's Apex power. Boss at 8:00: Captain Ironwall or the Black Ops Hunter [p. 3].
5. Act III, Forward Base (8:00 to 12:00). Flame troopers, rockets, heavy gunners, juggernauts, army squads, war machines. By now the body is full, hybrids have formed, and cards offer "Overgrown" fourth levels. Boss at 12:00: the Steel Behemoth or Death From Above [p. 3].
6. Choice. End the run here as a win, or descend to the finale (mandatory at the top difficulty) [p. 3].
7. Finale, Research Complex (12:00 to 14:00). Lasers, hazmat troops and walkers, then Project Apocalypse (armed against the player's own build), then Specimen Zero (a copy of the player). A last choice: devour it or let it go [p. 3].
8. End screen. Results, damage by organ, DNA earned, the nearest unlock. DNA buys wider card pools and tools in the Nest. Winning opens the next difficulty level [p. 3].

Death at any point leads to a 5-second recap of what killed the monster, then the same end screen [p. 3].

How the blocks connect [p. 3-4]:

| Block | Feeds | Fed by |
|---|---|---|
| Kills (1.3, 1.6) | Flesh (XP), Bloodlust, kill-healing | Organs, the spawn director |
| Levels and cards (1.9) | Mutations, tags | XP |
| Mutations and tags (1.4) | Damage, defence, hybrids, the evolution offered, which counter-modules Project Apocalypse brings, what Specimen Zero copies | Cards, chests, the Molting Chamber, boss genes |
| Elites (1.6) | Chests (trophies), Biomass | The clock |
| Biomass (1.9) | Molting Chamber purchases, rerolls, extra cards, DNA at the end | Elites, bosses, skipped cards |
| Bosses (1.7) | Apex genes, slots, the next act | The clock |
| DNA (1.10) | Nest: card pools, tools, coats | Run results x difficulty |
| Deeds (1.10) | Organisms, trophies, the 4th card, coats | Play milestones |
| Difficulty (1.10) | DNA multiplier, long-term goal | Wins |

### 1.2 Core loop and controls

The loop [p. 4]. Second to second the player does three things: moves, dashes, and (optionally) aims. Every organ attacks by itself on its own timer.
1. Kill. Organs fire automatically at what is in reach.
2. Eat. Each dead human leaves Flesh (XP) that must be walked over or pulled in by the Maw radius.
3. Grow. A full XP bar pauses the game and offers 3 mutation cards. The chosen organ appears on the monster's body.
4. Survive the answer. Humans escalate on a clock: stronger unit types, elites at fixed times, a boss at the end of each act.
5. Repeat until the run is won or the monster dies. Then DNA is paid out and spent in the Nest.

The player's decisions are: where to stand, when to dash (the only defensive button), which card to take, and when to fire the Apex power [p. 4].

Phone held upright (the main way to play) [p. 4-5]:
- Thumb anywhere on the screen (not on a button): a floating joystick appears under the thumb. Full speed at 34 px of drag [p. 4].
- Nothing pressed: aiming is automatic. The biggest threat within 260 px first (anyone drawing an aim line on you, then elites, then gunners), otherwise the nearest [p. 4].
- Dash button: bottom right, radius about 25 units [p. 4].
- Quick double tap anywhere: also dashes (two taps within 0.28 s and 40 px) [p. 4].
- Apex button: left of the Dash button. Lights up when Bloodlust is full [p. 4].
- Aim stick (a setting, on by default): a second thumb on the lower half, on the buttons' side, aims by hand. Manual aim gives +25% attack speed. A short tap there aims at the nearest human for 0.35 s [p. 5].
- Pause: top right corner [p. 5].
- "Buttons on the left" mirrors Dash, Apex and the aim zone for left-handed play [p. 5].

Phone held sideways [p. 5]: thumb on the left 45% of the screen = move stick (floating); thumb on the right 45% = aim stick (floating), a short tap aims at the nearest human; Dash button bottom right; Apex button directly above the Dash button. Without a thumb on the aim side, organs fire at the nearest target in their own reach and there is no speed bonus.

Computer [p. 5]: W A S D or arrow keys move; hold left mouse button aims at the cursor; Space, Shift or K dash; E, Q or J Apex power; Esc or P pause; F full screen (in menus); R, B, S on a card screen = Reroll, Banish, Skip; arrows or Tab, Enter, Esc = move between buttons, press, go back; mouse wheel turns pages in lists.

Gamepad [p. 6]: left stick moves, right stick aims, A or right bumper dashes, Y or right trigger fires Apex, Start pauses. In menus the pad and stick move the focus, A presses, B goes back, X rerolls.

Touch details that matter [p. 6]:
- Touch buttons accept a thumb that lands up to 8 to 10 units outside them.
- In menus, a tap that lands just outside a button (within 10 units) presses the nearest one.
- On card screens the first tap selects a card and shows its details; the second tap takes it. This prevents choosing by accident.
- The game switches between touch and key hints by the last input used.
- After death a tap skips the slow motion, but not in its first 0.8 s.

### 1.3 The player: stats, organisms, dash, health and damage

The player is one monster with a body with slots (where mutations go), a set of stats, a dash, and a charge meter called Bloodlust that pays for the Apex power [p. 6]. Base stats, caps, dash, damage-taken, Bloodlust and Flesh numbers are in the Numbers table below.

"Perfect Organism": carrying six different tags at once gives +8% Might, +8 armor and +8% speed [p. 7].

Body slots [p. 7]. Default body: head 1, arms 2, back 2, tail 1, legs 1, hide 2, core 3 (12 slots). Head, arms, back and tail hold attacks. Legs change the dash. Hide is defence. Core holds passive traits. Extra slots come from Growth choices at levels 15 and 25 (pick one of three offered slots, never legs) and from the Growth card after a boss.

The five organisms [p. 7-8]:

| Organism | Unlock | Health | Speed | Starting organ | Special rules | Slot changes | p. |
|---|---|---|---|---|---|---|---|
| Ripper | Start | 100 | 180 | Bone Launcher or Predator's Bite (player picks) | Humans burst into gibs at 60% overkill instead of 100% (gibbed kills give x1.5 XP) | default | 7 |
| Larva | Reach Act II | 95 | 185 | Spore Cloud | +25% XP. Heals 20% every 5 levels. SPORE, TOXIN and BROOD cards are twice as likely | arms 0, core 4 | 7 |
| Carapace | Hold SHELL 4 in one run | 110 | 155 | Whip Tail | Armor 6. Dash cooldown 3 s. Hits from the front do 25% less. SHELL cards x1.5 | hide 3, core 2 | 8 |
| Stalker | Reach Act III | 95 | 205 | Razor Claws | 2 dash charges. +0.12 s dash invulnerability. Hits within 0.6 s after a dash do +50%. CLAW and NERVE cards x1.5 | arms 3, back 1 | 8 |
| Hydra | Win a run | 95 | 175 | Bone Launcher or Acid Glands | Two heads. Head organs x1.5 as likely | head 2, tail 0 | 8 |

Dealing damage. Each hit is worked out in this order [p. 8]:
1. Base damage of the organ at its level.
2. x Might (plus Berserker Tissue, plus 35% from the BLOOD 6 bonus below 40% health).
3. x 1.4 if the organ is Overgrown.
4. x crit damage on a crit.
5. x ambush bonus (Stalker x1.5, Void Stalker x2) within 0.6 s after a dash.
6. x Apex Instinct against elites, vehicles and bosses.
7. x the target's vulnerability: Acid +20% (+10% on bosses), TOXIN 4 +15% on poisoned targets. Vulnerability never adds more than +60% in total.

Status damage (Poison, Bleed) is multiplied by Potency, not Might [p. 8]. Aiming: if the player aims (second stick, or mouse), every organ attacks 25% faster; auto-aim has no bonus; this is the only reward for manual aim [p. 9].

Statuses the player applies [p. 9]:

| Status | Rule |
|---|---|
| Poison | 1 damage per stack per second. Max 20 stacks (40 on bosses). Lasts 4 s, refreshed by each new stack |
| Bleed | 0.5 per stack per second. At 10 stacks it ruptures: 20 + 15% of the target's max health, stacks reset |
| Acid | 3 s. Target takes +20% damage and its armor is halved (bosses +10%) |
| Slow | -30% move and attack speed for 2 s |
| Stun | 0.6 s. On bosses 6 stuns add up to one "Staggered", then 12 s immunity |
| Contagion | When a carrier dies, a third of its Poison jumps to the nearest enemy within 100 px |
| Terror | Tier 1 humans flee 1.5 s. Tiers 2 and 3 stop firing 0.5 s |

### 1.4 Mutations and tags

Rules [p. 10]:
- A mutation is an organ placed in a body slot. Each has one or two tags, a rarity (Common, Rare, Epic), and three levels. Attack organs fire on their own on a timer.
- There are 36 standard mutations, 6 trophies and 5 Apex genes (= the 47 of 1.1).
- Pools. Pool 0 is available from the first run. Pools 1 to 3 are bought once in the Nest with DNA (1.10): Hunter Pack (40), Predator Pack (60), Evasion Pack (70).
- Prerequisites. Four traits are only offered when they would do something: Hive Heart needs a minion source, Death Bloom needs a Poison or Bleed source, Infectious Flesh needs a Poison source, Hemorrhagic Bite needs a melee attack.
- Overgrown (Level 4). Offered only when every slot is full. The organ deals +40% damage and attacks 18% faster. A few organs get their own line instead (Shield Plate: 120 degree arc and a shockwave every 6 blocks. Ram Skull: +40% damage and 25% longer).

Rarity: C common, R rare, E epic. Pool = which pack unlocks it.

Head [p. 11]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 |
|---|---|---|---|---|---|---|
| Bone Launcher | BONE | C | 0 | Every 0.8 s a spike at the nearest enemy in front: 14 damage, pierces 1, speed 320, range 300 | Every 0.7 s, 15 damage | 3 spikes in a fan, each ricochets once |
| Acid Glands | TOXIN | C | 0 | Every 1.2 s lobs a glob: 8 damage, Acid and 2 Poison in a 40 px splash | Splash 55, Poison 4 | Leaves an acid pool for 3 s |
| Predator's Bite | CLAW, BLOOD | R | 0 | Every 0.8 s bites the nearest enemy in front: 22 damage, x2 on targets below 30% health | 30 damage | Bite kills heal 3 and refund half the cooldown |
| Sonic Organ | NERVE, SHELL | R | 2 | Every 2 s a 70 degree wave to 240 px: 24 damage, strong knockback, staggers shields | Range +30%, 40 damage | Stuns 0.6 s |

Arms [p. 11]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 |
|---|---|---|---|---|---|---|
| Razor Claws | CLAW | C | 0 | Every 0.7 s slashes the nearest enemy within 70 px: 14 damage | Attack speed +15% | Double slash, each hit applies 1 Bleed |
| Scythe Limbs | CLAW | C | 0 | Every 2 s a full-circle sweep, radius 110: 13 damage | Radius +15%, 16 damage | A second, lighter sweep (50%) |
| Blood Blades | BLOOD, CLAW | R | 0 | Every 1.2 s a crescent at the weakest enemy within 260 px: 26 damage, +50% while you are below half health. Every second throw costs 1 health, never below 35% health | 2 blades | Blades pierce and return from Bleeding enemies |
| Gut Hooks | CLAW, NERVE | R | 1 | Every 2.5 s hooks the farthest threat within 320 px: 28 damage and drags it to you | Every 2 s, 34 damage | +40 damage and 3 Bleed |

Back [p. 12]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 |
|---|---|---|---|---|---|---|
| Bone Shards | BONE | C | 0 | Every 1.8 s 8 shards in all directions, 10 damage each | 12 shards | 16 shards, pierce 2 |
| Explosive Sac | BONE | R | 0 | Every 2.8 s lobs a sac at the densest cluster: 24 Blast, radius 70 | Radius 90 | Splits into 3 |
| Chain Lightning Organ | NERVE | R | 0 | Every 1.3 s zaps the nearest enemy and chains to 3 more: 24 damage, -10% per jump | 5 chains | 7 chains, first target Stunned |
| Parasitic Larvae | BROOD | C | 0 | Every 6 s hatches 2 larvae (max 4): 5 damage bites, 10 s life | Hatches 3, max 6 | Larvae burst into 4 Poison when they die |
| Symbiotic Organ | BROOD | E | 2 | A parasite leaps out: 36 damage bites every 1 s, 100 health, back 10 s after it dies. Taking it costs 20% of your Biomass | 50 damage | Its bites heal you 3 |

Tail [p. 12]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 |
|---|---|---|---|---|---|---|
| Whip Tail | CLAW, SHELL | C | 0 | Every 1.4 s lashes a 120 degree arc behind you: 18 damage and knockback. When you aim, it lashes forward | Wider arc, 22 damage | Lashes twice |
| Spore Cloud | SPORE | C | 0 | A cloud around you, radius 80, 4 damage per second. Aiming spits a puff every 1 s | Radius 100, 6 per second | 8 per second, Slows |
| Stinger Tail | TOXIN | R | 1 | Every 1.2 s stings the nearest enemy behind you: 12 damage and 5 Poison | 9 Poison | Stings 2 targets |

Legs (each replaces the dash) [p. 12-13]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 | p. |
|---|---|---|---|---|---|---|---|
| Extra Legs | NERVE | C | 0 | +15% speed, dash cooldown -0.4 s | +25% speed | For 2 s after a dash you trample Tier 1 and 2 humans for 12 | 12 |
| Spring Limbs | SHELL | C | 3 | Dash becomes a leap. Landing slams for 20, radius 80. No knockback while leaping | Slam +50% | Landing Stuns | 13 |
| Blink Organ | NERVE | R | 0 | Dash becomes a teleport up to 200 px. The afterimage explodes after 0.3 s for 26, radius 44 | Dash cooldown -20% | 2 charges | 13 |
| Wings | NERVE | R | 3 | Dash becomes a 320 px glide (0.4 s). Airborne during it and for 1 s after: fire, mines and melee miss you | 2 charges | Rains 4 bone spikes | 13 |

Hide [p. 13]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 |
|---|---|---|---|---|---|---|
| Carapace | SHELL | C | 0 | +8 armor | +16 | +24 and reflects 30% of melee damage |
| Spiked Hide | SHELL, CLAW | C | 0 | Enemies touching you take 8 every 0.5 s | 12 | Also 2 Bleed |
| Emergency Shedding | SHELL, NERVE | R | 3 | Below 30% health: 40 damage burst (radius 120), +40% speed for 3 s, 0.5 s invulnerable. 45 s cooldown | 35 s | 25 s |
| Rupture Pulse | SHELL, BLOOD | C | 1 | A hit worth 6% of max health or more bursts for 1.5x that damage, radius 100 (0.8 s cooldown) | Radius 130 | Also 3 Bleed |
| Phase Membrane | NERVE | R | 3 | After a dash, bullets pass through you for 0.8 s | 1.2 s | Bullets that pass return as bone spikes |

Core (passive traits) [p. 13-14]

| Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3 | p. |
|---|---|---|---|---|---|---|---|
| Regenerative Flesh | BLOOD | C | 0 | 0.6 health per second | 1 per second | 1.5 per second, doubled after 3 s without being hurt | 13 |
| Blood Feast | BLOOD | C | 0 | Kills within 120 px heal 1 (1 s cooldown) | Heal 2 | Overheal becomes a shield (max 15% of health) | 13 |
| Venom Glands | TOXIN | C | 0 | Direct hits have a 20% chance of 3 Poison | 30% | 40% | 14 |
| Infectious Flesh | SPORE, TOXIN | R | 0 | Your Poison gains Contagion (1 jump) | 2 jumps | 3 jumps | 14 |
| Death Bloom | SPORE | R | 1 | Kills by Poison or Bleed burst for 10, radius 50 | Radius 70 | The burst Slows | 14 |
| Hemorrhagic Bite | CLAW, BLOOD | C | 0 | Melee hits apply 1 Bleed | 2 Bleed | Ruptures heal 3 | 14 |
| Hunting Reflexes | NERVE | C | 0 | Each kill: +5% speed and Haste for 3 s, up to 5 stacks | 4 s | At 5 stacks the dash cooldown halves | 14 |
| Berserker Tissue | BLOOD | R | 2 | +1% Might per 2% missing health, up to +40% | Up to +50% | Up to +60% | 14 |
| Hive Heart | BROOD | R | 1 | +2 minion cap, minions +20% damage | +35% | Minion kills heal 1 | 14 |
| Apex Instinct | CLAW | E | 2 | +20% damage to elites, vehicles and bosses | +30% | +40%, and non-boss enemies below 10% health are executed | 14 |
| Cellular Rebirth | BLOOD | E | 2 | Once per run: survive a lethal hit at 30% health, 2 s invulnerable, Terror burst. One level only | none | none | 14 |

Count by slot (my count of the tables): head 4, arms 4, back 5, tail 3, legs 4, hide 5, core 11 = 36.

Trophies (from elite chests) [p. 14-15]. A trophy drops only from the chest of an elite of the matching kind. Three of them also need the deed "Open 10 elite chests in total" (marked "deed") [p. 14].

| Trophy | Slot | Tags | Dropped by elite | Level 1 | Level 2 | Level 3 | p. |
|---|---|---|---|---|---|---|---|
| Eye Lance | Head | BONE, NERVE | Marksmen | Every 3 s: a 0.4 s aim line, then a piercing lance for 80 | Every 2 s | Pierces everything, always crits elites | 14 |
| Bile Burner (deed) | Head | TOXIN, SPORE | Fire starters | A 50 degree cone, 5 damage every 0.25 s, range 90, burning ground 2 s | Range +20% | Every tick applies Poison | 14 |
| Spine Gatling | Back | BONE | Suppression gunners | 10 spines per second at 3 damage within a 20 degree spread | 2 streams | Every 20th spine explodes | 14 |
| Hound Brood (deed) | Back | BROOD, CLAW | Dog handlers | Two hounds, 16 damage bites that Slow | 3 hounds | Bites pin for 0.5 s | 14 |
| Ram Skull (deed) | Legs | SHELL, CLAW | Close gunners | Dash becomes a charge that hits everything in its path for 25 | Distance +40% | Stuns | 15 |
| Shield Plate | Hide | SHELL | Shield bearers | Blocks bullets in a 60 degree arc in front | 90 degrees | Every 10 blocks, a shockwave (20 damage, radius 100) | 15 |

Apex genes (boss rewards, Legendary, one level) [p. 15]. If the gene's slot is full, taking the gene also grows that slot by one.

| Gene | Slot | From boss | Effect |
|---|---|---|---|
| Panic Roar | Head | Harvest Mob | Every 6 s a 30 damage cone. Every Tier 1 human on screen is Terrified |
| Ironwall Carapace | Hide | Captain Ironwall | -60% damage from the front. The dash ends in a shield slam: 30 damage, radius 60 |
| Predator Cloak | Core | Black Ops Hunter | Every 6 s you vanish for 2 s: 70% of bullets miss, and your next hit crits for x3 |
| Living Cannon | Back | Steel Behemoth | Every 4 s a shell: 80 damage, radius 140 |
| Rotor Wings | Legs | Death From Above | An airborne 420 px dash that strafes spines along its path |

Tags and set bonuses [p. 15-16]. Every tag on an owned organ counts once. A hybrid organ also counts its partner's first tag. Bonuses unlock at 2, 4 and 6 of a tag.

| Tag | At 2 | At 4 | At 6 | p. |
|---|---|---|---|---|
| CLAW | +15% melee attack speed | Bleed ruptures at 7 stacks, ruptures heal 2 | Every third melee strike hits twice | 15 |
| BONE | +1 pierce | +1 projectile on BONE organs | Killing projectiles split into 2 shards | 15 |
| TOXIN | Poison +25% | Poisoned enemies take +15% damage | Poison cap 40. Enemies with 15+ stacks burst when they die | 15 |
| SPORE | Clouds +25% size | Clouds Slow and carry Contagion, +1 jump | Contagion +2 jumps, clouds +25% damage | 16 |
| NERVE | +10% Haste | Crits arc to one enemy within 70 px for 50% of base damage | Haste x2 for 3 s every 12 s | 16 |
| SHELL | +10 armor | Reflect 50% of melee damage taken | Immune to knockback. Dash ends in a shockwave (20 damage, radius 70) | 16 |
| BLOOD | Kills heal 1 (0.5 s cooldown) | Blood prices halved. Overheal becomes a shield (max 15% of health) | Below 40% health: +35% Might, hits heal 1 | 16 |
| BROOD | +2 minion cap | Minions apply your Poison and Bleed | Minions explode when they expire | 16 |

### 1.5 Hybrids, evolutions and Apex powers

These are the two big build goals inside a run. A hybrid upgrades one organ. An evolution changes the whole body once, in the middle of the run [p. 16].

Hybrids (14). Rule: organ A is at Level 3 and organ B is owned at any level. The hybrid then arrives as one extra card on the next level-up (never more than 4 cards in total). Taking it changes organ A; organ B stays as it is. The hybrid keeps organ A's Level 3 effects [p. 16].

| Hybrid | Organ A (Level 3) | Organ B (owned) | Effect | p. |
|---|---|---|---|---|
| Toxic Whirlwind | Spore Cloud | Venom Glands | The cloud becomes a vortex: 2 Poison per second with Contagion | 16 |
| Acid Artillery | Explosive Sac | Acid Glands | Blasts leave corrosive pools that apply Acid | 16 |
| Bone Storm | Bone Shards | Bone Launcher | Spikes orbit you, then launch in waves | 16 |
| Bloom Cascade | Death Bloom | Spore Cloud | Status kills release an expanding cloud (radius 50, 3 s, 4 per second) | 16 |
| Executioner | Predator's Bite | Apex Instinct | The bite executes non-boss humans below 25% and deals x2 to elites. Its kills still heal | 17 |
| Fortress of Thorns | Spiked Hide | Carapace | Contact damage gains 50% of your armor | 17 |
| Living Fortress | Regenerative Flesh | Carapace | Moving slowly or standing still doubles regeneration, +10 armor | 17 |
| Blood Battery | Blood Blades | Blood Feast | Each blade kill: +4% Haste for 3 s, up to 10 stacks | 17 |
| Phantom Predator | Blink Organ | Predator's Bite | Blinking resets the bite, and the next bite crits | 17 |
| Impact Hunter | Spring Limbs | Whip Tail | Every landing whips in a full circle | 17 |
| Aerial Hunter | Wings | Bone Launcher | The launcher fires 3x faster while you are airborne | 17 |
| Parasitic Colony | Parasitic Larvae | Symbiotic Organ | Larva cap doubles, and the companion lays eggs | 17 |
| Storm Nerves | Chain Lightning Organ | Hunting Reflexes | +1 chain per Hunting stack. Chains crit Stunned targets | 17 |
| Butcher's Hooks | Gut Hooks | Razor Claws | Hooks drag up to 3 enemies, and the claws strike each | 17 |

The Chrysalis (evolution) [p. 17-18]:
- When: at 6:00 of the run. From 5:00 if a form other than Chimera already qualifies. Never during a boss fight [p. 17].
- Cocoon: 2 s. The player is invulnerable. Nearby humans are thrown back and Terrified [p. 17].
- Choice: every qualified form is offered as a card, plus Chimera, which is always offered [p. 17].
- To qualify: own the form's key mutation, and own at least 3 mutations that carry one of the form's tags [p. 17].
- On picking: heal 25%. Bloodlust is set to at least half. The body art changes to the form [p. 18].

The seven forms [p. 18-19]. P is the Apex power's base damage: P = 40 + 4 x level [p. 18]. Each Apex power spends full Bloodlust.

| Form | Key mutation | Tags | Passive changes | Apex power | p. |
|---|---|---|---|---|---|
| Titan | Carapace | SHELL, BLOOD | +40 health, +15 armor, immune to knockback, -10% speed. Contact damage taken is halved. Humans who touch you are thrown back for 4 | Seismic Slam: 3P in radius 220, Stun 1.5 s | 18 |
| Plague Lord | Venom Glands | TOXIN, SPORE | A Poison aura, radius 100: 1 Poison every 0.5 s with Contagion. +35% Potency. Contagion reaches 220 px | Pandemic Pulse: 10 Poison with Contagion on every enemy on screen | 18 |
| Swarm Mother | Parasitic Larvae | BROOD | +4 minion cap. Minions use your crit chance, have x2.2 health and +30% damage | Brood Wave: 10 larvae, each bite P/4 | 18 |
| Void Stalker | Blink Organ | CLAW, NERVE | +20% speed, +15% crit, -15 max health, 2 dash charges. The first hit after a dash deals +100% | Shadow Chain: 5 blinks between enemies, each a crit for P | 18 |
| Artillery Behemoth | Explosive Sac | BONE | +1 projectile, +20% Area, +25% range, -15% speed. Standing still for 1 s gives +25% Haste | Barrage: 30 homing missiles over 2 s, P/3 each | 18 |
| Immortal Abomination | Regenerative Flesh | BLOOD | +1.5 regeneration, +15 health, heal cap 10% per second. Taking damage fires a flesh counterattack (10 + 50% of the damage taken). +1 max health per 25 kills, up to +60 | Regrowth: 3 s of -70% damage taken, then heal 30% | 19 |
| Chimera | none (fallback) | none | +8% Might, +8% Haste, +8% Area | Abomination Roar: 2P in radius 260, knockback and Terror | 19 |

Armored humans (armor 15 or more) and Hazmat Troopers resist 30% of status effects, which is the main check on Plague Lord [p. 19].

How these connect [p. 19]:
- Tags steer card offers (owned tags make matching cards 1.5x as likely), so a build naturally drifts toward one form.
- The key mutation is the gate. A player who wants Titan must take Carapace before 6:00.
- Bloodlust fills from damage, so the Apex power is a reward for fighting, not for waiting.
- The journal lists every hybrid recipe and every form's needs, so both can be planned before a run.

### 1.6 Humans: units, elites and spawning

Humans are the enemy. They escalate from villagers to the army over the run. Each unit type uses one of 15 behaviour templates. A "spawn director" buys squads with a budget that grows over time [p. 19].

Fairness rule used everywhere: any hit worth more than 10% of max health is shown on the ground or as an aim line at least 0.6 s before it lands [p. 19].

Behaviour templates [p. 20-21]:

| Template | What it does | How the player answers | p. |
|---|---|---|---|
| Rusher | Runs at you, 0.25 s wind-up, melee hit within 24 px | Area damage, knockback | 20 |
| Firestarter | Keeps a distance, throws fire that leaves a burning patch, or sprays a warned cone | Move; kill before the fires pile up | 20 |
| Marksman | Stops, shows an aim line for its aim time, fires one heavy shot | Break the line, keep moving | 20 |
| Rifle squad | Keeps a distance, 0.6 s tell, then a burst of light bullets | Dodge the burst, break the formation | 20 |
| Close gunner | Closes in, wind-up, shotgun blast of pellets | Keep away or kill fast | 20 |
| Shield | Shield faces you and blocks projectiles from the front (45 degrees each side). Piercing shots do half. Blasts, flanks, melee and Acid get through | Flank, blast, pierce, knock back, Acid | 20 |
| Explosives | Grenade, rocket, anti-armor shell or mines, each with a ground circle | Do not move predictably; read the circles | 20 |
| Suppressor | Sweeps a lane with a long stream of slow bullets | Go around or dash across | 20 |
| Handler | Sends dogs or drones, stays back | Clear the chasers, or kill the handler | 20 |
| Spotter | Searchlight (while you are lit, marksmen lead their shots) or tracking dart (8 s of 50% more spawns, placed ahead of you) | Break line of sight, kill first | 20 |
| Support | Medic heals nearby humans and revives one fallen Tier 1 to 3 human after 3 s (at half health). Commander gives +25% damage, speed and fire rate in 120 px | Priority target | 20 |
| Disruptor | Slowing dart, or a field that slows your projectiles | Leave the zone, kill the source | 20 |
| Builder | Builds a sentry turret in 1.5 s (max 2) | Destroy it or stay out of its 120 degree arc | 20 |
| War machine | Vehicle with several weapons and a weak point (+50% damage) | Dodge the warnings, hit the weak point | 20 |
| Rival | The Elite Hunter, a recurring mini-boss | Kill it within 60 s or it escapes | 21 |

Unit table (values before scaling) [p. 21-23]. Cost is what the director pays and also sets the Flesh dropped. Speed is px/s. Keep = the distance the unit tries to hold [p. 21]. In the template column the document writes "Rifle" and "Close" for Rifle squad and Close gunner, and also uses "Pet", "Drone" and "Civilian", which are not among the 15 named templates. Attack shorthand such as "3 x 5" is not defined in these pages (inference: shots x damage each). "Used" is my column, from the squad lists and the unused-units paragraph on p. 23; Act III and finale squads are on p. 26, outside these notes.

| Unit | Tier | Template | Health | Speed | Cost | Armor | Attack | Used in v1.3 | p. |
|---|---|---|---|---|---|---|---|---|---|
| Villager | 1 | Rusher | 10 | 95 | 1 | 0 | Melee 6 | Act I | 21 |
| Angry Mob (3 looks) | 1 | Rusher | 6 | 120 | 0.6 | 0 | Melee 5. Arrives 8 to 12 at once | Act I | 21 |
| Torchbearer | 1 | Firestarter | 14 | 80 | 2 | 0 | Keep 130. Torch every 3.2 s: fire patch radius 18, 5 per second, 3 s | Act I | 21 |
| Hunter (archer) | 1 | Marksman | 12 | 90 | 2 | 0 | Keep 280. Aim 0.6 s, arrow 10, speed 420, every 2.4 s | Act I | 21 |
| Militia Rifleman | 1 | Marksman | 18 | 85 | 3 | 0 | Keep 320. Aim 0.9 s, 14, speed 480, every 3 s | Act I | 21 |
| Farm Dog Handler | 1 | Handler | 16 | 70 | 3 | 0 | Keep 200. 2 dogs every 8 s | Act I | 21 |
| Farm Dog | 1 | Pet | 8 | 210 | 0.5 | 0 | Bite 5 after a 0.25 s tell | Act I | 21 |
| Constable | 2 | Rifle | 25 | 90 | 3 | 0 | Keep 150. Burst 3 x 5, every 2.2 s, bullet speed 300 | Act II | 21 |
| Riot Officer | 2 | Shield | 45 | 70 | 5 | 5 | Baton 10, reach 24 | Act II | 21 |
| Shotgun Officer | 2 | Close | 30 | 85 | 4 | 0 | Keep 90. Wind-up 0.5 s, 5 pellets x 5, range 140, every 2.4 s | Act II | 21 |
| Sniper | 2 | Marksman | 20 | 60 | 5 | 0 | Keep 340. Aim 1.2 s, 30, speed 900, every 3.4 s, kneels | Act II | 21 |
| Demolitionist | 2 | Explosives | 25 | 75 | 5 | 0 | Keep 190. Grenade: 1 s circle, 22, radius 30, every 4 s | unused | 21 |
| Searchlight Operator | 2 | Spotter | 30 | 55 | 5 | 0 | Keep 210. Light range 260 | unused | 21 |
| SWAT Rifleman | 3 | Rifle | 45 | 95 | 6 | 8 | Keep 170. Burst 4 x 6, every 2.4 s, flanks | Act II from 6:00 | 21 |
| SWAT Breacher | 3 | Close | 55 | 100 | 7 | 8 | Wind-up 0.6 s, 6 pellets x 6, range 120, every 4 s, charges in | unused | 21 |
| Shield Specialist | 3 | Shield | 70 | 65 | 7 | 10 | Covers allies within 30 px behind it. Pistol 5 | unused | 21 |
| Combat Medic | 3 | Support | 35 | 85 | 7 | 0 | Heals 8, range 120. One revive | Act II from 6:00 | 21 |
| Tracker | 3 | Spotter | 35 | 90 | 6 | 0 | Keep 230. Dart: aim 0.6 s, 2 damage, marks you 8 s, every 7 s | unused | 22 |
| Suppression Gunner | 3 | Suppressor | 60 | 50 | 9 | 8 | Keep 200. 2.5 s stream, 10 shots per second x 3, bullet speed 260 | Act II from 6:00 | 22 |
| Tactical Marksman | 3 | Marksman | 40 | 80 | 7 | 6 | Keep 300. Aim 1.0 s, 32, every 2.6 s, moves after 3 shots | unused | 22 |
| K9 Tactical Unit | 3 | Handler | 40 | 85 | 7 | 8 | 1 K9 dog every 12 s, also shoots | unused | 22 |
| K9 Dog | 3 | Pet | 30 | 220 | 1 | 5 | Bite 8, pins you 0.4 s | not stated | 22 |
| Flame Trooper | 4 | Firestarter | 70 | 60 | 10 | 10 | Keep 80. Cone: 0.7 s warning, 1.6 s of flame, 3 per tick, every 4 s | see p. 26 | 22 |
| Rocket Soldier | 4 | Explosives | 50 | 65 | 10 | 5 | Keep 230. 1.05 s warning, 30, radius 34, every 4.5 s | see p. 26 | 22 |
| Heavy Gunner | 4 | Suppressor | 110 | 40 | 14 | 15 | 3.5 s stream, 14 shots per second x 5 | see p. 26 | 22 |
| Riot Juggernaut | 4 | Shield | 160 | 55 | 16 | 30 | Shield slam: 0.7 s cone warning, 28 and knockback | see p. 26 | 22 |
| Field Commander | 4 | Support | 80 | 70 | 12 | 5 | Aura 120 px: +25% | unused | 22 |
| Anti-Monster Researcher | 4 | Disruptor | 45 | 75 | 9 | 0 | Dart: aim 0.5 s, Slows you 25% for 2 s, every 3.5 s | unused | 22 |
| Demolition Engineer | 4 | Explosives | 50 | 70 | 10 | 12 | Lays mines: 30, radius 36, every 5 s, max 4 | unused | 22 |
| Hazmat Trooper | 4 | Rifle | 60 | 85 | 7 | 8 | Burst 3 x 6. Resists 30% of statuses | see p. 26 | 22 |
| Assault Soldier | 5 | Rifle | 60 | 90 | 8 | 10 | Keep 180. Burst 4 x 7, every 2.6 s | see p. 26 | 22 |
| Military Sniper | 5 | Marksman | 45 | 70 | 10 | 6 | Keep 360. Aim 1.3 s, 40, speed 1000, leads the target | see p. 26 | 22 |
| Drone Operator | 5 | Handler | 50 | 70 | 11 | 0 | 1 attack drone every 7 s, max 3 | unused | 22 |
| Attack Drone | 5 | Drone | 20 | 140 | 0 | 0 | Orbits at 70 px, 4 every 1.5 s. Flying | not stated | 22 |
| Combat Engineer | 5 | Builder | 55 | 70 | 12 | 6 | Sentry turret: 80 health, range 230, 5 shots per second x 3 | unused | 22 |
| EW Specialist | 5 | Disruptor | 60 | 65 | 11 | 6 | Field radius 60 for 4 s, every 9 s | unused | 22 |
| Anti-Armor Specialist | 5 | Explosives | 70 | 50 | 13 | 10 | Keep 260. 1.2 s warning, 45, radius 50, every 6 s | unused | 22 |
| Civilians (4 looks) | 0 | Civilian | 6 to 8 | 70 to 130 | 1 | 0 | None. They flee. Worth double XP | not stated | 23 |

In v1.3 the squads that actually spawn use only the units listed in "Acts". Breacher, Shield Specialist, Tracker, Tactical Marksman, K9 Unit, Commander, Researcher, Demolition Engineer, Demolitionist, Searchlight Operator, Drone Operator, Combat Engineer, EW Specialist and Anti-Armor Specialist are fully built but not in any squad list (they were used by the removed Doctrine system, see 1.14) [p. 23].

War machines [p. 23]:

| Machine | Health | Speed | Armor | Weak point (+50%) | Attacks |
|---|---|---|---|---|---|
| Armored Personnel Carrier | 1400 | 70 | 40 | Rear | Drives to you, unloads 3 Assault Soldiers and a Medic, then fires 3 x 8 after a 0.6 s tell, every 2.6 s |
| Tactical Vehicle | 900 | 90 | 30 | Rear | Ram: 1 s lane warning, 340 px at 380 px/s, 30 and knockback, every 4 s. Gun: 4 x 6 after a 0.6 s line |
| Main Battle Tank | 2600 | 50 | 60 | Rear | Shell: 1.2 s circle (radius 44) aimed 0.5 s ahead of you, 45, every 4.2 s. Machine gun: 5 x 4 after a 0.6 s line, every 3 s |
| Attack Helicopter | 1600 | 120 | 20 | Top (30% of hits) | Alternates a strafe (1 s lane warning, 420 px, 14) and 3 rockets (circles radius 28, 0.9 to 1.3 s, 20 each) |
| Heavy Combat Drone | 1000 | 90 | 25 | Eye (25% of hits) | 3 s spiral of slow bullets (5 each), or launches 2 attack drones (max 3) |
| Experimental Walker | 2200 | 45 | 45 | Legs | Stomp: 0.8 s circle radius 42, 25. Beam: 1 s line warning, then a 1.2 s sweeping beam, 6 per 0.1 s, every 6 s |

A destroyed vehicle leaves a wreck that can be walked over. Only the APC, tank and helicopter (Act III) and the walker (finale) are sent by the director; the first machine comes 50 s into the act, then every 60 to 90 s [p. 23].

Elites [p. 24]. An elite is a normal unit drawn 1.4x larger with a coloured glow. It has 8x health, hits 15% harder, takes half knockback, and carries one modifier (two at Difficulty IX). It drops an elite chest (1.8) and 15 Biomass.

| Modifier | Effect |
|---|---|
| Veteran | +80% health, aims 30% faster. Its chest is rich |
| Armored | +30 armor |
| Frenzied | Below half health: +50% speed, attacks a third faster, +20% damage |
| Explosive Payload | On death, a blast with a 1 s warning. Not used in Act I |

Marked Targets [p. 24]. Elites arrive at fixed times, announced by a horn and an arrow at the screen edge: 1:10, 2:20, 3:20, 4:35, 5:40, 6:40, 7:30, 8:50, 9:50, 10:40, 11:30, 12:40, 13:25. A Marked Target leaves after 40 s if it is not killed.

The Elite Hunter (rival) [p. 24]. Appears at 6:20 (60% chance) and at 10:00. Health = 400 x minutes (at least 4) x 1.2 per earlier meeting. Aim 0.8 s, 15 damage, armor 15. It escapes after 60 s. Killing it drops a rich chest.

Acts, stages and squads (first two rows only; the table continues on p. 26) [p. 25]:

| Act | Time | Stage banners | Squads (weight) | Events at peaks |
|---|---|---|---|---|
| I The Escape | 0:00 to 4:00 | VILLAGE | Single villagers, torchbearers, hunters, militia (6). Mobs of 8 to 12 (2). Pairs of hunter, torchbearer, handler, militia from 1:00 (2) | Mob Surge: 16 rushers in a ring around you. Also forced at 3:00 |
| II The Response | 4:00 to 8:00 | POLICE, then SWAT at 6:00 | Pairs of constable, riot officer, shotgun officer, sniper (5). Single constables (2). Fireteams of 4: SWAT riflemen, medic, suppression gunner, from 6:00 (3) | Police Barricade: a line of 6 riot officers and a constable. Sniper Nest: 3 snipers at 330 px |

## Numbers and thresholds

Item-level numbers (organs, units, machines) are in the tables above. This table holds the system numbers.

| What | Value | Page |
|---|---|---|
| World scale | phone view is 320 world pixels on its short side | 1 |
| Full run clock | 14 minutes plus boss fights | 1 |
| Short run | same clock 1.6x faster, about 8 minutes plus bosses; x1.35 XP | 1, 10 |
| Sprint run | Act I only, about 3 minutes plus one boss | 1 |
| Act length | 4 minutes each, 3 acts; optional finale 2 minutes with two bosses | 1 |
| Level-ups in Act I | about ten, 3 cards each | 2 |
| Elites in Act I | three | 2 |
| End of Act I | at 4:00 humans pull back, two med kits drop, boss arrives | 2 |
| Chrysalis window | at 6:00; from 5:00 if a non-Chimera form qualifies; cocoon 2 s; heal 25% on picking | 3, 17, 18 |
| Death recap | 5 seconds | 3 |
| Joystick full speed | 34 px of drag | 4 |
| Auto-aim radius | 260 px; priority: aim-line drawers, then elites, then gunners, else nearest | 4 |
| Dash button | bottom right, radius about 25 units | 4 |
| Double-tap dash | two taps within 0.28 s and 40 px | 4 |
| Manual aim bonus | +25% attack speed; short tap aims at nearest human for 0.35 s | 5, 9 |
| Sideways zones | left 45% move, right 45% aim | 5 |
| Touch slop | buttons accept 8 to 10 units outside; menus press nearest within 10 units | 6 |
| Death slow-motion skip lock | first 0.8 s | 6 |
| Max health | base 100, +1 per level, no cap | 6 |
| Armor | base 0, no cap; damage taken = damage x 100 / (100 + armor) | 6 |
| Regeneration | base 0 per second; all healing capped at 5% of max health per second (10% for Immortal Abomination); regeneration above 2 per second counts half; doublers do not stack | 6 |
| Move speed | base 180 px/s; cap 2x the organism's own speed | 6 |
| Might | x1, no cap; multiplies all direct damage | 6 |
| Haste | x1; cap 2.5 (5 after temporary boosts); attack speed of every organ | 6 |
| Area | x1; cap 2.5; radius of blasts, clouds, sweeps | 7 |
| Extra projectiles | +0; cap +4 | 7 |
| Crit chance | 5%; cap 60% | 7 |
| Crit damage | x1.5; no cap | 7 |
| Potency | x1; no cap; multiplies status damage (Poison, Bleed) | 7 |
| Maw | 50 px; no cap; radius that pulls Flesh (XP) to you | 7 |
| Growth | x1; no cap; multiplies XP gained | 7 |
| Luck | 0; no cap; raises Rare and Epic card chance | 7 |
| Dash cooldown | 2.5 s, 1 charge; never below 0.8 s | 7 |
| Perfect Organism | six different tags: +8% Might, +8 armor, +8% speed | 7 |
| Body slots | 12 by default (head 1, arms 2, back 2, tail 1, legs 1, hide 2, core 3); extra slots at levels 15 and 25 and from the post-boss Growth card | 7 |
| Dash | 200 px in 0.18 s; invulnerable 0.22 s from the start; cooldown 2.5 s per charge | 8 |
| Perfect dash | if the invulnerability absorbs a hit: half the cooldown refunded and Haste +20% for 2 s | 8 |
| Gib rule | a human is gibbed when the killing hit overshoots its max health (60% for Ripper; the organism table words it as "60% overkill instead of 100%"), or it dies to a blast or a Bleed rupture; gibbed kills x1.5 XP | 7, 10 |
| Vulnerability cap | never more than +60% in total | 8 |
| Minimum damage taken | 1 | 9 |
| Largest single hit | 30% of max health from humans, 45% from bosses (40% and 55% at Difficulty X) | 9 |
| Invulnerable after a hit | 0.4 s | 9 |
| Overheal shield | absorbs first, up to 15% of max health (from BLOOD 4 or Blood Feast Level 3) | 9 |
| Death | health 0 ends the run unless Cellular Rebirth is owned (once per run) | 9 |
| Fairness warning | any hit above 10% of max health is shown at least 0.6 s before it lands | 2, 19 |
| Bloodlust gain per hit | (damage dealt) / (30 x expected damage per second for the current minute) | 10 |
| Bloodlust gain per kill | 1% for each kill within 150 px | 10 |
| Expected damage per second by minute | 0: 12; 1: 30; 2: 45; 3: 80; 4: 110; 5: 140; 6: 170; 7: 205; 8: 240; 9: 280; 10: 320; 11: 360; 12: 400; 13: 440 (the table runs off the right page edge after 13) | 10 |
| Bloodlust fill time | about 30 s of fighting at exactly the expected damage | 10 |
| Feeding Frenzy (Apex with no evolution) | 5 s of +30% Haste, +20% speed, triple Maw, each Flesh orb eaten heals | 10 |
| Flesh orb value | 0.8 x unit cost; elites x8; civilians x2 "and no 1.6 factor" (wording unclear, see checks); gibbed x1.5; machines drop half their cost split into 2 to 5 orbs | 10 |
| Orb rules | within Maw range it flies to the player; disappears after 45 s; above 60 orbs on the ground the oldest merge into the next; a kill within 26 px is eaten on the spot | 10 |
| DNA prices of pools | Hunter Pack 40, Predator Pack 60, Evasion Pack 70 | 10 |
| Overgrown (Level 4) | +40% damage, attacks 18% faster; only offered when every slot is full; x1.4 in the damage order | 8, 10 |
| Tag thresholds | set bonuses at 2, 4 and 6 of a tag | 15 |
| Tag bias on offers | owned tags make matching cards 1.5x as likely | 19 |
| Hybrid cards | one extra card on the next level-up, never more than 4 cards in total | 16 |
| Form qualification | key mutation plus at least 3 mutations with one of the form's tags | 17 |
| Apex power base | P = 40 + 4 x level | 18 |
| Status resistance | armored humans (armor 15 or more) and Hazmat Troopers resist 30% of status effects | 19 |
| Behaviour templates | 15 | 19 |
| Machines schedule | first machine 50 s into the act, then every 60 to 90 s | 23 |
| Human health scaling | table value x (1 + 0.08 x minute) x 1.55 x act factor (1, 1.1, 1.2, 1.25); machines skip the 1.55 | 23 |
| Human damage scaling | table value x (1 + 0.03 x minute) x 1.2 x act factor (1, 1.18, 1.35, 1.4); in the first minute it ramps from 60% to 100% | 24 |
| Human bullet speed | x 0.8 | 24 |
| Elite | drawn 1.4x larger, 8x health, hits 15% harder, half knockback, one modifier (two at Difficulty IX), drops a chest and 15 Biomass | 24 |
| Marked Target | 13 fixed times (listed above); leaves after 40 s | 24 |
| Elite Hunter | 6:20 (60% chance) and 10:00; health 400 x minutes (at least 4) x 1.2 per earlier meeting; aim 0.8 s; 15 damage; armor 15; escapes after 60 s | 24 |
| Director budget income per second | (2 + 0.6m + 0.15m^2) x 0.6 x phase factor x act density (1, 1.04, 1.08, 1.1), m = minutes | 24 |
| Director opening ramp | income x (0.35 + t/185), reaching full at about 2:00 | 24 |
| Director budget cap | 60 + 6 x (2 + 0.6m + 0.15m^2) x 0.6 | 24 |
| Humans alive at once | at most (80 + 20m) x 0.6 x act density, never above 400 | 25 |
| Spawning | up to 3 squads per tick, just outside the camera, biased toward where the player is heading | 25 |
| Phases | push 50 to 70 s (x1), peak 15 to 25 s (x1.5, starts with an event), breather 10 to 15 s (x0.3) | 25 |
| Mercy | below 35% health for 10 s: the next breather starts now (once per act) | 25 |
| Pressure | not hurt for 60 s: income x1.1 | 25 |
| First 45 s | no archers or riflemen | 25 |
| Per-type caps alive | marksman 3, explosives 3, suppressor 3, support 2, builder 2, spotter 2, handler 2, disruptor 2, machine 2 | 25 |
| Act I squad weights | singles 6, mobs of 8 to 12 weight 2, pairs from 1:00 weight 2; Mob Surge of 16 rushers, forced at 3:00 | 25 |

## What it means for Vampire: No Survivors

### (a) Process for an AI building alone

- The design document was rebuilt from the shipped code and data, not from memory, and unconfirmed items were tagged "(not verified)"; older notes had drifted from the code [p. 1]. Inference: write DESIGN.md numbers from the code, and treat any number not read from code as unverified.
- One core sentence was the test for every feature [p. 1]. Inference: Vampire needs its own single sentence before the prototype; the Mutation sentence has three parts (what you do, what visibly changes, what pushes back).
- Pillar 7 sets a "clarity budget": caps on mutations, enemy types, HUD elements and settings, and each addition must name a removal [p. 2]. The cap values are not in these pages.
- Overbuild is visible in the shipped game: 37 unit types built with about 20 in play, 6 war machines built with 4 in play, 14 named units "fully built but not in any squad list" because the Doctrine system was removed [p. 2, 23]. Inference: build an enemy only when a squad list uses it.
- The document keeps a "what was left out and why" section [p. 1] (inference: the same habit fits DECISIONS.md).

### (b) Core loop, controls and feel

- The loop is Kill, Eat, Grow, Survive the answer, Repeat [p. 4]. Vampire has the same inversion (monster hunts humans) [p. 1], so the loop transfers directly (inference).
- The moment-to-moment decisions are only four: where to stand, when to dash, which card to take, when to fire the Apex power [p. 4]. Dash is "the only defensive button" [p. 4].
- XP is not automatic: Flesh must be walked over or pulled by the 50 px Maw, and kills within 26 px are eaten at once [p. 4, 7, 10]. Inference: this pulls the player toward the crowd and makes positioning the core skill.
- The super meter fills from damage dealt and nearby kills, "a reward for fighting, not for waiting" [p. 10, 19].
- Manual aim is optional and pays +25% attack speed; one thumb with auto-aim must be enough [p. 2, 5, 9].
- A number set for a plain-shapes prototype, all from the document: view 320 world px wide; player 100 health, 180 px/s; dash 200 px in 0.18 s with 0.22 s invulnerability and 2.5 s cooldown; perfect-dash refund; Maw 50 px; start with Bone Launcher (0.8 s, 14 damage, pierce 1, speed 320, range 300) or Predator's Bite (0.8 s, 22 damage, x2 below 30% health); Act I units and squad weights; no ranged enemies in the first 45 s; human damage ramping 60% to 100% over the first minute; director ramp to full at about 2:00; about ten level-ups in four minutes [p. 1, 2, 6-8, 11, 21, 24, 25].
- Inference (arithmetic from the formulas): at 0:00 a Villager has 10 x 1.55 = 15.5 health and an Angry Mob member 9.3, so Bone Launcher Level 1 kills a mob member in one hit and a villager in two, while Predator's Bite kills either in one through Act I. At 390 px wide, 1 world px is about 1.22 CSS px, the visible field is about 320 x 692 world px, the dash covers about 62% of the screen width, and the player crosses the width in about 1.8 s.
- Inference: Sprint (Act I only, about 3 minutes plus one boss [p. 1]) is the smallest complete shape in Mutation and fits the owner's first test. Axes Mutation itself offers for three variations: ranged start versus melee start (Ripper's two starting organs [p. 7]); auto-aim only versus manual-aim bonus [p. 9]; the dash kinds (dash, leap, teleport, glide, charge [p. 8, 12-13, 15]).
- Feel elements named in these pages: gibs on overkill, humans that panic and flee (Terror), a body that visibly grows, knockback, slow motion at death, a horn and edge arrow for elites, stage banners, a breather after each peak [p. 2, 6, 9, 24, 25]. Screen shake, sound and hit-stop are not described in these pages.

### (c) Content, difficulty, builds and balance

- Build ladder: body slots, then 8 tags with set bonuses at 2, 4 and 6, then hybrids (A at Level 3 plus B owned), then one evolution at 5:00 to 6:00 gated by a key mutation plus 3 tagged organs, then a form-specific Apex power [p. 7, 15-19]. All six key mutations are in Pool 0 (inference from the tables), so every form is reachable on a first run.
- Offers are steered: owned tags make matching cards 1.5x as likely; four traits are hidden until they would do something [p. 10, 19].
- Guardrails against one dominant stat: caps on speed, Haste, Area, projectiles and crit; healing capped at 5% per second; regeneration above 2 per second halved; vulnerability capped at +60%; 30% status resistance on armored humans as the check on Plague Lord [p. 6-8, 19]. Regeneration was the stat that had been "always right" [p. 2].
- Every enemy template has a stated player answer [p. 20-21]. Inference: add an enemy only with its answer written down.
- Pacing is a budget director with push, peak and breather phases, a mercy rule, a pressure rule, per-type caps and a cap on humans alive [p. 24-25]. Inference from the formula: base income is about 0.42 budget per second at 0:00, 2.28 at 2:00 and 4.08 at 4:00; the alive cap is 48 at 0:00, 72 at 2:00, about 100 at 4:00, and about 238 at 14:00, so the 400 ceiling is never reached at base difficulty.
- Escalation is fiction and difficulty at once: VILLAGE, then POLICE, then SWAT, then army, then a research complex [p. 3, 25]. Inference: a vampire game can escalate the same way with its own cast.
- Elites on a fixed, announced timetable give the player something to plan around and are the source of chests and Biomass [p. 3, 24].

### (d) Phone: layout, input, performance, audio

- Upright phone is "the main way to play" [p. 4]. Layout: floating stick anywhere, Dash bottom right, Apex to its left, Pause top right, a bar at the top with the stage and the next boss [p. 2, 4, 5]. A left-handed mirror exists [p. 5].
- Forgiving touch: hit areas 8 to 10 units larger than buttons, nearest-button press in menus, two-tap card pick, a 0.8 s lock before the death slow motion can be skipped, hints that follow the last input used [p. 6].
- Double tap anywhere is a second way to dash (0.28 s, 40 px) [p. 4].
- Counts that bound the load: humans alive never above 400, at most 60 loose orbs before merging, orbs expire after 45 s, per-type caps [p. 10, 25]. Inference: these also serve performance; the document does not say so here.
- One tap from menu to hunt; the run is saved between acts [p. 2, 3].
- Audio: only the elite horn is mentioned in these pages [p. 24].

### (e) Testing and playtests

- These pages only say that four playtest lists were a source [p. 1].
- Inference: several rules are written as checkable invariants and can become automated checks: no hit above 30% of max health (45% from a boss); every hit above 10% has a warning of at least 0.6 s; no ranged units before 0:45; the per-minute expected damage table as a bot balance target [p. 9, 10, 19, 25].

## Warnings and anti-patterns

- Notes and memory drift from the code; the code is the truth [p. 1].
- A single always-right stat (regeneration) broke build variety and needed several caps [p. 2, 6].
- Content built and then left unused: 14 unit types and 2 war machines, after the Doctrine system was removed [p. 23].
- Unwarned or oversized hits: banned by the 10% / 0.6 s rule and the 30% / 45% cap [p. 2, 9, 19].
- Fiction that makes the player the victim [p. 2].
- A super that rewards waiting; here it charges only from damage and kills [p. 10, 19].
- Cards that would do nothing when taken; hidden by prerequisites [p. 10].
- Accidental card picks and accidental skipping of the death moment; solved by two taps and a 0.8 s lock [p. 6].
- Ranged pressure and full damage in the first seconds; delayed by the 45 s rule, the 60% damage ramp and the director's opening ramp [p. 24, 25].
- Self-damage that can kill the player: Blood Blades never takes health below 35% [p. 11].
- Adding features without removing any: pillar 7 [p. 2].
- Human bullets at full speed: the shipped game multiplies all human bullet speed by 0.8 [p. 24] (inference: they were too fast to dodge).

## Prompts and templates in the document

No AI prompts appear in pages 1 to 25. Reusable document templates:
- Core sentence: one sentence every feature is tested against (quoted above) [p. 1].
- "How to read this document" block: units, the "(not verified)" tag, sources, a left-out section [p. 1].
- Overview table "Fact | Value" (run length, structure, inputs, content, session) [p. 1-2].
- "One full run, start to finish": a numbered walk through one whole run [p. 2-3].
- "How the blocks connect" table "Block | Feeds | Fed by" [p. 3-4].
- Control tables "Input | Action" per device [p. 4-5].
- Stat table "Stat | Base value | Cap | What it does" [p. 6-7].
- Ordered damage formula as a numbered list [p. 8].
- Mutation table "Mutation | Tags | Rarity | Pool | Level 1 | Level 2 | Level 3" [p. 11].
- Behaviour table "Template | What it does | How the player answers" [p. 20].
- Unit table "Unit | Tier | Template | Health | Speed | Cost | Armor | Attack" [p. 21].
- Spawn director table "Rule | Value" and acts table "Act | Time | Stage banners | Squads (weight) | Events at peaks" [p. 24-25].

## Things the lead should decide or check

1. How much of Mutation's structure to keep. The owner allows a similar look and feel; the repository rule bans copied names from other games. Mutation is the owner's own game, so decide whether its names (Bloodlust, Maw, Blood Feast and so on) may be reused or must be renamed, and log it.
2. The one core sentence for Vampire, and which of the seven pillars carry over unchanged.
3. Prototype size: Sprint-like (one act of about 3 to 4 minutes) or longer; and which three variations to show the owner.
4. World scale: Mutation uses 320 world px on the short side [p. 1]. Check it against 390 x 844 before copying distances.
5. "px" versus "units": touch sizes are given in "units" (button radius about 25, slop 8 to 10) and the joystick in "px" (34) [p. 4, 6]. The document does not define "units" in these pages.
6. Whether to keep the manual-aim bonus (+25% attack speed) in a one-thumb game [p. 5, 9].
7. Whether XP must be picked up (Maw 50 px, eat-on-the-spot within 26 px) or is granted on kill [p. 10].
8. Unclear wording: "Civilians x2 and no 1.6 factor" next to an orb value of "0.8 x its cost" [p. 10]; the unit table also says civilians are "worth double XP" [p. 23]. Do not copy this rule without settling it.
9. Attack shorthand such as "Burst 3 x 5" is not defined [p. 21]; my reading as shots x damage is inference.
10. Whether "minute" in the scaling and director formulas is a whole number or continuous is not stated [p. 23-24].
11. The expected-damage table on p. 10 runs off the page edge after minute 13; no value beyond 13 is visible.
12. XP needed per level, card rarity odds, reroll, banish and skip rules, Biomass prices, bosses, HUD details, meta progression, the removed Doctrine system and all of Part 2 are outside these pages (sections 1.7 to 1.14 and Part 2). Read the notes for pages 26 to 75 before fixing those.
13. Act III and finale squad lists are on p. 26; the "Used in v1.3" column above marks those rows "see p. 26".
