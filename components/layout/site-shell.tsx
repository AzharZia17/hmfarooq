import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="top" />
      <a href="#main" className="sr-only z-[100] bg-gold px-4 py-3 font-bold text-navy-deep focus:not-sr-only focus:fixed focus:start-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <MobileTabBar />
      <WhatsAppFloat />
    </>
  );
}
