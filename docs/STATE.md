# State

**Milestone:** 0, foundations. **Step:** none started. **Version:** none yet.

## Done

- The process, roadmap and prompts are written (version 3 of the plan). No game code exists yet.
- Environment checked: Node 22, Chromium with iPhone 13 screen settings, WebGL2 and 4x CPU slowdown
  all work here. No WebKit, so nothing in this project is ever checked in Safari by Claude.

## Owner's instructions of 2026-11-26 (second message). These override anything older

1. The owner attached the Mutation design document and 15 guides. They are read into
   `docs/research/sources/` (notes, not the PDFs). The PDFs are not in the repository.
2. The five differences from Mutation are suggestions only. The game may look and feel like Mutation
   as long as it plays well.
3. Playable builds: a private page per milestone plus the HTML file in `dist/`.
4. Violence is realistic, not stylised.
5. The name stays "Vampire: No Survivors" for now.
6. **First stop for the owner:** after the attached files and other games are analysed and the game's
   own recipe and design document exist, build a really polished core loop with plain shapes,
   possibly in 3 variations, and hand it to the owner to judge whether it is fun. Work stops there
   until they answer.

## Usage rule from the owner (2026-11-26, third message)

Continue, but pause when the five-hour usage window reaches 80%. Check usage between batches
(session events of kind rate_limit_event). Run small batches. When usage is at about 70%, start no
new batch of agents; finish what is cheap, save the state, and stop.

## Resumed 2026-11-26 23:42 UTC (new usage window)

Lean plan, chosen to reach the owner's first stop on a limited budget:
- Five digest agents write short briefs to `docs/research/digests/` (the long notes are not read by the lead).
  They also read the three PDFs that matter most and had no notes: Mutation pages 51 to 75 (the
  lessons), Game Dev Toolkit, Small Games Roadmap, Twisting the Classics.
- Deferred until after the owner's test of the prototype: notes for solo-dev-guide-profit-ai and
  success-recipes-research-upgrade (market topics); research files theme-bible, iphone-web-pitfalls,
  predator-games, phone-portrait-ux; teardowns of halls-of-torment, magic-survival, archero,
  megabonk, deep-rock-galactic-survivor, survivor-io. The workflow scripts are in `tools/workflows/`.
- The lead writes `docs/DESIGN.md` and `docs/ARCHITECTURE.md` itself; builder agents with small
  contexts write the code against them; the lead checks results by running the checks and looking
  at screenshots.

## Next action (work in progress, 2026-11-26)

Working toward the owner's first stop: a polished plain-shapes core loop, in up to 3 variations.

1. Running now (background workflows): readers turning the owner's 16 PDFs into notes in
   `docs/research/sources/`, web research in `docs/research/*.md`, ten teardowns in
   `docs/research/teardowns/`. Web search budget is limited and page fetch is blocked, so research
   files mark what is from memory.
2. Next: a digest workflow that boils the notes down to short briefs in `docs/research/digests/`
   (the notes are too long to read whole: about 4,000 to 10,000 words each).
3. Then: a design panel workflow (3 independent core loop designs, judged), then `docs/DESIGN.md`
   and `docs/ARCHITECTURE.md`.
4. Then: build. Already written and not yet wired together: `tools/build.mjs`, `tools/serve.mjs`,
   `src/core/rng.js`, `src/core/grid.js`, `src/app/screen.js`, `src/app/loop.js`, `src/app/input.js`,
   `src/index.html`, `src/body.html`, `src/style.css`. Still missing: `src/app/main.js`, the
   simulation, renderer, sound, HUD, bots, lab, `tools/check.mjs`, `tools/shots.mjs`.
5. Then: review workflow, bot tuning, screenshots; publish `dist/vampire-embed.html` as a private
   page (it is page content only, as the host requires); test card for the owner; stop.

Facts learned so far that the build must respect:
- The 16 blocks are: 1 core loop, 2 controls, 3 feedback and feel, 4 rules and systems, 5 content,
  6 difficulty and pacing, 7 progression and rewards, 8 session structure, 9 readability and
  interface, 10 art, 11 audio, 12 theme and story, 13 onboarding, 14 menus and settings, 15 saving,
  16 platform. Gates: A Core, B Structure, C Presentation, D Wrapper. `ROADMAP.md` still shows the
  earlier guess and must be corrected.
- The Blueprint's step 7 is exactly the owner's first stop: plain shapes, 2 or 3 variations as
  toggles, then lock the design document as v1.
- The owner's guides want sound in the prototype (every action has a visual and a sound response),
  a level-up choice and a pressure ramp even in the prototype, playing within 10 seconds, restart
  in under 2 seconds, cause of death shown.
- The host page for the playable link pads the top and bottom safe areas itself, blocks downloads
  and `alert()`, allows clipboard copy from a tap, and plays sound only after a tap.

## For the owner (nothing here blocks the work; the default is used until answered)

| Question | Default in use |
|---|---|
| When to resume after the pause, and how much usage to spend per session | Stay paused until told to go |

## Open problems

None.
