# State

**Paused by the owner on 2026-11-27. Do not resume until the owner asks.**
The owner has given the verdict on v0.1.0 and asked for more. The plan below is decided; build it.

- Playable page (private to the owner): https://claude.ai/artifact/WzD5dZGqBfymbxQTQ31huZ
  To update it, run `node tools/build.mjs` and publish `dist/vampire-embed.html` to that same address.
- Design: `docs/DESIGN.md` (v0.1). Numbers: `src/core/settings.js`. History: `CHANGELOG.md`.
- Checks: `node tools/check.mjs` (61 pass). Lab: `node tools/lab.mjs 20 --save`.

## The owner's verdict (2026-11-27)

"Slaughter is definitely proven and works the best. But feels very basic, can you continue on your
research and development and show me what you can do?"

Reading: keep Slaughter as the core, cut Feed and Hunt, and make the game deep and good-looking.

## Next: v0.2, the slice. Build in this order, commit after each step, publish once step 4 works

1. **Cut Feed and Hunt whole** in one change: modes, hunger, blood pools, prey, fleeing, escapes and
   alarm, their bot branches, texts and checks. Keep the walled square and the gates.
2. **Depth, in the simulation**
   - Frenzy (the one twist): each kill fills a ring around the vampire (tough humans count 3); it drains
     after 2.5 s without a kill. Full: 6 s of frenzy, with 25% more speed, claws 40% faster and all
     round, blood flying in from three times as far. Kills extend it, up to 4 s more.
   - Build: claws are innate with levels II and III. Three attack slots chosen from five: Bat Swarm,
     Blood Lance, Blood Nova, Mist Trail (new: a damaging, slowing trail behind you), Grave Spikes (new:
     spikes under random nearby humans). Three gift slots chosen from six: Bloodlust (faster claws),
     Swift, Thick Blood, Hypnotic Gaze, Mist Form, Thirst (new: blood from further, heals more).
   - Evolutions: an attack at level 3 plus its paired gift offers a gold card. Claws + Bloodlust =
     Reaper's Scythe. Bats + Swift = Night Wings. Lance + Thirst = Crimson Rain. Nova + Thick Blood =
     Night Terror. Mist Trail + Mist Form = Grave Fog. Spikes + Gaze = Impaler. Every card names its
     pair. Two rerolls a night.
   - Humans: add the Hound (faster than the vampire, weak, in packs from 1:15) and the Torchbearer
     (throws fire that burns a patch of ground, with a 0.7 s warning circle). Elite Witch Hunter at
     1:05 and 2:05 (a fan of three bolts; drops a chest that opens a card screen with a guaranteed
     evolution or a double upgrade).
   - Boss: the Inquisitor arrives at 2:30; the night now ends at 3:30. One idea: his lantern throws a
     turning cone of holy light that burns, so stay out of the light. He also calls holy circles
     (1.1 s warning) and rallies the mob. At half health: a second cone and a faster turn. Killing him
     ends the night in triumph; lasting until dawn is the lesser win.
   - Retune with the lab. Keep every fairness number.
3. **Art, all drawn in code, no image files:** a caped vampire, human figures with their weapons, the
   hound, the witch hunter, the Inquisitor with his lantern, a cobbled square, stone walls, gate
   lanterns and lamp posts with warm light, roofs beyond the walls, blood drops and pools, claw
   crescents, bats, lances, mist, spikes, fire, holy light. A title with a moon and the town's skyline.
4. **Screens:** cards with icons, level pips, the pairing line and a reroll button; a boss bar; edge
   arrows to the elite and the chest; best-night records saved.
5. **Sound:** music made in code (a drone, sparse minor notes, layers by stage, a boss theme) with its
   own switch; sounds for every new event.
6. **Research, written by the lead from knowledge** (pages cannot be read from here, and agents are
   costly): `docs/research/theme-bible.md` and `docs/research/depth-systems.md`, marked unverified.
7. Checks, screenshots, one small independent review, publish to the same address, then bring
   `docs/DESIGN.md` to v1 (locked) with the new budget table and update `CHANGELOG.md`.

Keep the method that worked: the lead writes whole files in large steps, few tool calls, checks after
each group. Mutation's first lesson applies: this list is the budget; nothing beyond it in v0.2.

## Standing instructions from the owner

1. The five differences from Mutation are suggestions; the game may resemble Mutation if it plays well.
2. Violence is realistic, not stylised. The name stays "Vampire: No Survivors" for now.
3. Playable builds: a private page per milestone plus the HTML file in `dist/`.
4. **Usage:** pause when the five-hour usage window reaches 80%. Check between batches (session events
   of kind rate_limit_event). At about 70% start no new agents. Agents are expensive here: five reading
   agents cost about a quarter of a window. Prefer the lead writing in large steps; keep reviews small.

## Known limits of v0.1.0 (also told to the owner)

- Never run on a real iPhone or in Safari. Layout, touch and sound were checked only in Chromium with
  phone settings. Frame times are a stand-in, not a measurement of a phone.
- Nobody has heard the sound. Levels and limits are checked; whether it sounds good is not.
- Bots show the game is fair by its own numbers and neither trivial nor impossible. They say nothing
  about fun. The careful bot wins about 90% of nights; a careless one never does; real players will
  fall in between and the difficulty will need the owner's notes.
- Hunt may be too easy for a skilled player who ignores escapes (the careful bot wins every night with
  about 70 escapes) and too hard for a new one. Feed is harsh until its one rule is understood.
- The independent reviewer's eight findings were fixed; the cold reader of screenshots found the
  vampire every time but could not tell friend from foe, which led to weapons on armed humans, darker
  bodies and shorter aim lines. That reading was not repeated after the fixes.

## Deferred, in this order, once the core is chosen

1. Research still to do: theme bible, six teardowns (Halls of Torment, Magic Survival, Archero,
   Megabonk, Deep Rock Galactic: Survivor, Survivor.io), iPhone pitfalls, predator games, phone layout
   survey; notes for the two market guides. Scripts are in `tools/workflows/`. The owner's PDFs are not
   in the repository: ask for them again if the session's upload folder is gone.
2. `docs/PROCESS.md` still describes the first plan (large agent batches, step 0.3 rendering test).
   Bring it in line with what was actually done and with the usage rule.
3. The roadmap cards for milestones 0 and 1 predate the owner's documents; from 2.1 on they apply.

## For the owner (nothing here blocks)

| Question | Default in use |
|---|---|
| Should sound ignore the phone's ring switch? | No: it follows the switch, and the title screen says so |
