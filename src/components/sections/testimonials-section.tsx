"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/sections/section-heading";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden px-4 py-12 sm:py-20">
      <SectionHeading
        eyebrow="Client Voice"
        title="Quiet confidence, from people already moving forward."
        copy="The experience is built to feel premium because the stakes are real: careers, education, visas, and family journeys."
      />
      <div className="section-shell">
        <div className="paper-card premium-mask overflow-hidden rounded-[1.5rem] py-3 sm:rounded-[2rem] sm:py-5">
          <motion.div
            className="flex w-max gap-3 sm:gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="flex w-[18rem] shrink-0 items-start gap-3 rounded-[1.25rem] border border-navy/8 bg-white/80 p-3 shadow-[0_18px_50px_rgba(6,17,31,0.08)] sm:w-[28rem] sm:items-center sm:gap-5 sm:rounded-[1.5rem] sm:p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-royal/8 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Quote className="h-5 w-5 text-royal sm:h-7 sm:w-7" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="line-clamp-2 text-xs font-medium leading-5 text-navy/72 sm:text-sm sm:leading-6">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-2 text-xs font-bold text-navy sm:mt-3 sm:text-sm">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-navy/42 sm:text-xs sm:tracking-[0.18em]">{item.role}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
