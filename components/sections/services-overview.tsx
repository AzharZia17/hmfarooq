import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/services";

/** Home page: compact photo tiles. The full write-ups live on /services. */
export function ServicesOverview() {
  return (
    <Section id="services" tone="paper">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What We Do" title="Pick one service, or combine them on a single project." />
          <Link href="/services" className="inline-flex min-h-11 shrink-0 items-center gap-2 border-b-2 border-gold text-sm font-semibold text-navy hover:text-gold-dark">
            See all services in detail <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group relative block aspect-[3/4] overflow-hidden bg-navy-deep text-white">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-sm font-semibold text-gold">{s.number}</span>
                  <span className="mt-2 block text-xl font-semibold leading-snug">{s.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-white/80">{s.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
