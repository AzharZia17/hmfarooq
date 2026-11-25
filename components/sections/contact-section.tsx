import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { CallButton } from "@/components/contact/call-button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { COMPANY, telLink } from "@/lib/constants";

const label = "text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/55";

export function ContactSection({
  defaultService,
  heading = "Start with a *conversation.*",
  description = "Call, message us on WhatsApp, or write it down below. Whichever you choose, you reach the team directly.",
  brief,
  id = "contact",
}: { defaultService?: string; heading?: string; description?: string; brief?: string[]; id?: string }) {
  const checklist = brief ?? ["What you need: roles, trades or type of work", "How much: headcount, area or scope", "Where: the site or property location", "When: your start date and duration"];
  return (
    <Section id={id} tone="paper">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Contact" title={heading} description={description} />
          <dl className="mt-10 border-t border-navy/15">
            {COMPANY.phones.map((p, i) => (
              <div key={p.tel} className="border-b border-navy/15 py-5">
                <dt className={label}>Phone {i + 1}</dt>
                <dd className="mt-1"><a href={telLink(p.tel)} dir="ltr" className="inline-block text-2xl font-semibold text-navy hover:text-gold-dark">{p.display}</a></dd>
              </div>
            ))}
            <div className="border-b border-navy/15 py-5">
              <dt className={label}>Company</dt>
              <dd className="mt-1 font-semibold text-navy">{COMPANY.name}</dd>
              <dd className="text-charcoal/70">License No. {COMPANY.licenseNo} · {COMPANY.country}</dd>
            </div>
          </dl>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <CallButton index={0} variant="navy" full label="Call Phone 1" />
            <CallButton index={1} variant="outline-dark" full label="Call Phone 2" />
            <WhatsAppButton full className="sm:col-span-2" />
          </div>
          <div className="mt-10 border-s-4 border-gold bg-white p-6">
            <h3 className="font-semibold text-navy">To get a useful reply, tell us</h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
              {checklist.map((c) => <li key={c} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 bg-gold" aria-hidden />{c}</li>)}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm defaultService={defaultService} />
        </div>
      </Container>
    </Section>
  );
}
