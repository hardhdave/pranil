"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { values } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Moving background luxury shapes */}
      <MovingShapes variant="light" />

      {/* Dot grid subtle luxury pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Animated floating ambient light backing */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-[#ffb703]/5 to-[var(--teal)]/5 blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-[var(--blue)]/5 to-[#ffb703]/5 blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">
            WHAT WE STAND FOR
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">
            OUR VALUES
          </h2>
          <motion.div
            className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] via-[#ffb703] to-[var(--blue)]"
            animate={{ width: [0, 80, 80] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Values grid container */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 max-w-5xl mx-auto relative">
          
          {/* ─── Luxury Horizontal Laser Vector Connector Line (Behind Icons) ─── */}
          <div className="absolute top-[56px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[var(--teal)]/20 to-transparent z-0 hidden lg:block" />

          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="value-card group relative overflow-hidden bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200/50 hover:border-[#ffb703]/20 shadow-[0_4px_24px_rgba(0,0,0,0.015)] transition-all duration-500 text-center padding-2rem-1.5rem"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{ padding: "2.5rem 1.5rem" }}
              >
                {/* ─── Ambient Glow Light Backing on Hover ─── */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffb703]/3 via-transparent to-[var(--teal)]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* ─── Dynamic Dual-Orbit Visuals (Moving All The Time) ─── */}
                <div className="relative mb-8 h-28 flex items-center justify-center z-10">
                  
                  {/* Outer Dashed Gold Orbit (Clockwise Spin) */}
                  <motion.div
                    className="absolute w-[100px] h-[100px] rounded-full border border-dashed border-[#ffb703]/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Inner Dotted Teal Orbit (Counter-Clockwise Spin) */}
                  <motion.div
                    className="absolute w-[116px] h-[116px] rounded-full border border-dotted border-[var(--teal)]/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 26 + i * 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Continuous Breathing Glow Field */}
                  <motion.div
                    className="absolute w-20 h-20 rounded-full bg-[var(--teal)]/5 blur-md"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  />

                  {/* Central Core Icon Ring */}
                  <motion.div
                    className="relative z-10 bg-gradient-to-b from-white to-[var(--gray-50)] border border-[var(--teal)]/15 group-hover:border-[#ffb703]/35 shadow-sm flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(14,110,122,0.15)] group-hover:scale-105"
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--teal)] group-hover:text-[var(--navy)] transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--navy)] tracking-wider mb-2 group-hover:text-[var(--teal)] transition-colors duration-300 relative z-10">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed relative z-10">
                  {value.description}
                </p>

                {/* Bottom accent divider with continuous laser shimmers */}
                <div className="relative mt-6 h-[2px] w-[50%] mx-auto overflow-hidden bg-gray-100/80 rounded-full z-10">
                  <motion.div
                    className="absolute inset-y-0 w-[50%] bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
