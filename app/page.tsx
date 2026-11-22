import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { AudienceSection } from "@/components/sections/audience-section";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AudienceSection />
      <AboutTeaser />
      <ProcessSection tone="white" />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
