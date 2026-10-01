"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { title: string; href: string };

// The tabs. The open page's tab carries aria-current, which the stylesheet colours.
// The header persists across client navigation, so the phone menu is closed when the route changes.
export function Nav({ items, className }: { items: readonly Item[]; className: string }) {
  const path = usePathname();
  useEffect(() => {
    document.querySelectorAll("details.menu[open]").forEach((d) => d.removeAttribute("open"));
  }, [path]);
  return (
    <ul className={className}>
      {items.map((it) => {
        const current = it.href === "/" ? path === "/" : path === it.href || path.startsWith(`${it.href}/`);
        return (
          <li key={it.href}>
            <Link href={it.href} aria-current={current ? "page" : undefined}>{it.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
