"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MovingShapes } from "@/components/ui/moving-shapes";
import { homeBlog } from "@/lib/site-data";
import { ArrowLeft, BookOpen, Calendar, Clock, User, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-[var(--gray-50)] text-[var(--navy)] flex flex-col">
      <Navbar />

      {/* ─── Immersive Premium Hero Header ─── */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 bg-[#031526] text-white overflow-hidden">
        <MovingShapes variant="dark" />

        {/* Executive Ambient Lighting Glows */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[var(--teal)]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full bg-[var(--blue)]/10 blur-[120px] pointer-events-none" />

        <div className="section-shell px-4 relative z-10 text-center">
          {/* Back Navigation Button */}
          <div className="mb-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[var(--teal-light)]" />
              Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal-light)] mb-4"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-[var(--teal-light)]" />
            <span>Featured Corporate Editorial</span>
          </motion.div>

          <motion.h1
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {homeBlog.title}
          </motion.h1>

          <motion.div
            className="h-[3px] w-20 rounded-full mx-auto bg-gradient-to-r from-[var(--teal)] to-[var(--blue-light)] mb-8"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Metadata Grid */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/70 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <User className="h-4 w-4 text-[var(--teal-light)]" />
              {homeBlog.author}
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <Calendar className="h-4 w-4 text-[var(--teal-light)]" />
              June 2026
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <Clock className="h-4 w-4 text-[var(--teal-light)]" />
              5 Min Read
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Editorial Body Card Stack ─── */}
      <main className="flex-1 pb-24 relative z-20 -mt-10 sm:-mt-14">
        <div className="section-shell px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(3,21,38,0.06)] overflow-hidden border border-gray-100 p-6 sm:p-14 lg:p-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Lead Author Header Card */}
            <div className="flex flex-col items-center pb-12 mb-12 border-b border-gray-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] flex items-center justify-center text-white mb-4 shadow-md">
                <BookOpen className="h-7 w-7" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--navy)]">
                By {homeBlog.author}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[var(--teal)] uppercase tracking-widest mt-1.5">
                {homeBlog.authorRole}
              </p>
            </div>

            {/* Structured Paragraph Reading Space */}
            <div className="space-y-12">
              {homeBlog.sections.map((section, idx) => (
                <div key={idx} className="relative group">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--navy)] mb-5 border-l-4 border-[var(--teal)] pl-4 group-hover:border-[var(--blue)] transition-colors duration-300">
                    {section.heading}
                  </h3>
                  <div className="space-y-5">
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-[16px] text-gray-600 leading-relaxed font-medium"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fine Signature Block */}
            <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[var(--navy)] font-bold text-sm">
                  KT
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[var(--navy)]">{homeBlog.author}</div>
                  <div className="text-[10px] text-gray-400 font-medium">Director, PRANIL Group</div>
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-white text-xs font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Discuss Global Careers With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
