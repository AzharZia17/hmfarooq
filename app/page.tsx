import { Hero } from "@/components/sections/hero";
import { ServicePanels } from "@/components/sections/service-panels";
import { GlanceBand } from "@/components/sections/glance-band";
import { AudienceSection } from "@/components/sections/audience-section";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePanels />
      <GlanceBand />
      <AudienceSection />
      <AboutTeaser />
      <ProcessSection tone="paper" />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
