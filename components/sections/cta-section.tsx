import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { CallButton } from "@/components/contact/call-button";
import { Accent } from "@/components/ui/section-heading";
import { IMAGES } from "@/lib/images";

export function CtaSection({
  title = "Have a project or a staffing need *in mind?*",
  text = "Send us the outline. We will tell you what we can do, and what we would need to know.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-28 text-white sm:py-36">
      <Image src={IMAGES.cta.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/80" />
      <Container>
        <h2 className="max-w-4xl text-balance font-display text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl [&_em]:text-gold"><Accent text={title} /></h2>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/contact" className={buttonVariants({ variant: "gold", size: "lg" })}>Request a Quote</Link>
          <CallButton index={0} label="Call Us Now" size="lg" variant="outline" />
          <WhatsAppButton size="lg" />
        </div>
      </Container>
    </section>
  );
}
