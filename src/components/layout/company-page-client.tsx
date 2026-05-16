"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft, Phone, Mail, CheckCircle, Quote,
  GraduationCap, FileCheck2, Landmark, Plane, ScrollText, ShieldCheck,
  BriefcaseBusiness, Building2, Sparkles, UserRoundCheck, Map, Ticket,
  Globe, BookOpen, Search, BarChart3, Code, Smartphone, Palette,
  TrendingUp, Monitor, Database, Briefcase, type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, FileCheck2, Landmark, Plane, ScrollText, ShieldCheck,
  BriefcaseBusiness, Building2, Sparkles, UserRoundCheck, Map, Ticket,
  Globe, BookOpen, Search, BarChart3, Code, Smartphone, Palette,
  TrendingUp, Monitor, Database, Briefcase,
};
import { Footer } from "@/components/layout/footer";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MovingShapes } from "@/components/ui/moving-shapes";
import { FloatingParticles } from "@/components/ui/floating-particles";
import type { CompanyPageData } from "@/lib/company-pages-data";

function SectionHeading({ label, title, light = false }: { label: string; title: string; light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className="text-center mb-14" initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      <p className={`text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3 ${light ? "text-white/70" : "text-[var(--teal)]"}`}>{label}</p>
      <h2 className={`font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight ${light ? "text-white" : "text-[var(--navy)]"}`}>{title}</h2>
      <motion.div className={`h-[3px] rounded-full mx-auto mt-5 ${light ? "bg-white/40" : "bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"}`}
        initial={{ width: 0 }} animate={inView ? { width: 60 } : {}} transition={{ duration: 0.8, delay: 0.3 }} />
    </motion.div>
  );
}

