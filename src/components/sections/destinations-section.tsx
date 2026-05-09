"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/site-data";
import { SectionHeading } from "@/components/sections/section-heading";

export function DestinationsSection() {
  return (
    <section id="destinations" className="px-4 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Study Destinations"
        title="Global routes with a tailored strategy behind each one."
        copy="Every destination has different admission rhythms, visa expectations, and career possibilities. The experience adapts to that reality."
      />
      {/* Horizontal scroll on mobile, flex row on desktop */}
      <div className="section-shell">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 snap-x snap-mandatory sm:mx-0 sm:px-0 sm:pb-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.country}
              className="group relative min-h-[18rem] min-w-[14rem] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[26rem] sm:min-w-0 sm:shrink sm:snap-align-none sm:rounded-[2rem] lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.06 }}
              whileHover={{ flex: 2 }}
            >
              <Image
                src={destination.image}
                alt={`${destination.country} study destination`}
                fill
                sizes="(max-width: 1024px) 60vw, 20vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold text-cyanSoft backdrop-blur sm:px-3 sm:text-xs">
                  {destination.badge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">{destination.country}</h3>
                <p className="mt-2 hidden rounded-2xl bg-black/42 p-2.5 text-xs font-semibold leading-5 text-white shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] sm:block sm:mt-3 sm:p-3 sm:text-sm sm:leading-6">
                  {destination.line}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
