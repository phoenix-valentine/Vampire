export const meta = {
  name: "bullet-heaven-teardowns",
  description: "Block-by-block teardowns of bullet heaven games on the owner's 16-block worksheet",
  phases: [{ title: "Teardown", detail: "one researcher per game writes a worksheet under docs/research/teardowns" }],
}

const CONTEXT = `PROJECT CONTEXT
An AI agent (the "lead") is building, on its own, a phone-first "bullet heaven" (survivor-like) web game called "Vampire: No Survivors": the player is a vampire who hunts humans. One HTML file, upright iPhone first, one thumb, short runs. Working core idea: "You hunt humans through a town at night, drinking blood to grow stronger, while hunters close in and dawn approaches." The next thing built is a polished plain-shapes prototype of the core loop, so blocks 1 to 4 and block 6 and 7 deserve the most care in your teardown.

HOW TO RESEARCH
Use the WebSearch tool (if it is not already available, load it with ToolSearch using the query "select:WebSearch"). If you have a WebFetch tool, use it to read the most useful pages in full; otherwise work from search results. Use public sources only: the game's wiki, store pages and review summaries (Steam, App Store, Google Play), developer interviews, postmortems, talks, and player discussions. Run many searches. Cite sources with URL and date. Do not guess numbers you cannot find: write "not found". Mark anything written from memory as "(from memory, unverified)". If the web is unreachable, say so at the top and continue from memory with that marking.
Ideas only. "Take" means borrow the idea and build our own version; never suggest copying code, art, sound, names or characters.`

const WORKSHEET = `WORKSHEET (the owner's "block teardown worksheet", fill in every part)
Game: ___ · Genre: ___ · Platforms and price: ___ · Release: ___ · Review standing (store ratings with counts and dates): ___
Its core sentence: "You [action] to [goal] while [pressure]."
What players love (from reviews): five items, each tagged with its block.
What players complain about: five items, each tagged with its block.
One table with a row for each of the 16 blocks. Columns: # | Block | How this game does it (2 or 3 lines, covering the sub-blocks) | Score 1 to 5 and why | Take / Avoid / Ignore for our game, with the reason.
The 16 blocks and their sub-blocks:
1 Core loop (verbs, goal, obstacle, reward, cycle length)
2 Controls (input method, mapping, responsiveness, forgiveness, phone and desktop parity)
3 Feedback and feel (instant response, motion, impact, reward moments, sound feedback)
4 Rules and systems (entities, movement and collision, scoring, win and lose conditions, resources, randomness)
5 Content (enemy or obstacle types, variations, levels or waves, spawn patterns)
6 Difficulty and pacing (starting difficulty, ramp, tension and release, run arc, fairness of failure)
7 Progression and rewards (in-run growth, between-run unlocks, player mastery, goals and collections)
8 Session structure (time to play, run length, the ending, retry speed, stopping points, reason to return)
9 Readability and interface (visual priority, on-screen info, text, colour meanings, clutter)
10 Art (style, palette, shapes, animation, visual effects, consistency)
11 Audio (action sounds, reward sounds, music, mix, muted play)
12 Theme and story (setting, the fiction that explains the rules, tone, characters, narrative)
13 Onboarding (time to first play, teaching through play, first win, introducing each new thing, hints)
14 Menus and settings (title, pause, game over, settings, credits)
15 Saving (best score, unlocks, settings, mid-run saves)
16 Platform (performance, screen sizes and orientation, input devices, loading, store page)
Which blocks carry the most weight in this game, and which are deliberately simple.
Its best block: ___ · Its weakest block: ___
THE NUMBERS (as many as can be sourced): run length; time to first kill and first level-up; number of level-ups in a run; number of choices per level-up and whether there are rerolls, banishes or skips; number of weapon and passive slots; number of weapons, passives, characters, enemy types and stages at launch and now; enemies on screen; player and enemy speeds; how difficulty scales over time.
THE FIRST MINUTE: describe second by second what a new player sees and does in the first 60 seconds.
For our game: the three ideas most worth taking and how each would serve our core; the three mistakes to avoid; and, for the scorecard areas where this game may be the best in the genre (builds and choices, pacing and fairness, readability on a phone, instant one-thumb play, theme that explains the rules), exactly what it would take to beat it.`

const SCHEMA = {
  type: "object",
  properties: {
    game: { type: "string" },
    file: { type: "string" },
    core_sentence: { type: "string" },
    scores: {
      type: "array",
      description: "exactly 16 integers from 1 to 5, block 1 first",
      items: { type: "integer" },
    },
    best_block: { type: "string" },
    weakest_block: { type: "string" },
    loves: { type: "array", maxItems: 5, items: { type: "string" } },
    complaints: { type: "array", maxItems: 5, items: { type: "string" } },
    take: { type: "array", maxItems: 4, items: { type: "string" } },
    avoid: { type: "array", maxItems: 4, items: { type: "string" } },
    key_numbers: { type: "array", maxItems: 12, items: { type: "string" } },
    first_minute: { type: "string" },
    could_not_confirm: { type: "array", maxItems: 8, items: { type: "string" } },
    web_reachable: { type: "boolean" },
  },
  required: ["game", "file", "core_sentence", "scores", "best_block", "weakest_block", "loves", "complaints", "take", "avoid", "web_reachable"],
}

const results = await parallel(
  args.games.map((g) => () =>
    agent(
      `${CONTEXT}

YOUR GAME: ${g.name}
Why it is in the set: ${g.why}

Write the teardown with the Write tool to exactly this path (about 1,800 words, Markdown, no emoji):
/home/user/Vampire/docs/research/teardowns/${g.slug}.md

${WORKSHEET}

Rules: write only that one file. Do not run git. Your structured answer is a short digest for the lead; the file is the real product.`,
      { label: `teardown:${g.slug}`, phase: "Teardown", schema: SCHEMA },
    ),
  ),
)
const failed = args.games.filter((g, i) => !results[i]).map((g) => g.slug)
if (failed.length) log(`Not completed: ${failed.join(", ")}`)
return { done: results.filter(Boolean), failed }
