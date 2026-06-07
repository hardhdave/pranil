"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
import { TravelCompanyClient } from "./travel-company-client";
import { EducationCompanyClient } from "./education-company-client";
import { RecruitmentCompanyClient } from "./recruitment-company-client";
import { DigitalMediaCompanyClient } from "./digital-media-company-client";

// Jagged Ripped-Paper Edge Divider SVG
function RippedEdge({ className, color = "#ffffff" }: { className?: string; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full" style={{ fill: color }}>
        <path d="M0,0 Q10,12 20,5 T40,11 T60,3 T80,14 T100,6 T120,12 T140,4 T160,15 T180,6 T200,12 T220,3 T240,14 T260,6 T280,12 T300,3 T320,15 T340,6 T360,12 T380,3 T400,14 T420,6 T440,12 T460,3 T480,15 T500,6 T520,12 T540,3 T560,14 T580,6 T600,12 T620,3 T640,15 T660,6 T680,12 T700,3 T720,14 T740,6 T760,12 T780,3 T800,15 T820,6 L840,12 L860,3 L880,14 L900,6 L920,12 L940,3 L960,15 L980,6 L1000,12 L1020,3 L1040,14 L1060,6 L1080,12 L1100,3 L1120,15 L1140,6 L1160,12 L1180,3 L1200,14 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}

// Organic Curve Sine-Wave Divider SVG
function WaveDivider({ className, color = "#f9fafb", flip = false }: { className?: string; color?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className} ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full" style={{ fill: color }}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17,83.66,22.81,149.57,36.25,219.12,47.74,321.39,56.44Z" />
      </svg>
    </div>
  );
}

function SectionHeading({ label, title, light = false }: { label: string; title: string; light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className="text-center mb-14" initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      <p className={`text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-3 ${light ? "text-white/70" : "text-[var(--teal)]"}`}>{label}</p>
      <h2 className={`font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-black leading-tight ${light ? "text-white" : "text-[var(--navy)]"}`}>{title}</h2>
      <motion.div className={`h-[3px] rounded-full mx-auto mt-5 ${light ? "bg-white/40" : "bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"}`}
        initial={{ width: 0 }} animate={inView ? { width: 60 } : {}} transition={{ duration: 0.8, delay: 0.3 }} />
    </motion.div>
  );
}

export function CompanyPageClient({ data }: { data: CompanyPageData }) {
  if (data.slug === 'travel') {
    return <TravelCompanyClient data={data} />;
  }
  if (data.slug === 'education') {
    return <EducationCompanyClient data={data} />;
  }
  if (data.slug === 'recruitment') {
    return <RecruitmentCompanyClient data={data} />;
  }
  if (data.slug === 'digital-media') {
    return <DigitalMediaCompanyClient data={data} />;
  }
  return <DefaultCompanyClient data={data} />;
}

function DefaultCompanyClient({ data }: { data: CompanyPageData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [scrolledNavbar, setScrolledNavbar] = useState(false);
  const isTravel = data.slug === 'travel';
  
  useEffect(() => {
    const handleScroll = () => setScrolledNavbar(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ─── Pinned Personalized Division Navigation Bar ─── */}
      <nav className={`sticky top-0 z-[45] transition-all duration-500 ${
        scrolledNavbar
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100"
          : "bg-white border-b border-slate-100 py-4.5"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs font-black text-gray-400 hover:text-[var(--teal)] transition flex items-center gap-1 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Group
            </Link>
            <span className="text-gray-200">|</span>
            <Link href={`/companies/${data.slug}`} className="flex items-center gap-2.5">
              {data.logoUrl && (
                <img src={data.logoUrl} alt={data.fullName} className="h-7 w-auto object-contain bg-white rounded-lg p-0.5 shadow-sm border border-gray-100" />
              )}
              <span className="text-xs sm:text-sm font-black text-[var(--navy)] tracking-tight">
                {data.name}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">About</a>
            {isTravel && (
              <a href="#destinations" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Destinations</a>
            )}
            <a href="#services" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Services</a>
            <a href="#process" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Process</a>
            <a href="#why-choose" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Why Us</a>
            {data.blog && (
              <a href="#article" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Article</a>
            )}
            <a href="#testimonials" className="text-[10px] font-black text-gray-500 hover:text-[var(--teal)] transition uppercase tracking-widest">Testimonials</a>
          </div>

          <div>
            <a
              href="#contact-company"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md hover:scale-[1.03] transition-all"
              style={{ backgroundImage: `linear-gradient(135deg, ${data.color} 0%, ${data.color}cc 100%)` }}
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ═══ HERO — stays pinned, About slides over ═══ */}
        <div className="sticky top-0 z-[1]">
          <section ref={heroRef} className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
              <Image src={data.heroImage} alt={data.fullName} fill priority sizes="100vw" className="object-cover" />
            </motion.div>
            <div className={`absolute inset-0 ${isTravel ? 'bg-gradient-to-r from-[#1a3c2a]/90 via-[#1a3c2a]/50 to-transparent' : 'bg-gradient-to-r from-[#031526]/95 via-[#031526]/60 to-transparent'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031526]/50 to-transparent" />
            <FloatingParticles count={25} className="z-[1] opacity-50" />
            <MovingShapes variant="dark" />

            <motion.div className="relative z-10 flex items-center h-full" style={{ opacity: contentOpacity }}>
              <div className="section-shell px-4">
                <div className="max-w-3xl">
                  {data.logoUrl && (
                    <motion.img src={data.logoUrl} alt={data.fullName} className="h-16 sm:h-20 w-auto mb-6 rounded-2xl bg-white p-2.5 shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} />
                  )}
                  <motion.h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                    {data.heroTitle}
                  </motion.h1>
                  <motion.p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-semibold"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    {data.heroSubtitle}
                  </motion.p>
                  <motion.div className="mt-8 flex flex-wrap gap-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <a href="#contact-company" className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-extrabold text-white shadow-2xl hover:scale-[1.03] transition-all"
                      style={{ backgroundImage: `linear-gradient(135deg, ${data.color} 0%, ${data.color}cc 100%)` }}>
                      Get Started <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                    </a>
                    <a href={`tel:${data.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/20 transition-all">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Custom Jagged Ripped Paper bottom border separator */}
            <RippedEdge color="#ffffff" className="absolute bottom-0 left-0 right-0 z-20 h-10" />
          </section>
        </div>

        {/* ═══ ABOUT — pins behind, Services slides over ═══ */}
        <div id="about" className="sticky top-0 z-[2]">
          <section className="py-20 sm:py-28 relative overflow-hidden shadow-[0_-12px_45px_rgba(0,0,0,0.12)]"
            style={{ background: `linear-gradient(180deg, #ffffff 0%, ${data.color}06 50%, #ffffff 100%)` }}>
            <MovingShapes variant="light" />
            {/* Decorative brand glow */}
            <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04] blur-[100px]" style={{ backgroundColor: data.color }} />
            <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.03] blur-[80px]" style={{ backgroundColor: data.color }} />
            <div className="section-shell px-4 relative z-10">
              <SectionHeading label="WHO WE ARE" title={data.about.title} />
              <AboutBlock data={data} />
            </div>
          </section>
        </div>

        {/* ═══ TRAVEL: DESTINATIONS GALLERY ═══ */}
        {isTravel && (
          <section id="destinations" className="relative z-[3] -mt-10 py-20 sm:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #fef9ef 0%, #fff7e6 50%, #fef9ef 100%)' }}>
            <WaveDivider color="#fef9ef" className="absolute -top-0.5 left-0 right-0 h-12 z-20" />
            <div className="section-shell px-4 relative z-10">
              <SectionHeading label="TRENDING DESTINATIONS" title="Explore Beautiful Places" />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', name: 'Dubai', tag: 'UAE' },
                  { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', name: 'Bali', tag: 'Indonesia' },
                  { img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80', name: 'Manali', tag: 'India' },
                  { img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80', name: 'Maldives', tag: 'South Asia' },
                  { img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80', name: 'Singapore', tag: 'Asia' },
                  { img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80', name: 'Rajasthan', tag: 'India' },
                ].map((d, i) => (
                  <motion.div key={d.name} className="relative group rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <Image src={d.img} alt={d.name} fill sizes="(max-width:768px)50vw,33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">{d.tag}</span>
                      <h3 className="text-lg font-black text-white">{d.name}</h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-black text-amber-700 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore →</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ TRAVEL: POPULAR PACKAGES ═══ */}
        {isTravel && (
          <section className="relative z-[3] py-20 sm:py-28 bg-white overflow-hidden">
            <div className="section-shell px-4 relative z-10">
              <SectionHeading label="TOURS FOR TRAVEL THE WORLD" title="Popular Travel Packages" />
              <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { tier: 'Basic Travel', price: '₹499', features: ['Hotel Stay', 'Sightseeing', 'Breakfast'], popular: false },
                  { tier: 'Standard Travel', price: '₹999', features: ['Flight + Hotel', 'Full Board', 'Guided Tours', 'Insurance'], popular: true },
                  { tier: 'Premium Travel', price: '₹1499', features: ['Business Flight', 'Luxury Hotel', 'Private Guide', 'All Inclusive', 'VIP Support'], popular: false },
                ].map((pkg, i) => (
                  <motion.div key={pkg.tier} className={`relative rounded-3xl p-7 text-center border-2 transition-all duration-500 hover:-translate-y-2 ${
                    pkg.popular ? 'border-amber-500 bg-amber-50 shadow-xl shadow-amber-100' : 'border-slate-200 bg-white shadow-md hover:shadow-lg'
                  }`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>}
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">{pkg.tier}</h3>
                    <div className="mt-3 mb-6"><span className="text-4xl font-black text-[var(--navy)]">{pkg.price}</span><span className="text-sm text-slate-400">/person</span></div>
                    <ul className="space-y-3 text-left mb-8">
                      {pkg.features.map(f => <li key={f} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />{f}</li>)}
                    </ul>
                    <a href="#contact-company" className={`block py-3 rounded-xl font-black text-sm uppercase tracking-wider transition-all ${
                      pkg.popular ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>Book Now</a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SERVICES — slides over About ═══ */}
        <section id="services" className="relative z-[3] -mt-10 py-24 sm:py-32 overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.06)]"
          style={{ background: `linear-gradient(180deg, ${data.color}05 0%, ${data.color}08 50%, ${data.color}04 100%)` }}>
          {/* Wave transition curves */}
          <WaveDivider color={`${data.color}05`} className="absolute -top-0.5 left-0 right-0 h-12 z-20" />
          <WaveDivider color="#ffffff" className="absolute -bottom-0.5 left-0 right-0 h-12 z-20" flip />
          {/* Decorative dot grid */}
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${data.color} 1px, transparent 0)`, backgroundSize: '35px 35px' }} />
          
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="WHAT WE OFFER" title="Our Services" />
            <ServicesGrid services={data.services} color={data.color} />
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section id="process" className="relative z-[4] py-20 sm:py-28 overflow-hidden"
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${data.color}04 40%, #ffffff 100%)` }}>
          <MovingShapes variant="light" />
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03] blur-[120px]" style={{ backgroundColor: data.color }} />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="HOW IT WORKS" title="Our Process" />
            <ProcessTimeline steps={data.process} color={data.color} />
          </div>
        </section>

        {/* ═══ STATS — pins behind, WhyChoose slides over ═══ */}
        <div className="sticky top-0 z-[5]">
          <section className="gradient-teal py-20 sm:py-28 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-10px_45px_rgba(0,0,0,0.15)]"
            style={{ background: `linear-gradient(135deg, ${data.color} 0%, #031526 100%)` }}>
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
        <section id="why-choose" className="relative z-[6] -mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-12px_45px_rgba(0,0,0,0.1)] py-20 sm:py-28 overflow-hidden"
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${data.color}06 50%, #ffffff 100%)` }}>
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="THE PRANIL ADVANTAGE" title={data.whyChoose.title} />
            <WhyChooseGrid points={data.whyChoose.points} />
          </div>
        </section>

        {/* ═══ TRAVEL: CALL US BANNER ═══ */}
        {isTravel && (
          <section className="relative z-[7] -mt-6 overflow-hidden">
            <div className="relative py-16" style={{ background: 'linear-gradient(135deg, #fb8500 0%, #ffb703 100%)' }}>
              <div className="section-shell px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white/80 uppercase tracking-widest">Why Choose Us?</p>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">CALL US FOR YOUR DREAM TRIP</h3>
                    </div>
                  </div>
                  <a href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                    className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 text-lg font-black text-amber-600 shadow-xl hover:scale-105 transition-all">
                    <Phone className="h-5 w-5" /> {data.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══ TRAVEL: DESTINATION SHOWCASE ═══ */}
        {isTravel && (
          <section className="relative z-[7] py-20 sm:py-28 bg-white overflow-hidden">
            <div className="section-shell px-4 relative z-10">
              <SectionHeading label="WE RECOMMEND" title="Beautiful Destinations Every Month" />
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80" alt="Travel" fill sizes="40vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Featured</span>
                    <h3 className="text-xl font-black text-white mt-2">Explore New Horizons</h3>
                  </div>
                </div>
                <div className="md:col-span-7 grid grid-cols-2 gap-4">
                  {[
                    { icon: '🌍', label: 'Trusted travel guide', desc: '50+ destinations' },
                    { icon: '🏨', label: 'Premium Hotels', desc: 'Hand-picked stays' },
                    { icon: '✈️', label: 'Best Flights', desc: 'Competitive prices' },
                    { icon: '🛡️', label: 'Travel Insurance', desc: 'Full coverage' },
                  ].map((item, i) => (
                    <motion.div key={item.label} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="text-sm font-black text-[var(--navy)] mt-2">{item.label}</h4>
                      <p className="text-xs text-slate-400 font-semibold mt-1">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══ BLOG ═══ */}
        {data.blog && (
          <section id="article" className="relative z-[7] -mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-8px_40px_rgba(0,0,0,0.06)] py-20 sm:py-28 overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${data.color}05 0%, ${data.color}08 50%, ${data.color}04 100%)` }}>
            <div className="section-shell px-4 relative z-10">
              <SectionHeading label="FEATURED ARTICLE" title={data.blog.title} />
              <BlogBlock blog={data.blog} color={data.color} />
            </div>
          </section>
        )}

        {/* ═══ TESTIMONIALS ═══ */}
        <section id="testimonials" className="relative z-[8] -mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-12px_45px_rgba(0,0,0,0.08)] py-20 sm:py-28 overflow-hidden"
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${data.color}04 50%, #ffffff 100%)` }}>
          <MovingShapes variant="light" />
          <div className="section-shell px-4 relative z-10">
            <SectionHeading label="WHAT CLIENTS SAY" title="Testimonials" />
            <TestimonialsRow testimonials={data.testimonials} color={data.color} />
          </div>
        </section>

        {/* ═══ CTA / CONTACT ═══ */}
        <section id="contact-company" className="relative z-[9] -mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-12px_45px_rgba(0,0,0,0.15)] py-24 sm:py-32 overflow-hidden"
          style={{ background: `linear-gradient(135deg, #031526 0%, ${data.color} 100%)` }}>
          <MovingShapes variant="dark" />
          <div className="section-shell px-4 relative z-10">
            <CtaBlock data={data} />
          </div>
        </section>
      </main>
      <Footer companyLogoUrl={data.logoUrl || undefined} />
    </>
  );
}

/* ── Sub-components ── */

function AboutBlock({ data }: { data: CompanyPageData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
        {data.about.paragraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-base text-slate-600 leading-8 mb-6 font-medium">{p}</p>
        ))}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-2xl">✨</span>
            <span className="text-xs sm:text-sm font-black text-[var(--navy)] uppercase tracking-wider">ISO Certified Standard</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-2xl">🌍</span>
            <span className="text-xs sm:text-sm font-black text-[var(--navy)] uppercase tracking-wider">Global Quality Ethics</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="relative p-2" initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
        {/* Double offset premium frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-[2.5rem] transform rotate-3 scale-95 opacity-20 -z-10 animate-pulse" />
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
          <Image src={data.about.image} alt={data.about.title} width={600} height={400} className="object-cover w-full h-[300px] sm:h-[400px]" />
          
          {/* Floating Premium Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black text-gray-400 tracking-wider uppercase">TRUSTED DIVISION</span>
              <span className="text-xs font-black text-[var(--navy)]">PRANIL Group</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ServicesGrid({ services, color }: { services: CompanyPageData["services"]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => {
        const Icon = iconMap[s.icon] || Globe;
        return (
          <motion.div 
            key={s.title} 
            className="relative overflow-hidden bg-white rounded-3xl p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 group cursor-pointer text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            {/* Hover Accent Backdrop Glow */}
            <div 
              className="absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
              style={{ backgroundColor: color }}
            />
            
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-500 group-hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
            >
              <Icon className="h-6 w-6" />
            </div>
            
            <h3 className="font-display text-lg font-black text-[var(--navy)] mb-3 group-hover:text-[var(--teal)] transition-colors duration-300">
              {s.title}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {s.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ProcessTimeline({ steps, color }: { steps: CompanyPageData["process"]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="max-w-5xl mx-auto flex flex-col items-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 text-left">
        {steps.map((s, i) => (
          <motion.div 
            key={i} 
            className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Stepped Pill Count */}
            <div 
              className="w-10 h-10 rounded-full text-white flex items-center justify-center font-black text-sm shadow-md mb-6"
              style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
            >
              {i + 1}
            </div>
            
            <h3 className="font-display text-base font-extrabold text-[var(--navy)] mb-2">
              {s.step}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1 font-medium">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Highlighted Banner - styled exactly like the travel banner! */}
      <motion.div 
        className="rounded-2xl bg-amber-500/10 border border-amber-500/20 px-6 py-4.5 flex items-center gap-3 max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="text-xl">⭐</span>
        <span className="text-xs sm:text-sm font-black text-amber-800 uppercase tracking-wide">
          Your dreams, delivered with absolute integrity and transparency.
        </span>
      </motion.div>
    </div>
  );
}

function StatsRow({ stats }: { stats: CompanyPageData["stats"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {stats.map((s, i) => (
        <motion.div key={s.label} className="stat-box p-6 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            animate={{ x: ["-200%", "200%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.6 }} />
          <AnimatedCounter value={s.value} suffix={s.suffix} duration={2.5}
            className="font-display text-3xl sm:text-4xl font-black text-white relative z-10" />
          <p className="mt-2 text-xs text-white/60 font-black uppercase tracking-wider relative z-10">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function WhyChooseGrid({ points }: { points: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5 text-left">
      {points.map((p, i) => (
        <motion.div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--gray-50)] border border-[var(--gray-200)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.06 }}>
          <motion.div className="shrink-0 mt-0.5" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}>
            <CheckCircle className="h-5 w-5 text-[var(--teal)]" />
          </motion.div>
          <p className="text-sm text-[var(--text-dark)] font-extrabold leading-6">{p}</p>
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialsRow({ testimonials, color }: { testimonials: CompanyPageData["testimonials"]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="relative max-w-5xl mx-auto py-6">
      {/* Large outline watermark heading behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] -z-10 overflow-hidden">
        <span className="font-display text-[9rem] font-black italic tracking-widest uppercase">
          FEEDBACK
        </span>
      </div>
      
      <div className="grid sm:grid-cols-3 gap-6 relative z-10 text-left">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i} 
            className="rounded-3xl border border-slate-100 bg-white p-6 relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Colored top hover strip */}
            <div 
              className="absolute top-0 left-0 w-full h-[3px]"
              style={{ backgroundColor: color }}
            />
            <Quote className="h-8 w-8 text-slate-200 mb-3" />
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-sm"
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
              >
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-black text-[var(--navy)]">{t.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CtaBlock({ data }: { data: CompanyPageData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          company: "pranil-education",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };
  
  return (
    <div ref={ref} className="max-w-6xl mx-auto text-left grid lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Info & Details */}
      <motion.div 
        className="lg:col-span-5 text-white"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs font-black tracking-widest text-white/70 uppercase">
          GET IN TOUCH WITH US
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6 leading-tight">
          {data.ctaTitle}
        </h2>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 font-medium">
          {data.ctaDescription}
        </p>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Contact Number</p>
              <a href={`tel:${data.phone.replace(/[^+\d]/g, "")}`} className="text-sm sm:text-base font-extrabold text-white hover:underline">
                {data.phone}
              </a>
            </div>
          </div>
          
          {data.phone2 && (
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Alternative Line</p>
                <a href={`tel:${data.phone2.replace(/[^+\d]/g, "")}`} className="text-sm sm:text-base font-extrabold text-white hover:underline">
                  {data.phone2}
                </a>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Email Inquiry</p>
              <a href={`mailto:${data.email}`} className="text-sm sm:text-base font-extrabold text-white hover:underline">
                {data.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Right Column: Interactive Inquiry Form */}
      <motion.div 
        className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_30px_60px_rgba(3,15,30,0.15)] relative overflow-hidden"
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {submitted ? (
          <motion.div 
            className="flex flex-col items-center justify-center text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-5xl mb-4">🎉</span>
            <h3 className="font-display text-xl font-bold text-[var(--navy)]">Thank You!</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-sm font-medium">
              Your inquiry has been logged successfully. A specialist from our team will reach out to you within the next 2 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[var(--navy)] mb-4">
              Send Quick Message
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe" 
                  className="w-full mt-1.5 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[var(--teal)] transition"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com" 
                  className="w-full mt-1.5 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[var(--teal)] transition"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+91 99999 99999" 
                  className="w-full mt-1.5 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[var(--teal)] transition"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Interested Program</label>
                <select 
                  required
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full mt-1.5 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[var(--teal)] bg-white transition"
                >
                  <option value="">Select Option</option>
                  {data.services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Message</label>
              <textarea 
                rows={3}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your requirements briefly..." 
                className="w-full mt-1.5 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[var(--teal)] transition resize-none"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm text-white shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${data.color} 0%, ${data.color}cc 100%)` }}
            >
              Submit Inquiry Details
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

function BlogBlock({ blog, color }: { blog: NonNullable<CompanyPageData["blog"]>; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div ref={ref} className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 border border-slate-100 text-left"
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
      
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-md"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
          <BookOpen className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--navy)]">By {blog.author}</h3>
        <p className="text-xs font-black uppercase tracking-widest mt-1" style={{ color: color }}>{blog.authorRole}</p>
      </div>

      <div className="space-y-10">
        {(expanded ? blog.sections : [blog.sections[0]]).map((section, idx) => (
          <div key={idx} className="relative">
            <h4 className="font-display text-lg sm:text-xl font-black text-[var(--navy)] mb-4 border-l-4 pl-4"
              style={{ borderColor: color }}>
              {section.heading}
            </h4>
            <div className="space-y-4">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {blog.sections.length > 1 && (
        <div className="mt-12 flex justify-center border-t border-slate-100 pt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
          >
            <span>{expanded ? "Read Less" : "Read More"}</span>
            <motion.span
              animate={{ y: expanded ? [-1, -3, -1] : [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {expanded ? "↑" : "↓"}
            </motion.span>
          </button>
        </div>
      )}
      
    </motion.div>
  );
}
