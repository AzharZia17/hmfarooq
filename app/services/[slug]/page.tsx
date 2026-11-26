import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { CallButton } from "@/components/contact/call-button";
import { ContactForm } from "@/components/contact/contact-form";
import { COMPANY } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle, description: s.seoDescription, alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.seoDescription, url: `/services/${s.slug}`, images: s.image ? [{ url: s.image.src, alt: s.image.alt }] : undefined },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const idx = SERVICES.findIndex((x) => x.slug === s.slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <PageHeader title={s.title} description={s.tagline} image={s.image} crumbs={[{ label: "Services", href: "/services" }, { label: s.short }]} />

      <Section tone="paper" className="pt-8 sm:pt-12">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Eyebrow n={s.number}>{s.group}</Eyebrow>
            <div className="prose-lead mt-8 space-y-6 text-slate [&>p:first-child]:text-xl [&>p:first-child]:text-ink sm:[&>p:first-child]:text-2xl">
              {s.intro.map((p) => <p key={p}>{p}</p>)}
            </div>

            <h2 className="display mt-16 text-3xl sm:text-4xl">What this includes</h2>
            <dl className="mt-8 border-t border-ink">
              {s.offerings.map((o, i) => (
                <div key={o.name} className="reveal grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-[3rem_14rem_1fr] sm:gap-6">
                  <dt className="label hidden pt-1 text-gold-deep sm:block">{String(i + 1).padStart(2, "0")}</dt>
                  <dt className="display text-lg">{o.name}</dt>
                  <dd className="text-slate">{o.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="space-y-10 lg:col-span-5">
            <div className="lg:sticky lg:top-28 lg:space-y-10">
              <div className="space-y-3">
                <WhatsAppButton label="Request via WhatsApp" message={s.whatsappMessage} full size="lg" />
                <div className="grid gap-3 sm:grid-cols-2" dir="ltr">
                  <CallButton index={0} variant="dark" full size="sm" label={COMPANY.phones[0].display} />
                  <CallButton index={1} variant="dark" full size="sm" label={COMPANY.phones[1].display} />
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <p className="label text-gold-deep">Best suited for</p>
                <ul className="mt-3 border-t border-ink/15">
                  {s.suitedFor.map((x) => <li key={x} className="border-b border-ink/15 py-3 font-medium">{x}</li>)}
                </ul>
              </div>
              <div className="mt-10 border border-ink/15 bg-tint p-6 lg:mt-0">
                <p className="label text-gold-deep">To get a useful reply, tell us</p>
                <ul className="mt-4 space-y-2.5 text-sm text-slate">
                  {s.toBrief.map((c) => <li key={c} className="flex gap-3"><span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden />{c}</li>)}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      {s.supportingImages.length > 0 && (
        <Section tone="white" className="py-16 sm:py-20 lg:py-24">
          <Container>
            <p className="label text-gold-deep">In practice</p>
            <div className={`mt-6 grid gap-4 ${s.supportingImages.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {s.supportingImages.map((img) => (
                <div key={img.src} className="reveal-clip relative aspect-[16/10] overflow-hidden bg-line">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width:640px) 50vw, 100vw" className="parallax object-cover" />
                </div>
              ))}
            </div>
            <p className="label mt-4 text-slate"><Link href="/credits" className="underline underline-offset-4 hover:text-ember">Image credits</Link></p>
          </Container>
        </Section>
      )}

      <Section tone="ink" id="enquiry">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Eyebrow dark n="Enquiry">{s.short}</Eyebrow>
            <h2 className="display mt-7 text-[clamp(1.9rem,3.6vw,3rem)]">Request {s.short.toLowerCase()}.</h2>
            <p className="mt-5 text-white/65">Send us the basics and we will come back to you, or call and talk it through.</p>
          </div>
          <div className="lg:col-span-8"><ContactForm defaultService={s.formValue} tone="dark" /></div>
        </Container>
      </Section>

      <nav aria-label="More services" className="grid border-t border-ink/10 sm:grid-cols-2">
        <Link href={`/services/${prev.slug}`} className="group flex min-h-32 flex-col justify-center gap-2 border-b border-ink/10 bg-paper px-6 transition-colors hover:bg-tint hover:text-ember sm:border-b-0 sm:border-e sm:px-12">
          <span className="label flex items-center gap-2 text-slate"><ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" aria-hidden />Previous</span>
          <span className="display text-2xl">{prev.short}</span>
        </Link>
        <Link href={`/services/${next.slug}`} className="group flex min-h-32 flex-col items-end justify-center gap-2 bg-paper px-6 text-end transition-colors hover:bg-tint hover:text-ember sm:px-12">
          <span className="label flex items-center gap-2 text-slate">Next<ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden /></span>
          <span className="display text-2xl">{next.short}</span>
        </Link>
      </nav>
    </>
  );
}
