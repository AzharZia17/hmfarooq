import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhyShowcase } from "@/components/sections/why-showcase";
import { WhyCompare } from "@/components/sections/why-compare";
import { CtaSection } from "@/components/sections/cta-section";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Why clients choose HM Farooq Constructing Company in Qatar: one company for manpower, painting, hospitality and construction, direct access and clear scope. License No. 222095.",
  alternates: { canonical: "/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader image={IMAGES.towers} title="Why clients *choose* us." description="Six reasons, in plain terms. Select each one to see what it means in practice." crumbs={[{ label: "Why Choose Us" }]} />
      <Section>
        <Container>
          <SectionHeading eyebrow="Our Strengths" title="What you can count *on.*" />
          <div className="mt-14">
            <WhyShowcase />
          </div>
        </Container>
      </Section>
      <WhyCompare />
      <CtaSection title="See the difference on your next job." text="Tell us what you are planning and we will show you how we would handle it." />
    </>
  );
}
