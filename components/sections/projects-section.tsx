"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/images";
import { cn } from "@/lib/utils";

const STORIES: Record<GalleryCategory, { title: string; text: string }> = {
  Construction: { title: "Where buildings take shape", text: "Cranes, concrete, steel and scaffolding working together. These frames follow a building from rising structure to the frame every other trade depends on." },
  Painting: { title: "Protection you can see", text: "Paint shields a building as much as it dresses it. From rope access on tall facades to rolled coats indoors and out, this is what a painting contract looks like in practice." },
  Manpower: { title: "The workforce behind the work", text: "Teams in protective gear, briefed and ready. Every site depends on people who arrive prepared, protected and ready to start." },
  Hospitality: { title: "Where service is the product", text: "A hotel entrance and a large events hall in Doha: environments where presentation, and the people behind it, shape what guests remember." },
};

const ORDERED = GALLERY_CATEGORIES.flatMap((c) => GALLERY.filter((g) => g.category === c));

export function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : ORDERED[openIndex];
  const step = (d: number) => setOpenIndex((i) => (i === null ? i : (i + d + ORDERED.length) % ORDERED.length));

  return (
    <>
      <div className="sticky top-[4.5rem] z-30 border-b border-navy/10 bg-white/95 backdrop-blur sm:top-20">
        <Container>
          <nav aria-label="Jump to category" className="-mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {GALLERY_CATEGORIES.map((c) => (
              <a key={c} href={`#${c.toLowerCase()}`} className="flex min-h-12 shrink-0 items-center border-b-2 border-transparent px-4 text-sm font-semibold text-charcoal/70 hover:border-gold hover:text-navy">{c}</a>
            ))}
          </nav>
        </Container>
      </div>

      {GALLERY_CATEGORIES.map((cat, ci) => {
        const items = GALLERY.filter((g) => g.category === cat);
        const [lead, ...rest] = items;
        const story = STORIES[cat];
        return (
          <Section key={cat} id={cat.toLowerCase()} tone={ci % 2 === 0 ? "white" : "paper"} className="py-16 sm:py-20 lg:py-24">
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={cn("lg:col-span-4", ci % 2 === 1 && "lg:order-2")}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{String(ci + 1).padStart(2, "0")} · {cat}</p>
                <h2 className="mt-4 text-balance font-display text-4xl font-normal leading-[1.05] tracking-tight text-navy sm:text-5xl">{story.title}</h2>
                <div className="mt-6 h-0.5 w-12 bg-gold" aria-hidden />
                <p className="mt-6 leading-relaxed text-charcoal/75">{story.text}</p>
              </div>
              <div className="space-y-4 lg:col-span-8">
                <Figure item={lead} index={ORDERED.indexOf(lead)} onOpen={setOpenIndex} className="aspect-[16/9]" large />
                {rest.length > 0 && (
                  <div className={cn("grid gap-4", rest.length === 1 ? "sm:grid-cols-1" : rest.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3")}>
                    {rest.map((g) => <Figure key={g.id} item={g} index={ORDERED.indexOf(g)} onOpen={setOpenIndex} className="aspect-[4/3]" />)}
                  </div>
                )}
              </div>
            </Container>
          </Section>
        );
      })}

      <Dialog.Root open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fade-in fixed inset-0 z-[80] bg-black/90" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
            className="fade-in fixed inset-0 z-[90] flex flex-col items-center justify-center p-4 focus:outline-none"
          >
            {current && (
              <>
                <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
                <div className="relative aspect-[3/2] w-full max-w-5xl">
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </div>
                <p className="mt-4 max-w-3xl text-center text-sm text-white/80">
                  <span className="font-semibold text-white">{current.title}</span> · {current.category}
                  <span className="mt-1 block">{current.caption}</span>
                  <span className="block text-xs text-white/55">{current.credit}</span>
                </p>
                <div className="mt-4 flex gap-3">
                  <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid size-12 place-items-center border border-white/40 text-white hover:border-gold hover:text-gold"><ChevronLeft className="flip-rtl" aria-hidden /></button>
                  <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid size-12 place-items-center border border-white/40 text-white hover:border-gold hover:text-gold"><ChevronRight className="flip-rtl" aria-hidden /></button>
                </div>
                <Dialog.Close aria-label="Close" className="absolute end-4 top-4 grid size-12 place-items-center border border-white/40 text-white hover:border-gold hover:text-gold"><X aria-hidden /></Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function Figure({ item, index, onOpen, className, large }: { item: (typeof GALLERY)[number]; index: number; onOpen: (i: number) => void; className: string; large?: boolean }) {
  return (
    <figure>
      <button type="button" onClick={() => onOpen(index)} aria-label={`View larger: ${item.title}`} className={cn("group relative block w-full overflow-hidden bg-mist", className)}>
        <Image src={item.src} alt={item.alt} fill sizes={large ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 22vw, (min-width:640px) 33vw, 100vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </button>
      <figcaption className="mt-2 text-sm leading-snug text-charcoal/70"><span className="font-semibold text-navy">{item.title}.</span> {item.caption}</figcaption>
    </figure>
  );
}
