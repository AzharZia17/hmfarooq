import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/container";

export function LegalPage({ title, crumb, children }: { title: string; crumb: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ label: crumb }]} />
      <Section tone="white">
        <Container className="max-w-3xl space-y-5 leading-relaxed text-charcoal/85 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy">
          {children}
        </Container>
      </Section>
    </>
  );
}
