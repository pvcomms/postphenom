import Link from "next/link";
import { site } from "@/content/site";
import { Mark } from "./Mark";
import { Nav } from "./Nav";

// The header: the lockup on the left, the tabs, then the call to action behind a rule.
// Below 920px the tabs fold into a <details> menu, so the menu works without script.
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="lockup" aria-label={`${site.name}, home`}>
          <Mark kind="glyph" className="lockup-mark" />
          <span className="lockup-short">{site.short}</span>
          <span className="lockup-lines" aria-hidden="true">
            {site.lockup.lines.map((l) => <span key={l}>{l}</span>)}
          </span>
        </Link>
        <nav className="nav" aria-label="Pages">
          <Nav items={site.nav} className="nav-list" />
        </nav>
        <Link href={site.cta.href} className="header-cta">{site.cta.title}</Link>
        <details className="menu">
          <summary>{site.menu}</summary>
          <nav className="menu-panel" aria-label="Pages">
            <Nav items={site.nav} className="menu-list" />
            <Link href={site.cta.href} className="menu-cta">{site.cta.title}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
