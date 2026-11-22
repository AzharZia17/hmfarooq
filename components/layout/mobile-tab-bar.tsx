"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Images, LayoutGrid, Mail, type LucideIcon } from "lucide-react";
import { useI18n, type DictKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TABS: { href: string; key: DictKey; icon: LucideIcon }[] = [
  { href: "/", key: "nav.home", icon: Home },
  { href: "/services", key: "nav.services", icon: LayoutGrid },
  { href: "/projects", key: "nav.projects", icon: Images },
  { href: "/contact", key: "nav.contact", icon: Mail },
];

/** Floating pill tab bar for phones (hidden from md up). */
export function MobileTabBar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 md:hidden"
    >
      <ul className="flex items-center justify-between rounded-full border border-white/10 bg-navy-deep/95 px-2 py-1.5 backdrop-blur-md">
        {TABS.map(({ href, key, icon: Icon }) => {
          const active = isActive(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex size-[3.75rem] flex-col items-center justify-center gap-1 rounded-full text-[0.65rem] font-semibold transition-colors duration-200 active:scale-95",
                  active ? "bg-white/10 text-gold" : "text-white/60 hover:text-white",
                )}
              >
                <Icon className={cn("size-[1.35rem] transition-transform duration-200", active && "scale-110")} strokeWidth={active ? 2.25 : 1.75} aria-hidden />
                <span>{t(key)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
