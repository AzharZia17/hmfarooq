"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-ink/15", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn("group flex min-h-16 flex-1 items-center justify-between gap-6 py-4 text-start", className)}
        {...props}
      >
        {children}
        <Plus className="size-5 shrink-0 text-gold-deep transition-transform group-data-[state=open]:rotate-45" aria-hidden />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content className="overflow-hidden" {...props}>
      <div className={cn("max-w-2xl pb-6 leading-relaxed text-slate", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
