"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS, telLink } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";

/**
 * Transparent over each page's dark opener, turning into a solid warm-white bar once the
 * page scrolls. The services menu opens on hover or keyboard focus; the mobile menu is a
 * full-screen sheet.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = window.scrollY;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        // phones: slide away while scrolling down, return on any upward scroll
        if (Math.abs(y - last) > 6) { setHidden(y > 220 && y > last); last = y; }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color,transform] duration-500 ease-[var(--ease-out-expo)]",
        hidden && !open && "max-lg:-translate-y-full motion-reduce:max-lg:translate-y-0",
        scrolled ? "bg-ink/95 text-white shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur" : "bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1320px] items-stretch justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-start"><Logo priority tone="dark" className="self-center" /></div>

        <nav aria-label="Primary" className={"hidden items-center lg:flex"}>
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              const cls = "label group relative inline-flex min-h-12 items-center gap-1.5 px-4 transition-colors hover:text-ember";
              if (l.key !== "services") {
                return (
                  <li key={l.key}>
                    <Link href={l.href} aria-current={active ? "page" : undefined} className={cls}>
                      <span className={cn("u-link", active && "u-link-on")}>{l.label}</span>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={l.key} className="group/menu relative">
                  <Link href={l.href} aria-current={active ? "page" : undefined} className={cls}>
                    <span className={cn("u-link", active && "u-link-on")}>{l.label}</span>
                    <ChevronDown aria-hidden className="size-3 transition-transform duration-300 group-hover/menu:rotate-180 group-focus-within/menu:rotate-180" />
                  </Link>
                  <div className="invisible absolute start-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100">
                    <div className="border-t-2 border-gold bg-ink p-4 text-white shadow-2xl shadow-ink/40">
                      <ul className="grid grid-cols-2 gap-x-4">
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="flex min-h-11 items-center gap-3 border-b border-white/10 px-2 text-sm text-white/80 transition-colors hover:text-ember">
                              <span className="label text-[0.65rem] text-gold/70">{s.number}</span>{s.short}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={telLink(COMPANY.phones[0].tel)} dir="ltr" className={"label hidden min-h-12 items-center px-2 transition-colors hover:text-ember xl:inline-flex"}>{COMPANY.phones[0].display}</a>
          <Link href="/contact" className={cn(buttonVariants({ variant: "ember", size: "sm" }), "hidden lg:inline-flex")}>
            Request a quote <ArrowUpRight aria-hidden />
          </Link>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger aria-label="Open menu" className={"grid size-12 place-items-center lg:hidden"}>
              <Menu className="size-6" aria-hidden />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink text-white focus:outline-none lg:hidden">
                <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
                <div className="flex h-[var(--header-h)] shrink-0 items-start justify-between px-5 sm:px-8">
                  <Logo tone="dark" />
                  <Dialog.Close aria-label="Close menu" className="grid size-12 place-items-center"><X className="size-6" aria-hidden /></Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="flex-1 px-5 pt-8 sm:px-8">
                  <ul>
                    {NAV_LINKS.map((l, i) => (
                      <li key={l.key} className="menu-item border-b border-white/10" style={{ "--i": i } as React.CSSProperties}>
                        <Link href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? "page" : undefined}
                          className={cn("display flex min-h-16 items-center justify-between text-[2rem]", isActive(l.href) ? "text-gold" : "text-white")}>
                          {l.label}<span className="label text-white/40">0{i + 1}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="menu-item mt-8 space-y-3 border-t border-white/10 px-5 py-6 sm:px-8" style={{ "--i": 6 } as React.CSSProperties}>
                  <Link href="/contact" onClick={() => setOpen(false)} className={buttonVariants({ variant: "ember", size: "lg", full: true })}>Request a quote</Link>
                  <div className="grid grid-cols-2 gap-3" dir="ltr">
                    {COMPANY.phones.map((p) => (
                      <a key={p.tel} href={telLink(p.tel)} className={buttonVariants({ variant: "light", full: true, size: "sm" })}>{p.display}</a>
                    ))}
                  </div>
                  <p className="label pt-3 text-white/45">Licence No. {COMPANY.licenseNo} · Qatar</p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
