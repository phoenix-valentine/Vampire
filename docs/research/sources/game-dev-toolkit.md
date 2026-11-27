# Game Dev Toolkit (11 pages)

Source: `eb01425c-Game_Dev_Toolkit.pdf`, Oct 23, 2026, @Phoenix. All 11 pages read; none unreadable. "(inference)" marks my own reading.

## What it is

A buyer's guide to third-party tools for a beginner building browser games with Claude [p. 1]: product tables with prices, an asset pipeline, licensing, store rules. It names **no scripts, test tools, debug tools, version or backup rule, or changelog**. Its only check is "your Smoke test", taken from the roadmap [p. 6].

Rules of use [p. 1]: each area has one default and one alternative; "Start with defaults, and switch only when a tool clearly gets in your way." Prices are monthly unless noted. Fit (High, Medium, Low) rates suitability for browser games built with Claude by a beginner. Starter kit about $42 a month; "you can start for $20 by drawing art in code and using free sound tools." Checked October 23, 2026; recheck prices and terms before paying or releasing.

## Outline

1. How to use this toolkit [p. 1]
2. Tools by area, 10 areas [p. 1-6]
3. Kits [p. 6-7]
4. The pipeline: formats and sizes, one-file assets, hand-off prompt, style [p. 7-9]
5. Licensing [p. 9-10]
6. Platform rules and avoiding the AI-slop look [p. 10-11]
7. Sources [p. 11]

## Tools by area

Format: tool (role): best for; price; fit; main limitation.

**1. Code and building the game** [p. 1-2]
- Claude Pro (default): write, fix and play the game in chat as an artifact, Claude Code for bigger projects; $20, or $17 billed yearly; High; usage limits, long files need fresh chats.
- Claude Max (alternative): heavy daily building, strongest models; from $100; High; only worth it once Pro limits block you.
- Claude Free: trying out with Sonnet; $0; Medium; no Claude Code or Opus.
- Godot: free engine for bigger 2D/3D games later; Medium (later); editor work Claude can't see.

**2. Game design, writing and planning** [p. 2]
- Claude Projects and Docs (default): design docs, trackers, dialogue, store text, research; included in Pro; High; "You still judge what's fun".
- Claude Research (alternative): market and trend research with sources; included in Pro; High; uses limits faster.

**3. 2D art** [p. 2-3]
- Code-drawn art by Claude (free default): flat shapes, particles, simple characters drawn on canvas; included; High; simple styles only.
- PixelLab (paid default): pixel-art characters, tiles, animation; from $12 ($8.25 yearly); High; pixel art only, monthly limits.
- Midjourney (alternative): concept art, key art, backgrounds, store art; from $10; Medium; not built for sprites, no free trial.
- Recraft: icons, UI, flat vector art; free, $10 yearly-billed; Medium; free-plan images not licensed for commercial use.
- Scenario: training a model on your own style; from $15; Low (later); training needs the $45 Pro plan.
- Ludo.ai: game-ready asset types and sprite sheets; from $20 ($15 yearly); Medium; no custom model training.
- Kenney assets: consistent CC0 packs; free; High; same packs as many other games.
- Aseprite: hand-editing and cleaning pixel art; about $20 one-time; High; manual.

**4. Animation** [p. 3]
- Code animation by Claude (free default): squash, stretch, bobbing, particles, tweens; included; High; no frame-by-frame characters.
- PixelLab (alternative): skeleton and text-prompted character animation; from $12; High; pixel art only.
- SpriteCook / AutoSprite: sprite sheets from images or prompts; from $8-12; Medium; newer, check terms per plan.

**5. 3D models (for later)** [p. 3]
- Tripo AI (default): game-ready topology, auto-rigging, GLB/FBX/OBJ; free 200 credits, Pro $19.90; Low (later); textures a notch below Meshy.
- Meshy (alternative): strong textures, low-poly mode; free 100 credits, Pro $20; Low (later); free outputs need attribution (CC BY 4.0).

**6. Sound effects** [p. 4]
- jsfxr / Claude-coded sounds (default): retro blips, jumps, explosions; jsfxr runs in the browser and Claude can generate sounds in code; free; High; retro sounds only.
- ElevenLabs sound effects (alternative): realistic or stylised sounds from a text prompt; Starter $6 with commercial licence; Medium; credits, check licence per plan.
- ChipTone: free browser tool with more control than sfxr; High; retro-leaning.
- Kenney audio packs: free CC0 UI and impact sounds; High; shared by many games.

**7. Music** [p. 4-5]
- Suno Pro (default): full tracks from a text prompt; $10 ($8 yearly), 20 downloads a month; Medium; terms say users generally aren't the owners of outputs, label lawsuits continue.
- AIVA Pro (alternative): instrumental scores where you own the copyright; EUR 33, billed yearly; Medium; pricier.
- Free CC0 music packs: safe ready-made loops; free; High; not unique.
- Udio: from $10; Low; downloads disabled since Oct 2025, unusable in a game.
- ElevenLabs Music: from $6; Low; self-serve licence excludes studio games.

**8. Voice and dialogue** [p. 5]
- ElevenLabs (default): character voices and narration; Starter $6 (commercial); Medium; credits run out on long scripts; never clone a real person's voice without consent.
- Text and sound blips (alternative): Undertale-style dialogue beeps coded by Claude; free; High; no spoken words.

