"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { statsCounters, whyChoosePoints } from "@/lib/site-data";
import { CheckCircle2, Award, Users, Globe, FolderCheck } from "lucide-react";

export function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Map indexes to modern, high-quality icons
  const statIcons = [
    <Award key="0" className="h-5 w-5 text-[#fb8500]" />,
    <Globe key="1" className="h-5 w-5 text-[var(--teal)]" />,
    <Users key="2" className="h-5 w-5 text-[var(--blue-light)]" />,
    <FolderCheck key="3" className="h-5 w-5 text-emerald-500" />
  ];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Subtle graphic grid overlay for deep spatial layering */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1.5px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Floating background glowing lights */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--teal)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-[var(--blue)]/5 blur-[120px] pointer-events-none" />

      <div className="section-shell px-4 relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
          
          {/* Left Side: Cinematic Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] text-xs font-bold uppercase tracking-wider mb-4">
              Unrivaled Competence
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--navy)] leading-[1.1] tracking-tight">
              Why Forward-Thinking Clients <br className="hidden sm:inline" />
              <span className="gradient-text">Choose PRANIL Group.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light max-w-2xl">
              We eliminate complexity. Whether paving your path for international visa approval, career placements, or launching premium digital campaigns, our custom solutions are built around your core ambitions.
            </p>

            {/* Checklist Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoosePoints.map((point, index) => (
                <motion.div
                  key={point.bold}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-[var(--gray-50)]/50 transition-all duration-300 hover:bg-white hover:border-[var(--teal)]/20 hover:shadow-md group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                >
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[var(--teal)] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-[13px] sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    <strong className="text-[var(--navy)] font-bold block mb-0.5">{point.bold}</strong>
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#companies"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[var(--teal)]/15 hover:scale-[1.02]"
              >
                <span>EXPLORE OUR SERVICES</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Bento Stats Box & Rotating Neon Orb */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-center gap-8 lg:items-end w-full"
          >
            {/* Apple/Tesla Layered Neon Trust Orb */}
            <div className="relative flex items-center justify-center py-6">
              {/* External ambient pulse ring */}
              <motion.div 
                className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[var(--teal)]/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-[var(--blue)]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />

              {/* Glassmorphic Central Orb */}
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] p-[2px] shadow-2xl">
                <div className="h-full w-full rounded-full bg-[#031526] flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
                  {/* Subtle inner animated linear light beam */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--teal)]/10 via-transparent to-white/5" />
                  
                  <span className="font-display text-2xl sm:text-3xl font-black text-white tracking-widest">TRUST</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[var(--teal-light)] tracking-[0.2em] uppercase mt-1">EXCELLENCE</span>
                  <span className="mt-1 text-[8px] sm:text-[9px] text-white/40 font-semibold tracking-wider">ESTABLISHED 2020</span>
                </div>
              </div>
            </div>

            {/* Modern Glassmorphic Bento Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {statsCounters.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative overflow-hidden flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                  whileHover={{ borderColor: "rgba(14, 110, 122, 0.15)" }}
                >
                  {/* Micro glow behind stats card */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[var(--teal)]/5 to-transparent blur-[20px]" />
                  
                  {/* Top bar with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                      {statIcons[i]}
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-gray-300 uppercase">PRANIL</span>
                  </div>

                  {/* Stat value */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--navy)] leading-none mb-1 flex items-baseline">
                      {stat.value}
                      <span className="text-[var(--teal)] text-xl ml-0.5">{stat.suffix || "+"}</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
