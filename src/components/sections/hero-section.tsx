"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { heroContent } from "@/lib/site-data";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";

// Relatable luxury brand-inspired slideshow images representing the 4 pioneer sub-companies
const slides = [
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90",
    alt: "PRANIL Global Higher Education Students",
    title: "Visa & Higher Education"
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
    alt: "PRANIL Global Talent Strategic Careers Recruitment",
    title: "Career & Placements"
  },
  {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=90",
    alt: "PRANIL International Tours Curation & Travels",
    title: "Bespoke Tours & Travels"
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=90",
    alt: "KARV digital event engineering and media design solutions",
    title: "Digital Event Production"
  }
];

function RevealText({ 
  text, 
  delay = 0, 
  className = "", 
  wordClassName = "" 
}: { 
  text: string; 
  delay?: number; 
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] pb-2 -mb-2 ${wordClassName}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1], // Apple premium cubic-bezier
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}


export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Parallax scroll controls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] sm:min-h-screen overflow-hidden bg-[#031526]"
    >
      {/* ─── Ultra-Luxury Slow-Fading Slideshow (Ken Burns Effect) ─── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.85, scale: 1.01 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{ y: imageY }}
          >
            <Image
              src={slides[currentSlide].url}
              alt={slides[currentSlide].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover saturate-[0.80] contrast-[1.05] brightness-[0.85]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Overlays (Stripe/Awwwards style depth) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/90 via-[#05233d]/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062a4d] via-transparent to-[#031526]/50 z-[1]" />

      {/* ─── Moving Ambient Light Spheres (Apple/Tesla dynamic visuals) ─── */}
      <motion.div 
        className="absolute top-[15%] right-[20%] w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] rounded-full bg-[var(--teal)]/12 blur-[60px] sm:blur-[120px] z-[1]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] rounded-full bg-[var(--blue)]/12 blur-[50px] sm:blur-[100px] z-[1]"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div 
        className="hidden sm:block absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#ffb703]/5 blur-[90px] z-[1]"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating high-end particle fields */}
      <FloatingParticles count={15} className="z-[2] opacity-80 sm:hidden" />
      <FloatingParticles count={35} className="z-[2] opacity-80 hidden sm:block" />

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 flex items-center h-full pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="section-shell px-4 sm:px-6 relative">
          <div className="max-w-4xl">
            
            {/* Super premium pre-title with tracking and anim */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-gradient-to-r from-[var(--teal-light)] to-transparent" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[var(--teal-light)]">
                PRANIL GROUP OF COMPANIES
              </p>
            </motion.div>

            {/* Main Header typography */}
            <h1 className="font-display text-[1.6rem] sm:text-5xl lg:text-[4.2rem] xl:text-[4.8rem] font-black leading-[1.15] text-white tracking-tight">
              <span className="block">
                <RevealText text={heroContent.line1} delay={0.2} />
              </span>
              <span className="block mt-2">
                <RevealText 
                  text={heroContent.line2} 
                  delay={0.7} 
                  wordClassName="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
                />
              </span>
              <span className="block mt-2 drop-shadow-[0_4px_12px_rgba(251,133,0,0.15)]">
                <RevealText 
                  text={heroContent.line3} 
                  delay={1.2} 
                  className="font-medium italic" 
                  wordClassName="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb703] to-[#fb8500]"
                />
              </span>
            </h1>

            {/* Paragraph description */}
            <motion.p
              className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[15px] text-white/70 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {heroContent.description}
            </motion.p>

            {/* Premium CTA interactive group */}
            <motion.div
              className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.1 }}
            >
              <a
                href="#about"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-6 sm:px-9 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
              >
                <span className="relative z-10">Explore Our Story</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[var(--teal)]/20 to-[var(--blue)]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] px-6 sm:px-9 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--teal)]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </motion.div>

            {/* Social media connections — compact row */}
            <motion.div
              className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-bold mr-1">Follow Us</span>
              <div className="h-px w-4 bg-white/15" />
              
              <a
                href="https://www.linkedin.com/in/komal-tiwari-36230266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BNXjVwaP4RkmPPTVXSvKTXg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 fill-current" />
              </a>
              
              <a
                href="https://www.instagram.com/pranil_education_services_llp?igsh=b3dlanZuaXpsZzUy"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              
              <a
                href="https://www.facebook.com/share/18i3WEoGMT/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3 fill-current" />
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>



      {/* Bottom fade overlap — reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      {/* Elegant mouse wheel scroll indicator (Desktop only) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/40 font-bold">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 bg-[#031526]/20 backdrop-blur-sm">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
