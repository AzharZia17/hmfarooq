import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)} {...props} />;
}

type Tone = "paper" | "white" | "ink" | "navy";
const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  white: "bg-tint text-ink",
  ink: "bg-ink text-white",
  navy: "bg-navy text-white",
};

/** One vertical rhythm for the whole site: 80 / 112 / 144 px. */
export function Section({ className, tone = "paper", ...props }: React.ComponentProps<"section"> & { tone?: Tone }) {
  return <section className={cn("diag relative py-20 sm:py-28 lg:py-36", tones[tone], className)} {...props} />;
}
