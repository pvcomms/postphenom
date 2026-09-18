# Decisions

Append-only. Newest last.

---

**2026-09-05 — Copy lives in one file.**
`content/site.ts` holds every word. The site is meant to be edited by writing, not by
engineering, and a research center that cannot publish a paragraph without a developer is not
a research center. Components render whatever the object contains.

---

**2026-09-05 — Hand-drawn correction marks as the identity.**
Set type with a hand-drawn correction over it: the institution marking its own copy, which is
what applied postphenomenology does to received technological common sense. Four rounds of
exploration and five candidate marks are kept in `brand/` rather than deleted, because the
rejected ones are the argument for the chosen one.

---

**2026-09-05 — Plain CSS, no Tailwind.**
The other Next.js repos use Tailwind. This one does not: the site is long-form prose with a
small number of section shapes, and a stylesheet of custom properties is both shorter and
easier to read than utility classes strung through JSX.

---

**2026-09-19 — No remote, corrected.**
The repository had no git remote. The site existed on one disk with no copy anywhere. Pushed
to GitHub the same day.

---

**2026-09-19 — Doc set adopted.**
Repo joined the `cfap` constellation standard: `README.md`, `AGENTS.md`,
`docs/ARCHITECTURE.md`, this file, `docs/DESIGN.md`, `docs/features/`.
