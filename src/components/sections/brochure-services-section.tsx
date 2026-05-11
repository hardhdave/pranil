import { CheckCircle2 } from "lucide-react";
import { coachingServices, companyContacts, visaProcessServices } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function BrochureServicesSection() {
  return (
    <section className="py-12 sm:py-24 bg-[#f0f4fa]">
      <div className="section-shell px-4">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d42a36] sm:text-sm">Our Offerings</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#1a1a6e] leading-tight">
            Everything PRANIL Offers, Shown Clearly
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl bg-white border border-gray-200 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d42a36]">Coaching Services</p>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#1a1a6e]">
                Language and skill coaching for global readiness.
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {coachingServices.map((service, i) => (
                  <div key={service} className="flex items-center gap-3 rounded-lg bg-[#f0f4fa] p-3 transition hover:bg-white hover:shadow-md">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#1a1a6e] text-xs font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-[#1a1a6e]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-xl bg-white border border-gray-200 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d42a36]">Visa Process Services</p>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#1a1a6e]">
                Expert support for student visa and settlement routes.
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {visaProcessServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 rounded-lg bg-[#f0f4fa] p-3 transition hover:bg-white hover:shadow-md">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d42a36]" />
                    <span className="text-sm font-semibold text-[#1a1a6e]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Company contacts */}
        <div className="mt-5">
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory hide-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
            {companyContacts.map((company, i) => (
              <Reveal key={company.label} delay={i * 0.05}>
                <div className="flex min-w-[16rem] shrink-0 snap-start flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:min-w-0 sm:p-6 transition hover:shadow-md hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#1a1a6e] text-xs font-black text-white">
                    {company.short}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#1a1a6e]">{company.label}</h3>
                  <p className="mt-2 text-sm font-bold text-[#d42a36]">{company.phone}</p>
                  {company.email && <p className="mt-1 text-xs text-gray-500">{company.email}</p>}
                  {company.website && <p className="mt-1 text-xs text-gray-500">{company.website}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
