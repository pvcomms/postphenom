import Link from "next/link";
import { site } from "@/content/site";
import { Mark } from "./Mark";
import { Nav } from "./Nav";

// The bar: the glyph and the name on the left, the tabs on the right. The name is the link home.
export function Header() {
  return (
    <header className="bar">
      <div className="wrap bar-inner">
        <Link href="/" className="bar-name" aria-label={`${site.name} — home`}>
          <Mark kind="glyph" className="bar-mark" />
          <span className="caps">{site.name}</span>
        </Link>
        <Nav items={site.nav} />
      </div>
    </header>
  );
}
