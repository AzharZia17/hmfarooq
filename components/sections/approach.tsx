import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { COMMITMENTS, PROCESS_STEPS } from "@/lib/constants";

/** Sticky heading beside a vertical timeline that draws itself on scroll, then four plain commitments. */
export function Approach() {
  return (
    <Section tone="paper" id="approach">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow n="04">Approach</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2rem,4.2vw,3.5rem)]">How an assignment runs, from first call to handover.</h2>
              <p className="prose-lead mt-6 max-w-md text-slate">Scope, people and timing are settled before we mobilise, and you hear from us while work is in progress, not only at the end.</p>
            </div>
          </div>
          <ol className="relative lg:col-span-7">
            <span aria-hidden className="absolute bottom-3 start-[0.45rem] top-3 w-px bg-ink/15" />
            <span aria-hidden className="line-grow absolute bottom-3 start-[0.45rem] top-3 w-px bg-ember" />
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="reveal relative ps-12 pb-12 last:pb-0">
                <span aria-hidden className="absolute start-0 top-1.5 size-[0.95rem] border border-ember bg-ember" />
                <p className="label text-gold-deep">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-2 text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-ink/15 pt-12 lg:mt-32">
          <p className="label reveal text-gold-deep">What you can expect</p>
          <dl className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {COMMITMENTS.map((c, i) => (
              <div key={c.title} className="reveal max-sm:min-w-[80%] max-sm:snap-start max-sm:border max-sm:border-ink/15 max-sm:bg-tint max-sm:p-5">
                <dt className="flex items-baseline gap-3">
                  <span className="label text-slate">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-xl">{c.title}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
