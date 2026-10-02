import { site } from "@/content/site";
import { A } from "@/components/A";
import { Contact } from "@/components/Contact";
import { latestPosts } from "@/lib/substack";

// The Substack feed is read on the server, at build and hourly after (lib/substack.ts).
export const revalidate = 3600;

export default async function Home() {
  const h = site.home;
  const insts = site.instruments.built.items;
  const latest = site.journal.entries.slice(0, 3);
  const sub = site.substack;
  const posts = await latestPosts(5);

  return (
    <>
      <section className="band grey" aria-labelledby="about-title">
        <div className="container split">
          <div className="column">
            <h2 className="display" id="about-title">
              {h.about.title}
            </h2>
            <p>
              <A href={h.about.link.href} className="link-strong">
                {h.about.link.title}
              </A>
            </p>
          </div>
          <div className="column journal-teaser">
            <h2 className="display" id="journal-title">
              {h.journal.title}
            </h2>
            <ul className="teaser-list">
              {latest.map((e) => (
                <li key={e.slug}>
                  <A href={`/journal/${e.slug}`}>{e.title}</A>
                </li>
              ))}
            </ul>
            <p>
              <A href={h.journal.all.href} className="link-strong">
                {h.journal.all.title}
              </A>
            </p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="latest-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="latest-title">
              {sub.latest}
            </h2>
            {posts.length > 0 && (
              <ul className="teaser-list">
                {posts.map((p) => (
                  <li key={p.url}>
                    <A href={p.url}>{p.title}</A>
                  </li>
                ))}
              </ul>
            )}
            <p>
              <A href={sub.url} className="link-strong">
                {sub.all}
              </A>
            </p>
          </div>
        </div>
      </section>

      <section className="band grey" aria-labelledby="research-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="research-title">
              {h.research.title}
            </h2>
          </div>
          <div className="pair">
            <a className="card" href={h.research.card.link.href}>
              <div className="card-head">
                <h3 className="card-title">{h.research.card.title}</h3>
              </div>
              <span className="card-foot">{h.research.card.link.title}</span>
            </a>
          </div>
          <p className="after">
            <A href={h.research.after.href} className="link-strong">
              {h.research.after.title}
            </A>
          </p>
        </div>
      </section>

      <section className="band" aria-labelledby="instruments-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="instruments-title">
              {h.instruments.title}
            </h2>
          </div>
          <ul className="inst-list">
            {insts.map((i) => (
              <li key={i.slug}>
                <A href={i.href}>
                  <span className="inst-title">{i.title}</span>
                </A>
              </li>
            ))}
          </ul>
          <p className="after-left">
            <A href={h.instruments.all.href} className="link-strong">
              {h.instruments.all.title}
            </A>
          </p>
        </div>
      </section>

      <section className="band grey" aria-labelledby="record-title">
        <div className="container">
          <h2 className="display" id="record-title">
            {h.record.title}
          </h2>
          <div className="card where">
            <p className="where-title">{h.record.where.title}</p>
            <ul>
              {h.record.where.items.map((w) => (
                <li key={w.title}>
                  <A href={w.href}>{w.title}</A>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="call-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="call-title">
              {h.call.title}
            </h2>
            <div className="cta">
              <Contact>{h.call.cta}</Contact>
            </div>
            <p className="address">{site.contact}</p>
          </div>
        </div>
      </section>
    </>
  );
}
