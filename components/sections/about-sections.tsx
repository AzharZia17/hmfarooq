import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { COMMITMENTS, COMPANY } from "@/lib/constants";

export function Identity() {
  return (
    <Section tone="paper" className="pt-8 sm:pt-12">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Eyebrow n="01">The company</Eyebrow>
          <h2 className="display reveal mt-7 text-[clamp(2rem,4.2vw,3.5rem)]">A service and contracting company, built around how projects actually get done.</h2>
          <div className="prose-lead reveal mt-10 max-w-2xl space-y-5 text-slate">
            <p>HM Farooq Constructing Company is a Qatar-based service and contracting company. We supply manpower, carry out construction and painting contracts, support hotel and venue operations, and provide the specialist trades and equipment that sit around a build: lifting, gypsum and ceiling work, AC, plumbing, and transport.</p>
            <p>The services belong together because the needs do. A renovation needs builders, finishers and painters in the right order. A site needs people, plant and deliveries on the same day. Dealing with one company for that means one brief, one standard of work and one team to hold to account.</p>
          </div>
        </div>
        <aside className="reveal lg:col-span-4 lg:col-start-9">
          <div className="border border-ink/15 bg-tint p-7 lg:mt-14">
            <p className="label text-gold-deep">Licence</p>
            <p className="display mt-3 text-4xl">No. {COMPANY.licenseNo}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate">Our licence number is shown across this website so clients can check who they are dealing with, and quote it to us at any time.</p>
          </div>
        </aside>
      </Container>
    </Section>
  );
}

/** Full-bleed photograph as a pause between text sections. */
export function Interlude() {
  return (
    <div className="reveal-clip relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[21/9]">
      <Image src="/images/construction-site-team.jpg" alt="A site team working beside scaffolding and a crane" fill sizes="100vw" className="parallax object-cover" />
    </div>
  );
}

export function Commitments() {
  return (
    <Section tone="ink">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Eyebrow n="02" dark>How we work</Eyebrow>
          <h2 className="display mt-7 text-[clamp(2rem,3.8vw,3.1rem)]">What a client can expect from us.</h2>
        </div>
        <dl className="lg:col-span-8">
          {COMMITMENTS.map((c, i) => (
            <div key={c.title} className="reveal grid gap-2 border-t border-white/15 py-8 last:border-b sm:grid-cols-[4rem_1fr] sm:gap-6">
              <dt className="label pt-1.5 text-gold">{String(i + 1).padStart(2, "0")}</dt>
              <dd>
                <p className="display text-2xl">{c.title}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-white/65">{c.text}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

export function RoleInQatar() {
  return (
    <Section tone="paper">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6 lg:order-2 lg:col-start-7">
          <div className="reveal-clip relative aspect-[4/5] overflow-hidden bg-line sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image src="/images/doha-west-bay.jpg" alt="West Bay skyline in Doha, Qatar" fill sizes="(min-width:1024px) 45vw, 100vw" className="parallax object-cover object-[65%_50%]" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:order-1">
          <Eyebrow n="03">In Qatar</Eyebrow>
          <h2 className="display reveal mt-7 text-[clamp(2rem,4vw,3.3rem)]">A supporting hand to the people who build and run Qatar&apos;s properties.</h2>
          <div className="prose-lead reveal mt-8 space-y-5 text-slate">
            <p>Qatar&apos;s construction and hospitality sectors run on programmes that leave little slack. Contractors need capacity at short notice, owners need buildings finished and maintained, and hotels need teams that present well from the first shift.</p>
            <p>Our part is to supply that capacity dependably: the right people, the works carried out to the agreed scope, and a team that stays reachable after handover.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
