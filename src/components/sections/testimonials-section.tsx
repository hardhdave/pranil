"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const avatarColors = [
    "bg-[var(--navy)]", "bg-[var(--teal)]", "bg-[var(--blue)]",
    "bg-gradient-to-br from-[var(--navy)] to-[var(--teal)]",
    "bg-gradient-to-br from-[var(--teal)] to-[var(--blue)]",
    "bg-[var(--navy-deep)]",
    "bg-gradient-to-br from-[var(--blue)] to-[var(--teal-light)]",
    "bg-[var(--teal)]", "bg-[var(--navy)]"
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <MovingShapes variant="light" />

      {/* Large floating quote mark */}
      <motion.div className="absolute top-[15%] right-[8%] text-[var(--teal)]/[0.04] text-[12rem] font-serif leading-none select-none pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        &ldquo;
      </motion.div>

      <div ref={ref} className="section-shell px-4 relative z-10">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[var(--navy)] leading-tight">
              What They Have to Say!{" "}
              <span className="underline decoration-[var(--teal)] decoration-[3px] underline-offset-4">SUCCESS</span>{" "}
              Stories
            </h2>
          </motion.div>
          <motion.div className="hidden sm:flex gap-2 shrink-0 ml-6"
            initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--gray-300)] text-[var(--gray-400)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-300">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--gray-300)] text-[var(--gray-400)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-300">
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <motion.div className="flex w-max gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <article key={`${item.name}-${index}`}
                className="w-[20rem] sm:w-[24rem] shrink-0 rounded-2xl border border-[var(--gray-200)] bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                {/* Animated gradient border shimmer */}
                <motion.div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.3 }} />
                <div className="flex items-center gap-3 mb-4">
                  <motion.div className={`grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full text-white font-bold text-base sm:text-lg shadow-sm ${avatarColors[index % avatarColors.length]}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}>
                    {item.name[0]}
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-[var(--navy)]">{item.name}</p>
                    <p className="text-xs text-[var(--gray-400)] font-medium">{item.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-7 w-7 text-[var(--teal)]/15" />
                  <p className="pl-5 text-sm text-[var(--gray-600)] leading-6 line-clamp-3">&ldquo;{item.quote}&rdquo;</p>
                </div>
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] group-hover:w-full transition-all duration-500 rounded-full" />
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
