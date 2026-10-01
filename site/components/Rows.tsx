import Link from "next/link";
import type { Row } from "@/content/site";

function A({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith("http")
    ? <a href={href} className={className}>{children}</a>
    : <Link href={href} className={className}>{children}</Link>;
}

// A list set as rows between hairlines: a small-capitals column, the entry, and a link.
// Rows without a meta column collapse to two columns; rows without links to one less.
export function Rows({ items }: { items: readonly Row[] }) {
  const hasMeta = items.some((r) => r.meta);
  const hasLink = items.some((r) => r.link && r.href);
  const cls = ["rows", hasMeta ? "" : "nometa", hasLink ? "" : "nolink"].filter(Boolean).join(" ");
  return (
    <ul className={cls}>
      {items.map((r, i) => (
        <li key={`${r.meta ?? ""}${r.title ?? ""}${i}`}>
          {hasMeta && <span className="caps meta">{r.meta}</span>}
          <div className="entry-cell">
            {r.title && <h3>{r.href ? <A href={r.href}>{r.title}</A> : r.title}</h3>}
            {r.text && <p>{r.text}</p>}
          </div>
          {hasLink && (r.link && r.href ? <A href={r.href} className="caps go">{r.link}</A> : <span />)}
        </li>
      ))}
    </ul>
  );
}
