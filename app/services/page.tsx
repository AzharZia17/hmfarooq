import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesDetail } from "@/components/sections/services-detail";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Manpower supply, building painting contracts, hospitality services and construction contracts in Qatar: what each service covers and who it suits.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader image={IMAGES.cta} title="What we do, in detail." description="Four services, each described by what it covers and who it is for." crumbs={[{ label: "Services" }]} />
      <ServicesDetail />
      <CtaSection title="Not sure which service fits?" text="Describe the job in a few lines and we will tell you how we would approach it." />
    </>
  );
}
