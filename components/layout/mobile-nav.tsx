"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { LicenseBadge } from "@/components/ui/license-badge";
import { CallButton } from "@/components/contact/call-button";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export function MobileNav({ activeHref }: { activeHref: string }) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const close = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open menu"
        className="grid size-11 place-items-center border border-navy/20 text-navy transition-colors hover:border-navy lg:hidden"
      >
        <Menu className="size-6" aria-hidden />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fade-in fixed inset-0 z-[60] bg-black/60 lg:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          className="drawer-in fixed inset-y-0 end-0 z-[70] flex w-[min(88vw,24rem)] flex-col overflow-y-auto bg-white text-charcoal focus:outline-none lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-navy/10 p-4">
            <Logo imgClassName="h-11" />
            <Dialog.Close aria-label="Close menu" className="grid size-11 place-items-center border border-navy/20 text-navy hover:border-navy">
              <X className="size-6" aria-hidden />
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <nav aria-label="Mobile" className="flex-1 p-4">
            <ul>
              {NAV_LINKS.map((l) => {
                const active = activeHref === l.href;
                return (
                  <li key={l.key} className="border-b border-navy/10">
                    <Link
                      href={l.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-14 items-center justify-between text-lg font-semibold ${active ? "text-gold-dark" : "text-navy"}`}
                    >
                      {t(`nav.${l.key}` as never)}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact" onClick={close} className={`${buttonVariants({ variant: "gold", full: true, size: "lg" })} mt-6`}>
              {t("cta.quote")}
            </Link>
          </nav>
          <div className="space-y-3 border-t border-navy/10 bg-paper p-4">
            <LicenseBadge variant="block" className="w-full py-4" />
            <CallButton index={0} variant="outline-dark" full />
            <CallButton index={1} variant="outline-dark" full />
            <WhatsAppButton full />
            <div className="flex items-center justify-between pt-2 text-sm text-charcoal/60">
              <span>{COMPANY.country}</span>
              <LanguageSwitcher className="text-navy" />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
