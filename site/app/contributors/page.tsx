import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";
import { Contact } from "@/components/Contact";

const c = site.contributors;
export const metadata: Metadata = { title: c.title, description: c.lede };

export default function Contributors() {
  return (
    <main className="wrap">
      <PageHead title={c.title} lede={c.lede} />

      <Section id="people" label={c.people.label}>
        <Rows items={c.people.items} />
      </Section>

      <Section id="cohort" label={c.cohort.label}>
        {c.cohort.body.map((p, i) => <p key={i}>{p}</p>)}
      </Section>

      <Section id="ways" label={c.ways.label}>
        <Rows items={c.ways.items} />
        <div className="cta"><Contact>{c.cta}</Contact></div>
        <p className="address">{site.contact}</p>
      </Section>
    </main>
  );
}
