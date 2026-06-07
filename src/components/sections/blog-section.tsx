"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, CheckCircle } from "lucide-react";
import { homeBlog } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <MovingShapes variant="light" />

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">
            FEATURED ARTICLE
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight max-w-3xl mx-auto">
            {homeBlog.title}
          </h2>
          <motion.div
            className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Blog content card */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 border border-[var(--gray-200)]"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Author info */}
          <div className="flex flex-col items-center mb-10 text-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] flex items-center justify-center text-white mb-4 shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <BookOpen className="h-7 w-7" />
            </motion.div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--navy)]">
              By {homeBlog.author}
            </h3>
            <p className="text-sm font-semibold text-[var(--teal)] uppercase tracking-wider mt-1">
              {homeBlog.authorRole}
            </p>
          </div>

          {/* Blog sections */}
          <div className="space-y-10">
            {homeBlog.sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                <h4 className="font-display text-lg sm:text-xl font-bold text-[var(--navy)] mb-4 border-l-4 border-[var(--teal)] pl-4">
                  {section.heading}
                </h4>
                <div className="space-y-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
