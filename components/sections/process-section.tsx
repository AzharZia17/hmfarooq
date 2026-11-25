import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection({ tone = "paper" }: { tone?: "white" | "paper" }) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHeading eyebrow="How We Work" title="From first call to *finished* work." description="Five steps take a requirement from inquiry to a completed assignment, with you in the loop throughout." />
          </div>
        </div>
        <ol className="lg:col-span-7">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.title} className="group grid grid-cols-[4.5rem_1fr] gap-4 border-t border-navy/15 py-8 transition-colors last:border-b hover:border-gold sm:grid-cols-[6.5rem_1fr] sm:py-10">
              <span className="font-display text-6xl leading-none text-navy/15 transition-colors group-hover:text-gold sm:text-7xl">{String(i + 1).padStart(2, "0")}</span>
              <div className="pt-1">
                <h3 className="font-display text-3xl text-navy">{s.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-charcoal/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
