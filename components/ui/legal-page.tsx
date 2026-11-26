import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/container";

export function LegalPage({ title, crumb, children }: { title: string; crumb: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ label: crumb }]} />
      <Section tone="paper" className="pt-8 sm:pt-12">
        <Container className="max-w-3xl space-y-5 leading-relaxed text-ink/80 [&_h2]:display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink">
          {children}
        </Container>
      </Section>
    </>
  );
}
