"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en" | "ar";

/**
 * Arabic strings below cover navigation and primary actions ONLY and are a starting point.
 * They MUST be reviewed by a native Arabic speaker before launch. Any key missing from `ar`
 * falls back to English, so body content stays in English until professionally translated.
 */
const en = {
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.services": "Services",
  "nav.projects": "Projects",
  "nav.why": "Why Choose Us",
  "nav.contact": "Contact",
  "cta.quote": "Request a Quote",
  "cta.call": "Call",
  "cta.whatsapp": "WhatsApp",
  "license": "License No.",
} as const;

export type DictKey = keyof typeof en;

const ar: Partial<Record<DictKey, string>> = {
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "خدماتنا",
  "nav.projects": "مشاريعنا",
  "nav.why": "لماذا نحن",
  "nav.contact": "اتصل بنا",
  "cta.quote": "اطلب عرض سعر",
  "cta.call": "اتصل",
  "cta.whatsapp": "واتساب",
  "license": "رقم الرخصة",
};

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: DictKey) => string };
const I18nContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "hmf-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "ar" || saved === "en") setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: (k) => (locale === "ar" ? ar[k] ?? en[k] : en[k]) }),
    [locale, setLocale],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
