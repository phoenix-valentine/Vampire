# Digest: toolkit and process

Sources read in full: Game Dev Toolkit (TK), Small Games Roadmap (RM), General AI Workflow Lessons (LS, via its notes). **T**: buildable now (Node, headless Chromium). (inf): inference.

## 1. Toolkit checklist

TK is a product buyer's guide: no scripts, no debug tools, one check (Smoke test). **T** items by TK area [p.1-6]: 3 code-drawn art (flat shapes, particles, simple characters on canvas); 4 code animation (squash, stretch, bobbing, particles, tweens); 6 sounds generated in code; 8 coded text-and-sound blips; 9 Claude-written store text, trailer script, shot list; 10 Smoke test, as a headless script (inf).

Other named products, in TK order (nothing to build): Claude Pro/Max/Free, Godot; Claude Projects and Docs, Research; PixelLab, Midjourney, Recraft, Scenario, Ludo.ai, Kenney CC0 packs, Aseprite; SpriteCook/AutoSprite; Tripo AI, Meshy; jsfxr, ChipTone, ElevenLabs, Kenney audio; Suno Pro, AIVA Pro, CC0 loops, Udio, ElevenLabs Music; ElevenLabs voice; OBS Studio, DaVinci Resolve, CapCut; itch.io, friends, Discord, Steam.

Techniques [p.7-11], all **T**: pipeline (generate, clean up, format, hand over, test); SFX under 1 s, silence trimmed; UI drawn in code; small assets as data URIs in the one file; asset list (file name, size, frames, source tool, licence); one simple style, palette of 8-16 colours. Safest to sell: code-drawn art, coded sounds, CC0 packs, PixelLab, AIVA Pro.

## 2. Roadmap stages

In order; "Done when" gates each [p.1].

1. Pitch (0.5 day): one-sentence core loop, 1-2 strengths, max 3 inputs, 5 must-haves. Done: explained in 10 s.
2. Prototype (3): below. Done: core action fun with plain shapes; silent tester replays unasked.
3. Complete loop (2): goal, loss, states; retry under 2 s, no menus; readable losses; ramp starts "easier than you think". Done: 10 clean rounds in a row.
4. Content (2): max 3 kinds each of level, enemy, power-up, added singly. Done: new player enjoys 5+ min.
5. Juice (1.5): sound on every action, hit, score, death; shake, brief freeze, particles; playing within 10 s. Done: every action has feedback.
6. Playtest (2): feature freeze; bug review; 3 silent testers; fix top 3. Done: 3 finish unaided; no crash.
7. Release (1): crash fixes max 3 days; retro. Done: link works on another device.

Prototype must show [p.5]: (a) toy: moving the bare player shape feels good for 30 s; (b) core action; (c) one challenge; (d) 30-minute feel pass: instant input response, one sound on the core action, one tiny hit effect (flash or brief freeze); (e) silent test: one person, told only controls, watched 2 min; record confusion and unprompted replay. Not fun after 2-3 tweaks: make the most fun 10 s the core. "Never add features to fix 'not fun.'" Traps: art, menus, scores.

Every stage: one feature per loop. Fix now: crash, unfinishable, broken controls; else log in Known bugs. Tweakable numbers in one commented settings section.

## 3. Lessons as self-rules (inf)

A. Agents
1. Spec and "done when" before code; full briefs over higher effort.
2. Rules file every session; add a "don't touch" list.
3. 2 failures: roll back to last working commit; retry smaller or raise effort for that task only.
4. Helpers: medium effort; high for implementation; max for one hard correctness problem.
5. Cheap model drafts specs; strongest implements.
6. Let code-writing helpers run the checks.
7. Edits under 5 minutes: do directly.
8. Commit after every working step.
9. No human reads code: automated checks plus a non-author reviewer.

B. Money and rights
1. Ledger per generated asset: tool, plan, date, licence.
2. Record the owner's choices (ownable part).
3. Report cost; owner sets cap.
4. US withholding 30%: owner's note.
5. State AI use specifically.

C. Distribution
1. Production isn't the edge.
2. Count replays, not interest.
3. Produce clip-ready upright moments.
4. Keep visible surfaces crafted.
5. Note a direct channel.
6. Owner decides taste.

D. Habits
1. Small increments with written "done when".
2. Kill criteria per variation before testing.
3. Retro: keep, change, try.
4. Recheck prices and terms before shipping.

## 4. Versions, backups, reports

From RM unless marked.

Backup [p.3]: save only what works. Numbered copy per working feature, `mygame_v07.html`; whole game works: also `mygame_GOOD.html`. Tracker: `Latest backup: [mygame_v07.html]   GOOD file: [mygame_GOOD.html, saved after v05]`. Shippable once Stage 3 ends.

Smoke test [p.3]: 5-10 lines ("title shows -> Space starts -> player moves -> can score -> can die -> R restarts"); run after every change; add each new feature.

Change report [p.10]: what changed; all Smoke items still exist; removals, renames; what to try and see.

Bug report [p.11]: did; expected; happened; console error.

Feel report [p.11]: moment, feeling, a better game; or compare snappier and floatier versions.

Screenshots: of the moment [p.12]; at game size [TK p.8]; 3-5 plus GIF at release.

No document defines a changelog, debug line or on-screen version.

## 5. Contradictions

1. Failures: LS rolls back after 2; RM reverts or cuts after 3; `PROCESS.md` allows 3.
2. Palette: RM 3-5 colours; TK 8-16.
3. Music: TK's default Suno is absent from its "safest" list; RM: CC0 only.
4. Asset record fields differ (TK, LS); use the union (inf).
5. Retro: RM right, wrong, new rule; LS keep, change, try.
6. Plan conflict (inf): RM defers ramp to Stage 3, power-ups to 4, juice to 5, bans menus and scores in prototypes, assumes keyboard and a human judge. Pass toy and feel checks first.
