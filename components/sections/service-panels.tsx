import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Home page: four photo panels that expand on hover/focus (stacked cards on phones). */
export function ServicePanels() {
  return (
    <Section id="services" tone="paper" className="overflow-hidden">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What We Do" title="Four disciplines. *One* standard." />
          <Link href="/services" className="group inline-flex min-h-11 shrink-0 items-center gap-2 border-b-2 border-gold text-sm font-semibold text-navy hover:text-gold-dark">
            All services in detail <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </Container>
      <Container className="mt-14">
        <ul className="grid gap-4 lg:flex lg:h-[36rem] lg:gap-2">
          {SERVICES.map((s) => (
            <li key={s.slug} className="lg:flex-1 lg:transition-[flex] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[2.6] lg:focus-within:flex-[2.6]">
              <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-navy-deep text-white lg:aspect-auto lg:h-full">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-navy-deep/10 transition-colors duration-500 group-hover:from-navy-deep/95" />
                <span className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="font-display text-5xl leading-none text-white/40 transition-colors group-hover:text-gold">{s.number}</span>
                  <s.icon className="size-6 text-white/70" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <span className={cn("block font-display text-3xl leading-tight lg:text-[2rem]")}>{s.title}</span>
                  <span className="mt-3 block max-w-sm text-sm leading-relaxed text-white/80 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-40 lg:group-focus-visible:opacity-100">
                    {s.tagline} {s.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Explore <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
