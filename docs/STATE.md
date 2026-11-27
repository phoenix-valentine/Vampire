# State

**Stopped at the owner's first stop, 2026-11-27.** Prototype v0.1.0 is built, checked and published.
Do not continue building until the owner has played it and answered.

- Playable page (private to the owner): https://claude.ai/artifact/WzD5dZGqBfymbxQTQ31huZ
  To update it, run `node tools/build.mjs` and publish `dist/vampire-embed.html` to that same address.
- The same game as one file to open directly: `dist/vampire.html`.
- Design: `docs/DESIGN.md` (v0.1, not locked). Numbers: `src/core/settings.js`. History: `CHANGELOG.md`.
- Checks: `node tools/check.mjs` (61 pass). Bots and balance table: `node tools/lab.mjs 20 --save`, result in `reports/lab-latest.md`.

## Standing instructions from the owner

1. The five differences from Mutation are suggestions; the game may resemble Mutation if it plays well.
2. Violence is realistic, not stylised. The name stays "Vampire: No Survivors" for now.
3. Playable builds: a private page per milestone plus the HTML file in `dist/`.
4. **Usage:** pause when the five-hour usage window reaches 80%. Check between batches (session events
   of kind rate_limit_event). At about 70% start no new agents. Agents are expensive here: five reading
   agents cost about a quarter of a window. Prefer the lead writing in large steps; keep reviews small.

## What the owner was asked (the test card)

Play each variation two or three times on the phone, upright, with sound on (ring switch off silent).
1. Which variation, if any, made you start another night without thinking about it?
2. After dying, could you say what killed you and what you would do differently?
3. In your own words, what does each variation ask you to do?
4. Anything that felt wrong: movement, the hit, the blood, the cards, the sound, the difficulty.
5. Optional: tap "Copy a report of this night" on the end screen and paste it, or send a screenshot
   with the small technical line showing (tap the version number).

Pass bar and kill criteria are in `docs/DESIGN.md` section 6. Blueprint step 7 allows up to three
rounds of changes before the core itself must change.

## When the owner answers

- **One variation is fun:** keep it (or the best parts of two), delete the others in the same change,
  lock `docs/DESIGN.md` as v1, then follow `docs/ROADMAP.md` from step 2.1 with the block table there.
- **Almost:** list the three biggest problems, change only what the owner picks or what the notes
  clearly point to, publish again, ask again. At most three rounds.
- **Not fun:** go back to the synthesis and pick a different twist; prototype again with plain shapes.
- Turn every note into a numbered list and answer each item in `CHANGELOG.md`.

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
| The verdict on the three variations | Work is stopped until it arrives |
| Should sound ignore the phone's ring switch? | No: it follows the switch, and the title screen says so |
