import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

/**
 * Inquiry endpoint. Validates server-side, then forwards to CONTACT_WEBHOOK_URL.
 * Point that variable at any service that accepts a JSON POST (Formspree, Make/Zapier,
 * Resend/SendGrid relay, your own backend…). Until it is set the endpoint answers 503 and
 * the form offers WhatsApp / phone as the working alternative — nothing is faked.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please check the form fields.", issues: parsed.error.flatten().fieldErrors }, { status: 422 });
  }
  // Honeypot tripped: pretend success, drop silently.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "Online submission is not enabled yet." }, { status: 503 });
  }

  try {
    const { website: _ignored, ...payload } = parsed.data;
    void _ignored;
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, source: "hmfarooq-website", receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json({ ok: false, error: "We could not deliver your inquiry." }, { status: 502 });
  }
}
