import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{eyebrow}</p>}
      <Tag className={cn("text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]", dark ? "text-white" : "text-navy")}>{title}</Tag>
      <div className="mt-6 h-0.5 w-12 bg-gold" aria-hidden />
      {description && <p className={cn("mt-6 text-pretty text-lg leading-relaxed", dark ? "text-white/75" : "text-charcoal/70")}>{description}</p>}
    </div>
  );
}
