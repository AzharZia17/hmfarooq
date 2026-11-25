import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description: "Construction, painting, manpower and hospitality environments in Qatar, shown through photography.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader image={{ src: "/images/construction-site-team.jpg", alt: "" }} title="Our *Work* & Projects" description="The disciplines we work in, seen on site." crumbs={[{ label: "Projects" }]} />
      <ProjectsSection />
      <CtaSection title="Have a similar job in mind?" text="Send us the details and we will tell you how we would approach it." />
    </>
  );
}
