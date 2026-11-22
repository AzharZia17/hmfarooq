import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** compact: header strip · block: standalone credential on light bg · footer: on dark */
export function LicenseBadge({ variant = "compact", className }: { variant?: "compact" | "block" | "footer"; className?: string }) {
  if (variant === "compact") {
    return (
      <span className={cn("text-xs font-semibold uppercase tracking-[0.14em] text-gold", className)}>
        License No. {COMPANY.licenseNo}
      </span>
    );
  }
  if (variant === "footer") {
    return (
      <p className={cn("border border-gold/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white", className)}>
        Company License No. <span className="ms-1 text-base font-bold tracking-wider text-gold">{COMPANY.licenseNo}</span>
      </p>
    );
  }
  return (
    <div className={cn("border border-navy/15 border-s-4 border-s-gold bg-white px-6 py-5", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">License No.</p>
      <p className="mt-1 text-4xl font-semibold tracking-wide text-navy">{COMPANY.licenseNo}</p>
      <p className="mt-1 text-sm text-charcoal/60">{COMPANY.name} · {COMPANY.country}</p>
    </div>
  );
}
