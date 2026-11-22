import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Logo is 1536x485 (≈3.17:1). shrink-0 + aspect-ratio keep it from being squeezed by flex layouts.
export function Logo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <Link href="/" aria-label="HM Farooq Constructing Company — home" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo.jpeg"
        alt="HM Farooq Constructing Company"
        width={1536}
        height={485}
        priority
        sizes="220px"
        className={cn("aspect-[1536/485] h-12 w-auto max-w-none shrink-0 object-contain mix-blend-multiply sm:h-14", imgClassName)}
      />
    </Link>
  );
}
