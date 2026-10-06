---
name: romance-novel-writer
description: Plan, develop, write and review a romance novel, novella or short story from first idea to finished chapters, using a proven craft framework for story development (premise, plot, character arcs, conflict, structure, setting, scenes) and a warm, plain-spoken, emotionally direct prose style. Use this skill whenever the user wants to write, plan, brainstorm, outline, draft or evaluate a romance, love story, romantic novel, bittersweet or tragic love story, second-chance or first-love story, or any romantic fiction, even if they only say "help me write a story about two people who...". Also use it to resume a romance project that already has premise, character or chapter files. It runs a gated workflow: brainstorm, premise and characters, a refinement checkpoint, chapter drafting in separate files, then a quality review against a checklist.
---

# Romance Novel Writer

A complete workflow for writing romantic fiction at any length: one conversation takes the user from a vague idea to a reviewed, finished manuscript, and every decision is saved in files so the project can be resumed later.

The craft knowledge lives in the reference files. This file is the workflow and the judgement calls. Read the references at the points marked below, not all at once.

## What this skill assumes

- The story can end happily, bittersweetly or tragically. Always ask which. Romance here means the love story is the spine, not that the ending must be happy.
- The default prose style is plain, warm, concrete and sincere, with specific sensory detail, subtext in dialogue, humour to keep sentiment honest, and endings built on images and questions. Offer the style dials (`references/project-templates.md` section 8) and let the user override them.
- Intimacy is written sensually but not graphically. Ask about the level of heat during the brainstorm and respect it.
- The reference guides were derived from one published novel. Use their techniques, never its content. Do not reproduce its passages, characters or plot.

## Files

| File | Read it when |
|---|---|
| `references/story-development.md` | Steps 1, 2 and 4: premise, plot, character, conflict, structure, world, scenes, originality, emotional engineering. Start with its sections 1, 11 and 12. |
| `references/writing-style.md` | Step 5, before drafting the first chapter: voice, sentence craft, imagery, dialogue, motifs, pacing, romance writing, documents, tics, recipes, dials, checklist. |
| `references/project-templates.md` | Steps 1 to 4: how to ask, and the templates for `premise.md`, `characters.md`, `outline.md`, chapter files, length guide, style dials. |
| `references/quality-checklist.md` | Step 6: the review checklist and the report template. |
| `references/lessons-learned.md` | Steps 2, 5 and 6: mistakes that cost the most last time, and how to avoid them. |
| `scripts/measure_prose.js` | Steps 5 and 6: objective prose measurements. Run with `node`. |

## The workflow

Follow the steps in order. Steps 3 and 6 end with a question to the user; do not skip them. Between steps, tell the user in two or three lines what you created and what the next question is, so they stay in control without reading every document.

### Step 0. Orient

Look in the working directory for `premise.md`, `characters.md`, `outline.md`, `chapters/` and `checklist.md`. If any exist, read them and the status block, say in one sentence where the project stands, and propose the next step. Do not redo locked decisions. If nothing exists, start at Step 1 and create the project files in the current directory (or ask where, if it is ambiguous).

### Step 1. Brainstorm and plan the story

Goal: find a premise the user is excited about, in a few short rounds, without making them write a brief.

1. Read `references/story-development.md` sections 1 (premise) and 11 (workflow), and `references/project-templates.md` section 2 (how to ask).
2. Ask in rounds of two to four questions, each with 2 to 4 concrete options and a recommended default listed first (use the question tool if available). Cover, across the rounds: setting and time; type of love story; how the ending should feel; length; the constraint or twist that blocks the obvious solution; the clock; whether there is a frame or a later "telling"; the central question the reader will carry; the nature of the tragedy or cost; what the reader can't be sure of; heat level; tone; point of view.
3. Between rounds, show a short working premise card (the Container Formula: a universal love situation + a constraint that blocks the obvious solution + a clock) and what changed. Offer two or three distinct directions at the start and recommend one with reasons. A concrete draft draws better answers than a blank question.
4. If the story uses a real place or period, research it (web search if available) before committing to details. Record sources, and tag anything unverified **[VERIFY]**. Invent venues, buildings and wordings for fictional things and flag them as invented.
5. If the user says "use your assumptions" or "make it up logically", decide, and record every assumption in a table (question, assumption, reason) so it can be revisited.

### Step 2. Develop the premise and characters

1. Read `references/story-development.md` sections 2 to 9 as needed, and `references/project-templates.md` sections 3 and 4.
2. Write `premise.md`: decisions locked, premise card, form (voice, tense, frame, devices and their limits), stakes ladder, seeding list, setting texture, motifs, risks, sources.
3. If the ending depends on a hidden backstory (a later separation, a secret, a death), write **the private truth** as a causal timeline (when, what, why) and plan how to seed it. Never narrate it. Make it logical and, when the tragedy is meant to hurt, blameless on both sides.
4. Write `characters.md`: for each lead the want, need, wound, false belief, gift, flaw, contradiction, habit, signature phrase, mirror object, speech, and the scenes that prove the arc. **Every flaw must cost something on the page**, or later reversals will feel unearned. Add supporting characters with one function each, the leads together, and an arc-proof table.
5. Check the premise against the stress-tests in section 1.3 of the story-development reference and the risks table. Note fixes.

### Step 3. The refinement checkpoint (always ask)

