import type { Metadata } from "next";
import { site } from "@/content/site";
import { A } from "@/components/A";

const n = site.notFound;
export const metadata: Metadata = { title: n.title };

export default function NotFound() {
  return (
    <section className="band first">
      <div className="container">
        <div className="column">
          <h1 className="display">{n.title}</h1>
          <p><A href={n.link.href} className="button">{n.link.title}</A></p>
        </div>
      </div>
    </section>
  );
}
