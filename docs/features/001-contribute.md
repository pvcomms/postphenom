---
title: Make Contribute actually collect an account
status: draft
created: 2026-09-19
---

> **Blocked on a decision: where a submission goes has to be settled before anyone builds
this, and it is the whole difficulty. Promote to `next` once it is written into
docs/DECISIONS.md.**

# 001 — Make Contribute actually collect an account

## Why

The center's stated method is collecting first-person accounts of life before and after the
screen. The site has a Contribute section that says so, and no way to contribute. Right now
the only route is an email address, which asks a stranger to compose a message from nothing —
the highest-friction possible entrance to the one thing the institution is asking for.

An account is not a form field. The prompts are the instrument: what someone is asked shapes
what they remember, and a good prompt produces testimony a survey never would.

## What changes

- Before: Contribute is a paragraph and an email address.
- After: a small set of written prompts, and a way to submit a written response that arrives
  somewhere Param actually reads.

## Where

| File                             | Change                                                     |
| -------------------------------- | ---------------------------------------------------------- |
| `site/content/site.ts`           | the prompts, as content — they are copy, not configuration |
| `site/app/page.tsx`              | render the Contribute section with the submission path     |
| `site/components/Contribute.tsx` | new. the form                                              |

## Out of scope

No account system, no login, no database. No third-party form service that would put
first-person testimony about surveillance onto someone else's server — that choice needs
deciding before this leaves `next`, and it is the whole difficulty of the feature.

No analytics on the form. No A/B testing of the prompts.

## Acceptance checks

```bash
cd site && pnpm build     # clean
```

- [ ] The prompts live in `content/site.ts` and can be rewritten without touching a component
- [ ] A submitted response reaches Param and nowhere else
- [ ] The form works with keyboard only, with visible focus throughout
- [ ] No request leaves the page to any host not named in this spec
- [ ] What happens to a submission is stated on the page, in plain words, before it is sent

## Notes

**Decide the destination before building.** Options are a mailto: composition with the prompt
prefilled (zero infrastructure, zero third parties, highest friction), a self-hosted endpoint,
or Proton-backed mail. The last check above is not negotiable: a center studying what
mediation costs people cannot be vague with them about where their testimony goes.

Write the decision into `docs/DECISIONS.md` when it is made.
