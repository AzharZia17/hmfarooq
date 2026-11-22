import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Services page: one long-form block per service. */
export function ServicesDetail() {
  return (
    <>
      {SERVICES.map((s, i) => (
        <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "white" : "paper"} className="py-16 sm:py-20 lg:py-24">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2")}>
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-sm font-semibold text-gold-dark"><s.icon className="size-5" aria-hidden /> Service {s.number}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{s.title}</h2>
              <p className="mt-3 text-xl font-medium text-charcoal/60">{s.tagline}</p>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal/80">
                {s.intro.map((p) => <p key={p}>{p}</p>)}
              </div>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">What&apos;s covered</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.offerings.map((o) => <li key={o.name} className="border border-navy/20 px-3 py-1.5 text-sm font-medium text-navy">{o.name}</li>)}
              </ul>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Best suited for</h3>
              <p className="mt-3 text-charcoal/80">{s.suitedFor.join(" · ")}</p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={`/services/${s.slug}`} className={buttonVariants({ variant: "navy" })}>
                  Service details <ArrowRight className="flip-rtl" aria-hidden />
                </Link>
                <WhatsAppButton variant="outline-dark" label="Ask on WhatsApp" message={s.whatsappMessage} />
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
