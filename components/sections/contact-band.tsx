import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { COMPANY, telLink } from "@/lib/constants";

/** Closing call to action. Numbers are the hero of this section. */
export function ContactBand({
  title = "Tell us what you need on site.",
  text = "Manpower, a construction contract or a specialist trade: send the outline and we will tell you what we can do, and what we would need to know.",
  tone = "white",
}: { title?: string; text?: string; tone?: "white" | "paper" }) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Eyebrow n="06" className="reveal">Contact</Eyebrow>
          <h2 className="display reveal mt-7 text-[clamp(2.1rem,4.8vw,4rem)]">{title}</h2>
          <p className="prose-lead reveal mt-6 max-w-lg text-slate">{text}</p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={buttonVariants({ variant: "ink", size: "lg" })}>Request a quote <ArrowRight className="nudge" aria-hidden /></Link>
            <WhatsAppButton size="lg" />
          </div>
        </div>
        <div className="reveal lg:col-span-5 lg:col-start-8" dir="ltr">
          <p className="label text-gold-deep">Call the team</p>
          <ul className="mt-4 border-t border-ink/15">
            {COMPANY.phones.map((p) => (
              <li key={p.tel} className="border-b border-ink/15">
                <a href={telLink(p.tel)} className="group flex items-center justify-between py-5 transition-colors hover:text-ember">
                  <span className="display text-[clamp(1.7rem,3.2vw,2.6rem)]">{p.display}</span>
                  <ArrowRight className="size-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <p className="label mt-5 text-slate">{COMPANY.name}<br />Licence No. {COMPANY.licenseNo} · {COMPANY.country}</p>
        </div>
      </Container>
    </Section>
  );
}
