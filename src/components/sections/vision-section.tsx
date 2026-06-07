"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { statsCounters } from "@/lib/site-data";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function VisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="relative overflow-hidden">
      <div className="gradient-teal py-16 sm:py-24 relative">
        <MovingShapes variant="dark" />

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-10 right-[20%] w-48 h-48 rounded-full bg-white/5"
            animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -bottom-16 right-10 w-80 h-80 rounded-full bg-white/[0.03]"
            animate={{ scale: [1.1, 1, 1.1], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute top-[70%] left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div ref={ref} className="section-shell px-4 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 mb-5">
                <motion.div className="w-2 h-2 rounded-full bg-[var(--accent)]"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">OUR VISION</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
                To be a trusted group recognized for{" "}
                <motion.span className="text-[var(--accent)]" animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>excellence</motion.span>,{" "}
                <motion.span className="text-[var(--accent)]" animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>innovation</motion.span> &{" "}
                <motion.span className="text-[var(--accent)]" animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>sustainable growth</motion.span>.
              </h2>
              <motion.div className="mt-6 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] via-white/40 to-transparent"
                initial={{ width: 0 }} animate={isInView ? { width: "60%" } : {}}
                transition={{ duration: 1, delay: 0.5 }} />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {statsCounters.map((stat, i) => (
                <motion.div key={stat.label} className="stat-box p-4 sm:p-6 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.3, ease: [0.16, 1, 0.3, 1] }}>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.8 }} />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5}
                    className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white relative z-10" />
                  <p className="mt-2 text-[10px] sm:text-xs text-white/60 font-medium leading-tight relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
