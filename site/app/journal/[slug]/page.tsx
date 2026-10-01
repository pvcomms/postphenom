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
  return e ? { title: e.title, description: e.dek } : {};
}

export default async function Entry({ params }: Params) {
  const e = find((await params).slug);
  if (!e) notFound();
  return (
    <section className="band first">
      <article className="container article">
        <p className="crumb"><Link href="/journal">{site.journal.back}</Link></p>
        <h1 className="page-title">{e.title}</h1>
        <p className="article-meta"><time dateTime={e.iso}>{e.date}</time></p>
        <p className="lead">{e.dek}</p>
        <div className="article-body">
          {e.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </article>
    </section>
  );
}
