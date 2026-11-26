import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only z-[100] bg-gold px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div aria-hidden className="progress-bar pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-gold" />
      <SiteHeader />
      <main id="main" className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
