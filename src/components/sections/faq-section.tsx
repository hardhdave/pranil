"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <MovingShapes variant="light" />

      {/* Floating question marks */}
      <motion.div className="absolute top-[20%] left-[5%] text-[var(--teal)]/[0.04] text-8xl font-bold select-none pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>?</motion.div>
      <motion.div className="absolute bottom-[20%] right-[8%] text-[var(--blue)]/[0.04] text-6xl font-bold select-none pointer-events-none"
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>?</motion.div>

      <div ref={ref} className="section-shell px-4 relative z-10">
        <motion.div className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)]">FAQ&apos;s</h2>
          <motion.div className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={i} className="border-b border-[var(--gray-200)] relative"
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}>
                {/* Animated left accent line when open */}
                <motion.div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--teal)] to-[var(--blue)]"
                  initial={{ scaleY: 0 }} animate={{ scaleY: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }} style={{ transformOrigin: "top" }} />
                <button onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between py-5 sm:py-6 text-left group ${isOpen ? "pl-4" : "pl-0"} transition-all duration-300`}>
                  <span className={`pr-4 font-display text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300 ${
                    isOpen ? "text-[var(--teal)]" : "text-[var(--navy)]"} group-hover:text-[var(--teal)]`}>
                    {item.question}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 grid h-8 w-8 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-[var(--teal)] text-white" : "bg-transparent text-[var(--gray-400)] group-hover:bg-[var(--gray-100)]"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      <p className="pb-6 text-sm sm:text-base text-[var(--text-muted)] leading-7 pl-4">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
