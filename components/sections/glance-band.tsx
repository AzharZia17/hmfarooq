import { Container } from "@/components/ui/container";
import { COMPANY } from "@/lib/constants";

/** Only verifiable facts: no invented statistics. */
const FACTS = [
  { value: "4", label: "Core services", note: "Manpower, painting, hospitality, construction" },
  { value: COMPANY.licenseNo, label: "Business license no.", note: "Qatar" },
  { value: "2", label: "Direct phone lines", note: "Plus WhatsApp" },
  { value: "1", label: "Point of contact", note: "For every service you need" },
];

export function GlanceBand() {
  return (
    <section aria-label="At a glance" className="bg-navy text-white">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-[1fr_1.7fr_1fr_1fr] lg:divide-x lg:divide-white/15 rtl:lg:divide-x-reverse">
          {FACTS.map((f, i) => (
            <div key={f.label} className={`flex min-w-0 flex-col px-0 py-10 sm:py-14 lg:px-8 ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""} ${i % 2 === 0 ? "pe-4" : "ps-4 border-s border-white/15 lg:border-s-0"} lg:first:ps-0`}>
              <dd className="order-1 whitespace-nowrap font-display text-[clamp(2.5rem,4.6vw,4.75rem)] leading-none text-gold" dir="ltr">{f.value}</dd>
              <dt className="order-2 mt-4 text-sm font-semibold uppercase tracking-[0.16em]">{f.label}</dt>
              <dd className="order-3 mt-1 text-sm text-white/60">{f.note}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
