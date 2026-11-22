import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection({ tone = "paper" }: { tone?: "white" | "paper" }) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeading eyebrow="How We Work" title="From first call to finished work." description="Five steps that take a requirement from an inquiry to a completed assignment, with you in the loop throughout." />
        <ol className="mt-16 grid gap-0 lg:grid-cols-5">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.title} className="relative border-s-2 border-navy/20 pb-10 ps-8 last:pb-0 lg:border-s-0 lg:border-t-2 lg:ps-0 lg:pe-8 lg:pt-8 lg:pb-0">
              <span className="absolute -start-[7px] top-1 size-3 bg-gold lg:-top-[7px] lg:start-0" aria-hidden />
              <p className="text-4xl font-semibold leading-none text-navy/15">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
