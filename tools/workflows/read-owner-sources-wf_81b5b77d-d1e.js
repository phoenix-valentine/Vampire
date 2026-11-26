export const meta = {
  name: "read-owner-sources",
  description: "Read the owner's reference PDFs into verified notes files under docs/research/sources",
  phases: [
    { title: "Read", detail: "one reader per PDF or page range writes a notes file" },
    { title: "Verify", detail: "a second reader re-reads the PDF and corrects the notes" },
  ],
}

const CONTEXT = `PROJECT CONTEXT
An AI agent (the "lead") is building, on its own, a phone-first "bullet heaven" (survivor-like) web game called "Vampire: No Survivors": the player is a vampire who hunts humans. One HTML file, canvas or WebGL, upright iPhone first, played with one thumb. The owner reviews almost nothing; the first thing the owner will test is a polished plain-shapes prototype of the core loop, possibly in 3 variations. The owner earlier built a game called "Mutation: Become the Monster" with an AI and wrote a set of guides from that experience. The lead will rely on your notes INSTEAD of reading the PDF, so anything you leave out is lost to the project.`

const READ_SCHEMA = {
  type: "object",
  properties: {
    file: { type: "string" },
    title: { type: "string" },
    pages_read: { type: "string" },
    summary: { type: "string", description: "4 to 6 sentences" },
    takeaways: {
      type: "array",
      maxItems: 10,
      items: {
        type: "object",
        properties: {
          point: { type: "string" },
          area: { type: "string", description: "process | core-loop | feel | content-balance | phone | testing | market | other" },
          page: { type: "string" },
        },
        required: ["point", "area"],
      },
    },
    warnings: { type: "array", maxItems: 8, items: { type: "string" } },
  },
  required: ["file", "title", "pages_read", "summary", "takeaways"],
}

const VERIFY_SCHEMA = {
  type: "object",
  properties: {
    file: { type: "string" },
    corrections: { type: "array", items: { type: "string" }, description: "things that were wrong and are now fixed" },
    additions: { type: "array", items: { type: "string" }, description: "things that were missing and are now added" },
    still_uncertain: { type: "array", items: { type: "string" } },
    notes_quality_before: { type: "string", description: "good | patchy | poor" },
  },
  required: ["file", "corrections", "additions", "notes_quality_before"],
}

function readPrompt(s) {
  return `${CONTEXT}

YOUR TASK
Read "${s.title}", pages ${s.from} to ${s.to}, from this PDF:
${s.path}

Use the Read tool with the "pages" parameter (for example pages: "${s.from}-${Math.min(s.to, s.from + 19)}"); at most 20 pages per call, so make several calls if needed. The pages come back as images: read every page, including tables, diagrams, checklists and code or prompt boxes. Do not skim and do not stop early.
${s.focus ? "\nPay special attention to: " + s.focus + "\n" : ""}
Then write the notes with the Write tool to exactly this path:
/home/user/Vampire/docs/research/sources/${s.slug}.md

Notes format (Markdown, about ${s.words} words, no emoji):
# ${s.title} (pages ${s.from} to ${s.to})
## What it is
## Outline (the document's own section names, in order, with page numbers)
## Frameworks, lists and checklists (keep every name, number, order and threshold exactly as written; paraphrase the prose around them)
## Numbers and thresholds (a table: what | value | page)
## What it means for Vampire: No Survivors
  split into: (a) process for an AI building alone, (b) core loop, controls and feel, (c) content, difficulty, builds and balance, (d) phone: layout, input, performance, audio, (e) testing and playtests, (f) market, positioning, name, release. Leave a part out if the document says nothing about it. Only write what the document supports; mark your own inference as "inference".
## Warnings and anti-patterns
## Prompts and templates in the document (name each and say what it is for; copy short ones in full)
## Things the lead should decide or check

Put the page number in square brackets after each fact, like [p. 7]. Do not invent anything. If a page is unreadable, say which.

Rules: write only that one file. Do not run git. Do not edit any other file. Your final structured answer is a short digest for the lead; the file is the real product.`
}

function verifyPrompt(s) {
  return `${CONTEXT}

YOUR TASK: check another reader's notes against the source and repair them.
Source: "${s.title}", pages ${s.from} to ${s.to}, PDF at:
${s.path}
Notes to check: /home/user/Vampire/docs/research/sources/${s.slug}.md

1. Read the same PDF pages yourself with the Read tool and the "pages" parameter (at most 20 pages per call). Read every page, including tables, diagrams, checklists and prompt boxes.
2. Read the notes file.
3. Assume the notes are incomplete until shown otherwise. Look for: wrong or missing numbers; list or checklist items dropped, merged or reordered; frameworks renamed; tables or diagrams skipped; warnings missed; section numbers wrong; and anything under "What it means for Vampire: No Survivors" that the document does not actually support.
${s.focus ? "The lead especially needs this to be complete and exact: " + s.focus + "\n" : ""}4. Fix the notes file in place with the Edit tool (or rewrite it with Write if it is poor). Keep the same section headings.
5. Add a last section "## Verification" listing what you corrected and what you added.

Rules: change only that one file. Do not run git. Report honestly; if the notes were already accurate, say so and list what you spot-checked.`
}

const results = await pipeline(
  args.sources,
  (s) => agent(readPrompt(s), { label: `read:${s.slug}`, phase: "Read", schema: READ_SCHEMA }),
  (digest, s) =>
    agent(verifyPrompt(s), { label: `verify:${s.slug}`, phase: "Verify", schema: VERIFY_SCHEMA }).then((v) => ({
      slug: s.slug,
      digest,
      verify: v,
    })),
)

const failed = args.sources.filter((s, i) => !results[i]).map((s) => s.slug)
if (failed.length) log(`Not completed: ${failed.join(", ")}`)
return { done: results.filter(Boolean), failed }
