# Quality Checklist and Review Report (reusable)

Use this at Step 5 of the workflow, after the draft is complete. It is generic: criteria only. Evidence and ratings go into the project's own `checklist.md` (template in section 4).

**Contents**
1. Rating key and process
2. Measurements to run first
3. The checklist (sections A–M)
4. Report template for `checklist.md`
5. Ranking and fixing weaknesses

---

## 1. Rating key and process

| Mark | Meaning | Score |
|---|---|---|
| **S** | Strong: does the job well, clear evidence on the page | 5 |
| **G** | Good: works, with a minor gap | 4 |
| **A** | Adequate: present but thin, uneven or over-used | 3 |
| **W** | Weak: missing, misfiring or damaging | 2 |
| **X** | Absent where it was needed | 1 |
| **n/a** | Not applicable to this form | – |

Process:
1. Re-read the whole story in one sitting, without notes. Write down what you remember: those are the moments that work. If you remember nothing, say so.
2. Run the measurements (section 2).
3. Rate every item with a line of **evidence** (a quote, a number or a chapter reference). A rating without evidence is an opinion.
4. Rank weaknesses by **reader impact**, not by ease of fixing.
5. Fix objective errors immediately (continuity, arithmetic). Propose, don't silently apply, changes to style or structure; the author decides.
6. After any revision, re-run the measurements and the affected sections.

---

## 2. Measurements to run first

```
node <skill-dir>/scripts/measure_prose.js chapters/*.md --tics "your,signature,phrases"
```

Compare with the dials in `writing-style.md` section 1 and treat gaps as questions:

| Signal | Baseline | If far off |
|---|---|---|
| Average sentence length | about 12 words | Under 10 reads staccato; over 16 reads slow. Check the peaks. |
| Sentences of 5 words or fewer | about 25% | Near 50% means fragments have stopped being emphasis. |
| Sentences of 30+ words | about 4% | Under 2% means no rolling, lyrical sweeps at emotional peaks. |
| Paragraphs opening with dialogue | about one third | Near half: scenes may be "talking heads"; add sensory and physical beats. |
| Filler, filter verbs, softeners | low | Prune; replace with the concrete detail. |
| Signature phrases | each use changes meaning | If a phrase repeats without changing meaning, it is a tic. |

Also verify by hand: word count per chapter against the plan; dates, weekdays and arithmetic (durations, deadlines); floor/room/geography; names and ages; who knows what, when.

---

## 3. The checklist

### A. Premise and concept
- A1 The logline implies a question the reader needs answered.
- A2 Familiar emotional core inside a fresh container.
- A3 The premise produces conflict without a stock villain.
- A4 There is a reason inside the fiction for the story to be told (or told *now*, *this way*).
- A5 Built-in emotional contrast (e.g. shelter/freedom, duty/desire, memory/forgetting).
- A6 Grounded, plausible hook; real-world facts verified or flagged.

### B. Plot and structure
- B1 Events follow "because / therefore", not "and then".
- B2 The inciting incident is an *act*, not only a coincidence.
- B3 There is an irreversible midpoint.
- B4 A crisis that costs something.
- B5 A climax that pays off the crisis.
- B6 An ending that resolves the central question or deliberately leaves it open.
- B7 Information is controlled; the reader is sometimes ahead of the characters (dramatic irony).
- B8 Plants and payoffs (at least ten planted details; each paid with changed meaning).
- B9 Every chapter or section ends on a hook (reveal, image, question or echo).
- B10 Pacing fits the length: summary for time, scene for turns.

### C. Character
- C1 Wants and needs are distinct.
- C2 Wound → false belief → behaviour is coherent.
- C3 Change is shown by action, not announced.
- C4 **Each lead's flaw costs something on the page** (not only a quirk).
- C5 Distinct voices (syntax and habits, not only dialect).
- C6 Each supporting character has one sharp function.
- C7 Objects, animals or habits mirror and reveal character.
- C8 The leads have chemistry: banter, tension, specific shared rituals.

### D. Conflict and stakes
- D1 Layered conflict (internal, interpersonal, environmental/social, existential).
- D2 Stakes escalate along a concrete ladder.
- D3 Concrete numbers and clocks (times, days, deadlines).
- D4 The central choice is right-versus-right.
- D5 Choices have a visible cost on the page.

### E. World and setting
- E1 Specific, accurate setting.
- E2 The setting generates scenes and constraints, not just backdrop.
- E3 Sensory and seasonal texture in every chapter, including interior ones.
- E4 Local flavour that could only belong to this place and time.
- E5 Any rule-bound "miracle" has a trigger, limit and cost.

