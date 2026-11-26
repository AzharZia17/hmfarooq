import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesListing } from "@/components/sections/services-listing";
import { ContactBand } from "@/components/sections/contact-band";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Manpower and labor supply, construction and painting contracts, hospitality services, lifting, gypsum and ceiling work, AC, plumbing, and transportation in Qatar.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services, by what you need done."
        description="Ten service lines in three groups. Combine them on one project and you still deal with a single team."
        crumbs={[{ label: "Services" }]}
        image={{ src: "/images/construction-steel-structure.jpg", alt: "Workers and an access platform inside a steel-frame building" }}
        position="50% 40%"
      />
      <ServicesListing />
      <ContactBand />
    </>
  );
}
