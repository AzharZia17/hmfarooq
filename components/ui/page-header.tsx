import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
    <header className="relative isolate overflow-hidden bg-navy-deep py-16 text-white sm:py-24">
      <Image src={image.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/80" />
      <Container>
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{description}</p>}
      </Container>
    </header>
  );
}
