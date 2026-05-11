"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { heroSlides } from "@/lib/site-data";

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-[55vh] sm:h-[50vh] lg:h-[52vh] overflow-hidden bg-[#f0f4fa]">
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center h-full">
        <div className="section-shell px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[3rem] font-extrabold leading-[1.1] text-[#1a1a6e]">
                {slide.title}
              </h1>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded bg-[#1a1a6e] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#2a2a8c] transition group"
                >
                  {slide.cta}
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded bg-[#d42a36] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-[#1a1a6e] w-7" : "bg-[#1a1a6e]/30"}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <div className="absolute bottom-5 right-6 z-20 flex gap-2">
        <button onClick={prev} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#1a1a6e]/30 text-[#1a1a6e] hover:bg-[#1a1a6e] hover:text-white transition">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={next} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#1a1a6e]/30 text-[#1a1a6e] hover:bg-[#1a1a6e] hover:text-white transition">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Social icons — small, clean, fixed left edge */}
      <div className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 flex-col gap-1.5">
        {[
          { icon: Linkedin, href: "#", title: "LinkedIn" },
          { icon: Instagram, href: "#", title: "Instagram" },
          { icon: Facebook, href: "#", title: "Facebook" }
        ].map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/70 text-[#1a1a6e] shadow-sm border border-gray-200/60 hover:bg-[#1a1a6e] hover:text-white transition"
            title={s.title}
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
