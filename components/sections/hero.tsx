import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY, telLink } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-7.5rem)] flex-col justify-end overflow-hidden bg-navy-deep text-white">
      <Image src={IMAGES.hero.src} alt={IMAGES.hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />

      <Container className="pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pb-24">
        <p className="rise mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          <span className="h-px w-10 bg-gold" aria-hidden />
          Trusted Contracting &amp; Service Solutions in Qatar
        </p>
        <h1 className="rise rise-2 max-w-5xl text-balance font-display text-[3.1rem] font-normal leading-[1] tracking-tight sm:text-7xl lg:text-[6.5rem]">
          Building <em className="italic text-gold">Excellence.</em>
          <span className="block">Delivering Reliable Solutions.</span>
        </h1>
        <p className="rise rise-3 mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
          Professional manpower supply, building painting, hospitality, and construction contracting services in Qatar.
        </p>
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/services" className={buttonVariants({ variant: "gold", size: "lg" })}>
            Explore Our Services <ArrowRight className="flip-rtl" aria-hidden />
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>Contact Us</Link>
        </div>
      </Container>

      {/* Credential strip */}
      <div className="border-t border-white/20 bg-navy-deep/80 backdrop-blur-sm">
        <Container className="grid items-stretch sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:divide-x sm:divide-white/15 rtl:sm:divide-x-reverse">
          <div className="py-5 sm:pe-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/60">Company</p>
            <p className="mt-1 text-sm font-semibold tracking-[0.1em]">{COMPANY.name}</p>
          </div>
          <div className="border-t border-white/15 py-5 sm:border-t-0 sm:px-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/60">License No.</p>
            <p className="mt-0.5 font-display text-4xl leading-none text-gold">{COMPANY.licenseNo}</p>
          </div>
          <div className="hidden py-5 sm:block sm:px-8" dir="ltr">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/60">Call us</p>
            {COMPANY.phones.map((p) => (
              <a key={p.tel} href={telLink(p.tel)} className="block text-sm font-semibold leading-relaxed transition-colors hover:text-gold">{p.display}</a>
            ))}
          </div>
          <a href="#services" aria-label="Scroll to services" className="group hidden items-center justify-center ps-8 sm:flex">
            <span className="grid size-12 place-items-center rounded-full border border-white/40 transition-colors group-hover:border-gold group-hover:text-gold">
              <ArrowDown className="size-5 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </span>
          </a>
        </Container>
      </div>
    </section>
  );
}
