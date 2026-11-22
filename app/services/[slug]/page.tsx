import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { LicenseBadge } from "@/components/ui/license-badge";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { CallButton } from "@/components/contact/call-button";
import { ContactSection } from "@/components/sections/contact-section";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.seoTitle, description: s.seoDescription, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHeader title={s.title} description={s.tagline} image={s.image} crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]} />
      <Section>
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-charcoal/80">
              {s.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <h2 className="mt-14 text-2xl font-semibold tracking-tight text-navy">What this includes</h2>
            <dl className="mt-6 border-t border-navy/15">
              {s.offerings.map((o) => (
                <div key={o.name} className="grid gap-1 border-b border-navy/15 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-navy">{o.name}</dt>
                  <dd className="text-charcoal/70">{o.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="space-y-10 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <WhatsAppButton label="Request via WhatsApp" message={s.whatsappMessage} full />
              <CallButton index={0} variant="navy" full />
              <CallButton index={1} variant="outline-dark" full />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Best suited for</h3>
              <ul className="mt-3 border-t border-navy/15">
                {s.suitedFor.map((x) => <li key={x} className="border-b border-navy/15 py-3 font-medium text-navy">{x}</li>)}
              </ul>
            </div>
            <LicenseBadge variant="block" />
          </aside>
        </Container>
      </Section>

      <Section tone="paper" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">In practice</h2>
          <div className={`mt-6 grid gap-4 ${s.supportingImages.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {s.supportingImages.map((img) => (
              <div key={img.src} className="relative aspect-[16/10] overflow-hidden bg-mist">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-charcoal/60">Illustrative photographs. <Link href="/credits" className="underline underline-offset-2 hover:text-navy">Image credits</Link>. Other services: {SERVICES.filter((x) => x.slug !== s.slug).map((x, i, a) => (
            <span key={x.slug}><Link href={`/services/${x.slug}`} className="underline underline-offset-2 hover:text-navy">{x.title}</Link>{i < a.length - 1 ? ", " : "."}</span>
          ))}</p>
        </Container>
      </Section>

      <ContactSection defaultService={s.formValue} heading={`Request ${s.title.toLowerCase()}.`} description="Send us the basics below and we will come back to you, or call and talk it through." brief={s.toBrief} />
    </>
  );
}
