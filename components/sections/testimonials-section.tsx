import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants";

/** Renders nothing until real, approved testimonials are added to TESTIMONIALS in lib/constants.ts. */
export function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border-t-2 border-gold pt-6">
              <blockquote className="text-lg leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-navy">
                {t.name}
                {(t.role || t.company) && <span className="block font-normal text-charcoal/60">{[t.role, t.company].filter(Boolean).join(", ")}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
