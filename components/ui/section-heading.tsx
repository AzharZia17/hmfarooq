import { cn } from "@/lib/utils";

/** Wrap a word in *asterisks* to render it as a gold italic accent. */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") ? <em key={i} className="italic text-gold-dark">{part.slice(1, -1)}</em> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

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
      {eyebrow && (
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag className={cn("font-display text-balance text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl", dark ? "text-white" : "text-navy", dark && "[&_em]:text-gold")}>
        <Accent text={title} />
      </Tag>
      {description && <p className={cn("mt-6 text-pretty text-lg leading-relaxed", dark ? "text-white/75" : "text-charcoal/70")}>{description}</p>}
    </div>
  );
}
