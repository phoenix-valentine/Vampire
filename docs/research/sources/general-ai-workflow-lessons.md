# General AI Workflow Lessons (pages 1 to 10)

Source: `053f1bc1-General_AI_Workflow_Lessons.pdf`. The PDF has 2 pages, not 10 (PDF metadata: created 18 Nov 2026). Both pages were read in full; none unreadable. The document is four bullet lists under four headings. It has no tables, diagrams, checklists with boxes, code boxes or prompt boxes. Every bullet is recorded below. Lines marked "inference" are mine, not the document's.

## What it is

A two-page "companion document" to the owner's game guides [p. 1]. Its own subtitle: "Valuable lessons from the research that apply beyond game development: working with AI agents, money, distribution and rights." [p. 1]. It holds 24 one- or two-sentence lessons in four groups: 9 on working with AI agents, 5 on money and rights, 6 on distribution and markets, 4 productivity habits [p. 1-2]. It is written to a human who directs an AI ("ask again in a smaller piece", "do five-minute jobs yourself") [p. 1]. It says nothing about game design, controls, balance, phones or audio.

## Outline (the document's own section names, in order, with page numbers)

1. Title block: "Companion document. General AI Workflow Lessons" and subtitle [p. 1]
2. Working with AI agents: 9 bullets [p. 1]
3. Money and rights: 5 bullets, 4 on [p. 1] and the last one ("Disclose AI honestly and specifically") at the top of [p. 2]
4. Distribution and markets: 6 bullets [p. 2]
5. Productivity habits: 4 bullets [p. 2]

## Frameworks, lists and checklists

### Working with AI agents (9 lessons, in the document's order) [p. 1]

1. **Brief once, well.** A clear specification saves more money than a higher reasoning level. Write the spec first, then let the agent run [p. 1].
2. **Use a project rules file.** A file the agent reads every session (such as CLAUDE.md) with goals, constraints and a "don't touch" list prevents repeated mistakes across sessions [p. 1].
3. **The two-failure rule.** If two attempts fail, roll back to the last working state and ask again in a smaller piece, or raise effort for that one task only [p. 1].
4. **Effort is a dial, not a setting.** Default to medium, use high for real implementation work, and max only for one hard correctness problem. Each tier roughly doubles cost [p. 1].
5. **Planner-executor split.** A cheaper model drafts detailed prompts or specs; the strongest model executes [p. 1]. Note the direction: the cheap model plans, the strong model does the work.
6. **Grant permissions for self-checks.** Higher-effort runs try to test their own work; without permission, that effort is wasted [p. 1].
7. **Do five-minute jobs yourself.** Small manual edits are faster than prompting [p. 1].
8. **Version everything.** Commit after every working step so any AI mistake is one command from undone [p. 1].
9. **Learn to read, not necessarily write.** Basic literacy in the thing AI produces (code, contracts, spreadsheets) is what lets you catch errors [p. 1].

### Money and rights (5 lessons) [p. 1-2]

1. **Keep a rights ledger** for any AI-generated asset in a commercial product. Four fields: tool, plan, date, licence. Upgrading later does not retroactively license free-tier outputs [p. 1].
2. **Purely AI-generated work generally isn't copyrightable in the US;** the human's selection, arrangement and edits are. Add real human contribution to anything you need to own [p. 1].
3. **Cap AI spending against expected revenue.** Token costs can quietly exceed what a product earns [p. 1].
4. **US platforms withhold 30% from non-US sellers by default.** A W-8BEN with a treaty claim often cuts that; this applies to stores, YouTube and other creator platforms too [p. 1].
5. **Disclose AI honestly and specifically.** New rules (the EU AI Act since Aug 2026, store policies) are trending toward mandatory transparency, and hidden use that comes out costs more trust than disclosed use [p. 2].

### Distribution and markets (6 lessons) [p. 2]

