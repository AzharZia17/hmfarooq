import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-11rem)] md:min-h-[calc(100svh-7.5rem)] flex-col justify-end overflow-hidden bg-navy-deep text-white">
      <Image src={IMAGES.hero.src} alt={IMAGES.hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />

      <Container className="pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pb-24">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Trusted Contracting &amp; Service Solutions in Qatar</p>
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
          Building Excellence. <span className="block">Delivering Reliable Solutions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
          Professional manpower supply, building painting, hospitality, and construction contracting services in Qatar.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/services" className={buttonVariants({ variant: "gold", size: "lg" })}>Explore Our Services</Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>Contact Us</Link>
        </div>
      </Container>

      <div className="border-t border-white/20 bg-navy-deep/85">
        <Container className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.14em]">{COMPANY.name}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
            License No. <span className="ms-1 text-xl font-semibold tracking-wider text-gold">{COMPANY.licenseNo}</span>
          </p>
        </Container>
      </div>
    </section>
  );
}
