"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "hero", label: "Start" },
  { id: "company", label: "Company" },
  { id: "services", label: "Services" },
  { id: "capabilities", label: "Capabilities" },
  { id: "approach", label: "Approach" },
  { id: "qatar", label: "Qatar" },
];

/** Slim progress rail on wide screens: shows where you are on the page and jumps to a section. */
export function SectionRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Page sections" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-white/10 bg-ink/60 px-2 py-3 backdrop-blur-md xl:flex">
      {ITEMS.map((i) => (
        <a key={i.id} href={`#${i.id}`} aria-label={i.label} aria-current={active === i.id ? "true" : undefined} className="group relative grid size-6 place-items-center">
          <span className={cn("block rounded-full transition-all duration-500", active === i.id ? "size-2.5 bg-ember" : "size-1.5 bg-white/40 group-hover:bg-white")} />
          <span className="label pointer-events-none absolute right-8 whitespace-nowrap rounded-sm bg-ink px-2 py-1 text-[0.6rem] text-white opacity-0 transition-opacity group-hover:opacity-100">{i.label}</span>
        </a>
      ))}
    </nav>
  );
}
