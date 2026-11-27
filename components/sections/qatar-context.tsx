import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Second photographic moment: Lusail at full width, with the Qatar statement set on a dark plate. */
export function QatarContext() {
  return (
    <section className="diag relative isolate overflow-hidden bg-ink text-white" aria-labelledby="qatar-title">
      <div className="absolute inset-0 -z-20">
        <Image src="/images/lusail-city.jpg" alt="Modern towers in Lusail City, Qatar" fill sizes="100vw" className="parallax object-cover object-[50%_40%]" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-ink)_8%,rgb(23_19_16/0.72)_48%,rgb(23_19_16/0.1)_100%)] max-lg:bg-ink/75" />
      <Container className="py-28 sm:py-40 lg:py-52">
        <div className="max-w-xl">
          <Eyebrow n="05" dark className="reveal">Working in Qatar</Eyebrow>
          <h2 id="qatar-title" className="display reveal mt-7 text-[clamp(2rem,4.4vw,3.6rem)]">Planned around the conditions the work is done in.</h2>
          <p className="prose-lead reveal mt-7 text-white/75">Heat, humidity, dust, site access rules and tight programmes shape every job here. We take them into account when we plan crews, sequence the work and set dates, and we tell clients early what they mean for the schedule.</p>
          <p className="prose-lead reveal mt-4 text-white/75">We are registered and based in Qatar, and serve requirements within Qatar.</p>
        </div>
      </Container>
    </section>
  );
}
