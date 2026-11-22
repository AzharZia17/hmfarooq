import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { PageHeader } from "@/components/ui/page-header";
import { StorySection } from "@/components/sections/story-section";
import { MissionBand } from "@/components/sections/mission-band";
import { ValuesSection } from "@/components/sections/values-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "HM Farooq Constructing Company is a Qatar-based service and contracting company. Our mission, values and what you can expect from us. License No. 222095.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader image={IMAGES.hero} title="The company behind the work." description="Who we are, what we stand for and what working with us looks like." crumbs={[{ label: "About Us" }]} />
      <StorySection />
      <MissionBand />
      <ValuesSection />
      <CtaSection title="Work with a team you can check on." text="Our license number is 222095 and our phones are open. Tell us about your requirement and we will take it from there." />
    </>
  );
}