1. **Distribution beats production.** AI collapsed the cost of making things and multiplied supply (Steam Next Fest +65% in one cycle; itch.io uploads doubled). Audience, timing and domain expertise are the remaining advantages [p. 2].
2. **Validate before building.** Test demand with a clip, a landing page or a waitlist before investing weeks. Interest isn't proof of value, so test usage too [p. 2].
3. **Daily short-form content** is the main free growth channel for small creators and app makers in 2026; paid ads rarely pay back at small scale [p. 2].
4. **Watch the label economics.** In crowded markets, visible AI content carries a measurable trust penalty. Use AI where customers don't see it, and keep human craft where they do [p. 2].
5. **Platform dependence is a risk.** Built-in audiences (Roblox, portals, app stores) trade reach for control. Keep a direct channel to your audience (email, Discord) [p. 2].
6. **Your unfair advantage is what AI doesn't know:** your expertise, community and taste [p. 2].

### Productivity habits (4 lessons) [p. 2]

1. Work in small, testable increments with a written "done when" for each [p. 2].
2. Set kill criteria before you test anything, so sunk cost doesn't decide for you [p. 2].
3. Write a three-line retrospective after each project: keep, change, try [p. 2].
4. Recheck prices, terms and model names before you pay or ship; in AI tooling they change monthly [p. 2].

## Numbers and thresholds

| What | Value | Page |
|---|---|---|
| Failed attempts before rolling back to the last working state | 2 | p. 1 |
| Default effort level | medium | p. 1 |
| Effort level for real implementation work | high | p. 1 |
| Effort level "max" | only for one hard correctness problem | p. 1 |
| Cost step between effort tiers | each tier roughly doubles cost | p. 1 |
| Size of job to do by hand instead of prompting | five minutes | p. 1 |
| When to commit | after every working step | p. 1 |
| Undo distance after a commit | one command | p. 1 |
| Rights ledger fields | 4: tool, plan, date, licence | p. 1 |
| Default US platform withholding from non-US sellers | 30% (a W-8BEN with a treaty claim often cuts it) | p. 1 |
| EU AI Act transparency rules | in force "since Aug 2026" | p. 2 |
| Steam Next Fest supply growth | +65% in one cycle | p. 2 |
| itch.io uploads | doubled | p. 2 |
| Short-form content cadence | daily; "main free growth channel" in 2026 | p. 2 |
| Paid ads | "rarely pay back at small scale" (no figure) | p. 2 |
| Investment that should come after validation | "weeks" | p. 2 |
| Retrospective length | three lines: keep, change, try | p. 2 |
| How often AI tool prices, terms and model names change | monthly | p. 2 |

The document gives no source or method for the +65%, "doubled" or 30% figures [p. 1-2]. Treat them as the owner's research summary, not as checked facts.

## What it means for Vampire: No Survivors

Parts (b) core loop, controls and feel, (c) content, difficulty, builds and balance, and (d) phone are left out: the document says nothing about them.

### (a) Process for an AI building alone

The document assumes a human briefs, checks and rolls back. With no owner in the loop, each lesson has to be applied by the lead to itself. All of the mappings below are inference; the lesson each one rests on is cited.

