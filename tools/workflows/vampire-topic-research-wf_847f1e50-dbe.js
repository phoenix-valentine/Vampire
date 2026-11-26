export const meta = {
  name: "vampire-topic-research",
  description: "Web research for the vampire bullet heaven: genre guide, core loop and feel, theme bible, iPhone web pitfalls, predator games, phone layout",
  phases: [{ title: "Research", detail: "one researcher per topic, each writes a file under docs/research" }],
}

const CONTEXT = `PROJECT CONTEXT
An AI agent (the "lead") is building, on its own, a phone-first "bullet heaven" (survivor-like) web game called "Vampire: No Survivors": the player is a vampire who hunts humans. One HTML file, JavaScript with canvas or WebGL, upright iPhone 13 first (390 x 844 CSS px), played with one thumb; desktop comes later. Runs are short (the owner's guides say 1 to 5 minutes for phone play). The violence is to be realistic rather than cartoonish. The very next thing to be built is a polished plain-shapes prototype of the core loop (blocks: 1 core loop, 2 controls, 3 feedback and feel, 4 rules and systems), possibly in 3 variations, which the owner will play on a phone to judge whether it is fun. Your research feeds the design document and that prototype directly, so concrete, usable findings and starting numbers matter more than general advice.

HOW TO RESEARCH
Use the WebSearch tool (if it is not already available, load it with ToolSearch using the query "select:WebSearch"). If you have a WebFetch tool, use it to read the most useful pages in full; otherwise work from search results. Run many searches from different angles. Cite every source with its URL and its date. Do not guess numbers: if you cannot find one, say "not found". Mark anything you write from memory rather than from a source as "(from memory, unverified)". If the web is unreachable, say so at the top of the file and continue from memory with that marking.
Ideas only: note where something is one creator's invention, and never suggest copying names, characters, art, sound, levels or code.

OUTPUT RULES
Write exactly one Markdown file at the path given, with the Write tool. No emoji. Do not run git and do not edit any other file. Your structured answer is a short digest for the lead; the file is the real product.`

const SCHEMA = {
  type: "object",
  properties: {
    file: { type: "string" },
    summary: { type: "string", description: "5 to 8 sentences" },
    key_findings: { type: "array", maxItems: 14, items: { type: "string" } },
    starting_numbers: {
      type: "array",
      maxItems: 20,
      items: {
        type: "object",
        properties: { what: { type: "string" }, value: { type: "string" }, source: { type: "string" } },
        required: ["what", "value"],
      },
    },
    could_not_confirm: { type: "array", maxItems: 10, items: { type: "string" } },
    web_reachable: { type: "boolean" },
  },
  required: ["file", "summary", "key_findings", "web_reachable"],
}

