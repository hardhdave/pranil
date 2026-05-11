"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="section-shell px-4">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#1a1a6e] leading-tight">
              What They Have to Say!{" "}
              <span className="underline decoration-[#d42a36] decoration-2 underline-offset-4">SUCCESS</span> Stories
            </h2>
          </Reveal>
          <div className="hidden sm:flex gap-2 shrink-0 ml-6">
            <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-gray-300 text-gray-400 hover:bg-[#1a1a6e] hover:text-white hover:border-[#1a1a6e] transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-gray-300 text-gray-400 hover:bg-[#1a1a6e] hover:text-white hover:border-[#1a1a6e] transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Marquee testimonials */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="w-[20rem] sm:w-[26rem] shrink-0 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1a1a6e] text-white font-bold text-lg">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a6e]">{item.name}</p>
                    <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-[#d42a36]/20" />
                  <p className="pl-4 text-sm text-gray-600 leading-6 line-clamp-3">&ldquo;{item.quote}&rdquo;</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* View all CTA */}
        <div className="mt-8 flex justify-end">
          <a href="#contact" className="inline-flex items-center gap-2 rounded bg-[#d42a36] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition">
            VIEW ALL →
          </a>
        </div>
      </div>
    </section>
  );
}
