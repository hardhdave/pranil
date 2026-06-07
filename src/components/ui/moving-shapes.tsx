"use client";

import { motion } from "framer-motion";

export function MovingShapes({ variant = "light" }: { variant?: "light" | "dark" }) {
  const accentColor = "#ffb703"; // Luxury Champagne Gold
  const baseColor = variant === "dark" ? "rgba(255,255,255," : "rgba(14,110,122,";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      
      {/* ─── Ultra-Luxury Champagne Gold Rotating Orbit (Top Right) ─── */}
      <motion.div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-dashed opacity-20"
        style={{ borderColor: accentColor }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-solid opacity-5"
        style={{ borderColor: accentColor }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* ─── Elegant Gold Dust Constellation (Top Left) ─── */}
      <div className="absolute top-[15%] left-[8%]">
        <motion.div
          className="w-2.5 h-2.5 rounded-full absolute shadow-[0_0_10px_rgba(255,183,3,0.8)]"
          style={{ background: accentColor }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full absolute top-5 left-6"
          style={{ background: accentColor, opacity: 0.4 }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="w-1 h-1 rounded-full absolute -top-4 left-10"
          style={{ background: baseColor + "0.3)", opacity: 0.5 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* ─── Luxury Floating Diamond Vector (Mid Left) ─── */}
      <motion.div
        className="absolute top-[35%] left-[5%] w-4 h-4 border border-[#ffb703]/30 opacity-40"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -15, 0],
          rotate: [45, 225, 45],
          borderColor: ["rgba(255,183,3,0.2)", "rgba(255,183,3,0.6)", "rgba(255,183,3,0.2)"]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Elegant Cosmic Grid Accent (Bottom Left) ─── */}
      <div className="absolute bottom-[20%] left-[10%] opacity-15">
        <div className="w-8 h-px absolute" style={{ background: accentColor }} />
        <div className="w-px h-8 absolute -top-4 left-4" style={{ background: accentColor }} />
        <motion.div 
          className="w-1.5 h-1.5 rounded-full absolute -top-[3px] left-[13px]"
          style={{ background: accentColor }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ─── Micro Shimmer Lines (Mid Right) ─── */}
      <div
        className="absolute top-[50%] right-[3%] w-32 h-px opacity-10"
        style={{
          background: `repeating-linear-gradient(90deg, ${accentColor} 0, ${accentColor} 4px, transparent 4px, transparent 8px)`,
        }}
      />

      {/* ─── Morphing Liquid Amber Backing Blob (Bottom Right) ─── */}
      <motion.div
        className="absolute bottom-[12%] right-[10%] w-28 h-28 opacity-10 rounded-full filter blur-xl"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          x: [0, 15, -10, 0],
          y: [0, -10, 15, 0]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Reverse Counter-Orbit (Bottom Center) ─── */}
      <motion.div
        className="absolute -bottom-12 left-[35%] w-44 h-44 rounded-full border border-dashed opacity-10"
        style={{ borderColor: baseColor + "0.15)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
