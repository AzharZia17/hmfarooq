"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export type ExplorerService = {
  slug: string; number: string; short: string; group: string; tagline: string; description: string;
  offerings: string[]; image?: { src: string; alt: string };
};

/**
 * Editorial index of the ten service lines. On desktop, hovering or focusing a row cross-fades
 * the sticky panel to that service. On touch, each row carries its own thumbnail and links straight through.
 */
export function ServicesExplorer({ services }: { services: ExplorerService[] }) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <Section tone="ink" id="services">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="02" dark className="reveal">Services</Eyebrow>
            <h2 className="display reveal mt-7 text-[clamp(2rem,4.6vw,3.9rem)]">Ten service lines, one point of contact.</h2>
          </div>
          <p className="reveal prose-lead text-white/65 lg:col-span-4 lg:col-start-9">Hover a service to see it. Each one opens to its scope, who it suits and what to tell us when you ask.</p>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <ol className="lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.slug} className="border-t border-white/15 last:border-b">
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex min-h-[5.25rem] items-center gap-4 py-4 sm:gap-8 sm:py-6"
                >
                  <span className={cn("label w-8 shrink-0 transition-colors duration-500", i === active ? "text-gold" : "text-white/40")}>{s.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("display block text-[clamp(1.5rem,3.1vw,2.6rem)] transition-all duration-500", i === active ? "translate-x-2 text-white" : "text-white/55 group-hover:text-ember")}>{s.short}</span>
                    <span className="mt-1 block text-sm text-white/50 lg:hidden">{s.tagline}</span>
                  </span>
                  {s.image && (
                    <span className="relative size-16 shrink-0 overflow-hidden bg-navy sm:size-20 lg:hidden">
                      <Image src={s.image.src} alt="" fill sizes="80px" className="object-cover" />
                    </span>
                  )}
                  <ArrowUpRight className={cn("size-5 shrink-0 transition-all duration-500", i === active ? "text-ember opacity-100" : "opacity-30 lg:opacity-0")} aria-hidden />
                </Link>
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28" aria-live="polite">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                {services.map((s, i) => (
                  <div key={s.slug} className={cn("absolute inset-0 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")} aria-hidden={i !== active}>
                    {s.image ? (
                      <Image src={s.image.src} alt={i === active ? s.image.alt : ""} fill sizes="(min-width:1024px) 40vw, 0px" className={cn("object-cover transition-transform duration-[1600ms] ease-[var(--ease-out-expo)]", i === active ? "scale-100" : "scale-110")} />
                    ) : (
                      <div className="flex h-full flex-col justify-between bg-[repeating-linear-gradient(135deg,transparent_0_22px,rgb(255_255_255/0.035)_22px_23px)] p-8">
                        <span className="display text-[9rem] leading-none text-gold/25">{s.number}</span>
                        <ul className="space-y-2 text-sm text-white/75">
                          {s.offerings.slice(0, 5).map((o) => <li key={o} className="flex gap-3 border-t border-white/10 pt-2"><span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden />{o}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="label text-gold">{current.number} / {current.group}</p>
                  <p className="display mt-2 text-2xl">{current.tagline}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65">{current.description}</p>
              <Link href={`/services/${current.slug}`} className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold">
                <span className="u-link pb-0.5">Explore {current.short.toLowerCase()}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
