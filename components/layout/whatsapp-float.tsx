import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { whatsappLink } from "@/lib/constants";

/** Single floating WhatsApp shortcut, kept small so it never competes with page content. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HM Farooq Constructing Company on WhatsApp (opens in a new tab)"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 grid size-[3.25rem] place-items-center rounded-full bg-[#25D366] text-white shadow-md shadow-black/20 transition-colors hover:bg-ember hover:text-white md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
