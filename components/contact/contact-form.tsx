"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { inquirySchema, SERVICE_OPTIONS, type InquiryInput } from "@/lib/validation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { cn } from "@/lib/utils";

type Status = "idle" | "success" | "error";

function Field({ label, error, required, children, id }: { label: string; error?: string; required?: boolean; children: React.ReactNode; id: string }) {
  return (
    <div>
      <Label htmlFor={id}>
        {label} {required ? <span className="text-gold" aria-hidden>*</span> : <span className="normal-case tracking-normal opacity-70">(optional)</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 in-data-[tone=dark]:text-red-300">
          <AlertCircle className="size-4 shrink-0" aria-hidden /> {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService, tone = "light" }: { defaultService?: string; tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { fullName: "", phone: "", email: "", service: (defaultService as InquiryInput["service"]) ?? undefined, message: "", website: "" },
  });

  async function onSubmit(values: InquiryInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      reset();
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" data-tone={tone} className="border border-gold/50 p-8">
        <CheckCircle2 className="mb-4 size-10 text-gold" aria-hidden />
        <h3 className="display text-2xl">Thank you, inquiry received</h3>
        <p className="mt-3 opacity-75">Our team will review your requirement and contact you on the phone number you provided.</p>
        <button type="button" onClick={() => setStatus("idle")} className={cn(buttonVariants({ variant: tone === "dark" ? "light" : "dark" }), "mt-6")}>
          Send another inquiry
        </button>
      </div>
    );
  }

  const v = getValues();
  const waText = `Hello HM Farooq Constructing Company, I would like to inquire about ${v.service ?? "your services"}.${v.fullName ? ` My name is ${v.fullName}.` : ""}${v.message ? `\n\n${v.message}` : ""}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate data-tone={tone} className="space-y-7" aria-label="Inquiry form">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone?.message}>
          <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+974 …" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />
        </Field>
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="email" label="Email Address" error={errors.email?.message}>
          <Input id="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
        </Field>
        <Field id="service" label="Service Required" required error={errors.service?.message}>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="service" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} onBlur={field.onBlur}>
                  <SelectValue placeholder="Select a service…" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>
      <Field id="message" label="Message" required error={errors.message?.message}>
        <Textarea id="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
      </Field>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>Leave empty<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>

      {status === "error" && (
        <div role="alert" className="border-s-2 border-red-600 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-bold">{errorMsg}</p>
          <p className="mt-1">You can reach us right away instead:</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <WhatsAppButton size="sm" label="Send via WhatsApp" message={waText} />
            <a href={`tel:${"+97450857073"}`} className={buttonVariants({ variant: "ink", size: "sm" })}>Call +974 50857073</a>
          </div>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} variant="ember" size="lg" full>
        {isSubmitting ? <Loader2 className="animate-spin" aria-hidden /> : <Send aria-hidden />}
        {isSubmitting ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
