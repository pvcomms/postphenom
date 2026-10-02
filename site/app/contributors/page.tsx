import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { A } from "@/components/A";
import { Contact } from "@/components/Contact";

const c = site.contributors;
export const metadata: Metadata = { title: c.title };

export default function Contributors() {
  const { cohort, ways } = c;
  return (
    <>
      <PageHead title={c.title} sub={c.sub} />

      <section className="band first" id={cohort.id} aria-labelledby={`${cohort.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${cohort.id}-title`}>{cohort.title}</h2>
        </div>
      </section>

      <section className="band grey" id={ways.id} aria-labelledby={`${ways.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${ways.id}-title`}>{ways.title}</h2>
          <div className="points">
            {ways.items.map((w) => (
              <div key={w.title}>
                <h3>{w.title}</h3>
                {"link" in w && w.link && <p><A href={w.link.href} className="link-strong">{w.link.title}</A></p>}
              </div>
            ))}
          </div>
          <div className="cta"><Contact>{ways.cta}</Contact></div>
          <p className="address">{site.contact}</p>
        </div>
      </section>
    </>
  );
}
