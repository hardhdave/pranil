"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const mobileInitialCount = 4;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f0f4fa]">
      <div className="section-shell px-4">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#1a1a6e] leading-tight">
              Begin Your Global Journey with these{" "}
              <span className="underline decoration-[#d42a36] decoration-2 underline-offset-4">IN-DEMAND</span> Programs
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHiddenOnMobile = index >= mobileInitialCount && !showAll;
            return (
              <Reveal key={service.title} delay={index * 0.03} className={isHiddenOnMobile ? "hidden sm:block" : ""}>
                <motion.article
                  className="group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#f0f4fa] text-[#1a1a6e] group-hover:bg-[#1a1a6e] group-hover:text-white transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-[#1a1a6e]">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-6">{service.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* Show more on mobile */}
        <AnimatePresence>
          {!showAll && (
            <motion.div className="mt-5 flex justify-center sm:hidden" initial={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}>
              <button
                onClick={() => setShowAll(true)}
                className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-[#1a1a6e] shadow transition active:scale-95"
              >
                View All {services.length} Services
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All services CTA */}
        <div className="mt-8 flex justify-end">
          <a href="#contact" className="inline-flex items-center gap-2 rounded bg-[#d42a36] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition">
            ALL SERVICES →
          </a>
        </div>
      </div>
    </section>
  );
}
