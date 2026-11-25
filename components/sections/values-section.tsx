import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VALUES } from "@/lib/constants";

export function ValuesSection() {
  return (
    <Section tone="paper">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Core Values" title="What we hold ourselves *to.*" />
        </div>
        <dl className="border-t border-navy/15 lg:col-span-8">
          {VALUES.map((v, i) => (
            <div key={v.name} className="grid gap-2 border-b border-navy/15 py-6 sm:grid-cols-[3rem_13rem_1fr] sm:gap-6">
              <span className="text-sm font-semibold text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
              <dt className="font-display text-3xl text-navy">{v.name}</dt>
              <dd className="leading-relaxed text-charcoal/70">{v.meaning}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
