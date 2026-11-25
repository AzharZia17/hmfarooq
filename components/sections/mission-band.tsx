import { Container, Section } from "@/components/ui/container";

export function MissionBand() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <Container className="relative">
        <span aria-hidden className="pointer-events-none absolute -top-10 start-0 select-none font-display text-[16rem] leading-none text-gold/15 sm:text-[22rem]">&ldquo;</span>
        <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Mission</p>
        <p className="relative mt-8 max-w-5xl text-balance font-display text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
          To deliver dependable services and quality solutions through <em className="italic text-gold">professionalism,</em> skilled manpower, commitment, and customer satisfaction.
        </p>
      </Container>
    </Section>
  );
}