**9. Store page, trailer, screenshots and marketing** [p. 5-6]
- OBS Studio (default, recording): gameplay footage; free; High; setup takes an hour.
- DaVinci Resolve (default, editing): trailer editing; free; Medium; learning curve.
- CapCut (alternative): fast vertical clips for TikTok, Shorts, Reels; freemium; High; watermarks.
- Claude: store page text, pitch, trailer script, shot list; included; High; can't edit video.
- Midjourney: cover and key art; from $10; Medium; must match the in-game style.

**10. Testing, feedback and publishing** [p. 6]
- itch.io (default): publishing browser games, drafts for testing, devlogs, comments; free, you choose the revenue share; High; discovery is up to you.
- Friends plus your Smoke test (default): silent playtests and regression checks from the roadmap; free; High; small sample.
- Discord server (alternative): small community for feedback; free; Medium; needs looking after.
- Steam (later): selling bigger games; $100 fee per game; Low (later); AI disclosure rules, review standards.

## Kits [p. 6-7]

- **Starter, about $42 a month:** Claude Pro $20; PixelLab $12 (or code-drawn art, free); Suno Pro $10 (or free CC0 loops); jsfxr, ChipTone, Kenney audio; OBS Studio, DaVinci Resolve, CapCut; itch.io, friends, Smoke test.
- **Even leaner, $20 a month:** Claude Pro only, code-drawn art, coded sounds, CC0 music. "This is the right kit for your first three remakes, since the roadmap keeps art and sound simple anyway."
- **Full, about $200-230 a month:** "Upgrade one piece at a time, only when that part slows you down." Claude Max (5x) $100; PixelLab higher tier about $20-25; Midjourney Standard $30; Suno Premier $30 or AIVA Pro about EUR 33; ElevenLabs Creator $22; Tripo AI Pro $19.90; Aseprite about $20 one-time; Godot free.

## The pipeline [p. 7-9]

Every asset: **generate -> clean up -> save in the right format -> hand to Claude -> test in the game** [p. 7].

Formats and sizes [p. 8]:
- Sprites and characters: PNG, transparent background; 16, 32 or 64 px for pixel art, all the same scale.
- Animations: PNG sprite sheet, frames in one row, equal size; frame size and frame count in the file name: `hero_run_32x32_8f.png`.
- Backgrounds: PNG or JPG; same size as the canvas, e.g. 960x540.
- Icons and UI: PNG or SVG; "Draw UI in code when you can; it scales cleanly."
- Sound effects: WAV or MP3; under 1 second each; trim the silence.
- Music: MP3 or OGG loop; under 2-3 MB; must loop cleanly.
- Store art: PNG; cover 630x500; screenshots at the game's size.

One-file game [p. 8]: few small assets are embedded in the HTML as data URIs (single file, accepted by itch.io directly). Many or large assets: `index.html` plus an `assets` folder, zipped; give Claude exact file names. **Asset list** in the tracker: file name, size, frames, source tool, licence; needed for credits and AI disclosure.

Hand-off prompt [p. 8] states: attached file name, frame count, frame size, one row, what it replaces (the player rectangle), 10 frames per second, scaled 3x with crisp pixels (no smoothing), "Keep all gameplay the same, and tell me how to test it."

Style [p. 9]: same reference image and same prompt wording for every sprite; a fixed palette of 8-16 colours, backgrounds and UI snapped to it; characters at the same size and angle; edges cleaned in Aseprite.

## Licensing [p. 9-10]

"Most paid plans allow commercial use; most free plans don't." Beyond the limits listed above: Claude code and text are yours, but check generated code doesn't copy someone else's game; PixelLab outputs can't train other models; Midjourney needs Pro or Mega above $1M revenue and images are public unless on Pro; Recraft owns free-plan images; Tripo AI licence not stated; with Suno you carry the risk if a song resembles a real one (Universal and Sony lawsuits continue); AIVA Standard only allows monetising on social platforms; Kenney and CC0 need no credit, credit anyway; jsfxr and ChipTone sounds are yours.

**Safest for a game you'll sell:** code-drawn art, PixelLab, CC0 packs, coded or jsfxr sounds, AIVA Pro or CC0 music. "Keep a record of which tool and plan made each asset" [p. 10].

## Platform rules and the AI-slop look [p. 10-11]

- Steam: disclose AI content that ships with the game and is consumed by players, or is used in marketing (art, sound, writing). Behind-the-scenes tools aren't the focus. Content generated live needs a description of safeguards. Updated January 2026.
- itch.io: AI disclosure mandatory for asset packs, optional for games. "Disclose anyway."
- Players at October 2026 Steam Next Fest called for a no-AI filter. "AI isn't the problem; carelessness is."
- Handmade feel, 6 rules: one simple style, kept (limited palette, clean shapes); prefer code-drawn art and pixel art; edit everything (clean sprites, trim sounds, rewrite AI text); avoid the giveaways (inconsistent details between frames, garbled text in images, glossy generic fantasy art, the same AI music everyone uses); show your hand (devlog, honest credits, a personal note); let the design be yours (twist, feel, decisions).

## Sources [p. 11]

Eleven sources, checked October 23, 2026; two Ludo.ai comparisons are vendor-written. The free tools are "listed from general knowledge".

## Usable today (inference)

With Node and headless Chromium: code-drawn art, code animation, coded sounds and blips, data-URI embedding, the asset list, a fixed palette, screenshots at game size, and the Smoke test as a script. Not usable: paid generators, desktop tools (Aseprite, OBS, DaVinci Resolve, CapCut), friends, publishing (repository rules forbid it without the owner).
