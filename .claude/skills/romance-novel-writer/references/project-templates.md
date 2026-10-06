# Project Templates

Copy and fill these for each new romance project. Keep every file in the project root so the work can be resumed in a later session.

**Contents**
1. Project layout and status block
2. Brainstorm round: how to ask
3. `premise.md` template
4. `characters.md` template
5. `outline.md` template (chapter plan and word budgets)
6. Chapter file format
7. Length-to-chapter guide
8. Style dials to confirm with the user

---

## 1. Project layout and status block

```
<project>/
├── premise.md         premise card, decisions locked, private truth, texture bank, risks
├── characters.md      cast, character cards, relationships, arc-proof table
├── outline.md         chapter plan, word budgets, scene cards, plant/payoff ledger
├── chapters/
│   ├── ch01-<slug>.md
│   └── ...
└── checklist.md       quality review report
```

Put this block at the top of `premise.md` so a later session knows where to resume:

```markdown
## Project status
- Stage: 1 Brainstorm | 2 Premise+characters | 3 Refinement gate | 4 Outline | 5 Drafting | 6 Review | 7 Revision
- Locked: title, form/length, <list of locked decisions>
- Open decisions: <list>
- Next action: <one line>
```

Resuming: read the status block, then the files that exist, then say where the project stands in one sentence and propose the next step. Do not redo locked decisions.

---

## 2. Brainstorm round: how to ask

Ask in rounds of **two to four questions**, each with 2–4 concrete options and a recommended default marked first. Offer options with trade-offs, not open-ended questions. Before each round, offer a short working draft the user can react to: people respond better to a concrete card than to a blank question.

Round 1 (the seed): setting and time; what kind of love story (first love, second chance, forbidden, slow burn, enemies-to-lovers, etc.); how the ending should feel (happy, bittersweet, tragic, open); length.
Round 2 (the container): the constraint or twist that blocks the obvious solution; the clock; whether there is a frame story or a later "telling".
Round 3 (the engine): the central question the reader will carry; what the tragedy or cost is; the ambiguity (what the reader can't be sure of).
Round 4 (the people): leads' jobs and temperaments; how they are thrown together; hidden concealments.
Round 5 (voice): style dials (section 8), heat level, humour, point of view.

Between rounds, update the working premise card and show what changed. If a real place or period is involved, search the web for dates, rules and texture, cite sources, and tag anything unverified **[VERIFY]**.

---

## 3. `premise.md` template

```markdown
# <TITLE>: Premise vX.Y
## Project status (see section 1)
## Decisions locked  (table: Decision | Choice)
## Premise card
| Universal situation | |
| Constraint / twist | |
| Clock | |
| Logline | |
| Central question | |
| Second question (optional) | |
| Why is it told? | |
| Theme | |
| Theme line (spoken once by a secondary character; the plot tests it) | |
| What the reader keeps thinking about | |
## Form (voice, tense, frame, devices and their limits)
## The private truth (author's bible; never stated outright)
  - What really happened, in a causal timeline (When | What | Why)
  - What the reader may infer / what stays unknowable
## Chapter plan  (see outline.md)
## Stakes ladder (7 rungs, concrete numbers)
## Seeding list (what is planted, where)
## Setting texture bank (verified facts, place, weather, domestic detail)
## Motifs (first appearance → how the meaning changes)
## Risks and answers
## Decisions settled by assumption
## Sources
```

The **private truth** is worth the effort. When the ending depends on a hidden backstory (a later separation, a secret, a death), write the causal timeline privately and *seed* it. Never narrate it. The reader should be able to infer it and never be told.

---

## 4. `characters.md` template

```markdown
# Characters
## Cast at a glance  (Role | Name | Age | One-line essence)
## Short-form casting (who gets how much page, if the story is short)
## For each lead:
| Job / home | |
| Want (conscious) | |
| Need (unconscious) | |
| Wound | |
| The lie they believe | |
| Gift | |
| Flaw (with a cost ON THE PAGE) | |
| Contradiction | |
| Defining habit | |
| Signature phrase | |
| Object | |
| Mirror (animal, plant, thing) | |
| How they speak | |
| What they will sacrifice | |
| Arc (lie → truth) and the scenes that prove it | |
| Voice sample (3 lines) | |
## The two leads together (what each offers, fears, hides)
## Supporting cast (one sharp function each)
## Arc-proof table (moment | lead 1 | lead 2)
## What happens after the story (private)
## Open decisions
```

Checks before locking: Does each flaw cost something *in the story* (not only later)? Does each lead hide something that will matter? Is there a mirror object for each?

---

## 5. `outline.md` template

```markdown
# Outline
## Chapter plan
| Ch. | Title / question | Span | Words | What happens | Function |
## Word budget (sum equals the target; frame passages counted)
## Scene cards (hinge scenes at least)
  SCENE | POV | Place/time | GOAL | OBSTACLE | TURN | OUTCOME | EMOTIONAL ARC | PLANTS | PAYOFFS | HOOK
## Knowledge ledger (Beat | Lead 1 | Lead 2 | Others | Reader | Tension source)
## Plant / payoff ledger (Plant | Where | Payoff | Where | Changed meaning)
## Emotion map (Chapter | Target emotion | Mechanism | Hope/loss | Button line)
```

Write each chapter's last line first. Check that no chapter exists without a turn and a hook.

---

## 6. Chapter file format

- One file per chapter in `chapters/`, named `chNN-<slug>.md`.
- First chapter file starts with `# TITLE`; every chapter starts with `## N. <Chapter title or question>`.
- Scene breaks: a blank line, `* * *`, a blank line (use `&nbsp;` around it if spacing matters in the viewer).
- Frame or framing passages are plain text, separated from the inner story by a scene break.
- Documents (notes, emails, texts) in block quotes.
- No commentary or notes inside chapter files; put those in `outline.md`.

---

## 7. Length-to-chapter guide

| Form | Words | Chapters | Words per chapter |
|---|---|---|---|
| Flash / very short story | 1,000–3,000 | 1–3 | 700–1,200 |
| Short story | 6,000–10,000 | 5–6 | 1,200–2,100 |
| Long short story / novelette | 12,000–20,000 | 6–10 | 1,800–2,500 |
| Novella | 25,000–45,000 | 10–15 | 2,200–3,200 |
| Short novel | 50,000–70,000 | 18–24 | 2,500–3,500 |
| Novel | 80,000–100,000 | 25–32 | 2,800–3,800 |

Shorter chapters (about 1,500–3,500) with strong hooks suit modern reading. The sample novel ran about 4,600 words per chapter, which is long. In a short form, allocate the longest chapter to the hinge scene.

---

## 8. Style dials to confirm with the user

Defaults come from `writing-style.md` section 14. Ask only about the dials that matter to this story.

| Dial | Options | Default |
|---|---|---|
| Sentimentality | restrained / sincere / lush | sincere, leavened with humour |
| Telling vs. showing | subtext / name-then-show / explicit | name the feeling, then show it |
| Sentence length | staccato / about 12 / flowing | about 12, varied |
| Dialogue share | narrated / about a third / script-like | about a third |
| Humour | none / gentle / comic | gentle |
| Intimacy | closed door / sensual, not graphic | sensual, not graphic |
| Narrator intrusion | none / occasional / frequent | occasional, and rationed |
| Dialect | none / light / heavy | light |
| POV | first / close third / alternating | as planned in the premise |
| Spelling | Australian / British / American | match the setting |
