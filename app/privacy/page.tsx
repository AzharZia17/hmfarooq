import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" crumb="Privacy Policy">
      <p>HM Farooq Constructing Company (&quot;we&quot;) respects your privacy. This page explains what information we collect through this website and how we use it. <em>This is a general template — please have it reviewed by the company before launch.</em></p>
      <h2>Information you provide</h2>
      <p>When you submit the inquiry form we receive your name, phone number, optional email address, the service you need and your message. We use this only to respond to your inquiry.</p>
      <h2>WhatsApp and phone</h2>
      <p>If you contact us through WhatsApp or by phone, your communication is handled through those services under their own terms and privacy policies.</p>
      <h2>Sharing</h2>
      <p>We do not sell your information. We may use service providers (for example email or form-delivery services) to receive inquiries on our behalf.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: +974 50857073 or +974 77463757.</p>
    </LegalPage>
  );
}