- **Spec before work.** Write the step's spec (the card, the "done when") before any code, and write full briefs for subagents rather than short ones plus a higher effort setting. The document's claim is that a clear spec saves more than a higher reasoning level [p. 1].
- **Rules file.** The repository already has a rules file read every session, which is the practice the document names [p. 1]. The document lists three contents: goals, constraints and a "don't touch" list [p. 1]. Inference: `CLAUDE.md` has goals and constraints but no list under the name "don't touch" (files and behaviours a session must not change, for example locked design numbers, the fairness invariants, the test tools). Worth adding, since the stated purpose is to prevent repeated mistakes across sessions.
- **Two failures, then roll back.** After two failed attempts, return to the last working commit and retry with a smaller piece, or raise effort for that one task only [p. 1]. Inference: `docs/PROCESS.md` section 7 allows three tries and does not say "roll back first". The document is stricter on both points.
- **Effort as a dial.** When the lead spawns helpers it should default to medium, use high for real implementation, and keep max for a single hard correctness problem, because each tier roughly doubles cost [p. 1]. Inference: candidates for max in this project are determinism and the fixed-step simulation, not research summaries or screenshot reviews.
- **Planner-executor split.** A cheaper model drafts the detailed prompt or spec and the strongest model executes [p. 1]. Inference: the lead can have cheap agents draft specs, teardown notes and briefs, and keep the implementation of the loop itself for the strongest model.
- **Self-checks need permission.** A run that cannot test its own work wastes its effort [p. 1]. Inference: every subagent that writes code must be given the tools to run `npm run check` and take screenshots, and the lead must confirm its own environment can run the headless browser and Node before relying on them.
- **Five-minute jobs.** Small edits are faster done directly than delegated [p. 1]. Inference: the lead should not spawn a subagent or write a long brief for a one-line change.
- **Commit after every working step.** Any mistake is then one command from undone [p. 1]. Inference: commit per working group, not only per step card; this is also what makes the two-failure rollback cheap.
- **Reading is the error catch.** The human's ability to read what the AI produces is what catches errors [p. 1]. Inference: the owner is not reading this code, so that catch is missing. It has to be replaced by automated checks and by reviewers who did not write the code, and reports to the owner must be in a form the owner can read without code.
- **"Done when" and kill criteria.** Small testable increments each with a written "done when"; kill criteria set before the test [p. 2]. Inference: write the kill criteria for the core-loop prototype (and for each of the possible 3 variations) before building or showing them.
- **Retrospective.** Three lines after each project: keep, change, try [p. 2]. Inference: add this at each milestone. The owner's Mutation lessons are the same habit, one project earlier.
- **Cost cap.** Token spend can quietly exceed what the product earns [p. 1]. Inference: a free browser game has expected revenue near zero, so the cap is a budget the owner sets, not one the lead can derive.

### (e) Testing and playtests

- Interest is not proof of value; test usage too [p. 2]. Inference: the plain-shapes core-loop prototype that the owner will play is the project's first usage test. What counts is whether the owner starts another run, not whether the idea sounds good.
- Kill criteria come before the test, so sunk cost does not decide [p. 2]. Inference: if 3 variations are built, the lead should state in advance what result keeps, merges or drops each one.
- Small, testable increments with a written "done when" [p. 2].
- Self-testing only works when the agent is allowed to run the tests [p. 1].

### (f) Market, positioning, name, release

- Supply has multiplied (Steam Next Fest +65% in one cycle, itch.io uploads doubled), so making the game is not the hard part; audience, timing and domain expertise are what remain [p. 2].
- Test demand with a clip, a landing page or a waitlist before investing weeks [p. 2]. Inference: a short clip of the prototype is the cheapest demand test available here, but posting anything is the owner's step under the repository rules.
- Daily short-form content is the main free growth channel in 2026; paid ads rarely pay back at small scale [p. 2]. Inference: the game should produce short, readable, striking moments on an upright phone screen, since those are what a clip shows.
- Visible AI content carries a trust penalty in crowded markets; use AI where customers do not see it and keep human craft where they do [p. 2]. Inference: code, balance and tooling are invisible; art, sound, the name and store text are visible. A deliberate plain-shapes or procedural look avoids the "AI art" label.
- Disclose AI use honestly and specifically; the EU AI Act (since Aug 2026) and store policies are moving toward mandatory transparency, and hidden use that comes out costs more trust than disclosed use [p. 2]. Inference: any release notes or store page should say what the AI did.
- Purely AI-generated work generally is not copyrightable in the US; human selection, arrangement and edits are [p. 1]. Inference: a game built by an AI alone with an owner who reviews almost nothing is the weak case for ownership. The owner's choices (the playtest verdict, picking among variations, the name) are the human contribution, and should be recorded.
- Keep a rights ledger (tool, plan, date, licence) for every AI-generated asset; upgrading a plan later does not license earlier free-tier outputs [p. 1].
- Portals and app stores give reach but take control; keep a direct channel such as email or Discord [p. 2].
- US platforms withhold 30% from non-US sellers by default; a W-8BEN with a treaty claim often reduces it [p. 1]. This matters only if the game earns money on such a platform, and only to the owner.
- The unfair advantage is the owner's expertise, community and taste [p. 2]. Inference: the owner's taste enters at the prototype test; the lead should make that stop easy to answer in a few words.
- Recheck prices, terms and model names before paying or shipping; they change monthly [p. 2].

