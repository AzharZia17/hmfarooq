import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)} {...props} />;
}

export function Section({
  className,
  tone = "white",
  ...props
}: React.ComponentProps<"section"> & { tone?: "white" | "paper" | "dark" }) {
  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        tone === "white" && "bg-white text-charcoal",
        tone === "paper" && "bg-paper text-charcoal",
        tone === "dark" && "bg-navy text-white",
        className,
      )}
      {...props}
    />
  );
}
