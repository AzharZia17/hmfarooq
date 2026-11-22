import { Plus } from "lucide-react";

/** Native <details> accordion: accessible, keyboard friendly, zero JS. */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy/15 border-y border-navy/15">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-start text-base font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden sm:text-lg">
            {item.q}
            <Plus className="size-5 shrink-0 text-gold-dark transition-transform group-open:rotate-45" aria-hidden />
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-charcoal/70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
