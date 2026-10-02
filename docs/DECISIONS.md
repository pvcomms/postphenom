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

---

**2026-10-02 — Security headers, a Content-Security-Policy, and a firewall.**
Param asked for the full site security and bot and spam prevention. The audit found: HSTS and
nothing else; no CSP, `X-Frame-Options`, `nosniff`, Referrer-Policy or Permissions-Policy;
`access-control-allow-origin: *` on every response; a critical advisory against Next 16.3.4
(`next/og`, GHSA-vcvr-r3jv-pc5j — unreachable, nothing here imports it, but patched to 16.3.8);
no firewall rules; and at the registrar no CAA, SPF or DMARC record.

All headers are set in `site/next.config.ts`, the one place. The policy names no origin but its
own. Three loosenings, each tested: `script-src` keeps `'unsafe-inline'`, because Next prerenders
inline flight-data scripts that differ per page. A strict `'self'` with Next's experimental SRI
was tried and failed to hydrate (React error #412). A nonce needs a proxy, and a proxy makes every
page dynamic, which trades the static site for per-request rendering and widens the surface a
flood can reach; with no form, query handling or API on the site, nothing exists for an injected
script to arrive by. `style-src` allows exactly one inline sheet, altcha's, by hash computed from
the vendored file at config load, so updating altcha cannot leave the policy behind; the three
standalone figures pages need `'unsafe-inline'` for their own styles. `worker-src` allows `blob:`
for altcha's proof-of-work worker. No `report-uri`: a violation report is telemetry.

`Referrer-Policy: same-origin`, so an outbound link tells the other site nothing. CORS is pinned
to `https://postphenom.com` rather than `*`. HSTS carries `includeSubDomains; preload`; the site
has not been submitted to the browser preload list, because that is hard to undo and is Param's call.
`app/not-found.tsx` replaces the framework's 404, whose styling is inline and so blocked by the
policy. `/.well-known/security.txt` points at the Contributors page, not an address, because the
address is deliberately not in the source; it expires 2027-10-02 and needs renewing.

Bot and spam prevention is the existing altcha gate plus two Vercel firewall rules: a 403 for
paths this site does not have (WordPress, PHP, dotfiles) and a 429 above 300 requests a minute
from one IP. There is no form, API or database here, so there is no submission to protect and no
state to rate-limit in code; "flat files are the database" rules out a hosted counter. No
third-party CAPTCHA, by the standing rule. `robots.txt` still welcomes the AI crawlers by name;
that is a policy about reading, not about security, and was left as it was.


---

**2026-10-02 — The contact address is the Proton one.**
The address the site revealed sat on `postphenom.com`, which has no MX record, so anything sent
to it bounced. The encrypted payload, the anti-harvest text form in `content/site.ts` and
`llms.txt` now carry the Proton address Param reads. It is deliberately not written out in this
repo, which is public: the whole point of the payload is that it appears nowhere as text. When
the address changes again, regenerate the payload as `content/site.ts` says and check it with
`npx altcha-lib deobfuscate`.

---

**2026-10-02 — Bot Protection is on, in challenge mode, with four files exempt.**
Param asked for it. Vercel's Bot Protection managed ruleset challenges clients that are not
browsers. Checked on production: a fresh real browser loads pages directly, with no checkpoint;
plain `curl`, `curl` with a browser User-Agent and a spoofed Googlebot header all get 429 with
`x-vercel-mitigated: challenge`. A real Googlebot could not be tested; Vercel recognises verified
crawlers itself.

A bypass rule, first in line, exempts `/robots.txt`, `/sitemap.xml`, `/llms.txt` and
`/.well-known/security.txt`: they exist for programs to fetch, and Google reads a 429 on
`robots.txt` as a server error and can stop crawling. The site still welcomes the AI crawlers by
name, and whether Vercel's verified list covers each of them was not checked, so one of them being
challenged is the thing to look for if the crawlers' visits stop. To soften it to log-only, send
`{"action":"managedRules.update","id":"bot_protection","value":{"active":true,"action":"log"}}` to
`PATCH /v1/security/firewall/config`, or use the dashboard under Firewall → Bot Management.

---

**2026-10-02 — The Contributors page no longer names a person.**
Param asked for the founder card to come off. It was the only entry in the People section, so
the section went with it, along with its anchor in the sub-navigation; the cohort section now
opens the page. This supersedes the line above that Contributors names the founder. The
journal's remark that the figures were built on "the founder's personal site" does not name him
and was left.

---

**2026-10-02 — The site is headings, links and buttons.**
Param asked for all body text to come off, headings kept, and then for the footer links to go as
well. Every paragraph, lead, caption, date, stat and card image is gone from the six pages, the 404
and the proof-of-work curtain. What stays: the lockup and tabs; page, section and card headings;
buttons and links; the address line and the altcha credit. Journal entries remain as pages with a
title and nothing under it. The About headings "Programme" and "On the name" are now "Applied
Interventions" and "What is Applied Post Phenomenology", as Param wrote them.

Not touched, and still carrying full prose: the three standalone documents (`/figures`,
`/figures/legend`, `/position`), whose captions are part of how the figures work; `llms.txt`; and
the `description` and JSON-LD in `content/site.ts`, which only appear in search results and link
previews. The copyright line and the footer statement were removed with the rest. Dead CSS for the
removed blocks (hero, stats, record, definition lists) is still in `globals.css`. The previous prose
is in git, in the commit before this one.

---

**2026-10-02 — The Substack is a tab, and the homepage lists its latest posts.**
Param asked for a Substack link on the homepage, a "Latest posts" section, and a tab in the top
row. The address given, `postphenom.substack.co`, does not resolve; the publication is
`postphenom.substack.com`, and that is what the site uses. The tab is a plain external link, and
the sitemap leaves it out.

The post list is the first place the site fetches from another host, so it is written down here
and in feature 003. The server asks, never the reader's browser: `lib/substack.ts` reads
`https://postphenom.substack.com/feed` at build and at most once an hour after, keeps only titles
and links, drops any link that does not stay on the Substack, and returns nothing if the fetch
fails. The reader's browser is sent a link and nothing else, so the CSP is unchanged
(`connect-src 'self'`) and "no third-party scripts" still holds. The feed had no posts when this was
built, so the section currently shows its heading and the link.
