import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Img } from "@/lib/images";

type Crumb = { label: string; href?: string };

/** Inner-page opener: dark sheet, large title, and a wide cinematic crop that wipes in. */
export function PageHeader({
  title, kicker, description, crumbs, image, position = "50% 50%",
}: {
  title: string; kicker?: string; description?: string; crumbs: Crumb[]; image?: Img; position?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-ink text-white">
      <Container className="relative z-10 pb-12 pt-32 sm:pt-40 lg:pb-16 lg:pt-48">
        <nav aria-label="Breadcrumb" className="fade-in label mb-8 text-white/55">
          <ol className="flex flex-wrap items-center gap-x-3">
            <li><Link href="/" className="hover:text-ember">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-3">
                <span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="hover:text-ember">{c.label}</Link> : <span aria-current={i === crumbs.length - 1 ? "page" : undefined} className="text-gold">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="display text-[clamp(2.4rem,6.2vw,5.25rem)] text-ember lg:col-span-8">
            <span className="mask-line"><span>{title}</span></span>
          </h1>
          {(description || kicker) && (
            <p className="fade-up prose-lead max-w-md text-white/70 lg:col-span-4 lg:pb-2" style={{ "--d": "0.5s" } as React.CSSProperties}>{description ?? kicker}</p>
          )}
        </div>
      </Container>
      {image && (
        <div className="relative mx-auto mt-2 aspect-[16/9] w-full max-w-[1320px] sm:aspect-[21/8] lg:px-12">
          <div className="hero-wipe absolute inset-x-0 inset-y-0 overflow-hidden lg:inset-x-12" style={{ "--d": "0.25s" } as React.CSSProperties}>
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width:1320px) 1224px, 100vw" className="hero-settle object-cover" style={{ objectPosition: position }} />
          </div>
        </div>
      )}
      <div aria-hidden className="h-12 bg-gradient-to-b from-ink to-ink lg:h-16" />
    </header>
  );
}
