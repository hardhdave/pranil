import { processSteps } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProcessSection() {
  return (
    <section className="px-4 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Premium Process"
        title="A clear path from first call to takeoff."
        copy="The journey is designed to remove guesswork: each step is documented, sequenced, and handled with calm operational precision."
      />
      <div className="section-shell relative">
        <div className="absolute left-4 right-4 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent lg:block" />
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 snap-x snap-mandatory sm:mx-0 sm:px-0 sm:pb-0 lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.06}>
              <div className="paper-card relative min-w-[10rem] shrink-0 snap-start rounded-[1.25rem] p-4 sm:min-w-0 sm:shrink sm:rounded-[2rem] sm:p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy font-display text-base font-semibold text-white sm:h-11 sm:w-11 sm:text-lg">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy sm:mt-8 sm:text-xl">{step}</h3>
                <p className="mt-2 text-xs leading-5 text-navy/55 sm:mt-3 sm:text-sm sm:leading-6">
                  Structured checkpoints keep your journey visible, accountable, and ready for the next move.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
