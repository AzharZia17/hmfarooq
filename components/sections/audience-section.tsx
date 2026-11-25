import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { Frame } from "@/components/ui/frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { AUDIENCES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function AudienceSection() {
  return (
    <Section>
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Who We Work With" title="Built around the people who *commission* the work." />
          <dl className="mt-10 border-t border-navy/15">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="grid gap-1 border-b border-navy/15 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="font-display text-2xl text-navy">{a.title}</dt>
                <dd className="text-charcoal/70">{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-6 lg:ps-6">
          <Frame className="aspect-[4/3] lg:aspect-[5/6]">
            <Image src={IMAGES.towers.src} alt={IMAGES.towers.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Frame>
        </div>
      </Container>
    </Section>
  );
}
