import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { COMPANY } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const FACTS = [
  { k: "Licence", v: `No. ${COMPANY.licenseNo}`, d: "Quote it to us at any time." },
  { k: "Services", v: `${SERVICES.length} lines`, d: "From manpower to logistics." },
  { k: "Reach us", v: "2 phones + WhatsApp", d: "Answered by the team." },
];

/** Typography-led introduction. Image composition is deliberately the opposite of the hero: tall, offset, quiet. */
export function Intro() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow n="01" className="reveal">The company</Eyebrow>
            <h2 className="display reveal mt-7 text-[clamp(2rem,4.6vw,3.9rem)]">
              One Qatar-based team for the people, the trades and the works a project needs.
            </h2>
            <div className="reveal prose-lead mt-10 grid gap-6 text-slate sm:grid-cols-2 sm:gap-10">
              <p>Construction, finishing and workforce needs rarely arrive one at a time. A renovation calls for builders, gypsum and painters; a hotel needs service staff alongside plumbing and AC support; every site needs people and equipment moved.</p>
              <p>We bring these under one company, so you have a single conversation, a single standard of workmanship, and one team accountable for the result.</p>
            </div>
            <Link href="/about" className="group reveal mt-10 inline-flex min-h-12 items-center gap-3 text-sm font-semibold">
              <span className="u-link pb-1">About the company</span>
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden />
            </Link>
          </div>

          <div className="relative lg:col-span-5">
            <div className="reveal-clip relative aspect-[4/5] overflow-hidden bg-line">
              <Image src="/images/workers-masonry.jpg" alt="Workers in safety helmets and high-visibility vests handling materials on a site in Qatar" fill sizes="(min-width:1024px) 38vw, 100vw" className="parallax object-cover object-[32%_50%]" />
            </div>
            <figure className="reveal absolute -bottom-8 -start-4 hidden w-40 border-[6px] border-paper bg-paper sm:block lg:-start-14 lg:w-52">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/project-helmets-scaffold.jpg" alt="Safety helmets in front of scaffolding" fill sizes="208px" className="object-cover" />
              </div>
            </figure>
            <p className="label mt-3 text-slate sm:text-end">Fig. 02: On site</p>
          </div>
        </div>

        <dl className="reveal mt-20 grid border-y border-ink/15 sm:grid-cols-3 lg:mt-28">
          {FACTS.map((f, i) => (
            <div key={f.k} className={`py-7 sm:px-8 ${i > 0 ? "border-t border-ink/15 sm:border-s sm:border-t-0" : "sm:ps-0"}`}>
              <dt className="label text-gold-deep">{f.k}</dt>
              <dd className="display mt-3 text-2xl sm:text-3xl">{f.v}</dd>
              <dd className="mt-1 text-sm text-slate">{f.d}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
