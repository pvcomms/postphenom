# postphenom.com

The Center for Applied Postphenomenology — an independent research center studying how
technologically mediated life has changed language, perception, society, and what it takes to
be a person.

Live at **[postphenom.com](https://postphenom.com)**.

```bash
cd site && pnpm dev    # localhost:4748
```

## What is here

| Directory | What                                                                    |
| --------- | ----------------------------------------------------------------------- |
| `site/`   | the Next.js landing site. this is what deploys                          |
| `brand/`  | identity exploration — four rounds of HTML, six candidate marks as SVG, and the mark generator |

## The content layer

Everything on the page that is words lives in `site/content/site.ts` — the question, the
method, the programme, the calls to contribute, the papers. Editing the site's text means
editing that one file and nothing else. The components render whatever is in it.

This is deliberate and it is the property to preserve: the site is editable without touching
a component, so writing a new section is writing, not engineering.

## The identity

Hand-drawn correction marks over set type — the institution marking its own copy. The mark is
the unit: two brush-drawn rings, the horizon and the self, round one vermillion point, the unit
of attention. `brand/generate-marks.py` draws it into `site/components/marks.ts` and the
favicon; the earlier candidates (`mark-a` to `mark-d`) and four rounds of exploration stay in
`brand/` as the argument for it.

## More

`AGENTS.md` for the agent contract. `docs/` for architecture, design pins and the feature
queue. The thesis this institution exists to advance is in `~/Code/spine/THESIS.md`.
