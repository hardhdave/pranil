"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { companies } from "@/lib/site-data";
import { ArrowRight, Sparkles } from "lucide-react";
import { MovingShapes } from "@/components/ui/moving-shapes";

const companyThemes: Record<string, {
  glowColor: string;
  borderHover: string;
  gradientStyle: string;
  shadowStyle: string;
  badgeBg: string;
  badgeText: string;
}> = {
  education: {
    glowColor: "rgba(255, 75, 75, 0.16)",
    borderHover: "rgba(255, 75, 75, 0.4)",
    gradientStyle: "linear-gradient(135deg, #ff4b4b 0%, #ff7878 100%)",
    shadowStyle: "0 30px 60px rgba(255, 75, 75, 0.18)",
    badgeBg: "rgba(255, 75, 75, 0.1)",
    badgeText: "#ff4b4b"
  },
  recruitment: {
    glowColor: "rgba(16, 185, 129, 0.16)",
    borderHover: "rgba(16, 185, 129, 0.4)",
    gradientStyle: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    shadowStyle: "0 30px 60px rgba(16, 185, 129, 0.18)",
    badgeBg: "rgba(16, 185, 129, 0.1)",
    badgeText: "#059669"
  },
  travel: {
    glowColor: "rgba(251, 133, 0, 0.16)",
    borderHover: "rgba(251, 133, 0, 0.4)",
    gradientStyle: "linear-gradient(135deg, #fb8500 0%, #ffb703 100%)",
    shadowStyle: "0 30px 60px rgba(251, 133, 0, 0.18)",
    badgeBg: "rgba(251, 133, 0, 0.1)",
    badgeText: "#d97706"
  },
  "digital-media": {
    glowColor: "rgba(0, 119, 182, 0.16)",
    borderHover: "rgba(0, 119, 182, 0.4)",
    gradientStyle: "linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)",
    shadowStyle: "0 30px 60px rgba(0, 119, 182, 0.18)",
    badgeBg: "rgba(0, 119, 182, 0.1)",
    badgeText: "#0077b6"
  }
};

// ─── Real-Time Interactive Cursor-Tracking Card ───
function CompanyCard({ company, index, isInView }: { company: typeof companies[number]; index: number; isInView: boolean }) {
  const theme = companyThemes[company.slug] || companyThemes.education;
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse cursor coordinate state relative to the card bounds
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <Link href={`/companies/${company.slug}`} className="block h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setCoords({ x: 0, y: 0 });
        }}
        className="relative h-full bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer z-10 border"
        style={{
          boxShadow: hovered ? theme.shadowStyle : '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
          borderColor: hovered ? theme.borderHover : 'rgba(229, 231, 235, 1)',
          transition: "box-shadow 0.4s ease, border-color 0.4s ease"
        }}
        whileHover={{ y: -6 }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.9,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* Glow 1: Static subtle ambient glow backdrop (ALWAYS visible behind, scales up on hover) */}
        <div 
          className="absolute inset-0 rounded-3xl z-0 pointer-events-none blur-[35px]"
          style={{
            background: `radial-gradient(180px circle at 50% 50%, ${theme.glowColor} 0%, transparent 80%)`,
            opacity: hovered ? 0.4 : 0.15,
            transition: "opacity 0.6s ease"
          }}
        />

        {/* Glow 2: Dynamic cursor-tracking glowing spotlight on hover */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[40px] z-0"
          style={{
            background: `radial-gradient(160px circle at ${coords.x}px ${coords.y}px, ${theme.glowColor} 0%, transparent 80%)`
          }}
        />

        {/* Elegant champagne gold frame accent overlay */}
        <div className={`absolute inset-[1px] rounded-[22px] border border-transparent group-hover:border-[#ffb703]/15 transition-colors duration-500 z-10 pointer-events-none`} />

        <div className="relative z-20 flex-1 flex flex-col">
          {/* Parallax Floating Logo Shield */}
          <motion.div
            className="h-20 sm:h-24 flex items-center justify-center mb-6 relative"
            animate={{ 
              y: hovered ? -6 : [0, -3, 0] 
            }}
            transition={{ 
              y: hovered ? { duration: 0.3 } : { duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Ambient luxury backing glow */}
            <div 
              className="absolute w-16 h-16 rounded-full filter blur-md opacity-30 group-hover:opacity-60 group-hover:scale-130 transition-all duration-500" 
              style={{ backgroundColor: theme.badgeBg }}
            />
            
            {company.logoUrl ? (
              <Image
                src={company.logoUrl}
                alt={company.fullName}
                width={140}
                height={70}
                className="max-h-full max-w-[85%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl relative z-10 shadow-md"
                style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}
              >
                {company.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </motion.div>

          {/* Minimalist Sub-category Tag */}
          <div className="mb-3">
            <span 
              className="inline-block text-[9px] font-black tracking-[0.25em] uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
            >
              {company.name}
            </span>
          </div>

          {/* Luxury Typography Title */}
          <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors duration-300 mb-2 leading-snug">
            {company.fullName}
          </h3>

          {/* Brand Tagline */}
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
            {company.tagline}
          </p>
        </div>

        {/* High-end bespoke action bar */}
        <div className="relative z-20 mt-auto pt-5 border-t border-[var(--gray-100)] flex items-center justify-between">
          <span className="text-[10px] font-black tracking-[0.2em] text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors duration-300">
            LEARN MORE
          </span>
          <div 
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--gray-200)] group-hover:border-transparent group-hover:text-white transition-all duration-500 group-hover:scale-108 group-hover:shadow-lg"
            style={{ 
              backgroundImage: hovered ? theme.gradientStyle : 'none'
            }}
          >
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-500 text-[var(--gray-500)] group-hover:text-white" />
          </div>
        </div>
        
        {/* Dynamic upper luxury colored highlight bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-[4px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          style={{ backgroundImage: theme.gradientStyle }}
        />
      </motion.div>
    </Link>
  );
}

export function CompaniesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="companies" className="py-28 sm:py-36 relative overflow-hidden bg-[var(--gray-50)]">
      {/* Decorative moving shapes background */}
      <MovingShapes variant="light" />

      {/* Floating ultra-luxury blurred light background spheres */}
      <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[var(--teal)]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[8%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[var(--blue)]/4 blur-[140px] pointer-events-none" />

      {/* Luxury gold glowing line border running at top */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#ffb703]/30 via-[var(--teal)]/30 via-[#ffb703]/30 to-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#ffb703] via-white to-transparent opacity-60"
          style={{ backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="section-shell px-4 relative z-10">
        
        {/* Luxury Typography Heading */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >

          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[var(--navy)] leading-[1.05] tracking-tight">
            Four Masterpiece Businesses. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal)] via-[var(--blue)] to-[#ffb703] drop-shadow-[0_4px_10px_rgba(255,183,3,0.1)]">One Unifying Core.</span>
          </h2>
          
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-light">
            We deliver highly integrated, world-class experiences across strategic immigration consulting, selective placement, customized travel curation, and innovative digital event engineering.
          </p>

          {/* Thin luxury gold dynamic divider line */}
          <motion.div
            className="h-[2px] rounded-full mx-auto mt-6 bg-gradient-to-r from-transparent via-[#ffb703] to-transparent"
            animate={{ width: isInView ? [0, 140] : 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </motion.div>

        {/* Real-time Spotlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, i) => (
            <CompanyCard 
              key={company.name} 
              company={company} 
              index={i} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