Present a short summary: the logline, the central question, the ending shape, the leads in a line each, and the three biggest open decisions or risks. Then ask the user, using the question tool if available, whether they want to:

- refine further (and which area: premise, characters, ending, setting, tone, length); or
- finalise and move on to writing.

If they refine, make the changes, update the files, and ask again. Repeat until they confirm. When they finalise, set the status block to "locked" and list the locked decisions. Do not start drafting before this confirmation.

### Step 4. Outline

1. Read `references/project-templates.md` sections 5 and 7.
2. Create `outline.md`: a chapter plan (title or question, span, word budget, what happens, function), a word budget that sums to the target, scene cards for at least the hinge scenes, a plant/payoff ledger, a knowledge ledger and an emotion map. Write each chapter's last line first.
3. Check every chapter for a turn and a hook, and that the longest chapter belongs to the crisis. Give the user a four-line summary of the plan and continue to drafting unless they ask to change it.
4. Add a **continuity log** section to `outline.md`. After each drafted chapter, add the facts it established (dates, places, names, objects, who knows what).

### Step 5. Write the chapters

Draft sequentially, in the main thread, one chapter per file, so the voice stays consistent.

1. Before the first chapter, read `references/writing-style.md` (at least sections 0 to 14) and `references/lessons-learned.md` sections 4 to 6.
2. For each chapter: reread the premise, the character cards, the chapter's outline entry and the continuity log. Draft it in the agreed voice. Save it as `chapters/chNN-<slug>.md` in the format in `references/project-templates.md` section 6.
3. After each chapter, run `node scripts/measure_prose.js chapters/chNN-*.md` (use the skill's folder path). If it is well under its word budget, add scenes that earn their place (a concealment, a paying-off object, a quiet intimate beat, a sensory moment). Do not pad with filler. Add the chapter's facts to the continuity log.
4. Keep these craft habits in view:
   - Name the feeling, then show it physically. Cut explanatory clauses the image already carries.
   - Ground each scene in concrete, named sensory detail from the characters' world.
   - Give dialogue subtext; let tone contradict words at tense moments. Write one unguarded speech per emotional movement, no more.
   - Restraint before release. Make three to five romantic gestures specific to this couple and repeat them with changed meaning.
   - Make the loss felt: show happiness before it is taken.
   - End each chapter on a hook, and the book on an image or a question.
   - Vary sentence length. Stay near an average of 12 words, with fragments for beats and a few long, rolling sentences at the peaks.
5. When all chapters exist, run the measurements on the whole set and do a **polish pass**: prune filler, filter verbs and softeners; vary rhythm; reduce signature-phrase repetition; check dialogue share; fix continuity (dates, weekdays, geography, supplies, names, tense). Re-measure.

### Step 6. Evaluate and report

1. Read `references/quality-checklist.md`.
2. Re-read the finished story in full. Run the measurement script on all chapters. Rate every checklist item with a line of evidence (a quote, a number or a chapter reference).
3. Write `checklist.md` using the report template: scorecard, item ratings, ranked strengths, ranked weaknesses (with why it matters, the fix and the effort), continuity issues found and fixed, outstanding items to verify or decide, a prioritised revision plan, and a short verdict.
4. Fix objective errors (continuity, arithmetic) straight away and list them. Propose subjective changes, do not silently apply them.
5. Tell the user the overall score, the three strongest elements, the three biggest weaknesses, and ask whether they want the revision plan applied (all, selected items, or none).

### Step 7. Revise (optional)

Apply the chosen revisions as small, specific additions or cuts, saying what is cut to pay for what is added. Re-run the measurements and the affected checklist sections, update `checklist.md`, and report the change in score.

## Principles behind the workflow

- **Gates protect the user's vision.** The story belongs to the user. The premise and characters are cheap to change before drafting and expensive after, so confirm them before writing prose.
- **Files are the memory.** Locked decisions, the private truth, the continuity log and the status block let a later session pick up without re-asking questions.
- **Concrete beats abstract.** Show a draft card instead of asking an open question; show a measured number instead of saying "choppy"; give a specific romantic gesture instead of "chemistry".
- **Earn the sentiment.** Emotion lands through specificity, repetition and cost. A beautiful sentence cannot substitute for a flaw that hurts someone or a loss the reader saw.
- **Measure what can be measured, judge the rest.** The script catches rhythm, dialogue share, filler and tics. Whether a scene turns, a reversal is earned or an ending lingers needs a reader's judgement, with evidence.

## Quick reference: when you get stuck

| Problem | Go to |
|---|---|
| Premise feels generic | `story-development.md` section 8 (originality techniques); try reversing a trope or doubling the central question |
| Leads feel flat | `story-development.md` section 3 and `lessons-learned.md` section 3 (flaw must cost something; add a mirror object) |
| Middle sags | `story-development.md` sections 2, 5 and 7 (causal chain, midpoint, scene test) |
| Love scenes feel generic | `writing-style.md` section 10, and plan specific, repeatable gestures |
| Ending doesn't land | `story-development.md` sections 9 and 10; plant a small object early; end on an image or a question |
| Prose is choppy or purple | `writing-style.md` sections 4, 12 and 14; run `measure_prose.js` |
| Unsure about a real-world fact | Research it, cite the source, or tag it **[VERIFY]** |
