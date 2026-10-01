import { site } from "@/content/site";
import { A } from "./A";

export function Footer() {
  const f = site.footer;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p>{f.statement}</p>
          <p className="footer-rights">© {site.founded} {site.name}. {f.rights}</p>
        </div>
        <div>
          <p className="footer-label">{f.write}</p>
          <p>{site.contact}</p>
          <p className="footer-credit">{site.proof.credit} <a href={site.proof.url}>{site.proof.name}</a></p>
        </div>
        <ul className="footer-links">
          {f.links.map((l) => <li key={l.href}><A href={l.href}>{l.title}</A></li>)}
        </ul>
      </div>
    </footer>
  );
}
