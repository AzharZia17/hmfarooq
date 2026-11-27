"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HardHat, Paintbrush, Hammer, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type HeroCardItem = { slug: string; short: string; tagline: string; description: string };
const ICONS: LucideIcon[] = [HardHat, Hammer, Paintbrush, Users];

/** Floating "spec sheet" card that steps through four service lines. Pauses on hover, static under reduced motion. */
export function HeroCard({ items, className }: { items: HeroCardItem[]; className?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const cur = items[i];
  const Icon = ICONS[i % ICONS.length];
  return (
    <aside aria-label="Featured services" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className={cn("bg-tint p-4 text-ink shadow-2xl shadow-black/30 ring-1 ring-ink/10 sm:p-5", className)}>
      <div className="flex items-start justify-between gap-4">
        <p className="label text-slate">Service 0{i + 1} / 0{items.length}</p>
        <div className="flex gap-1.5" role="group" aria-label="Choose service">
          {items.map((s, n) => (
            <button key={s.slug} type="button" aria-label={s.short} aria-pressed={n === i} onClick={() => setI(n)} className={cn("size-2.5 border border-ink transition-colors hover:bg-ember hover:border-ember", n === i && "bg-ink")} />
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-5" aria-live="polite">
        <div className="min-w-0 flex-1" key={cur.slug}>
          <p className="display fade-in text-xl uppercase leading-tight tracking-normal sm:text-2xl">{cur.short}</p>
          <p className="fade-in mt-3 text-sm leading-relaxed text-slate">{cur.description}</p>
        </div>
        <Icon className="size-16 shrink-0 text-ink/80 sm:size-20" strokeWidth={0.8} aria-hidden />
      </div>
      <Link href="/#services" className="label group mt-5 flex min-h-11 items-center justify-between bg-ink/5 px-4 transition-colors hover:bg-ember hover:text-white">
        Explore services <ArrowUpRight className="size-4" aria-hidden />
      </Link>
    </aside>
  );
}
