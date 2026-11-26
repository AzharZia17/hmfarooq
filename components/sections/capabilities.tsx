import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  {
    n: "A", title: "Structure and lifting", href: "/services/construction", cta: "Construction contracts",
    text: "Frames, concrete, steel and the lifting that keeps a build moving. Works are carried out to a defined scope and schedule, with equipment and operators arranged alongside.",
    items: ["Construction contracts", "Lifting equipment and operators", "Lifting activities"],
    img: { src: "/images/construction-steel-structure.jpg", alt: "Workers and an access platform inside a steel-frame building" }, pos: "50% 45%",
  },
  {
    n: "B", title: "Finishing and building services", href: "/services/painting", cta: "Building painting",
    text: "The surfaces and systems people actually live and work with: painting inside and out, gypsum and ceilings, air conditioning and plumbing, each prepared properly before the finish goes on.",
    items: ["Building painting", "Gypsum and ceiling work", "AC workers and plumbing"],
    img: { src: "/images/painting-facade-rope.jpg", alt: "Painters working down a hotel facade on ropes" }, pos: "50% 40%",
  },
  {
    n: "C", title: "People and movement", href: "/services/manpower", cta: "Manpower and labor supply",
    text: "A site only runs as well as its people and deliveries. We supply workforce, hospitality teams and the transport that gets people, materials and equipment where they are needed.",
    items: ["Manpower and labor supply", "Hospitality services", "Transportation and logistics"],
    img: { src: "/images/workers-groundwork.jpg", alt: "Workers in safety gear laying groundwork beside cranes" }, pos: "50% 50%",
  },
];

/** Three chapters of capability as large alternating photographic panels with an offset text plate. */
export function Capabilities() {
  return (
    <Section tone="white">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow n="03" className="reveal">Capabilities</Eyebrow>
          <h2 className="display reveal mt-7 text-[clamp(2rem,4.6vw,3.9rem)]">What the work looks like, from first structure to final coat.</h2>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28 lg:mt-24 lg:space-y-36">
          {CHAPTERS.map((c, i) => (
            <article key={c.n} className="relative">
              <div className={cn("reveal-clip relative aspect-[4/3] overflow-hidden bg-line sm:aspect-[16/9] lg:aspect-[2/1] lg:w-[78%]", i % 2 === 1 && "lg:ms-auto")}>
                <Image src={c.img.src} alt={c.img.alt} fill sizes="(min-width:1024px) 62vw, 100vw" className="parallax object-cover" style={{ objectPosition: c.pos }} />
              </div>
              <div className={cn("reveal relative z-10 -mt-12 w-[calc(100%-2rem)] bg-ink p-7 text-white sm:-mt-20 sm:w-[28rem] sm:p-9 lg:absolute lg:bottom-[-3rem] lg:mt-0", i % 2 === 0 ? "ms-auto lg:end-0" : "me-auto lg:start-0")}>
                <p className="label text-gold">Chapter {c.n}</p>
                <h3 className="display mt-3 text-2xl sm:text-[1.9rem]">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{c.text}</p>
                <ul className="mt-5 border-t border-white/15 text-sm">
                  {c.items.map((x) => <li key={x} className="flex items-center gap-3 border-b border-white/10 py-2.5 text-white/85"><span className="size-1 bg-gold" aria-hidden />{x}</li>)}
                </ul>
                <Link href={c.href} className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold">
                  <span className="u-link pb-0.5">{c.cta}</span><ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="label mt-20 lg:mt-28 text-slate"><Link href="/credits" className="underline underline-offset-4 hover:text-ember">Image credits</Link></p>
      </Container>
    </Section>
  );
}
