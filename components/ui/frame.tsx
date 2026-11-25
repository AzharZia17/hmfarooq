import { cn } from "@/lib/utils";

/** Photo wrapper with gold crop marks. Put the <Image fill /> inside. */
export function Frame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="crop-marks">
      <div className={cn("relative overflow-hidden bg-mist", className)}>{children}</div>
    </div>
  );
}
