import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";

const n = site.instruments;
export const metadata: Metadata = { title: n.title, description: n.lede };

export default function Instruments() {
  return (
    <main className="wrap">
      <PageHead title={n.title} lede={n.lede} />

      <Section id="rules" label={n.rules.label}>
        <ol className="steps">
          {n.rules.items.map((t) => <li key={t}><span>{t}</span></li>)}
        </ol>
      </Section>

      <Section id="figures" label={n.figures.label}>
        <Rows items={n.figures.items} />
      </Section>

      <Section id="built" label={n.built.label}>
        <Rows items={n.built.items} />
        <p className="aside">{n.built.note}</p>
      </Section>

      <Section id="named" label={n.named.label}>
        <Rows items={n.named.items} />
      </Section>
    </main>
  );
}
