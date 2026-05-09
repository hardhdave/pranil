"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  /* On mobile, show only 4 initially, then reveal rest */
  const mobileInitialCount = 4;

  return (
    <section id="services" className="relative overflow-hidden px-4 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Integrated Services"
        title="One premium command center for your global move."
        copy="Education, immigration, hiring, coaching, and travel are designed as connected experiences, not disconnected counters."
      />
      <div className="section-shell grid gap-3 grid-cols-2 md:grid-cols-2 xl:grid-cols-12 sm:gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHiddenOnMobile = index >= mobileInitialCount && !showAll;
          return (
            <Reveal
              key={service.title}
              delay={index * 0.04}
              className={[
                "xl:col-span-3",
                index === 0 || index === 5 ? "xl:col-span-6" : "",
                index === 2 ? "xl:translate-y-12" : "",
                index === 6 ? "xl:-translate-y-8" : "",
                isHiddenOnMobile ? "hidden sm:block" : ""
              ].join(" ")}
            >
              <motion.article
                className="group paper-card relative min-h-[10rem] overflow-hidden rounded-[1.25rem] p-4 sm:min-h-72 sm:rounded-[2rem] sm:p-6"
                whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/18 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-royal/10 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="mb-3 flex items-center justify-between sm:mb-8">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal text-white shadow-premium sm:h-13 sm:w-13 sm:rounded-2xl">
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                    </span>
                    <span className="hidden rounded-full border border-navy/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-navy/45 sm:inline-block">
                      {service.stat}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-navy sm:text-2xl sm:tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-navy/58 sm:mt-4 sm:text-sm sm:leading-7">{service.description}</p>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>

      {/* Show more button on mobile */}
      <AnimatePresence>
        {!showAll && (
          <motion.div
            className="section-shell mt-4 flex justify-center sm:hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full border border-navy/10 bg-white/80 px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_14px_40px_rgba(6,17,31,0.08)] backdrop-blur transition active:scale-95"
            >
              View All {services.length} Services
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
