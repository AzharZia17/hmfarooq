"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;

export function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex min-h-12 w-full items-center justify-between gap-2 rounded-none border-0 border-b border-ink/35 bg-transparent px-0 py-3 text-start text-base text-ink transition-colors focus:border-gold-deep focus:outline-none aria-[invalid=true]:border-red-600 data-[placeholder]:text-slate/60 in-data-[tone=dark]:border-white/35 in-data-[tone=dark]:text-white in-data-[tone=dark]:data-[placeholder]:text-white/40",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild><ChevronDown className="size-4 shrink-0 text-slate" aria-hidden /></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export const SelectValue = SelectPrimitive.Value;

export function SelectContent({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={4}
        className={cn("z-[100] max-h-72 w-[var(--radix-select-trigger-width)] overflow-y-auto border border-ink/15 bg-tint text-ink shadow-[0_12px_32px_-16px_rgba(13,24,20,0.35)]", className)}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn("relative flex min-h-11 cursor-pointer select-none items-center py-2 ps-3 pe-9 text-sm text-ink outline-none data-[highlighted]:bg-paper data-[highlighted]:text-ember", className)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute end-3"><Check className="size-4 text-gold-deep" aria-hidden /></SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
