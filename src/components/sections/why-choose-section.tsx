"use client";

import { motion } from "framer-motion";
import { statsCounters, whyChoosePoints } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function WhyChooseSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="section-shell px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left: text content */}
          <Reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d42a36]">Why Choose</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold leading-tight text-[#1a1a6e]">
                PRANIL Group of Companies?
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-7 max-w-xl">
                Your dream of going global starts here. PRANIL Group simplifies your journey. We offer expert guidance on:
              </p>
              <ul className="mt-6 space-y-3">
                {whyChoosePoints.map((point) => (
                  <li key={point.bold} className="flex items-start gap-2 text-[15px] text-gray-600">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d42a36]" />
                    <span><strong className="text-[#1a1a6e]">{point.bold}</strong> {point.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#services"
                className="mt-8 inline-flex items-center gap-2 rounded bg-[#d42a36] px-7 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition"
              >
                KNOW MORE →
              </a>
            </div>
          </Reveal>

          {/* Right: stats grid + badge */}
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-6 lg:items-end">
              {/* Trust badge */}
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d42a36] flex items-center justify-center shadow-xl">
                  <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-white flex flex-col items-center justify-center text-center">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#1a1a6e]">TRUST</span>
                    <span className="text-xs font-bold text-[#d42a36] tracking-wide">EXCELLENCE</span>
                    <span className="mt-1 text-[10px] text-gray-400 font-medium">Est. 2020</span>
                  </div>
                </div>
              </div>

              {/* Stats 2x2 grid */}
              <div className="grid grid-cols-2 gap-0 w-full max-w-sm">
                {statsCounters.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className={`flex flex-col items-center justify-center py-8 px-4 ${
                      i === 0 || i === 3 ? "bg-white" : "bg-[#1a1a6e] text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={`font-display text-3xl sm:text-4xl font-black ${i === 0 || i === 3 ? "text-[#d42a36]" : "text-white"}`}>
                      {stat.value}
                    </span>
                    <span className={`mt-1 text-xs sm:text-sm font-semibold text-center ${i === 0 || i === 3 ? "text-gray-600" : "text-white/80"}`}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
