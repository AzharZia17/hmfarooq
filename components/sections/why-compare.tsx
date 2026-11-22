import { Check, X } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { COMPARISON } from "@/lib/constants";

export function WhyCompare() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading eyebrow="The Difference" title="Four suppliers, or one team?" description="Many jobs need more than one kind of work. Here is what changes when they come from one company." />
        <div className="mt-14 grid gap-px bg-navy/15 lg:grid-cols-2">
          <div className="bg-white p-8 sm:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/50">Separate suppliers</h3>
            <ul className="mt-6 space-y-4">
              {COMPARISON.without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-charcoal/65"><X className="mt-1 size-4 shrink-0 text-charcoal/40" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy p-8 text-white sm:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">With HM Farooq</h3>
            <ul className="mt-6 space-y-4">
              {COMPARISON.with.map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium"><Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
