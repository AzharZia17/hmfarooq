import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SERVICES, SERVICE_GROUPS } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Full services catalogue: grouped, numbered, alternating image and text. */
export function ServicesListing() {
  return (
    <Section tone="paper" className="pt-8 sm:pt-12 lg:pt-16">
      <Container>
        {SERVICE_GROUPS.map((g) => {
          const items = SERVICES.filter((s) => s.group === g.name);
          return (
            <div key={g.name} className="mb-24 last:mb-0 lg:mb-36">
              <div className="grid gap-4 border-t border-ink pt-6 lg:grid-cols-12">
                <h2 className="display text-3xl sm:text-4xl lg:col-span-5">{g.name}</h2>
                <p className="text-slate lg:col-span-5 lg:col-start-8">{g.blurb}</p>
              </div>
              <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
                {items.map((s, i) => (
                  <article key={s.slug} className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
                    <Link href={`/services/${s.slug}`} aria-hidden tabIndex={-1} className={cn("reveal-clip relative block aspect-[4/3] overflow-hidden bg-navy lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                      {s.image ? (
                        <Image src={s.image.src} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="zoom object-cover" />
                      ) : (
                        <div className="flex h-full items-end bg-[repeating-linear-gradient(135deg,transparent_0_22px,rgb(255_255_255/0.04)_22px_23px)] p-8"><span className="display text-[8rem] leading-none text-gold/30">{s.number}</span></div>
                      )}
                    </Link>
                    <div className={cn("reveal lg:col-span-5", i % 2 === 1 ? "lg:order-1" : "lg:col-start-8")}>
                      <p className="label text-gold-deep">{s.number}</p>
                      <h3 className="display mt-3 text-[clamp(1.7rem,3vw,2.5rem)]"><Link href={`/services/${s.slug}`} className="hover:text-ember">{s.title}</Link></h3>
                      <p className="mt-4 leading-relaxed text-slate">{s.description}</p>
                      <ul className="stagger mt-6 border-t border-ink/15 text-sm">
                        {s.offerings.slice(0, 4).map((o) => <li key={o.name} className="border-b border-ink/10 py-2.5">{o.name}</li>)}
                      </ul>
                      <Link href={`/services/${s.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
                        <span className="u-link pb-0.5">View service details</span><ArrowUpRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
