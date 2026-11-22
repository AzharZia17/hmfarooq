"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { inquirySchema, SERVICE_OPTIONS, type InquiryInput } from "@/lib/validation";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { cn } from "@/lib/utils";

type Status = "idle" | "success" | "error";

const field =
  "block w-full min-h-12 border bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

function Field({ label, error, required, children, id }: { label: string; error?: string; required?: boolean; children: React.ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required ? <span className="text-gold" aria-hidden>*</span> : <span className="font-normal text-charcoal/50">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0" aria-hidden /> {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
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
      <div role="status" className="border border-navy/15 border-s-4 border-s-gold bg-white p-8">
        <CheckCircle2 className="mb-4 size-10 text-gold-dark" aria-hidden />
        <h3 className="text-2xl font-semibold text-navy">Thank you — inquiry received</h3>
        <p className="mt-3 text-charcoal/75">Our team will review your requirement and contact you on the phone number you provided.</p>
        <button type="button" onClick={() => setStatus("idle")} className={cn(buttonVariants({ variant: "outline-dark" }), "mt-6")}>
          Send another inquiry
        </button>
      </div>
    );
  }

  const v = getValues();
  const waText = `Hello HM Farooq Constructing Company, I would like to inquire about ${v.service ?? "your services"}.${v.fullName ? ` My name is ${v.fullName}.` : ""}${v.message ? `\n\n${v.message}` : ""}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 border border-navy/15 bg-white p-5 sm:p-8" aria-label="Inquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName?.message}>
          <input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={cn(field, errors.fullName ? "border-red-600" : "border-navy/20")} {...register("fullName")} />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone?.message}>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+974 …" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} className={cn(field, errors.phone ? "border-red-600" : "border-navy/20")} {...register("phone")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email Address" error={errors.email?.message}>
          <input id="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={cn(field, errors.email ? "border-red-600" : "border-navy/20")} {...register("email")} />
        </Field>
        <Field id="service" label="Service Required" required error={errors.service?.message}>
          <select id="service" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} className={cn(field, errors.service ? "border-red-600" : "border-navy/20")} {...register("service")}>
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="message" label="Message" required error={errors.message?.message}>
        <textarea id="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={cn(field, "resize-y", errors.message ? "border-red-600" : "border-navy/20")} {...register("message")} />
      </Field>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>Leave empty<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>

      {status === "error" && (
        <div role="alert" className="border-s-4 border-red-600 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-bold">{errorMsg}</p>
          <p className="mt-1">You can reach us right away instead:</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <WhatsAppButton size="sm" label="Send via WhatsApp" message={waText} />
            <a href={`tel:${"+97450857073"}`} className={buttonVariants({ variant: "navy", size: "sm" })}>Call +974 50857073</a>
          </div>
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className={buttonVariants({ variant: "navy", size: "lg", full: true })}>
        {isSubmitting ? <Loader2 className="animate-spin" aria-hidden /> : <Send className="flip-rtl" aria-hidden />}
        {isSubmitting ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
