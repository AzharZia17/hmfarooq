import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Square-cornered buttons with a tactile fill sweep on hover.
 * `gold` for the one primary action per view, `light`/`dark` outlines for secondary actions.
 */
export const buttonVariants = cva(
  "group/btn relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap px-6 text-sm font-semibold tracking-wide transition-colors duration-500 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] hover:before:translate-y-0 focus-visible:before:translate-y-0 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500 hover:[&_svg.nudge]:translate-x-1",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink before:bg-ember hover:text-white focus-visible:text-white",
        ember: "bg-ember text-white before:hidden hover:bg-[#a84a1d] focus-visible:bg-[#a84a1d]",
        cream: "bg-tint text-ink before:bg-ink hover:text-white focus-visible:text-white",
        black: "border border-white/25 bg-ink text-white before:hidden hover:border-white hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink",
        ink: "bg-ink text-white before:bg-ember hover:text-white",
        light: "border border-white/35 text-white before:bg-ember hover:border-ember",
        dark: "border border-ink/30 text-ink before:bg-ember hover:border-ember hover:text-white focus-visible:text-white",
        whatsapp: "bg-[#25D366] text-ink before:bg-ember hover:text-white focus-visible:text-white",
      },
      size: { default: "", sm: "min-h-10 px-4 text-xs", lg: "min-h-14 px-8 text-[0.95rem]" },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "gold", size: "default", full: false },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  className, variant, size, full, asChild = false, ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, full }), className)} {...props} />;
}