export function CompanyPageClient({ data }: { data: CompanyPageData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

   return (
    <>
      <main>
        {/* ═══ HERO — stays pinned, About slides over ═══ */}
        <div className="sticky top-0 z-[1]">
        <section ref={heroRef} className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
            <Image src={data.heroImage} alt={data.fullName} fill priority sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#062a4d]/90 via-[#0a3d6b]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062a4d]/50 to-transparent" />
          <FloatingParticles count={20} className="z-[1] opacity-50" />
          <MovingShapes variant="dark" />

          <motion.div className="relative z-10 flex items-center h-full" style={{ opacity: contentOpacity }}>
            <div className="section-shell px-4">
              <div className="max-w-3xl">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition">
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                  </Link>
                </motion.div>
                {data.logoUrl && (
                  <motion.img src={data.logoUrl} alt={data.fullName} className="h-16 sm:h-20 w-auto mb-5 rounded bg-white/10 backdrop-blur-sm p-2"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} />
                )}
                <motion.h1 className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-white leading-[1.1]"
                  initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                  {data.heroTitle}
                </motion.h1>
                <motion.p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  {data.heroSubtitle}
                </motion.p>
                <motion.div className="mt-6 flex flex-wrap gap-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                  <a href="#contact-company" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-[1.03] transition-all">
                    Get Started <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </a>
                  <a href={`tel:${data.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
        </div>

        {/* ═══ ABOUT — pins behind, Services slides over ═══ */}
        <div className="sticky top-0 z-[2]">
        <section className="py-20 sm:py-28 bg-white relative overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-8px_40px_rgba(0,0,0,0.1)]">
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="WHO WE ARE" title={data.about.title} />
            <AboutBlock data={data} />
          </div>
        </section>
        </div>

        {/* ═══ SERVICES — slides over About ═══ */}
        <section className="relative z-[3] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[var(--gray-50)] shadow-[0_-8px_40px_rgba(0,0,0,0.08)] py-20 sm:py-28 overflow-hidden">
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="WHAT WE OFFER" title="Our Services" />
            <ServicesGrid services={data.services} color={data.color} />
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="relative z-[4] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.08)] py-20 sm:py-28 overflow-hidden">
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="HOW IT WORKS" title="Our Process" />
            <ProcessTimeline steps={data.process} />
          </div>
        </section>

        {/* ═══ STATS — pins behind, WhyChoose slides over ═══ */}
        <div className="sticky top-0 z-[5]">
        <section className="gradient-teal py-16 sm:py-24 overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
          <MovingShapes variant="dark" />
          <motion.div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="OUR IMPACT" title="Numbers That Speak" light />
            <StatsRow stats={data.stats} />
          </div>
        </section>
        </div>

        {/* ═══ WHY CHOOSE — slides over Stats ═══ */}
        <section className="relative z-[6] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.08)] py-20 sm:py-28 overflow-hidden">
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="THE PRANIL ADVANTAGE" title={data.whyChoose.title} />
            <WhyChooseGrid points={data.whyChoose.points} />
          </div>
        </section>

        {/* ═══ GALLERY ═══ */}
        <section className="relative z-[7] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[var(--gray-50)] shadow-[0_-6px_30px_rgba(0,0,0,0.06)] py-20 sm:py-28 overflow-hidden">
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="EXPLORE" title="Gallery" />
            <GalleryGrid gallery={data.gallery} />
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="relative z-[8] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.08)] py-20 sm:py-28 overflow-hidden">
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="WHAT CLIENTS SAY" title="Testimonials" />
            <TestimonialsRow testimonials={data.testimonials} />
          </div>
        </section>

        {/* ═══ CTA / CONTACT ═══ */}
        <section id="contact-company" className="relative z-[9] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] gradient-teal shadow-[0_-8px_40px_rgba(0,0,0,0.1)] py-20 sm:py-28 overflow-hidden">
          <MovingShapes variant="dark" />
          <div className="section-shell px-4 relative z-10 text-center">
            <CtaBlock data={data} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ── Sub-components ── */

function AboutBlock({ data }: { data: CompanyPageData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-2 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
        {data.about.paragraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-base text-[var(--text-muted)] leading-7 mb-4">{p}</p>
        ))}
      </motion.div>
      <motion.div className="relative rounded-2xl overflow-hidden shadow-xl" initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
        <Image src={data.about.image} alt={data.about.title} width={600} height={400} className="object-cover w-full h-[300px] sm:h-[400px]" />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
          animate={{ x: ["-200%", "200%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
      </motion.div>
    </div>
  );
}

function ServicesGrid({ services, color }: { services: CompanyPageData["services"]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {services.map((s, i) => {
        const Icon = iconMap[s.icon] || Globe;
        return (
          <motion.div key={s.title} className="company-card group p-5" initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }}>
            <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              animate={{ y: [0, -3, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}>
              <Icon className="h-5 w-5" />
            </motion.div>
            <h3 className="font-display text-sm font-bold text-[var(--navy)] mb-2">{s.title}</h3>
            <p className="text-xs text-[var(--text-muted)] leading-5">{s.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ProcessTimeline({ steps }: { steps: CompanyPageData["process"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      {steps.map((s, i) => (
        <motion.div key={i} className="flex gap-5 mb-8 last:mb-0" initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}>
          <div className="flex flex-col items-center shrink-0">
            <motion.div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] text-white flex items-center justify-center font-bold text-sm shadow-md"
              animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>
              {i + 1}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div className="w-px flex-1 mt-2 bg-gradient-to-b from-[var(--teal)]/30 to-transparent"
                initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                style={{ transformOrigin: "top" }} />
            )}
          </div>
          <div className="pb-4">
            <h3 className="font-display text-base font-bold text-[var(--navy)]">{s.step}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-6 mt-1">{s.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatsRow({ stats }: { stats: CompanyPageData["stats"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div key={s.label} className="stat-box p-6 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            animate={{ x: ["-200%", "200%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.6 }} />
          <AnimatedCounter value={s.value} suffix={s.suffix} duration={2.5}
            className="font-display text-3xl sm:text-4xl font-bold text-white relative z-10" />
          <p className="mt-2 text-xs text-white/60 font-medium relative z-10">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function WhyChooseGrid({ points }: { points: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
      {points.map((p, i) => (
        <motion.div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-200)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.06 }}>
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}>
            <CheckCircle className="h-5 w-5 text-[var(--teal)] shrink-0 mt-0.5" />
          </motion.div>
          <p className="text-sm text-[var(--text-dark)] font-medium leading-6">{p}</p>
        </motion.div>
      ))}
    </div>
  );
}

function GalleryGrid({ gallery }: { gallery: CompanyPageData["gallery"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {gallery.map((g, i) => (
        <motion.div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}>
          <Image src={g.image} alt={g.caption} fill sizes="(max-width:640px)50vw,33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="absolute bottom-3 left-3 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{g.caption}</p>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{ x: ["-200%", "200%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.8 }} />
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialsRow({ testimonials }: { testimonials: CompanyPageData["testimonials"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid sm:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={i} className="rounded-2xl border border-[var(--gray-200)] bg-white p-6 relative overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.15 }}>
          <motion.div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }} />
          <Quote className="h-8 w-8 text-[var(--teal)]/10 mb-3" />
          <p className="text-sm text-[var(--gray-600)] leading-6 mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--teal)] flex items-center justify-center text-white font-bold text-sm">
              {t.name[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--navy)]">{t.name}</p>
              <p className="text-xs text-[var(--gray-400)]">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CtaBlock({ data }: { data: CompanyPageData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className="max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">{data.ctaTitle}</h2>
      <p className="text-base text-white/70 leading-relaxed mb-8">{data.ctaDescription}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={`tel:${data.phone.replace(/[^+\d]/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-[var(--navy)] shadow-lg hover:scale-[1.03] transition-all">
          <Phone className="h-4 w-4" /> {data.phone}
        </a>
        <a href={`mailto:${data.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all">
          <Mail className="h-4 w-4" /> {data.email}
        </a>
      </div>
      <motion.div className="mt-8" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
