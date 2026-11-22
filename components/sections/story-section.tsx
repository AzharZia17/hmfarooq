import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LicenseBadge } from "@/components/ui/license-badge";
import { IMAGES } from "@/lib/images";

export function StorySection() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Who We Are" title="One company, four ways to get a job done." />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-charcoal/80 lg:col-span-7">
          <p>
            HM Farooq Constructing Company is a Qatar-based service and contracting company offering manpower supply, building painting, hospitality support, and construction contracting services. We focus on providing dependable solutions, professional service, quality workmanship, and efficient project execution to meet our clients&apos; requirements.
          </p>
          <p>
            The four services are not an accident. Construction, painting, workforce and hospitality needs often arrive together: a renovation needs builders and painters, a hotel opening needs people, a project needs labor. Working with one company means one conversation, one standard and one team to hold accountable.
          </p>
          <LicenseBadge variant="block" className="mt-4 max-w-md" />
        </div>
        <div className="relative aspect-[21/9] overflow-hidden bg-mist lg:col-span-12">
          <Image src={IMAGES.pageHeader.src} alt={IMAGES.pageHeader.alt} fill sizes="100vw" className="object-cover" />
        </div>
      </Container>
    </Section>
  );
}
