import { cn } from "@/lib/utils";

/** Underlined fields in the drawing-sheet style. `in-data-[tone=dark]` lets a dark form parent restyle them. */
export const fieldBase =
  "block w-full min-h-12 rounded-none border-0 border-b border-ink/35 bg-transparent px-0 py-3 text-base text-ink placeholder:text-slate/60 transition-colors focus:border-gold-deep focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-600 in-data-[tone=dark]:border-white/35 in-data-[tone=dark]:text-white in-data-[tone=dark]:placeholder:text-white/40 in-data-[tone=dark]:focus:border-gold";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn(fieldBase, "resize-y", className)} {...props} />;
}
