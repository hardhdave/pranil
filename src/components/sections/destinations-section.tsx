"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-white">
      <div className="section-shell px-4">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#1a1a6e] leading-tight">
              Explore Opportunities <span className="underline decoration-[#d42a36] decoration-2 underline-offset-4">ACROSS</span> the Globe
            </h2>
          </Reveal>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory hide-scrollbar sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-0">
          {destinations.map((dest, i) => (
            <motion.article
              key={dest.country}
              className="group relative min-w-[15rem] shrink-0 snap-start overflow-hidden rounded-xl sm:min-w-0 sm:shrink lg:col-span-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative h-[18rem] sm:h-[22rem] overflow-hidden rounded-xl">
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  sizes="(max-width: 1024px) 60vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Flag badge */}
                <div className="absolute top-3 left-3 h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-[#1a1a6e]">
                  {dest.country[0]}
                </div>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-[#1a1a6e]">{dest.country}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
