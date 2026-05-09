"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { travelReasons, travelServices } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function TravelSection() {
  const [showAll, setShowAll] = useState(false);
  const mobileInitialCount = 4;

  return (
    <section id="travel" className="px-4 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Tours & Travels"
        title="Travel planning with the calm polish of a concierge desk."
        copy="Tickets, hotels, buses, packages, visas, and insurance come together through one clean, reliable travel experience."
      />
      <div className="section-shell grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2">
        {travelServices.map((service, index) => {
          const Icon = service.icon;
          const isHiddenOnMobile = index >= mobileInitialCount && !showAll;
          return (
            <Reveal key={service.title} delay={index * 0.06} className={isHiddenOnMobile ? "hidden sm:block" : ""}>
              <motion.article
                className="group relative min-h-[12rem] overflow-hidden rounded-[1.25rem] border border-white/10 sm:min-h-[22rem] sm:rounded-[2.25rem]"
                whileHover={{ y: -8 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-[#020713]/45 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-7">
                  <Icon className="h-5 w-5 text-cyanSoft sm:h-8 sm:w-8" />
                  <h3 className="mt-2 font-display text-base font-semibold text-white sm:mt-5 sm:text-3xl">{service.title}</h3>
                  <p className="mt-1 hidden max-w-md text-sm leading-6 text-white/62 sm:mt-3 sm:block">
                    Premium coordination, practical options, and a seamless handoff from planning to departure.
                  </p>
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
              View All {travelServices.length} Services
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-shell mt-5 rounded-[1.5rem] border border-navy/10 bg-white/76 p-4 shadow-[0_22px_70px_rgba(6,17,31,0.09)] backdrop-blur sm:mt-8 sm:rounded-[2.5rem] sm:p-6 md:p-8">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-royal">Why Choose Us?</p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-navy sm:mt-3 sm:text-3xl">
              Book your dream vacation with special deals.
            </h3>
            <p className="mt-2 text-xs leading-5 text-navy/58 sm:mt-3 sm:text-sm sm:leading-6">
              Every journey is more than just a trip. It is an experience and a memory in the making.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
            {travelReasons.map((reason, index) => (
              <div key={reason} className="rounded-xl bg-royal px-3 py-2.5 text-white sm:rounded-2xl sm:px-4 sm:py-4">
                <p className="text-[10px] font-black opacity-70 sm:text-xs">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-xs font-bold sm:mt-2 sm:text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
