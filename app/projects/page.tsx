import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Gallery } from "@/components/sections/gallery";
import { ContactBand } from "@/components/sections/contact-band";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description: "Construction, painting, manpower and hospitality environments in Qatar, shown through photography.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our work in pictures."
        description="The disciplines we work in, seen on site."
        crumbs={[{ label: "Projects" }]}
        image={{ src: "/images/project-crane-site.jpg", alt: "Building under construction with a tower crane" }}
        position="50% 30%"
      />
      <Gallery />
      <ContactBand title="Have a similar job in mind?" text="Send us the details and we will tell you how we would approach it." />
    </>
  );
}
