import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };
const find = (slug: string) => site.journal.entries.find((e) => e.slug === slug);

export function generateStaticParams() {
  return site.journal.entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const e = find((await params).slug);
  return e ? { title: e.title } : {};
}

export default async function Entry({ params }: Params) {
  const e = find((await params).slug);
  if (!e) notFound();
  return (
    <section className="band first">
      <article className="container article">
        <p className="crumb"><Link href="/journal">{site.journal.back}</Link></p>
        <h1 className="page-title">{e.title}</h1>
      </article>
    </section>
  );
}
