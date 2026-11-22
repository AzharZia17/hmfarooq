"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { BadgeCheck, ClipboardList, Handshake, HardHat, Layers, PhoneCall, Check, type LucideIcon } from "lucide-react";
import { COMPANY, STRENGTHS, telLink } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { Layers, BadgeCheck, PhoneCall, ClipboardList, HardHat, Handshake };

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
      <Image src={src} alt={alt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
    </div>
  );
}

/** A different visual for each strength. */
const VISUALS: ReactNode[] = [
  // 0: mosaic of all four services
  <div key="v0" className="grid grid-cols-2 gap-1">
    {SERVICES.map((s) => (
      <div key={s.slug} className="relative aspect-[4/3] overflow-hidden bg-navy-deep">
        <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width:1024px) 28vw, 50vw" className="object-cover" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3 text-xs font-semibold text-white">{s.title}</span>
      </div>
    ))}
  </div>,
  // 1: license credential
  <div key="v1" className="flex min-h-[15rem] flex-col justify-center sm:aspect-[16/10] border-s-4 border-gold bg-navy-deep p-8 text-white sm:p-12">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Qatar Business License No.</p>
    <p className="mt-3 text-6xl font-semibold tracking-wider text-gold sm:text-7xl">{COMPANY.licenseNo}</p>
    <p className="mt-4 text-sm tracking-wide text-white/80">{COMPANY.name}</p>
  </div>,
  // 2: direct lines
  <div key="v2" className="flex min-h-[15rem] flex-col justify-center gap-3 sm:aspect-[16/10] bg-navy-deep p-8 text-white sm:p-12" dir="ltr">
    {COMPANY.phones.map((p) => (
      <a key={p.tel} href={telLink(p.tel)} className="border-b border-white/15 pb-3 text-3xl font-semibold tracking-tight transition-colors hover:text-gold sm:text-4xl">{p.display}</a>
    ))}
    <p className="mt-2 flex items-center gap-2 text-sm text-white/75"><WhatsAppIcon className="size-5 text-[#25D366]" /> Also on WhatsApp, same number as Phone 1</p>
  </div>,
  // 3..5: photographs
  <Photo key="v3" src="/images/construction-site-team.jpg" alt="Site team coordinating work beside scaffolding and a crane" />,
  <Photo key="v4" src="/images/workers-masonry.jpg" alt="Workers in safety helmets and high-visibility vests on site" />,
  <Photo key="v5" src="/images/doha-towers.jpg" alt="Office and residential towers in Doha, Qatar" />,
];

function Panel({ index }: { index: number }) {
  const s = STRENGTHS[index];
  const Icon = ICONS[s.icon];
  return (
    <div>
      {VISUALS[index]}
      <div className="mt-6 flex items-start gap-4">
        <Icon className="mt-1 size-7 shrink-0 text-gold-dark" strokeWidth={1.5} aria-hidden />
        <div>
          <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
          <p className="mt-2 leading-relaxed text-charcoal/75">{s.text}</p>
          <ul className="mt-4 space-y-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-medium text-navy"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" aria-hidden />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function WhyShowcase() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div role="tablist" aria-label="Reasons to choose us" aria-orientation="vertical" className="border-t border-navy/15 lg:col-span-5">
        {STRENGTHS.map((s, i) => {
          const on = active === i;
          return (
            <div key={s.title} className="border-b border-navy/15">
              <button
                role="tab"
                id={`why-tab-${i}`}
                aria-selected={on}
                aria-controls="why-panel"
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => window.matchMedia("(hover: hover) and (min-width: 1024px)").matches && setActive(i)}
                onFocus={() => setActive(i)}
                className={cn("group relative flex min-h-20 w-full items-center gap-5 py-4 ps-6 pe-2 text-start transition-colors", on ? "text-navy" : "text-charcoal/55 hover:text-navy")}
              >
                <span aria-hidden className={cn("absolute inset-y-0 start-0 w-1 origin-top bg-gold transition-transform duration-300", on ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50")} />
                <span className={cn("text-sm font-semibold tabular-nums transition-colors", on ? "text-gold-dark" : "text-charcoal/40")}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-semibold leading-snug sm:text-xl">{s.title}</span>
              </button>
              {/* Mobile: panel opens inline under its row */}
              {on && <div className="pb-8 lg:hidden" role="tabpanel" aria-labelledby={`why-tab-${i}`}><Panel index={i} /></div>}
            </div>
          );
        })}
      </div>
      <div id="why-panel" role="tabpanel" aria-labelledby={`why-tab-${active}`} className="hidden lg:col-span-7 lg:block">
        <Panel index={active} />
      </div>
    </div>
  );
}
