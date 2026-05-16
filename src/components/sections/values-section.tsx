"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { values } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Moving decorations */}
      <MovingShapes variant="light" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-[var(--teal)]/5 to-[var(--blue)]/5 blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-[var(--blue)]/5 to-[var(--teal)]/5 blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
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
            className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 max-w-5xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="value-card group"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Animated icon ring with continuous orbit */}
                <div className="relative">
                  <motion.div
                    className="value-icon-ring relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--teal)]" />
                  </motion.div>

                  {/* Continuously orbiting dot around icon */}
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-[var(--teal)]/30"
                    style={{ top: "50%", left: "50%", marginTop: -4, marginLeft: -4 }}
                    animate={{
                      x: [0, 35, 0, -35, 0],
                      y: [-35, 0, 35, 0, -35],
                    }}
                    transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 mx-auto w-20 h-20 rounded-full border border-[var(--teal)]/10"
                    style={{ top: 0, left: "50%", marginLeft: -40 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--teal)] tracking-wider mb-2 sm:mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-4 sm:mt-5 h-0.5 bg-gradient-to-r from-transparent via-[var(--teal)]/30 to-transparent mx-auto"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
