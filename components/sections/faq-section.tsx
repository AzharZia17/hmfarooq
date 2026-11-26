import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FaqSection() {
  return (
    <Section tone="white">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Eyebrow n="03">Questions</Eyebrow>
          <h2 className="display mt-7 text-[clamp(1.9rem,3.4vw,2.8rem)]">Before you get in touch.</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-ink lg:col-span-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
