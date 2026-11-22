import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
        <li><Link href="/" className="hover:text-gold">Home</Link></li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 flip-rtl" aria-hidden />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-gold">{item.label}</Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
