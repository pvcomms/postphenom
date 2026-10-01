import Link from "next/link";

// A link that is a client-side Link for routes on this site and a plain anchor for anything else.
export function A({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith("/") && !href.startsWith("//")
    ? <Link href={href} className={className}>{children}</Link>
    : <a href={href} className={className}>{children}</a>;
}
