import Link from "next/link";
import { site } from "@/content/site";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="colophon">
      <div className="wrap">
        <div className="colophon-grid">
          <div>
            <span className="caps colophon-name">{site.name}</span>
            <p>{site.masthead.imprint}</p>
            <p>{site.domain} · {site.contact}</p>
          </div>
          <div>
            <span className="caps">{site.footer.pages}</span>
            <ul>
              {site.nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="caps">{site.footer.elsewhere}</span>
            <ul>
              {site.footer.links.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("http") ? <a href={l.href}>{l.title}</a> : <Link href={l.href}>{l.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="colophon-foot">
          <Mark kind="glyph" className="colophon-mark" />
          <span className="caps">© {site.founded}</span>
          <span>{site.proof.credit} <a href={site.proof.url}>{site.proof.name}</a></span>
        </div>
      </div>
    </footer>
  );
}
