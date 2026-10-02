import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-label">{site.footer.write}</p>
          <p>{site.contact}</p>
          <p className="footer-credit">{site.proof.credit} <a href={site.proof.url}>{site.proof.name}</a></p>
        </div>
      </div>
    </footer>
  );
}
