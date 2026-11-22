import { Container, Section } from "@/components/ui/container";

export function MissionBand() {
  return (
    <Section tone="dark">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Mission</p>
        <p className="mt-6 max-w-4xl text-balance text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
          &ldquo;To deliver dependable services and quality solutions through professionalism, skilled manpower, commitment, and customer satisfaction.&rdquo;
        </p>
      </Container>
    </Section>
  );
}
