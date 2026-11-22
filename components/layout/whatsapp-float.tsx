import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { whatsappLink } from "@/lib/constants";

/** Floating WhatsApp button, visible on every page and screen size. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HM Farooq Constructing Company on WhatsApp (opens in a new tab)"
      className="group fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] end-4 z-40 flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#1ebe5b] md:bottom-6 md:end-6 md:hover:gap-3 md:hover:pe-5"
    >
      <WhatsAppIcon className="size-8 shrink-0 md:size-9" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 md:group-hover:max-w-40 md:group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
