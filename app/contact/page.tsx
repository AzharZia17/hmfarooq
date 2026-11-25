import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact HM Farooq Constructing Company in Qatar: +974 50857073, +974 77463757, WhatsApp or send an inquiry. License No. 222095.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Talk to us *directly.*" description="Call, message or send the details. Pick whichever is quickest for you." crumbs={[{ label: "Contact" }]} />
      <ContactSection />
      <FaqSection tone="white" />
    </>
  );
}
