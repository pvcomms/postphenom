"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { title: string; href: string };

// The tabs. The one whose route is open carries aria-current, which the stylesheet underlines.
export function Nav({ items }: { items: readonly Item[] }) {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Pages">
      <ul>
        {items.map((it) => {
          const current = path === it.href || path.startsWith(`${it.href}/`);
          return (
            <li key={it.href}>
              <Link href={it.href} aria-current={current ? "page" : undefined}>{it.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
