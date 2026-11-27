import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroBuilding } from "@/components/sections/hero-building";
import { HeroCard } from "@/components/sections/hero-card";
import { COMPANY, telLink } from "@/lib/constants";
import { getService } from "@/lib/services";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
const FEATURED = ["lifting-equipment", "construction", "painting", "manpower"]
  .map((s) => getService(s)!)
  .map((s) => ({ slug: s.slug, short: s.short, tagline: s.tagline, description: s.description }));

const BLOCK = "w-fit bg-tint px-3 py-1";

/**
 * Two clean zones: copy on the left, a wireframe building in its own panel on the right.
 * One floating service card; credentials sit as plain text. On mobile the building is a block of its own.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ember text-white lg:min-h-[100svh]">
      {/* half brown, half orange, split on a diagonal */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink [clip-path:polygon(0_0,100%_0,100%_17%,0_38%)] lg:[clip-path:polygon(0_0,100%_0,100%_12%,38%_100%,0_100%)]" />
      <Container className="relative flex min-h-[100svh] flex-col pb-[calc(var(--cut)+1.5rem)] pt-24 lg:pb-[calc(var(--cut)+1.5rem)] lg:pt-32">
        <div className="m-hero-fade relative z-10 lg:max-w-[27rem] xl:max-w-[34rem]">
          <h1 id="hero-title" className="display text-[clamp(2.1rem,9vw,3.9rem)] uppercase leading-[1.04] tracking-[-0.01em] text-ink">
            <span className="mask-line" style={d(0.3)}><span className={BLOCK}>Building a</span></span>
            <span className="mask-line mt-1" style={d(0.42)}><span className={BLOCK}>Better</span></span>
            <span className="mask-line mt-1" style={d(0.54)}><span className={BLOCK}>Tomorrow<span className="text-ember">.</span></span></span>
          </h1>
          <p className="fade-up prose-lead mt-5 max-w-md text-white/80 lg:mt-7" style={d(0.9)}>
            Reliable construction, manpower and specialist trade services supporting projects and properties across Qatar.
          </p>
        </div>

        {/* building: own block on mobile, right-hand panel on desktop */}
        <div className="m-hero-art pointer-events-none relative mt-1 h-60 sm:mt-6 sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[52%] xl:w-[66%]">
          <HeroBuilding className="h-full w-full text-white" />
        </div>

        <div className="relative z-10 lg:max-w-[27rem] xl:max-w-[34rem]">
          <div className="fade-up mt-2 lg:mt-7 flex flex-wrap items-center gap-x-6 gap-y-3" style={d(1.05)}>
            <Link href="/contact" className={buttonVariants({ variant: "cream", size: "lg" })}>Request a quote <ArrowRight className="nudge" aria-hidden /></Link>
            <Link href="/#services" className="label group inline-flex min-h-12 items-center gap-2 text-white transition-colors hover:text-gold"><span className="u-link pb-1">Explore services</span><ArrowRight className="size-3.5" aria-hidden /></Link>
          </div>
        </div>

        <HeroCard items={FEATURED} className="fade-up relative z-10 mt-6 w-full max-w-sm xl:absolute xl:bottom-36 xl:end-12 xl:mt-0 xl:w-80" />

        <div className="fade-up relative z-10 mt-auto flex flex-col gap-3 border-t border-white/25 pt-5 sm:flex-row sm:items-center sm:justify-between mt-auto lg:mt-auto" style={d(1.3)}>
          <p className="label text-white/85">Licence No. <span className="text-white">{COMPANY.licenseNo}</span> <span className="mx-2 opacity-50">/</span> {COMPANY.country}</p>
          <p className="flex flex-wrap gap-x-6 sm:pe-16" dir="ltr">
            {COMPANY.phones.map((p) => (
              <a key={p.tel} href={telLink(p.tel)} className="label inline-flex min-h-10 items-center gap-2 text-white transition-colors hover:text-ink"><Phone className="size-3.5" aria-hidden />{p.display}</a>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
