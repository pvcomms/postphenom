---
title: Security headers, a CSP and a firewall
status: building
created: 2026-10-02
---

# 002 — Security headers, a CSP and a firewall

## Why

postphenom.com answered with HSTS and no other protective header, `access-control-allow-origin: *`
on every response, a critical advisory against its Next version, and no firewall rules. Any
page could be framed, any inline script it carried would run unchallenged, and a scanner or a
scraper could hit it as fast as the edge would serve.

The tool never decides, and this does not change that: it limits what the site can be made to
do, and what can be made to it.

## What changes

- Before: HSTS only. After: HSTS with `includeSubDomains; preload`, a CSP naming only `'self'`,
  `nosniff`, `DENY` framing, `same-origin` referrers, a closed Permissions-Policy, COOP and CORP.
- Before: CORS `*`. After: pinned to `https://postphenom.com`.
- Before: Next 16.3.4. After: 16.3.8, `pnpm audit` clean.
- Before: the framework's 404. After: one in the site's own chrome.
- Before: no firewall. After: probes for paths this site lacks get 403; one IP gets 429 above
  300 requests a minute.
- New: `/.well-known/security.txt`.

## Where

| File                                | Change                                                      |
| ----------------------------------- | ----------------------------------------------------------- |
| `site/next.config.ts`               | headers, CSP, altcha stylesheet hash                        |
| `site/app/not-found.tsx`            | new. the 404                                                |
| `site/content/site.ts`              | `notFound` copy                                             |
| `site/app/layout.tsx`               | JSON-LD escapes `<`                                         |
| `site/public/.well-known/security.txt` | new                                                      |
| `site/package.json`, lockfile       | next 16.3.4 → 16.3.8                                        |
| Vercel firewall (not in the repo)   | two custom rules, published with `vercel firewall publish`  |

## Out of scope

No nonce-based CSP (it makes every page dynamic). No CSP reporting endpoint (telemetry). No
third-party CAPTCHA or WAF. No change to `robots.txt`, which welcomes the AI crawlers on purpose.
No DNS changes: the zone is at Wix, and CAA, SPF and DMARC records are added there by hand.
No submission to the HSTS preload list.

## Acceptance checks

```bash
cd site && pnpm audit                                         # No known vulnerabilities found
cd site && pnpm build                                         # compiles, 15 static pages
curl -sI https://postphenom.com/ | grep -ci content-security-policy   # 1
curl -sI https://postphenom.com/ | grep -i access-control-allow-origin # https://postphenom.com
curl -sI https://postphenom.com/ | grep -i x-frame-options             # DENY
curl -s -o /dev/null -w "%{http_code}\n" https://postphenom.com/wp-login.php            # 403
curl -s -o /dev/null -w "%{http_code}\n" https://postphenom.com/.well-known/security.txt # 200
vercel firewall overview                                      # two rules, no pending draft
```

- [ ] A fresh browser tab on `/`, `/contributors`, `/figures`, `/figures/legend`, `/position` and
      a 404 shows no `Content Security Policy` error in the console
- [ ] On `/contributors`, `document.querySelector('altcha-widget[data-obfuscated]').verify()`
      reaches `verified` and the `mailto:` link appears

## Notes

Checked locally with `next start` and on two private preview deployments; not yet on production.
The browser checks above passed on the local build. Stays `building` until the production deploy,
the firewall publish and the curl checks have run.
