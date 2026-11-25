import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { COMPANY, telLink, whatsappLink } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { LicenseBadge } from "@/components/ui/license-badge";
import { CurrentYear } from "@/components/layout/current-year";

const QUICK = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const h = "mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold";

/** Footer link with a gold dash that draws in on hover. */
function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "group inline-flex min-h-9 items-center text-sm text-white/70 transition-colors hover:text-white";
  const dash = <span aria-hidden className="h-px w-0 bg-gold transition-all duration-300 group-hover:me-3 group-hover:w-4" />;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{dash}{children}<span className="sr-only"> (opens in a new tab)</span></a>
  ) : (
    <Link href={href} className={cls}>{dash}{children}</Link>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image src={IMAGES.towers.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-[0.05] grayscale" />

      {/* Big call-to-talk band */}
      <div className="border-b border-white/10">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ready when you are</p>
            <h2 className="mt-4 text-balance font-display text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Let&apos;s talk about your <em className="italic text-gold">next job.</em></h2>
          </div>
          <div className="space-y-1 lg:col-span-6 lg:text-end" dir="ltr">
            {COMPANY.phones.map((p) => (
              <a key={p.tel} href={telLink(p.tel)} className="group flex items-center gap-3 border-b border-white/10 py-3 font-display text-4xl tracking-tight transition-colors hover:text-gold sm:text-5xl lg:justify-end">
                {p.display}
                <ArrowUpRight className="size-6 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
              </a>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-semibold text-white/80 hover:text-gold">
              <WhatsAppIcon className="size-5 text-[#25D366]" /> or message us on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:py-16">
        <div>
          <p className="text-base font-semibold tracking-wide">{COMPANY.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{COMPANY.tagline}</p>
          <LicenseBadge variant="footer" className="mt-6 inline-block transition-colors hover:border-gold" />
        </div>
        <nav aria-label="Quick links">
          <h2 className={h}>Explore</h2>
          <ul>{QUICK.map((l) => <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>)}</ul>
        </nav>
        <nav aria-label="Our services">
          <h2 className={h}>Our Services</h2>
          <ul>{SERVICES.map((s) => <li key={s.slug}><FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink></li>)}</ul>
        </nav>
        <div>
          <h2 className={h}>Reach Us</h2>
          <ul>
            {COMPANY.phones.map((p) => <li key={p.tel}><span dir="ltr" className="inline-block"><FooterLink href={telLink(p.tel)}>{p.display}</FooterLink></span></li>)}
            <li><FooterLink href={whatsappLink()} external>WhatsApp</FooterLink></li>
            <li className="flex min-h-9 items-center text-sm text-white/70">{COMPANY.country}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> {COMPANY.name}. All rights reserved. License No. {COMPANY.licenseNo}.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/credits" className="transition-colors hover:text-white">Image Credits</Link>
            <a href="#top" className="group inline-flex min-h-10 items-center gap-2 border border-white/25 px-4 font-semibold text-white/80 transition-colors hover:border-gold hover:text-gold">
              Back to top <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </div>
        </Container>
      </div>
      <div aria-hidden className="pointer-events-none select-none overflow-hidden border-t border-white/10 pt-6 pb-20 text-center md:pb-0 font-display leading-[0.8] text-white/[0.06]">
        <span className="block translate-y-[0.08em] whitespace-nowrap text-[17vw]" dir="ltr">HM Farooq</span>
      </div>
    </footer>
  );
}
