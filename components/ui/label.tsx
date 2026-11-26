"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root className={cn("label mb-1 block text-slate in-data-[tone=dark]:text-white/65", className)} {...props} />;
}
