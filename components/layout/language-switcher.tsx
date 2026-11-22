"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className, dark = false }: { className?: string; dark?: boolean }) {
  const { locale, setLocale } = useI18n();
  const item = (l: "en" | "ar", label: string) => (
    <button
      type="button"
      lang={l}
      onClick={() => setLocale(l)}
      aria-pressed={locale === l}
      className={cn("min-h-9 min-w-9 px-2 text-xs font-semibold transition-colors", locale === l ? "text-gold-dark" : dark ? "text-white/60 hover:text-white" : "text-charcoal/50 hover:text-navy", dark && locale === l && "text-gold")}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label="Language" className={cn("inline-flex items-center", className)}>
      {item("en", "EN")}
      <span aria-hidden className="h-3 w-px bg-current opacity-30" />
      {item("ar", "AR")}
    </div>
  );
}
