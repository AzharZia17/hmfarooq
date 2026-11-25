"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS, telLink, whatsappLink } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { LicenseBadge } from "@/components/ui/license-badge";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hysteresis avoids flicker when the collapsing strip shifts the layout.
    const onScroll = () => setScrolled((s) => (s ? window.scrollY > 16 : window.scrollY > 90));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));
  const activeHref = NAV_LINKS.find((l) => isActive(l.href))?.href ?? "";

  return (
    <header className={cn("sticky top-0 z-50 border-b bg-white transition-[border-color] duration-300", scrolled ? "border-navy/15" : "border-navy/10")}>
      {/* Utility strip: collapses once the page is scrolled */}
      <div className={cn("grid bg-navy-deep text-white transition-[grid-template-rows] duration-300", scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
        <div className="overflow-hidden">
          <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-5 text-xs sm:px-8 lg:px-12">
            <LicenseBadge variant="compact" />
            <div className="hidden items-center gap-6 sm:flex" dir="ltr">
              {COMPANY.phones.map((p) => (
                <a key={p.tel} href={telLink(p.tel)} className="group inline-flex items-center gap-2 font-medium text-white/85 transition-colors hover:text-gold">
                  <Phone className="size-3 text-gold transition-transform group-hover:rotate-12" aria-hidden /> {p.display}
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-medium text-white/85 transition-colors hover:text-gold">
                <WhatsAppIcon className="size-3.5 text-[#25D366]" /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <span className="font-medium uppercase tracking-[0.14em] text-white/75 sm:hidden">{COMPANY.country}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-12">
        <Logo imgClassName="transition-opacity hover:opacity-85" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              const isServices = l.key === "services";
              return (
                <li key={l.key} className="group/item relative">
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-12 items-center whitespace-nowrap px-3 text-sm font-medium transition-colors outline-offset-[-4px] xl:px-4",
                      active ? "text-navy" : "text-charcoal/75 group-hover/item:text-navy",
                    )}
                  >
                    {t(`nav.${l.key}` as never)}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 bottom-1.5 h-0.5 origin-left bg-gold transition-transform duration-300 ease-out rtl:origin-right xl:inset-x-4",
                        active ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100 group-focus-within/item:scale-x-100",
                      )}
                    />
                  </Link>

                  {isServices && (
                    <div className="invisible absolute start-1/2 top-full z-10 w-[36rem] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-focus-within/item:visible group-focus-within/item:opacity-100 group-hover/item:visible group-hover/item:opacity-100 rtl:translate-x-1/2">
                      <div className="grid grid-cols-2 gap-px border border-navy/15 border-t-2 border-t-gold bg-mist">
                        {SERVICES.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="group/s flex gap-4 bg-white p-5 transition-colors hover:bg-paper">
                            <s.icon className="mt-0.5 size-6 shrink-0 text-gold-dark transition-transform duration-200 group-hover/s:-translate-y-0.5" strokeWidth={1.5} aria-hidden />
                            <span>
                              <span className="flex items-center gap-1 text-sm font-semibold text-navy">
                                {s.title}
                                <ArrowUpRight className="size-3.5 -translate-x-1 text-gold-dark opacity-0 transition-all group-hover/s:translate-x-0 group-hover/s:opacity-100" aria-hidden />
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-charcoal/65">{s.tagline}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 xl:gap-4">
          <LanguageSwitcher className="hidden text-navy xl:inline-flex" />
          <Link href="/contact" className="group relative hidden min-h-10 items-center gap-2 overflow-hidden bg-navy px-5 text-xs font-semibold tracking-wide text-white lg:inline-flex">
            <span aria-hidden className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-300 ease-out group-hover:translate-x-0 rtl:translate-x-full rtl:group-hover:translate-x-0" />
            <span className="relative whitespace-nowrap transition-colors duration-300 group-hover:text-navy-deep">{t("cta.quote")}</span>
            <ArrowRight className="relative size-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy-deep rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
          </Link>
          <MobileNav activeHref={activeHref} />
        </div>
      </div>
    </header>
  );
}
