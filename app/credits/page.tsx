import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { ALL_CREDITS } from "@/lib/images";

export const metadata: Metadata = { title: "Image Credits", alternates: { canonical: "/credits" } };

export default function CreditsPage() {
  const unique = ALL_CREDITS.filter((c, i, a) => a.findIndex((x) => x.title === c.title) === i);
  return (
    <LegalPage title="Image Credits" crumb="Image Credits">
      <p>Photographs of Doha, Lusail and Qatar landmarks are freely licensed images from Wikimedia Commons and are credited below as their licences require. Other images were supplied by HM Farooq Constructing Company. Images are illustrative and are not necessarily company projects.</p>
      <ul className="divide-y divide-navy/10 border-y border-navy/10 text-sm">
        {unique.map((c) => (
          <li key={c.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
            <span className="font-semibold text-navy">{c.title}</span>
            <span className="text-charcoal/70">
              {c.credit.by} · {c.credit.license}
              {c.credit.source && <> · <a href={c.credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-navy">Source</a></>}
            </span>
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
