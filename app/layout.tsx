import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { COMPANY, SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Manrope({ variable: "--font-display", subsets: ["latin"], weight: ["500"], display: "swap" });
const label = DM_Mono({ variable: "--font-label", subsets: ["latin"], weight: ["500"], display: "swap" });

const TITLE = "HM Farooq Constructing Company | Construction & Manpower Services Qatar";
const DESCRIPTION =
  "HM Farooq Constructing Company, Qatar: manpower and labor supply, construction and painting contracts, hospitality services, lifting, gypsum and ceiling work, AC, plumbing, transportation and logistics. License No. 222095.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | HM Farooq Constructing Company" },
  description: DESCRIPTION,
  keywords: [
    "Construction Company in Qatar", "Manpower Supply Qatar", "Labor Supply Qatar", "Building Painting Contractors Qatar",
    "Painting Contract Qatar", "Hospitality Services Qatar", "Construction Contractors Qatar", "Lifting Equipment Qatar", "Gypsum Ceiling Qatar", "HM Farooq Constructing Company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_QA", siteName: COMPANY.shortName, title: TITLE, description: DESCRIPTION, url: "/",
    images: [{ url: "/logo.jpeg", width: 1536, height: 485, alt: "HM Farooq Constructing Company logo" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/logo.jpeg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#171310", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  description: DESCRIPTION,
  telephone: COMPANY.phones.map((p) => p.tel),
  areaServed: { "@type": "Country", name: "Qatar" },
  identifier: { "@type": "PropertyValue", name: "Business License No.", value: COMPANY.licenseNo },
  makesOffer: SERVICES.map((x) => x.title).map((n) => ({
    "@type": "Offer", itemOffered: { "@type": "Service", name: n, areaServed: "Qatar" },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${label.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
