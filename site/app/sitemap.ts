import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://postphenom.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://postphenom.com/figures", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://postphenom.com/figures/legend", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://postphenom.com/position", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
