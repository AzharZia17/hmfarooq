import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accent } from "@/components/ui/section-heading";
import { IMAGES, type Img } from "@/lib/images";

export function PageHeader({
  title,
  description,
  crumbs,
  image = IMAGES.pageHeader,
}: {
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
  image?: Img;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy-deep py-20 text-white sm:py-28 lg:py-32">
      <Image src={image.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/50" />
      <Container>
        <div className="rise"><Breadcrumbs items={crumbs} /></div>
        <h1 className="rise rise-2 max-w-4xl text-balance font-display text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl [&_em]:text-gold">
          <Accent text={title} />
        </h1>
        {description && <p className="rise rise-3 mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">{description}</p>}
        <div className="rise rise-4 mt-10 flex items-center gap-3" aria-hidden>
          <span className="h-px w-16 bg-gold" /><span className="size-1.5 bg-gold" />
        </div>
      </Container>
    </header>
  );
}
