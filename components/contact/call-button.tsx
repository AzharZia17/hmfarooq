import { Phone } from "lucide-react";
import { buttonVariants, type ButtonVariants } from "@/components/ui/button";
import { COMPANY, telLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CallButton({
  index = 0,
  label,
  variant = "light",
  size,
  full,
  className,
}: { index?: 0 | 1; label?: string; className?: string } & Pick<ButtonVariants, "variant" | "size" | "full">) {
  const phone = COMPANY.phones[index];
  return (
    <a href={telLink(phone.tel)} className={cn(buttonVariants({ variant, size, full }), className)}>
      <Phone aria-hidden />
      {label ?? `Call ${phone.display}`}
    </a>
  );
}