### F. Scene design
- F1 Every scene turns (goal, obstacle, turn, outcome).
- F2 Objects carry subtext.
- F3 Task plus talk (people do something while they avoid saying something).
- F4 One main reveal per scene.
- F5 Quiet and loud scenes alternate.
- F6 Time stamps or other clocks create pressure.

### G. Originality
- G1 At least one trope reversed.
- G2 Details only this story could hold.
- G3 Every surprise is seeded earlier.
- G4 Avoids the genre's and period's clichés.

### H. Emotion, romance and tragedy
- H1 A target emotion per chapter.
- H2 A hope–loss loop (small wins, larger losses, a fragile final win).
- H3 Sentiment is earned by specificity, repetition and cost.
- H4 Recognition moments: one character sees the other truly.
- H5 **The loss is felt, not only told**: the reader has *seen* what is lost.
- H6 Restraint before release (denial before the first kiss, confession or consummation).
- H7 Memorable romantic set pieces specific to this couple.
- H8 Humour or lightness leavens the sentiment.

### I. Voice and style (`writing-style.md`)
- I1 Voice and tense match the layer (frame vs. inner story, if any).
- I2 Sentence rhythm is varied; averages near the baseline.
- I3 Fragments and one-line paragraphs land as beats, not as a habit.
- I4 Triads, lists and anaphora at emotional peaks; some long, rolling sentences.
- I5 Imagery comes from the characters' own world.
- I6 Ritual and sensory catalogue ground the scenes.
- I7 Dialogue carries subtext; tone contradicts words at tense moments.
- I8 Dialogue share about one third of paragraphs (scenes also have physical business and place).
- I9 Feelings are named, then evidenced physically.
- I10 Motifs recur with changed meaning.
- I11 Embedded documents (letters, notes, texts) used for character and plot.
- I12 Any authorial or narrator device (asides, edits) is used sparingly.
- I13 Humour and self-deprecation where the voice allows.

### J. Prose cleanliness
- J1 Filler pruned ("for some reason", "just", "a little").
- J2 Filter verbs trimmed ("felt", "knew", "realised", "noticed").
- J3 Softener adverbs trimmed ("softly", "gently").
- J4 Signature phrases still fresh (no more than a handful of uses, each with a new meaning).
- J5 Clichés avoided or reworked.
- J6 Explanatory clauses cut where the image already did the work.

### K. Continuity and facts
- K1 Internal timeline and arithmetic hold.
- K2 Real-world facts verified; inventions flagged.
- K3 Character and place facts consistent (ages, floors, names, who lives where).
- K4 Seeds in the frame or foreshadowing are consistent with the reveal.

### L. Ending and memorability
- L1 Resolves or deliberately opens the central question.
- L2 The last line lands.
- L3 Bookends and echoes of the opening.
- L4 A final image that stays with the reader.
- L5 Foreshadowing and reveal are balanced (surprise or dread, chosen on purpose).

### M. Form and brief compliance
- M1 Chapter count and word count match the plan.
- M2 Structural devices appear as planned and within their limits.
- M3 The tone matches the brief (romantic and tragic, heat level, humour).
- M4 The author's locked decisions are respected.

---

## 4. Report template for the project's `checklist.md`

```markdown
# Quality Review: <Title>
> Reviewed: <files>, <date>. Measurements: <paste table>.

## Scorecard
| Section | Average (1–5) | Verdict |
|---|---|---|
| A. Premise ... M. Form | | |
| **Overall** | **x / 5** | one-sentence verdict |

## Item ratings
(One table per section: ID | Criterion | Rating | Evidence)

## Strengths (ranked by reader impact)
1. ... with evidence

## Weaknesses (ranked by reader impact)
| # | Weakness | Evidence | Why it matters | Fix | Effort |

## Continuity issues found and fixed

## Outstanding items to verify or decide

## Prioritised revision plan
| Priority | Task | Addresses | Approx. words |

## Verdict
(3–5 sentences: what works, the main craft risk, the main structural gap, expected score after fixes)
```

---

## 5. Ranking and fixing weaknesses

- **Reader impact first.** A flat ending outranks a repeated phrase.
- **Look for causes, not symptoms.** An unearned reversal usually means an under-dramatised flaw earlier. A flat tragedy usually means the reader never saw what was lost.
- **Prefer small, specific additions** (a 150-word scene beat; one line of lost happiness) to large rewrites.
- **Protect word budgets.** For every addition name what is cut or tightened.
- **Re-measure after revising.** If a fix moves a metric the wrong way (for example, merging sentences that makes dialogue longer), note it.
