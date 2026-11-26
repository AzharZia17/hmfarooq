import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, telLink, whatsappLink } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { CurrentYear } from "@/components/layout/current-year";

const colTitle = "label mb-5 text-gold";
const link = "inline-flex min-h-10 items-center text-sm text-white/70 transition-colors hover:text-ember";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="pb-10 pt-20 sm:pt-28">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:items-end">
          <p className="display text-[clamp(2.2rem,5.6vw,4.75rem)] lg:col-span-8">
            Building a<br />Better Tomorrow.
          </p>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link href="/contact" className="group inline-flex items-center gap-3 border-b border-ember pb-2 text-lg font-medium text-white transition-colors hover:text-ember">
              Start an enquiry <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.6fr_1.5fr_1fr] lg:gap-10">
          <div>
            <Logo tone="dark" imgClassName="h-14" />
            <p className="mt-6 text-sm font-semibold tracking-wide">{COMPANY.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{COMPANY.tagline}</p>
          </div>

          <nav aria-label="Company">
            <h2 className={colTitle}>Company</h2>
            <ul>
              {NAV_LINKS.map((l) => <li key={l.key}><Link href={l.href} className={link}>{l.label}</Link></li>)}
              <li><Link href="/credits" className={link}>Image credits</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className={colTitle}>Services</h2>
            <ul className="sm:columns-2 sm:gap-8">
              {SERVICES.map((s) => <li key={s.slug} className="break-inside-avoid"><Link href={`/services/${s.slug}`} className={link}>{s.short}</Link></li>)}
            </ul>
          </nav>

          <div>
            <h2 className={colTitle}>Contact</h2>
            <ul dir="ltr">
              {COMPANY.phones.map((p) => <li key={p.tel}><a href={telLink(p.tel)} className={`${link} text-base text-white`}>{p.display}</a></li>)}
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{COMPANY.country}<br />Serving requirements within Qatar.</p>
            <p className="label mt-6 inline-block border border-gold/50 px-3 py-2 text-gold">Licence No. {COMPANY.licenseNo}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-x-6">
            <Link href="/privacy" className="inline-flex min-h-8 items-center hover:text-ember">Privacy policy</Link>
            <Link href="/terms" className="inline-flex min-h-8 items-center hover:text-ember">Terms &amp; conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
