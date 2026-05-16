"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { companies } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function CompaniesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="companies" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Moving decorations */}
      <MovingShapes variant="light" />

      {/* Background blurs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--teal)]/5 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--blue)]/5 blur-[120px]" />

      {/* Continuously animated gradient bar at top */}
      <div className="absolute top-0 left-0 w-full h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--teal)] via-[var(--blue)] to-[var(--teal)]"
          style={{ backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">
            OUR COMPANIES
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">
            Four Strong Businesses.{" "}
            <span className="gradient-text">One Vision.</span>
          </h2>
          {/* Animated line separator */}
          <motion.div
            className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Company cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {companies.map((company, i) => (
            <Link key={company.name} href={`/companies/${company.slug}`}>
            <motion.div
              className="company-card group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Logo area with subtle floating */}
              <motion.div
                className="h-20 sm:h-28 flex items-center justify-center mb-4 sm:mb-6"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {company.logoUrl ? (
                  <motion.img
                    src={company.logoUrl}
                    alt={company.fullName}
                    className="max-h-full max-w-[85%] object-contain"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                    style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    animate={{ rotate: [0, 2, -2, 0] }}
                  >
                    IT
                  </motion.div>
                )}
              </motion.div>

              {/* Name */}
              <h3 className="font-display text-sm sm:text-base font-bold text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors duration-300">
                {company.name}
              </h3>

              {/* Learn More button */}
              <motion.div
                className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--navy)] border border-[var(--navy)] rounded-md px-3 sm:px-4 py-1.5 sm:py-2 group-hover:bg-[var(--navy)] group-hover:text-white transition-all duration-300"
                whileHover={{ x: 3 }}
              >
                LEARN MORE
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </motion.span>
              </motion.div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
