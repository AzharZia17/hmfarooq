import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap px-7 text-sm font-semibold tracking-wide transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-gold text-navy-deep hover:bg-gold-dark hover:text-white",
        navy: "bg-navy text-white hover:bg-navy-deep",
        outline: "border border-white text-white hover:bg-white hover:text-navy",
        "outline-dark": "border border-navy text-navy hover:bg-navy hover:text-white",
        whatsapp: "bg-[#128c4a] text-white hover:bg-[#0f7a40]",
      },
      size: { default: "", sm: "min-h-10 px-5 text-xs", lg: "min-h-14 px-9 text-[0.95rem]" },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "gold", size: "default", full: false },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
