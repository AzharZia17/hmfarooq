import { cn } from "@/lib/utils";

/** Drawing-sheet style section marker: "01 ── The company". */
export function Eyebrow({ n, children, dark, className }: { n?: string; children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn("label flex items-center gap-3", dark ? "text-gold" : "text-gold-deep", className)}>
      {n && <span>{n}</span>}
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}
