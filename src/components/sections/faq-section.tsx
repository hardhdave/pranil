"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-shell px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a6e]">
            FAQ&apos;s
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="pr-4 font-display text-base sm:text-lg font-semibold text-[#1a1a6e]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm sm:text-base text-gray-600 leading-7">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
