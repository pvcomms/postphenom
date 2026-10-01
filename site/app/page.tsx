import { site } from "@/content/site";
import { A } from "@/components/A";
import { Contact } from "@/components/Contact";

export default function Home() {
  const h = site.home;
  const insts = site.instruments.built.items;
  const feature = insts.find((i) => i.slug === h.instruments.feature) ?? insts[0];
  const others = insts.filter((i) => i.slug !== feature.slug);
  const latest = site.journal.entries.slice(0, 3);

  return (
    <>
      <section className="hero" aria-label={site.tagline}>
        <img src={h.hero.image} alt={h.hero.alt} width={1580} height={980} fetchPriority="high" />
        <div className="hero-band">
          <p className="container hero-text">
            {h.hero.lines.map((l) => <span key={l}>{l}</span>)}
          </p>
        </div>
      </section>

      <section className="band grey" aria-labelledby="about-title">
        <div className="container split">
          <div className="column">
            <h2 className="display" id="about-title">{h.about.title}</h2>
            <p>{h.about.text}</p>
            <p><A href={h.about.link.href} className="link-strong">{h.about.link.title}</A></p>
          </div>
          <div className="column journal-teaser">
            <h2 className="display" id="journal-title">{h.journal.title}</h2>
            <ul className="teaser-list">
              {latest.map((e) => (
                <li key={e.slug}>
                  <time dateTime={e.iso}>{e.date}</time>
                  <A href={`/journal/${e.slug}`}>{e.title}</A>
                </li>
              ))}
            </ul>
            <p><A href={h.journal.all.href} className="link-strong">{h.journal.all.title}</A></p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="research-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="research-title">{h.research.title}</h2>
            <p className="lead">{h.research.lead}</p>
          </div>
          <div className="pair">
            <a className="card" href={h.research.card.link.href}>
              <div className="card-head">
                <h3 className="card-title">{h.research.card.title}</h3>
                <p className="card-sub">{h.research.card.subtitle}</p>
              </div>
              <div className="card-body">
                <p className="card-strong">{h.research.card.heading}</p>
                <p className="card-note">{h.research.card.detail}</p>
              </div>
              <span className="card-foot">{h.research.card.link.title}</span>
            </a>
            <a className="card card-image" href={h.research.card.link.href}>
              <img src={h.research.image.src} alt={h.research.image.alt} width={1200} height={900} loading="lazy" />
            </a>
          </div>
          <p className="after"><A href={h.research.after.href} className="link-strong">{h.research.after.title}</A></p>
        </div>
      </section>

      <section className="band grey" aria-labelledby="instruments-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="instruments-title">{h.instruments.title}</h2>
            <p className="lead">{h.instruments.lead}</p>
          </div>
          <div className="feature-grid">
            <a className="card feature" href={feature.href}>
              <img src={feature.image} alt={feature.alt} width={1200} height={675} loading="lazy" />
              <div className="card-body">
                <p className="card-kicker">{feature.kind}</p>
                <h3 className="card-title">{feature.title}</h3>
                <p>{feature.claim}</p>
              </div>
              <span className="card-foot">{feature.link}</span>
            </a>
            <div>
              <ul className="inst-list">
                {others.map((i) => (
                  <li key={i.slug}>
                    <A href={i.href}>
                      <span className="inst-title">{i.title}</span>
                      <span className="inst-claim">{i.claim}</span>
                    </A>
                  </li>
                ))}
              </ul>
              <p className="after-left"><A href={h.instruments.all.href} className="link-strong">{h.instruments.all.title}</A></p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="record-title">
        <div className="container">
          <h2 className="display" id="record-title">{h.record.title}</h2>
          <div className="record">
            <div className="record-text">
              {h.record.text.map((t) => <p key={t}>{t}</p>)}
            </div>
            <div className="stats">
              {h.record.stats.map((s) => (
                <div className="card stat" key={s.label}>
                  <p className="stat-label">{s.label}</p>
                  <p className="stat-value">{s.value} <span>{s.unit}</span></p>
                  <p className="stat-note">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="card where">
              <p className="where-title">{h.record.where.title}</p>
              <ul>
                {h.record.where.items.map((w) => (
                  <li key={w.title}>
                    <A href={w.href}>{w.title}</A>
                    <span>{w.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band grey" aria-labelledby="call-title">
        <div className="container">
          <div className="column">
            <h2 className="display" id="call-title">{h.call.title}</h2>
            <p className="lead">{h.call.text}</p>
            <div className="cta"><Contact>{h.call.cta}</Contact></div>
            <p className="address">{site.contact}</p>
          </div>
        </div>
      </section>
    </>
  );
}
