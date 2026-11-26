import { SERVICES } from "@/lib/services";
import { ServicesExplorer } from "@/components/sections/services-explorer";

export function ServicesIndex() {
  return (
    <ServicesExplorer
      services={SERVICES.map((s) => ({
        slug: s.slug, number: s.number, short: s.short, group: s.group, tagline: s.tagline,
        description: s.description, offerings: s.offerings.map((o) => o.name), image: s.image,
      }))}
    />
  );
}
