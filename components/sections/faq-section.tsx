import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/ui/faq";
import { FAQS } from "@/lib/constants";

export function FaqSection({ tone = "white" }: { tone?: "white" | "paper" }) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4"><SectionHeading eyebrow="Before You Write" title="Quick *answers.*" /></div>
        <div className="lg:col-span-8"><Faq items={FAQS} /></div>
      </Container>
    </Section>
  );
}
