import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { LicenseBadge } from "@/components/ui/license-badge";
import { buttonVariants } from "@/components/ui/button";

/** Short identity statement for the home page; the full story is on /about. */
export function AboutTeaser() {
  return (
    <Section tone="dark" className="py-0 lg:py-0">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-[34rem]">
          <Image src="/images/workers-masonry.jpg" alt="Workers in safety helmets and high-visibility vests on a site in Qatar" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <Container className="flex flex-col justify-center py-16 lg:max-w-none lg:px-16 lg:py-24 xl:px-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Company</p>
          <h2 className="max-w-lg text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">A Qatar-based contractor you can verify and reach directly.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            We supply manpower, paint buildings, support hospitality operations and carry out construction contracts. Our license number is public, our phones are answered by the team and our work is described plainly.
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <LicenseBadge variant="footer" />
            <Link href="/about" className={buttonVariants({ variant: "outline" })}>Read our story</Link>
          </div>
        </Container>
      </div>
    </Section>
  );
}
