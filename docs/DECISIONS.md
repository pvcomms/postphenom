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
Repo joined the `CAPP` constellation standard: `README.md`, `AGENTS.md`,
`docs/ARCHITECTURE.md`, this file, `docs/DESIGN.md`, `docs/features/`.

---

**2026-09-24 — The unit replaces the rendered world.**
The mark is now two hand-drawn rings round one vermillion point: the horizon a platform draws,
the self shaped inside it, and the unit of attention being sold. Chosen over geometric
versions of the same idea for the reason rounds 1–3 were rejected: computed lines under the
words "drawn, not computed". Vermillion is the identity's only accent and only the point
carries it. The correction wordmark stays. The note on the name no longer names individual
philosophers.

---

**2026-09-25 — The page is a document, not a landing page.**
Param's verdict on the 24 Sep site: not formal enough, visibly generated. The tells were the
grammar of the product landing page — mono uppercase kickers, a giant rotated hero wordmark,
a four-column steps grid, scroll reveals, an arrow button, handwriting in five places. The
site is now set as a printed prospectus: title page, contents, six numbered parts with margin
notes, a working-paper register, a colophon, and a running head. Same copy, same mark, same
tokens. Spectral SC replaces IBM Plex Mono for every label; the hand face appears once, in
the correction. `Reveal.tsx` is gone; nothing animates on scroll.

---

**2026-09-29 — The page opens with a proof-of-work; the address sits behind one.**
Param asked for altcha (altcha.org) on postphenom.com, as on paramv.com. Two uses, both
first-party: a curtain that runs a small PBKDF2 challenge before the page opens (once per tab
session, fails open on error or after 8s, no script → no gate), and the contact address stored
AES-encrypted in the page and decrypted in the reader's browser when the proof is solved. The
address is no longer in the source anywhere; `contact` in `site.ts` is the anti-harvest text
form. The widget is vendored in `public/vendor/altcha` (MIT), so the "no third-party scripts"
rule still holds. The colophon credits altcha.

---

**2026-09-30 — The figures moved here from paramv.com.**
Param moved his six interactive figures, "Reading the Figures" and "What You Study" to the
Center: the instruments belong to the institution, the personal site keeps the person. They
came as they were — standalone HTML in `public/`, their dark theme and code untouched — at
`/figures`, `/figures/legend` and `/position`, listed under the contents as "Elsewhere". Fig. 3
names people (Kierkegaard, Clark & Chalmers, Meredith Whittaker, Fleet Foxes …); Param kept the
names on purpose, a deliberate exception to the no-named-individuals line of 2026-09-24. Fig. 1's
two circles whose rooms stayed on paramv.com (thoughts.log, create) link there.

---

**2026-10-02 — Six pages with tabs, after laurenleek.eu.**
Param pointed at laurenleek.eu as the template and asked for tabs, Journal and Contributors
among them, "super professional", in the register of the Center for Applied Rationality's
site, not vibe-coded. Taken from the reference: its shape, which is a bar with the name left
and tabs right, pages built from labelled sections, and a columned footer. Not taken: its dark
slate theme, the teal gradient glow, pill tabs, the photo hero, typewriter copy, cards and the
scroll-progress rail. Those are the tells this site removed on 25 Sep. The identity, tokens,
fonts, the correction and the gate are unchanged.

The single document became six routes: Home, About, Research, Instruments, Journal,
Contributors. All copy stays in `content/site.ts`. The running head became a sticky bar; the
`§` numerals went with the single page. New copy draws only on what the repos record: the
instruments table, the published reports on `pvcomms`, the two whitepaper drafts, Cohort
Study and this file. The journal opens with five entries, each written from a decision above.
Contributors names the founder, which is his own name and so not covered by the 24 Sep rule
against other people's names, and says why cohort contributors are not named. Suji and the
other local-only instruments are left out of the public list.

The gate no longer removes its own element. Removing a node React rendered, before
hydration, made every reload in a solved tab fail to hydrate; with six pages that became every
page load after the first. The element now stays and CSS hides it.

---

**2026-10-02 — An institute's site, after rationality.org.**
Param's verdict on the six-page serif version, the same day: "so vibe coded. be professional
af like the center for applied rationality." The serif, small capitals, hairline rows, label
columns and the handwritten correction were the tell: they are the house style of generated
"editorial" pages. Taken from CFAR: a logo lockup of mark, short name and the full name set
small; large sans tabs with the open one in the accent colour and a call to action behind a
rule; a photographic hero with a translucent band carrying the line; alternating white and
grey bands with large light headings; cards with soft shadows holding studies, reports and
entries; stat cards; a sub-navigation bar on inner pages; a plain three-part footer. Not taken:
Roboto (banned here; Public Sans instead), Material Bootstrap from a CDN, stock photography.

The hero and every card image are screenshots of the Center's own instruments and of Cohort
Study, so the site shows its work instead of illustrating it. The vermillion of the mark's
point is now the site's accent. Dark mode is dropped: the institutions this is modelled on
are light, and a theme that flips makes the site read as an app. Spectral, Spectral SC and
Homemade Apple are no longer loaded. The correction wordmark is retired from the site; the
mark stays, in the lockup. All copy still lives in `content/site.ts`.
