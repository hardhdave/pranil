"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const countryChips = ["Canada", "Australia", "USA", "UK", "Europe"];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=88",
    alt: "Students studying together"
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=88",
    alt: "Plane flying above clouds"
  },
  {
    src: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=900&q=88",
    alt: "International travel destination"
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=88",
    alt: "Study documents and education planning"
  }
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0.35]);

  return (
    <section className="relative flex min-h-[calc(100svh-2rem)] overflow-hidden px-4 pb-10 pt-24 sm:min-h-screen sm:pb-20 md:pt-44">
      <div className="absolute inset-0">
        <motion.div className="absolute left-[62%] top-8 hidden h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-royal/10 sm:block" style={{ y, opacity }} />
        <div className="absolute left-[6%] top-[18%] h-72 w-72 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute right-[5%] top-[12%] h-96 w-96 rounded-full bg-electric/16 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-navy/12 to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-navy/10 bg-white/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-royal shadow-[0_18px_50px_rgba(6,17,31,0.08)] backdrop-blur-xl sm:mb-8 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]"
          >
            <span className="h-2 w-2 rounded-full bg-royal shadow-[0_0_18px_rgba(11,87,208,0.45)]" />
            Visa • Careers • Education • Travel
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl font-display text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.05em] text-navy sm:text-6xl md:text-7xl xl:text-[6.5rem]"
          >
            Start your journey abroad with a team that makes it clear.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-4 max-w-2xl text-sm leading-6 text-navy/68 sm:mt-6 sm:text-lg md:mt-7 md:text-xl md:leading-8"
          >
            PRANIL Group of Companies brings education, visa, recruitment, coaching, and travel
            into one calm, premium journey for people ready to move globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-6 flex flex-row gap-3 sm:mt-10 sm:gap-4"
          >
            <MagneticButton href="#contact" className="flex-1 px-4 py-2.5 text-xs sm:flex-none sm:px-6 sm:text-sm">
              Start Your Journey
            </MagneticButton>
            <MagneticButton href="#services" variant="dark" className="flex-1 px-4 py-2.5 text-xs sm:flex-none sm:px-6 sm:text-sm">
              Free Consultation
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5 flex flex-wrap gap-1.5 sm:mt-10 sm:gap-3">
            {countryChips.map((country) => (
              <span key={country} className="rounded-full border border-navy/10 bg-white/75 px-2.5 py-1 text-[10px] font-semibold text-navy/70 shadow-[0_14px_40px_rgba(6,17,31,0.08)] backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                {country}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Image grid: 2 images on mobile, 4 on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[1.4] w-full max-w-[22rem] sm:aspect-[0.86] sm:max-w-[32rem] md:max-w-[39rem] lg:aspect-[0.92]"
        >
          <div className="absolute -left-1 top-4 z-10 h-5 w-5 rounded-full bg-royal shadow-[0_18px_45px_rgba(11,87,208,0.35)] sm:-left-2 sm:top-14 sm:h-9 sm:w-9" />
          <div className="absolute left-[5%] top-[0.35rem] z-20 rounded-full bg-white px-2.5 py-1.5 text-[9px] font-bold text-navy shadow-[0_18px_50px_rgba(6,17,31,0.14)] sm:left-[7%] sm:top-[0.8rem] sm:px-5 sm:py-3 sm:text-sm">
            Study Abroad Experts
          </div>
          <div className="absolute bottom-1 right-1 z-20 rounded-full bg-royal px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_18px_50px_rgba(11,87,208,0.28)] sm:bottom-4 sm:right-5 sm:px-5 sm:py-3 sm:text-sm">
            Visa • Travel • Careers
          </div>
          <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
            <div className="grid gap-2 pt-3 sm:gap-3 sm:pt-8">
              <motion.div className="relative overflow-hidden rounded-[1rem] shadow-[0_20px_60px_rgba(6,17,31,0.14)] sm:rounded-[1.5rem]" whileHover={{ y: -6 }}>
                <Image src={heroImages[0].src} alt={heroImages[0].alt} fill priority sizes="260px" className="object-cover" />
              </motion.div>
              <motion.div className="relative hidden overflow-hidden rounded-[1rem] shadow-[0_20px_60px_rgba(6,17,31,0.14)] sm:block sm:rounded-[1.5rem]" whileHover={{ y: -6 }}>
                <Image src={heroImages[2].src} alt={heroImages[2].alt} fill sizes="260px" className="object-cover" />
              </motion.div>
            </div>
            <div className="grid gap-2 pb-3 sm:gap-3 sm:pb-8">
              <motion.div className="relative overflow-hidden rounded-[1rem] shadow-[0_20px_60px_rgba(6,17,31,0.14)] sm:rounded-[1.5rem]" whileHover={{ y: -6 }}>
                <Image src={heroImages[1].src} alt={heroImages[1].alt} fill sizes="260px" className="object-cover" />
              </motion.div>
              <motion.div className="relative hidden overflow-hidden rounded-[1rem] shadow-[0_20px_60px_rgba(6,17,31,0.14)] sm:block sm:rounded-[1.5rem]" whileHover={{ y: -6 }}>
                <Image src={heroImages[3].src} alt={heroImages[3].alt} fill sizes="260px" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
