import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { SiteShell } from "@/components/layout/site-shell";
import { COMPANY, SITE_URL } from "@/lib/constants";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ variable: "--font-arabic", subsets: ["arabic"], weight: ["400", "500", "700"], display: "swap", preload: false });

const TITLE = "HM Farooq Constructing Company | Construction & Manpower Services Qatar";
const DESCRIPTION =
  "HM Farooq Constructing Company provides manpower supply, building painting contracts, hospitality services, and construction contracting solutions in Qatar. Contact us today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | HM Farooq Constructing Company" },
  description: DESCRIPTION,
  keywords: [
    "Construction Company in Qatar", "Manpower Supply Qatar", "Labor Supply Qatar", "Building Painting Contractors Qatar",
    "Painting Contract Qatar", "Hospitality Services Qatar", "Construction Contractors Qatar", "HM Farooq Constructing Company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_QA", siteName: COMPANY.shortName, title: TITLE, description: DESCRIPTION, url: "/",
    images: [{ url: "/logo.jpeg", width: 1536, height: 485, alt: "HM Farooq Constructing Company logo" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/logo.jpeg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#14263D", width: "device-width", initialScale: 1 };

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
  makesOffer: ["Manpower Supply", "Building Painting Contracts", "Hospitality Services", "Construction Contracts"].map((n) => ({
    "@type": "Offer", itemOffered: { "@type": "Service", name: n, areaServed: "Qatar" },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${display.variable} ${arabic.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <I18nProvider>
          <SiteShell>{children}</SiteShell>
        </I18nProvider>
      </body>
    </html>
  );
}
