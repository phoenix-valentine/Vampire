# Prompts

The step cards in `ROADMAP.md` are the prompts Claude gives itself. This file holds the other two
kinds: briefs for agents that must see the game without Claude's knowledge of it, and cards for
things that come up along the way.

## Briefs for fresh agents

A fresh agent gets only what its brief lists. It is never told what Claude hopes to hear, never
shown the design document unless the brief says so, and never reused for a second pass at the same
question.

### R1. Readability reader

> You are shown one screenshot of a phone game at its busiest moment. You know nothing else about it.
> 1. Give the pixel position of the character the player controls.
> 2. Give the pixel positions of the three things most likely to hurt the player in the next second.
> 3. Say what on the screen made each of these hard or easy to find.
> Answer quickly from first impression. Do not reason about what the game "probably" intends.

Scoring: player within 24 px of the true position; at least two of three dangers within 40 px.

### R2. Theme reader

> You are shown five screenshots of a phone game, in order, and nothing else. For each of these, say
> in one sentence what you think it does or means, and how sure you are: the red resource; the
> bright areas of the ground; the people running away; each kind of pickup; each icon in the HUD.
> If you cannot tell, say so. Do not guess to be helpful.

Scoring: against the design document. A confident wrong answer counts double against the build.

### R3. First-ten-seconds reader

> You are shown the first screen of a phone game and the first three moments of play. Nothing else.
> Say: what you would do first, with which finger, where; what you think the goal is; what you think
> will kill you. List anything you would have to stop and read.

Scoring: one wrong guess about how to move or what to do fails the onboarding.

### R4. Gate reviewer

> You are a strict reviewer who did not build this game. You are given: the build, the checklist for
> Gate ___, the design document entries for blocks ___ to ___, and this evidence: ___.
> Do not change any code. Report only problems that would fail the gate, not style preferences.
> One table: what fails, which block, the problem, the smallest fix. Then a clear Pass or Fail.
> If the evidence is not enough to judge an item, mark it "not shown" and count it as a fail.

### R5. Pre-release reviewer

> Review this game for release as a strict reviewer. Do not change code. Check and report: bugs and
> likely bugs (restart and state reset, collision, getting stuck, timing, input, audio start and
> overlapping copies, saving, resize and rotation, anything that piles up over a long run); paths the
> smoke test does not walk; missing finishing touches (title, pause, settings, death recap, credits,
> mute); leftovers (debug code, dead code and data, placeholder text, typos).
> One table: issue, where, severity (Blocker, Major, Minor, Cosmetic), smallest fix, ordered by severity.

### R6. Research agent (one per piece of step 1.5)

> Research ___ for a phone bullet heaven game about a vampire who hunts humans. Search the web:
> player reviews, postmortems, talks, design writing. Cite each source with its date. Do not guess
> numbers you cannot find; mark what you could not confirm. Ideas only: note where something is one
> creator's invention, and never suggest copying names, characters, art, sound or code.
> Return ___ (the exact shape the step card asks for), no longer than ___.

## Cards for along the way

### A. Fix a bug

Reproduce it first from a seed and a replay. If it cannot be reproduced, say so in `STATE.md` and
record what would be needed. Explain in plain words what causes it and what else that code touches.
Make the smallest fix. Add a check to the smoke test or a unit test so it cannot come back unnoticed.
Third try at the same bug: stop, write three other possible causes, try the most likely.
Done when the replay no longer shows it and `npm run check` passes.

### B. This feels wrong (raised by a reviewer, a lab number, or the owner)

List the settings that control the moment. Build three small tweaks as toggles, ranked by expected
impact. Compare by the lab or a cold reader. Keep one, delete the others, update the settings table.
Change nothing else.

### C. Budget check (before any new idea is built)

How does it serve the core sentence? What does it cost in clarity? Does the budget have room? What
could be removed instead? Then one of: build the smallest version now, park it on the "later" list,
or swap it for something already in. Log the choice. The budget table must still add up.

### D. Cut something

List everything that belongs to it: code, data, art, sound, text, settings, tests, and every mention
in the design document. Delete all of it in one change. Run the smoke test and the lab, and record
what else changed because it is gone. Done when nothing of it is left in the source and a full run
still completes.

### E. Change after lock

Classify it: a bug, a small change (a number or a timing), a big change (a rule or a mechanic), or a
change to the core sentence. Small: make it, log it, re-run that block's test. Big: update the design
document first, rebuild that block, re-run the gates it touches. Core: prototype it with plain boxes
before anything else. One change at a time.

### F. Cut scope

Act as a strict producer. Which parts of the game do least for the five scorecard blocks? What goes
first and what does each cut save? Choose between a small, a medium and a deep cut by the rule in
`PROCESS.md` section 4. Use card D for each thing that goes. Update the budget table.

### G. Handover

`STATE.md` is the handover and is kept current after every step, so no separate brief is needed. If
`STATE.md` and the repository ever disagree, the repository wins and `STATE.md` is corrected first.