## Warnings and anti-patterns

- Raising the reasoning level to make up for a vague brief. The spec saves more [p. 1].
- No rules file, so the same mistakes repeat in every session [p. 1].
- Retrying a third and fourth time on a broken state instead of rolling back and cutting the task smaller [p. 1].
- Running everything at maximum effort. Each tier roughly doubles cost; max is for one hard correctness problem [p. 1].
- Asking for high-effort work without permission to run checks; the effort is wasted [p. 1].
- Prompting for a five-minute edit [p. 1].
- Uncommitted working states, so a mistake cannot be undone in one command [p. 1].
- An owner who cannot read what the AI produced and so cannot catch errors [p. 1].
- Using free-tier AI outputs in a commercial product and assuming a later upgrade covers them [p. 1].
- Assuming purely AI-generated work is owned [p. 1].
- Letting token costs exceed what the product can earn [p. 1].
- Hiding AI use; discovery costs more trust than disclosure [p. 2].
- Believing that building the thing is the advantage, when supply has multiplied [p. 2].
- Investing weeks before any demand test; treating interest as proof of value [p. 2].
- Paid ads at small scale [p. 2].
- Visible AI content in a crowded market [p. 2].
- Depending on one platform's built-in audience with no direct channel [p. 2].
- Testing without kill criteria, so sunk cost decides [p. 2].
- Paying or shipping on prices, terms or model names that were not rechecked [p. 2].

## Prompts and templates in the document

The document contains no prompts and no filled-in templates. It names five things that work as templates, with their fields:

| Name | What it is for | Fields as written | Page |
|---|---|---|---|
| Project rules file (such as CLAUDE.md) | Read every session; prevents repeated mistakes | goals, constraints, a "don't touch" list | p. 1 |
| Rights ledger | Proof of the right to use each AI-generated asset commercially | tool, plan, date, licence | p. 1 |
| "Done when" | Makes each small increment testable | one written condition per increment | p. 2 |
| Kill criteria | Decides before the test what ends an idea | set before testing anything | p. 2 |
| Three-line retrospective | Carries lessons to the next project | keep, change, try | p. 2 |

## Things the lead should decide or check

1. Stop rule: the document says two failures, then roll back and shrink the task or raise effort for that task only [p. 1]. `docs/PROCESS.md` section 7 says three tries with no rollback step. Decide which holds and log it.
2. Add a "don't touch" list to `CLAUDE.md` [p. 1], or log why the existing "rules that never bend" already cover it.
3. Commit grain: per working group rather than per step [p. 1].
4. Effort and model policy for subagents: medium by default, high for implementation, max for one hard correctness problem; cheap model drafts specs, strongest model executes [p. 1]. Check that the helpers used so far follow this.
5. Confirm every code-writing helper has permission to run the checks [p. 1].
6. Write kill criteria for the core-loop prototype and for each variation before the owner sees them [p. 2].
7. Start a rights ledger (tool, plan, date, licence) before the first AI-generated image or sound enters the game [p. 1]. Inference: record the code's tool and plan there too.
8. Put under "For the owner": the copyright point (human contribution is what can be owned) [p. 1], an AI spending cap [p. 1], AI disclosure wording for any release [p. 2], the 30% withholding and W-8BEN if the game is ever sold [p. 1], and whether to run a clip or waitlist demand test [p. 2].
9. Add a keep, change, try retrospective at each milestone [p. 2].
10. Before any release or paid tool: recheck prices, terms and model names [p. 2].
11. Not from the PDF, from this task's context: the owner asked to test the core-loop prototype personally as the first stop, while `docs/PROCESS.md` says the owner does not playtest. The document's "test usage" and "kill criteria" lessons [p. 2] fit an owner test at that point. Check that the roadmap has this stop.
