# Mutation as shipped (v1.3): brief

Source: notes on GDD pp. 1-50; pp. 51-56, 61, 73-74 spot-checked. World px (upright view 320 wide), seconds.

## 1. In 5 lines
1. Loop (1.2): attacks auto-fire; kill, walk onto XP orbs, a full bar pauses for 1 of 3 cards; humans escalate on a clock.
2. Player: move, dash (only defensive button), optional aim, Apex super when charged.
3. Humans (1.6): rushers run in, 0.25 s wind-up, hit within 24 px; ranged hold distance, show an aim line, fire. Terrified: Tier 1 flee 1.5 s, others stop firing 0.5 s; only from roars, cocoon, boss death. An ambient Terror meter was cut.
4. Run: 3 acts of 4:00, each ending in a boss. Act I: about 10 level-ups, elites at 1:10, 2:20, 3:20, a ring of 16 rushers at 3:00.
5. Size: 47 mutations, 37 human types (about 20 used), 7 bosses, 19 screens (my count), 14 settings.

## 2. Controls (1.2, 1.3)
- Move: floating stick under the thumb anywhere off buttons; full speed at 34 px drag (px kind and dead zone unstated).
- Auto-aim: biggest threat within 260 px (aim-line drawers, elites, gunners), else nearest.
- Dash button: bottom right, radius about 25 units (36 CSS px, inference), touch slop 8-10 units. Double tap anywhere (0.28 s, 40 px) also dashes.
- Dash: 200 px in 0.18 s, invulnerable 0.22 s, cooldown 2.5 s; absorbing a hit refunds half.
- Apex button: left of Dash, size not stated; charges in about 30 s of fighting (expected damage 12 per second in minute 0, then 30, 45, 80). Effect: 5 s of +30% attack speed, +20% speed, triple pickup radius.
- Aim stick (default On): second thumb, lower half, +25% attack speed. Auto-aim gets no bonus: it made upright play too strong.
- Pillar 5: "One thumb is enough". iPhone web cannot vibrate.

## 3. Starting numbers
|Item|Value|
|---|---|
|Player|180 px/s; health 100, +1 per level|
|Hits|0.4 s invulnerable after a hit; hit cap 30% of max health; hits over 10% warned 0.6 s ahead|
|Soft start|damage 60% to 100% over minute 1; no archers or riflemen for 45 s; spawns 35% to full at 2:00; under 35% health for 10 s forces a breather|
|Start attack|spike every 0.8 s at nearest enemy in front: 14 damage, pierce 1, 320 px/s, range 300. Or bite every 0.8 s: 22, x2 under 30% target health, range unstated|
|Other attacks|claws 0.7 s, reach 70, 14; sweep 2 s, radius 110, 13; aura radius 80, 4 per second|
|Villager|health 10, speed 95, melee 6|
|Mob|6, 120, melee 5; 8-12 at once|
|Torchbearer|14, 80, keeps 130; fire patch every 3.2 s: radius 18, 5 per second, 3 s|
|Archer|12, 90, keeps 280; aim 0.6 s, arrow 10 at 420 px/s, every 2.4 s|
|Dog|8, 210, bite 5 after 0.25 s|
|Scaling|health x1.55 x (1+0.08m), m = minutes; damage x1.2 x (1+0.03m); bullets x0.8 speed|
|Spawns|budget per second 0.4, 1.1, 2.3, 3.1, 4.1 at minutes 0-4 (inference); villager costs 1, mob member 0.6; alive cap 48 +12 per minute|
|Rhythm|push 50-70 s; peak 15-25 s at x1.5; breather 10-15 s at x0.3; spawn just off camera, biased ahead|
|Pickup|orbs fly in within 50 px, vanish after 45 s; kills within 26 px eaten at once; orb XP 0.8 x cost|
|XP, levels 1-10|5, 8, 12, 18, 26, 49, 56, 64, 73, 71; target level 10 by 4:00 (311 XP, inference)|
|View|320 x 692 at 390 x 844 (inference); Zoom Auto "about 12% closer on phones"|
|Warnings|melee 0.25 s; burst 0.6; aim lines 0.6-1.3; cones 0.4-0.75; circles 1.0-1.3; lanes 0.7-1.1|

## 4. Feel as shipped
- Hit-stop, shake, slow-motion and particle-cap values: left out of the GDD on purpose (p. 74). Time effects scale only the simulation (fixed 1/60 s steps).
- Screen shake default Off. Damage numbers: big enemies only.
- Slow motion: on death (skippable after 0.8 s); 0.7 s at boss phase change.
- Gib: killing hit overshoots max health by 100% (starter body 60%), or death by blast; x1.5 XP.
- Gore (1.12): constant but short-lived; stains fade in about 7 s; particles capped; no effect brighter than what it hides.
- Knockback: unnumbered; elites take half.
- Warnings: one amber at 45% strength; circles fill; dashed aim lines turn solid before firing; one sound per shape.

## 5. HUD, upright (1.11)
- Interface: 270 units wide, about 585 tall on iPhone 13; one column; buttons 27 units tall; main action in the lower half; cards two per row; nothing under the thumb during play except Dash and Apex.
- Playfield fills under notch and home bar; text and buttons inside the safe area.
- Top left: level, health with number (flashes under 30%), XP. Second row: stage bar with clock. Top right: pause. Edge arrows: elites, off-screen fire, heals.
- No weapon strip. Cards: first tap selects, second takes.
- Death recap: killer, last 5 s, up to 6 hits marked warned or not.

## 6. Problems, unverified
- Never tested on a real iPhone or Safari.
- 27 units = 39 CSS px, under 44 (inference).
- Removed as noise: damage numbers on ordinary enemies, popups, health bars on non-elites, 12 settings.
- 14 unit types built, never spawned; a duplicated enemy table cancelled one tuning change.
- 45% and 7 s values: not re-read from code.
