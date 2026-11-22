import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants, type ButtonVariants } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  variant = "whatsapp",
  size,
  full,
  className,
}: { message?: string; label?: string; className?: string } & Pick<ButtonVariants, "variant" | "size" | "full">) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size, full }), className)}
    >
      <WhatsAppIcon className="!size-5" />
      {label}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
