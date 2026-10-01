import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", ...site.nav.map((n) => n.href)].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const entries = site.journal.entries.map((e) => ({
    url: `${site.url}/journal/${e.slug}`,
    lastModified: new Date(e.iso),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  const figures = ["/figures", "/figures/legend", "/position"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...entries, ...figures];
}
