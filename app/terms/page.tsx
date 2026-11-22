import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" crumb="Terms & Conditions">
      <p>By using this website you agree to these terms. <em>This is a general template — please have it reviewed by the company before launch.</em></p>
      <h2>Information on this site</h2>
      <p>The content is provided for general information about our services. Service scope, availability and pricing are confirmed individually with each client.</p>
      <h2>Images</h2>
      <p>Where images are marked as samples they are illustrative only and do not depict completed company projects.</p>
      <h2>Contact</h2>
      <p>HM Farooq Constructing Company, Qatar · License No. 222095 · +974 50857073 · +974 77463757.</p>
    </LegalPage>
  );
}
