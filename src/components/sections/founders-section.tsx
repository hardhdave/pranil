"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function FoundersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const founders = [
    {
      name: "Komal Tiwari",
      title: "Founder & Director",
      details: "Managing creative pipelines, global educational consultation, and brand architectures across corporate projects.",
      img: "/ceo-komal.png",
      linkedin: "https://www.linkedin.com/in/komal-tiwari-36230266?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "inquiry.pranileducation@gmail.com"
    },
    {
      name: "Arvind Tiwari",
      title: "Co-Founder & Director",
      details: "Coordinating technical structures, global tours and travel strategies, and digital infrastructure operations.",
      img: "/ceo-arvind.png",
      linkedin: "#",
      email: "inquiry.pranileducation@gmail.com"
    }
  ];

  return (
    <section id="founders" className="py-12 sm:py-28 bg-[var(--gray-50)] relative overflow-hidden">
      {/* Moving background luxury shapes */}
      <MovingShapes variant="light" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Ambient glow backing */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-[var(--teal)]/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="section-shell px-6 relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">
            OUR LEADERSHIP
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">
            MEET THE FOUNDERS
          </h2>
          <motion.div
            className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] via-[#ffb703] to-[var(--blue)]"
            animate={{ width: [0, 80, 80] }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: "80px" }}
          />
        </motion.div>

        {/* Founders Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-gray-200/50 hover:border-[var(--teal)]/30 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-5 sm:p-10 flex flex-col items-center text-center"
            >
              {/* Photo Area with Rotating Dashed Ring */}
              <div className="relative mb-4 sm:mb-6 w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
                {/* Dashed Spin Ring */}
                <motion.div
                  className="absolute w-[140px] h-[140px] sm:w-[186px] sm:h-[186px] rounded-full border border-dashed border-[#ffb703]/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Outer solid glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--teal)]/20 to-[var(--blue)]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Photo frame */}
                <div className="relative z-10 w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[3px] sm:border-[4px] border-white shadow-lg bg-slate-100 flex items-center justify-center">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--navy)] tracking-wide group-hover:text-[var(--teal)] transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 fill-emerald-50" />
                </div>
                <span className="text-xs text-[var(--teal)] font-bold uppercase tracking-wider block">
                  {founder.title}
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px] mx-auto font-medium">
                  {founder.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
