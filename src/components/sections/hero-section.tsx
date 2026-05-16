"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { heroContent } from "@/lib/site-data";
import { FloatingParticles } from "@/components/ui/floating-particles";

function TypewriterText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="inline-block w-[3px] h-[0.9em] bg-[var(--teal)] ml-1 animate-pulse" />
      )}
    </span>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src={heroContent.image}
          alt="Modern corporate building"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#062a4d]/85 via-[#0a3d6b]/60 to-transparent"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062a4d]/40 via-transparent to-[#062a4d]/20" />

      {/* Floating particles */}
      <FloatingParticles count={25} className="z-[1] opacity-60" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-[var(--teal)]/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-[var(--blue)]/10 blur-[80px]" style={{ animation: 'float 8s ease-in-out infinite' }} />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex items-center h-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="section-shell px-4 sm:px-6">
          <div className="max-w-3xl">
            {/* Hero text with staggered animations */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-[2.2rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] text-white">
                <span className="block">
                  <TypewriterText text={heroContent.line1} delay={300} />
                </span>
                <span className="block mt-1 sm:mt-2">
                  <TypewriterText text={heroContent.line2} delay={1200} />
                </span>
                <span className="block mt-1 sm:mt-2">
                  <motion.span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #5ba4e6, #1a9aaa, #e8b830)",
                      backgroundSize: "200% 200%"
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <TypewriterText text={heroContent.line3} delay={2100} className="italic" />
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/75 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3 }}
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.3 }}
            >
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                <span className="relative z-10">ABOUT US</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[var(--teal)]/30 to-[var(--blue)]/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
              >
                GET IN TOUCH
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-medium">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
          animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-white/70"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
