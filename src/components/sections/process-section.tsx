import { processSteps } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="section-shell px-4">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d42a36] sm:text-sm">Our Process</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#1a1a6e] leading-tight">
            A Clear Path from First Call to Takeoff
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <div className="absolute left-4 right-4 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#d42a36]/30 to-transparent lg:block" />
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 snap-x snap-mandatory hide-scrollbar sm:mx-0 sm:px-0 sm:pb-0 lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible">
            {processSteps.map((step, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="relative min-w-[10rem] shrink-0 snap-start rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:min-w-0 sm:shrink sm:rounded-xl sm:p-6 transition hover:shadow-md hover:-translate-y-1">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d42a36] font-display text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-[#1a1a6e] sm:text-lg">{step}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-5 sm:text-sm">
                    Structured checkpoints keep your journey visible, accountable, and ready for the next move.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
