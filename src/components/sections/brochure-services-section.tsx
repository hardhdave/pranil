import { CheckCircle2 } from "lucide-react";
import { coachingServices, companyContacts, visaProcessServices } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function BrochureServicesSection() {
  return (
    <section className="px-4 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Brochure Services"
        title="Everything PRANIL offers, shown clearly."
        copy="The website now reflects the client brochure: education, visa process, coaching, recruitment, and tours all in one place."
      />

      <div className="section-shell grid gap-4 sm:gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="paper-card h-full rounded-[1.5rem] p-4 sm:rounded-[2.5rem] sm:p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Coaching Services</p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-navy sm:mt-4 sm:text-4xl">
              Language and skill coaching for global readiness.
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
              {coachingServices.map((service, index) => (
                <div key={service} className="flex items-center gap-2 rounded-xl border border-navy/8 bg-white/72 p-2.5 sm:gap-3 sm:rounded-2xl sm:p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-royal text-[10px] font-bold text-white sm:h-9 sm:w-9 sm:rounded-xl sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold text-navy sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="blueprint-gradient h-full rounded-[1.5rem] border border-navy/10 p-4 shadow-[0_28px_90px_rgba(6,17,31,0.12)] sm:rounded-[2.5rem] sm:p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Visa Process Services</p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-navy sm:mt-4 sm:text-4xl">
              Expert support for student visa and settlement routes.
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
              {visaProcessServices.map((service) => (
                <div key={service} className="flex items-center gap-2 rounded-xl bg-white/78 p-2.5 shadow-[0_14px_38px_rgba(6,17,31,0.07)] sm:gap-3 sm:rounded-2xl sm:p-4">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-royal sm:h-5 sm:w-5" />
                  <span className="text-xs font-semibold text-navy sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Company contacts: horizontal scroll on mobile */}
      <div className="section-shell mt-4 sm:mt-5">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
          {companyContacts.map((company, index) => (
            <Reveal key={company.label} delay={index * 0.05}>
              <div className="flex min-w-[16rem] shrink-0 snap-start flex-col rounded-[1.25rem] border border-navy/10 bg-white/76 p-4 shadow-[0_18px_60px_rgba(6,17,31,0.08)] backdrop-blur sm:min-w-0 sm:rounded-[2rem] sm:p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-xs font-black text-white sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm">
                  {company.short}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy sm:mt-5 sm:text-2xl">{company.label}</h3>
                <p className="mt-2 text-sm font-bold text-royal sm:mt-4">{company.phone}</p>
                {company.email && <p className="mt-1 text-xs text-navy/56 sm:mt-2 sm:text-sm">{company.email}</p>}
                {company.website && <p className="mt-1 text-xs text-navy/56 sm:mt-2 sm:text-sm">{company.website}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
