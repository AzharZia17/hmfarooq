"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/images";
import { cn } from "@/lib/utils";

const RATIOS = ["aspect-[4/3]", "aspect-[4/5]", "aspect-[16/10]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]"];
type Filter = "All" | GalleryCategory;

/** Filterable photo wall with a keyboard-navigable lightbox. Captions stay under every image. */
export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);
  const idx = items.findIndex((g) => g.id === openId);
  const current = idx >= 0 ? items[idx] : null;
  const step = (d: number) => setOpenId(items[(idx + d + items.length) % items.length].id);

  return (
    <Section tone="paper" className="pt-8 sm:pt-12">
      <Container>
        <div role="group" aria-label="Filter photographs" className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["All", ...GALLERY_CATEGORIES] as Filter[]).map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}
              className={cn("label min-h-11 shrink-0 border px-5 transition-colors", filter === c ? "border-ink bg-ink text-white" : "border-ink/25 text-ink hover:border-ember")}>
              {c}
            </button>
          ))}
        </div>

        <div className="gap-x-6 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <figure key={g.id} className="mb-10 break-inside-avoid">
              <button type="button" onClick={() => setOpenId(g.id)} aria-label={`View larger: ${g.title}`} className={cn("group relative block w-full overflow-hidden bg-line", RATIOS[i % RATIOS.length])}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="zoom object-cover" />
                <span aria-hidden className="label absolute bottom-0 start-0 bg-ink px-3 py-2 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">{g.category}</span>
              </button>
              <figcaption className="mt-3 text-sm leading-snug text-slate"><span className="font-semibold text-ink">{g.title}.</span> {g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Dialog.Root open={!!current} onOpenChange={(o) => !o && setOpenId(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fade-in fixed inset-0 z-[80] bg-ink/95" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
            className="fade-in fixed inset-0 z-[90] flex flex-col items-center justify-center p-4 text-white focus:outline-none"
          >
            {current && (
              <>
                <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
                <div className="relative h-[60svh] w-full max-w-5xl"><Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" /></div>
                <p className="mt-5 max-w-2xl text-center text-sm text-white/80">
                  <span className="label text-gold">{current.category}</span>
                  <span className="mt-2 block"><span className="font-semibold text-white">{current.title}.</span> {current.caption}</span>
                  <span className="label mt-2 block text-[0.65rem] text-white/45">{current.credit}</span>
                </p>
                <div className="mt-5 flex gap-3">
                  <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid size-12 place-items-center border border-white/35 hover:border-ember hover:text-ember"><ChevronLeft aria-hidden /></button>
                  <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid size-12 place-items-center border border-white/35 hover:border-ember hover:text-ember"><ChevronRight aria-hidden /></button>
                </div>
                <Dialog.Close aria-label="Close" className="absolute right-4 top-4 grid size-12 place-items-center border border-white/35 hover:border-ember hover:text-ember"><X aria-hidden /></Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  );
}
