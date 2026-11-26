import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Identity, Interlude, Commitments, RoleInQatar } from "@/components/sections/about-sections";
import { ContactBand } from "@/components/sections/contact-band";

export const metadata: Metadata = {
  title: "About Us",
  description: "HM Farooq Constructing Company is a Qatar-based service and contracting company. How we work and what clients can expect from us. License No. 222095.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About HM Farooq Constructing Company."
        description="Who we are, how we work, and the part we play in Qatar's building and service sectors."
        crumbs={[{ label: "About Us" }]}
      />
      <Identity />
      <Interlude />
      <Commitments />
      <RoleInQatar />
      <ContactBand title="Work with a team you can check on." text="Our licence number is 222095 and our phones are answered by the team. Tell us about your requirement and we will take it from there." />
    </>
  );
}
