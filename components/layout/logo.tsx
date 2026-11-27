import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Transparent logo with two colourways: `dark` (navy lettering turned white) for use over dark
 * grounds, `light` (original colours) for light grounds such as the scrolled header.
 */
export function Logo({ tone = "dark", className, imgClassName, priority }: { tone?: "dark" | "light"; className?: string; imgClassName?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="HM Farooq Constructing Company, home" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={tone === "dark" ? "/logo-hm-dark.png" : "/logo-hm-light.png"}
        alt="HM Farooq Constructing Company"
        width={700}
        height={305}
        priority={priority}
        sizes="200px"
        className={cn("aspect-[700/305] h-12 w-auto max-w-none object-contain sm:h-14", imgClassName)}
      />
    </Link>
  );
}
