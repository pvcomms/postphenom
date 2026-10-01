import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { site } from "@/content/site";
import { Gate } from "@/components/Gate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Public Sans, self-hosted by next/font at build. No request leaves the page for a font.
const sans = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: "website", images: [site.home.hero.image] },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
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
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Gate />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
