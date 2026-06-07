"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { newsEvents } from "@/lib/site-data";
import { MovingShapes } from "@/components/ui/moving-shapes";

export function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-20 sm:py-28 relative overflow-hidden">
      <MovingShapes variant="light" />

      <motion.div className="absolute top-[10%] right-[3%] w-40 h-40 rounded-full bg-[var(--teal)]/4 blur-[80px]"
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[10%] left-[5%] w-28 h-28 rounded-full bg-[var(--blue)]/4 blur-[60px]"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />

      <div ref={ref} className="section-shell px-4 relative z-10">
        <motion.div className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">LATEST UPDATES</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">NEWS & EVENTS</h2>
          <motion.div className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {newsEvents.map((article, i) => (
            <motion.article key={article.title} className="news-card group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover news-card-image" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                  <Calendar className="h-3 w-3 text-[var(--teal)]" />
                  <span className="text-[10px] sm:text-xs font-semibold text-[var(--navy)]">{article.date}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Animated shimmer overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 1.5 }} />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-base sm:text-lg font-bold text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors duration-300 line-clamp-2">{article.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--teal)] group-hover:gap-3 transition-all duration-300">
                  READ MORE
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-10 sm:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <a href="#news" className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--navy)] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-bold text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
            VIEW ALL NEWS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
