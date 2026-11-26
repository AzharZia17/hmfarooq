import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroDrawing } from "@/components/sections/hero-drawing";
import { COMPANY, telLink } from "@/lib/constants";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

/** No photograph: the hero is a construction elevation that draws itself on the dark sheet. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_80%_70%,rgb(186_152_116/0.12),transparent_70%)]" />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-10 pt-32 lg:pb-52">
        <p className="fade-in label mb-7 flex items-center gap-3 text-gold" style={d(0.4)}>
          <span aria-hidden className="h-px w-8 bg-gold" />Sheet 01 · Qatar · Licence No. {COMPANY.licenseNo}
        </p>
        <h1 id="hero-title" className="display text-[clamp(2.9rem,7.6vw,7rem)] leading-[0.96]">
          <span className="mask-line" style={d(0.3)}><span>Building a</span></span>
          <span className="mask-line" style={d(0.45)}><span>Better <span className="text-gold">Tomorrow<span className="text-ember">.</span></span></span></span>
        </h1>
        <p className="fade-up prose-lead mt-8 max-w-md text-white/75" style={d(0.9)}>
          Reliable construction, manpower and specialist trade services supporting projects and properties across Qatar.
        </p>
        <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={d(1.05)}>
          <Link href="/contact" className={buttonVariants({ variant: "ember", size: "lg" })}>Request a quote <ArrowRight className="nudge" aria-hidden /></Link>
          <Link href="/services" className={buttonVariants({ variant: "light", size: "lg" })}>Explore services</Link>
        </div>
      </Container>

      <div className="pointer-events-none relative h-64 sm:h-80 lg:absolute lg:inset-x-0 lg:bottom-14 lg:h-[min(68svh,640px)]">
        <HeroDrawing className="h-full w-full" />
      </div>

      <div className="relative z-10 border-t border-gold/40">
        <Container className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-white/70">{COMPANY.shortName}</p>
          <p className="flex flex-wrap gap-x-6 sm:pe-16" dir="ltr">
            {COMPANY.phones.map((p) => (
              <a key={p.tel} href={telLink(p.tel)} className="label inline-flex min-h-10 items-center gap-2 text-white/80 transition-colors hover:text-ember"><Phone className="size-3.5" aria-hidden />{p.display}</a>
            ))}
          </p>
        </Container>
      </div>
    </section>
  );
}