const TOPICS = [
  {
    slug: "genre-guide",
    file: "/home/user/Vampire/docs/research/genre-guide.md",
    brief: `Write the GENRE GUIDE for bullet heaven / survivor-like games (about 1,800 words).
1. What makes the best games in this genre good, and how games in it fail. Use player reviews (Steam, App Store, Google Play), developer interviews and postmortems, talks, and design writing. Sort into three lists: must-haves (players expect them), differentiators (where games compete), common failures (what reviews complain about). Give evidence for each item.
2. The owner's guides divide every game into 16 blocks: 1 core loop, 2 controls, 3 feedback and feel, 4 rules and systems, 5 content, 6 difficulty and pacing, 7 progression and rewards, 8 session structure, 9 readability and interface, 10 art, 11 audio, 12 theme and story, 13 onboarding, 14 menus and settings, 15 saving, 16 platform. Say which blocks carry the most weight in this genre and why.
3. The project's scorecard names a "bar game" to beat for five things: builds and choices (provisionally Brotato and Halls of Torment), pacing and fairness (Vampire Survivors), readability on a phone (the genre's late-run clutter is the bar to beat), instant one-thumb play (Vampire Survivors), a theme that explains the rules. For each, say which game is truly the best today and why, and correct the provisional choice if it is wrong.
4. The state of the genre in 2025 and 2026: is it crowded, what recent games added that players liked (for example 3D, meta-progression, co-op, short runs), and what players say they are tired of.
5. What is specific to phone and web versions of this genre.`,
  },
  {
    slug: "core-loop-and-feel",
    file: "/home/user/Vampire/docs/research/core-loop-and-feel.md",
    brief: `Write CORE LOOP AND FEEL: STARTING NUMBERS AND TECHNIQUES (about 2,200 words). This is the direct input to the prototype, so be concrete.
1. The first 60 seconds and the moment-to-moment loop of the best bullet heavens (Vampire Survivors, Brotato, Halls of Torment, 20 Minutes Till Dawn, Magic Survival, Survivor.io, Megabonk, Deep Rock Galactic: Survivor): player speed relative to enemy speed, how many enemies are on screen early and late, seconds to the first kill and to the first level-up, how often level-ups arrive through a run, pickup and magnet radius behaviour, how enemy health and count scale, how long a run lasts. Use wikis, data mines, developer talks and measured analyses. Give numbers with sources; where only ratios are known, give ratios.
2. Why the loop is satisfying: what analyses and developers say about reward cadence, the power curve, tension and release, and the walk-versus-collect decision. What players say makes the loop go flat (walking in circles, standing still, solved builds).
3. Game feel techniques that work with plain shapes and no art: hit flash, hit stop (freeze frames), knockback, squash and stretch, screen shake (and how much is too much on a phone), particles, damage numbers, death effects, pickup attraction curves, level-up moments, sound pitch ladders, low-health warnings. Use the well-known sources (Vlambeer's "Art of Screenshake", "Juice it or lose it", Steve Swink's Game Feel, Game Maker's Toolkit) and any others. For each technique give a concrete starting value (durations in milliseconds, distances in pixels at a 390 px wide screen, easing type) and the risk of overdoing it.
4. One-thumb controls on a phone: floating joystick against fixed joystick against drag-to-move, dead zone and maximum radius values, where the thumb covers the screen in portrait, how the best phone games in this genre (Survivor.io, Magic Survival, Archero, Vampire Survivors mobile) handle it, and common mistakes.
5. Sound for feel without audio files: what can be synthesised in the browser (Web Audio oscillators, noise, envelopes), which events most need a sound, and how to avoid fatigue when hundreds of events fire per minute.
End with one table "Recommended starting values for the prototype" that pulls every number together.`,
  },
  {
    slug: "theme-bible",
    file: "/home/user/Vampire/docs/research/theme-bible.md",
    brief: `Write the VAMPIRE THEME BIBLE (about 2,400 words), following the owner's template.
SOURCES CHECKED: folklore and myth (several cultures, not only Europe), books, film and TV, animation and anime, comics, and other games (for awareness only, not to copy).
TRAITS in groups: powers; weaknesses; how it moves; how it looks; how it acts; story and origins; symbols and objects; places and times; characters and archetypes (including the people who hunt vampires and the ordinary people who are hunted). For each trait: its source, and whether it is a SHARED TROPE (in folklore or in many works: free to use) or ONE CREATOR'S INVENTION (a specific character, design or name: never use its specifics).
MOOD: colours, sounds and music, words and names (tone).
REALISTIC VIOLENCE: the owner wants the violence realistic, not cartoonish. Research how top-down and 2D games and films make violence read as real and weighty without becoming unreadable clutter or parody (blood that stays on the ground, bodies that remain, sound, restraint, victims' behaviour such as fleeing, hiding, pleading, fighting back), and what store and platform content rules say about it (itch.io, web portals, Apple App Store, Google Play age ratings).
TRAIT TO GAME IDEA: turn the 30 strongest traits into game ideas for a bullet heaven where the vampire hunts humans: a mechanic, an enemy or prey type, an upgrade, a hazard, a visual or a sound. Mark the ones that make a rule obvious with no text (for example sunlight burns, garlic repels, blood heals).
CANDIDATE LISTS, one line each on how it would play: at least 30 powers and upgrades, 6 forms or stances, 8 kinds of prey and hunter (townsfolk, watchmen, priests, hunters and so on, each asking the player a different question), 6 thrall or minion types, 6 playable vampire archetypes, 6 arenas with a time or place hook, 6 boss ideas.
The owner's earlier plan listed five optional ideas; cover how the lore supports each: blood as health, experience and currency that drains as hunger; witnesses who escape and raise the alarm; draining a victim for blood now or turning them into a thrall; dawn or light as terrain that shrinks the safe shade; and forms (bat, wolf, mist) as stances swapped mid-fight.
DO NOT USE: specific characters, names and designs that belong to one creator.`,
  },
  {
    slug: "iphone-web-pitfalls",
    file: "/home/user/Vampire/docs/research/iphone-web-pitfalls.md",
    brief: `Write IPHONE AND WEB PITFALLS FOR A CANVAS GAME (about 1,800 words). The lead cannot test in Safari or on a real iPhone (it only has Chromium with iPhone emulation), so it needs every known Safari and iOS trap written down with the fix. Prefer current sources (2024 to 2026), MDN, WebKit blog and bug tracker, and developer write-ups.
Cover, each with the symptom, the cause and the fix in code terms:
- Viewport and layout: 100vh against dvh and svh, the address and tool bars, safe-area insets and viewport-fit=cover, the notch and Dynamic Island and home indicator, orientation changes, visualViewport.
- Touch: pointer events against touch events, touch-action, stopping page scroll, pull to refresh, double-tap zoom, pinch zoom, text selection and the callout menu, the edge swipe for back, multi-touch, the 300 ms delay.
- Canvas: device pixel ratio 3 and its cost, the canvas size and memory limits on iOS, 2D canvas performance traps (shadows, filters, text, save and restore, state changes), WebGL and WebGL2 support and context loss, OffscreenCanvas support.
- Frame timing: requestAnimationFrame at 60 Hz against 120 Hz ProMotion, Low Power Mode throttling to 30 fps, background tabs, why a fixed simulation step with interpolation is needed, timer throttling.
- Audio: Web Audio unlock on first touch, the silent switch, the interrupted state after a call or app switch, resume on visibility change, latency, how many voices are safe.
- Storage: localStorage in private mode and in embedded frames, storage partitioning in third-party iframes, the 7-day cap on script-writable storage.
- Embedding: the game will be shown inside iframes (itch.io, and a claude.ai artifact page). What breaks in an iframe on iOS: fullscreen, safe-area insets, focus and keyboard, audio permissions, storage, pointer lock, viewport size.
- Other: navigator.vibrate is missing on iOS, the Fullscreen API on iPhone, add-to-home-screen behaviour, memory pressure reloads, garbage collection pauses and how to avoid allocations in the loop.
End with (1) a checklist the lead can turn into code and automated checks, and (2) a list of what can only be confirmed on a real device, so the owner knows what to look at.`,
  },
  {
    slug: "predator-games",
    file: "/home/user/Vampire/docs/research/predator-games.md",
    brief: `Write PLAYING THE PREDATOR: GAMES WHERE YOU ARE THE MONSTER AND THE PREY RUNS (about 1,800 words).
The game's hook is that the player is the vampire hunting humans, the reverse of the usual survivor-like where a hero is swarmed. That raises a design problem: in a bullet heaven the enemies come to you; prey runs away. Research how games have made hunting fun.
1. Survey games where the player is the monster or predator: reverse or "role-swap" bullet heavens and bullet hells, eat-and-grow games (the hole and shark and blob style on phones), monster games on PC and console, stealth-predator games, and any vampire action games. For each: what the player does second to second, what makes it fun, what reviews complain about. Note especially any existing survivor-like where you play a vampire or a monster hunting humans, so the project knows what already exists and can avoid resembling it.
2. Chasing things that flee: what designers and players say about why chasing fleeing targets is often frustrating ("the last enemy" problem, kiting, being outrun), and the known fixes (prey slower than the player, prey that panics and makes mistakes, corralling, cornering, fear radius, herding, dashes and lunges, targets that fight back when cornered, mixing prey with attackers).
3. Mixed crowds: games that combine helpless prey with dangerous defenders (guards, hunters), and how the balance between "I am powerful" and "I am in danger" is kept.
4. Alarm and heat systems: witnesses, wanted levels, escalation that the player's own behaviour drives. What makes them feel fair and readable, and what makes them feel like punishment.
5. Hunger and decay timers: games where a resource drains and feeding refills it. When does this create good tension and when is it just annoying?
6. Ally and minion systems in action games (thralls, summons): when they add decisions and when they just add clutter, especially on a small screen.
End with: five concrete core loops this project could prototype, each as one sentence ("You ___ to ___ while ___") plus what the player decides every few seconds, and the biggest risk of each.`,
  },
  {
    slug: "phone-portrait-ux",
    file: "/home/user/Vampire/docs/research/phone-portrait-ux.md",
    brief: `Write PHONE PORTRAIT LAYOUT AND WEB SESSION BEHAVIOUR (about 1,600 words).
1. How the leading phone games in and near this genre lay out a portrait screen (Survivor.io, Magic Survival, Archero, Vampire Survivors mobile, Brotato mobile, 20 Minutes Till Dawn mobile): where health, experience, timer, pause and ability buttons sit; how the level-up choice is presented for one thumb (card size, position, how many options, whether a tap takes it at once); how much of the screen the play field gets; camera zoom and how far the player can see; how they keep late-run clutter readable on a small screen (effect opacity, damage number limits, enemy caps, outlines).
2. Thumb reach in portrait on a 6.1 inch phone: which zones are comfortable, which are covered by the thumb, minimum tap target sizes (Apple and Google guidance), and what that means for a floating joystick and for buttons.
3. Run length and session behaviour on phones and on the web: typical run lengths in phone survivor-likes, how web and instant games are played (session length, how quickly people leave, what the first seconds must do), load size and time to first interaction expectations on web portals (itch.io, Poki, CrazyGames and similar), with numbers and sources.
4. Text on a phone game: minimum readable sizes, how much players read, how the best games teach without text.
5. Accessibility and comfort basics that are cheap in a small game: reduce motion and screen shake options, colour-blind safe danger colours, left-handed play, one-handed play, haptics (and that iOS Safari has none).
End with a recommended portrait screen layout for this game at 390 x 844 as a described sketch with pixel regions, and a list of starting numbers.`,
  },
]

const results = await parallel(
  TOPICS.map((t) => () =>
    agent(`${CONTEXT}\n\nYOUR TOPIC\nFile to write: ${t.file}\n\n${t.brief}`, {
      label: `research:${t.slug}`,
      phase: "Research",
      schema: SCHEMA,
    }).then((r) => ({ slug: t.slug, result: r })),
  ),
)
const failed = TOPICS.filter((t, i) => !results[i]).map((t) => t.slug)
if (failed.length) log(`Not completed: ${failed.join(", ")}`)
return { done: results.filter(Boolean), failed }
