import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { Rows } from "@/components/Rows";

const j = site.journal;
export const metadata: Metadata = { title: j.title, description: j.lede };

export default function Journal() {
  const items = j.entries.map((e) => ({ meta: e.date, title: e.title, text: e.dek, href: `/journal/${e.slug}` }));
  return (
    <main className="wrap">
      <PageHead title={j.title} lede={j.lede} />
      <div className="single">
        <Rows items={items} />
      </div>
    </main>
  );
}
