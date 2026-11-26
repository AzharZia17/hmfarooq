import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/contact/contact-form";
import { CallButton } from "@/components/contact/call-button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { COMPANY, telLink } from "@/lib/constants";

const CHECKLIST = ["What you need: roles, trades or type of work", "How much: headcount, area or scope", "Where: the site or property location", "When: your start date and duration"];

/** /contact: direct lines on the left, the written enquiry on the right. */
export function ContactSection() {
  return (
    <Section tone="paper" className="pt-8 sm:pt-12">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Eyebrow n="01">Call or message</Eyebrow>
          <ul className="mt-6 border-t border-ink" dir="ltr">
            {COMPANY.phones.map((p, i) => (
              <li key={p.tel} className="border-b border-ink/15 py-5">
                <p className="label text-slate">Phone {i + 1}</p>
                <a href={telLink(p.tel)} className="display mt-1 inline-block text-3xl transition-colors hover:text-ember sm:text-4xl">{p.display}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2" dir="ltr">
            <CallButton index={0} variant="dark" full label="Call phone 1" />
            <CallButton index={1} variant="dark" full label="Call phone 2" />
            <WhatsAppButton full className="sm:col-span-2" />
          </div>
          <div className="mt-10 border border-ink/15 bg-tint p-6">
            <p className="label text-gold-deep">To get a useful reply, tell us</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate">
              {CHECKLIST.map((c) => <li key={c} className="flex gap-3"><span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden />{c}</li>)}
            </ul>
          </div>
          <p className="label mt-8 text-slate">{COMPANY.name}<br />Licence No. {COMPANY.licenseNo} · {COMPANY.country}</p>
        </div>
        <div className="lg:col-span-7">
          <Eyebrow n="02">Write to us</Eyebrow>
          <div className="mt-8 bg-tint p-6 sm:p-10"><ContactForm /></div>
        </div>
      </Container>
    </Section>
  );
}
