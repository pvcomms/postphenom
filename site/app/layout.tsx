import type { Metadata } from "next";
import { Spectral, Homemade_Apple, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const body = Spectral({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-body", display: "swap" });
const hand = Homemade_Apple({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.short}` },
  description: site.description,
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary", title: site.name, description: site.tagline },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: site.name,
  alternateName: site.short,
  url: site.url,
  email: site.contact,
  foundingDate: site.founded,
  description: site.description,
  knowsAbout: ["postphenomenology", "philosophy of technology", "polycrisis", "algorithmic mediation", "attention economy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${hand.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
