"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft, Phone, Mail, Check, Play, Star, ChevronDown, ChevronUp,
  MapPin, Clock, Calendar, MessageSquare, ShieldCheck, Heart, Sparkles,
  Compass, Send, ThumbsUp, Globe2, Twitter, Facebook, Instagram,
  Plane, Train, Bus, Hotel, Shield, FileText, Map, Camera, Car, ArrowRight,
  ChevronRight, Users, Award, Headphones, Youtube, Search, Info,
  Palette, Monitor, TrendingUp, Code, Share2, MessageCircle, Bookmark,
  TrendingDown, CheckCircle, ExternalLink, Terminal, Cpu, Menu, X
} from "lucide-react";
import type { CompanyPageData } from "@/lib/company-pages-data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function DigitalMediaCompanyClient({ data }: { data: CompanyPageData }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "Flyer Design", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom states for interactive mockups
  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Auto portfolios in Instagram hero frame
  const [heroPortfolioIndex, setHeroPortfolioIndex] = useState(0);
  const heroPortfolios = [
    { type: "Flyer Design", title: "Premium Travel Poster", tag: "@praniltours", img: "photo-1507525428034-b723cf961d3e" },
    { type: "Carousel post", title: "Study Abroad Roadmap", tag: "@pranileducation", img: "photo-1523240795612-9a054b0db644" },
    { type: "Web Project", title: "Corporate Next.js Portal", tag: "@pranilgroup", img: "photo-1460925895917-afdab827c52f" },
    { type: "Reels Graphic", title: "Animated Event Invite", tag: "@karv_digital", img: "photo-1536240478700-b869070f9279" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroPortfolioIndex((prev) => (prev + 1) % heroPortfolios.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);


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
          ...formData,
          company: "karv",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "Flyer Design", message: "" });
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

  /* ── Service Orbit Mapping ── */
  const serviceOrbit = [
    { title: "Flyer Design", icon: Palette, angle: 0, desc: "Eye-catching, professionally designed flyers that captivate your audience." },
    { title: "Carousel Design", icon: Monitor, angle: 45, desc: "Creative and interactive carousel designs for social media growth." },
    { title: "Videos & Reels", icon: TrendingUp, angle: 90, desc: "High-quality edited and promotional videos that captivate audiences." },
    { title: "Animated Reels", icon: Sparkles, angle: 135, desc: "Captivating animated reels that bring your brand to life with motion." },
    { title: "Web Development", icon: Code, angle: 180, desc: "High-performing websites with stunning visuals and SEO optimization." },
    { title: "Lead Generation", icon: Award, angle: 225, desc: "Result-driven lead generation using targeted marketing funnels." },
    { title: "SEO Services", icon: Search, angle: 270, desc: "Data-driven SEO strategies to boost search rankings and organic traffic." },
    { title: "Social Media", icon: Globe2, angle: 315, desc: "Complete scheduling, content strategy, and community engagement." },
  ];

  /* ── Instagram Carousel slides mockup ── */
  const carouselSlides = [
    { title: "Slide 1: The Problem", content: "90% of brands are ignored because their content doesn't stop the scroll.", bg: "from-[#8B5CF6] to-[#0099FF]" },
    { title: "Slide 2: The Strategy", content: "We analyze competitor gaps and align creative hooks for immediate impact.", bg: "from-[#FF7A00] to-[#8B5CF6]" },
    { title: "Slide 3: The Result", content: "Higher click-through rates, stronger community trust, and passive lead generation.", bg: "from-[#0099FF] to-[#FF7A00]" },
  ];

  const processTimeline = [
    { step: "Concept & Strategy", desc: "We study target profiles and formulate strategic direction." },
    { step: "Storyboarding", desc: "Drafting visual structures, hooks, and content layouts." },
    { step: "Design & Motion", desc: "Creating high-fidelity vector outputs and premium custom animations." },
    { step: "Quality Delivery", desc: "Formats optimization for target channels to assure LCP metrics." }
  ];

  return (
    <div className="bg-[#0F1117] text-[#F8FAFC] min-h-screen font-sans antialiased overflow-x-hidden relative selection:bg-[#FF7A00] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  NAVBAR                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1117]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-[#0099FF] transition-all flex items-center gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <span className="text-white/10">|</span>
            <span className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2">
              <Image src="/logos/karv-logo.png" alt="KARV Media" width={36} height={36} className="w-9 h-9 rounded-xl object-contain" />
              KARV <span className="text-[#0099FF] font-semibold hidden sm:inline">Media</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-9">
            {["Hero", "About", "Services", "Portfolio", "Dashboard", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#0099FF] transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0099FF] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden sm:inline-block relative group overflow-hidden bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-[0_8px_25px_rgba(0,153,255,0.2)] transition-all">
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] transition-transform duration-500" />
          </a>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-[#0F1117] border-b border-white/5 shadow-xl z-40 lg:hidden p-6 space-y-4"
          >
            <div className="flex flex-col gap-4">
              {["Hero", "About", "Services", "Portfolio", "Dashboard", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-[#0099FF] transition py-2 border-b border-white/5"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] text-white text-center text-xs font-black uppercase tracking-widest py-3.5 rounded-xl block mt-2"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  HERO — Giant Instagram Post frame and stats                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-36 px-4 max-w-7xl mx-auto z-10">
        
        {/* Animated Gradient meshes in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#0099FF]/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/10 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-left space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F8FAFC]">Scroll-Stopping Content Agency</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[1.8rem] sm:text-[4rem] lg:text-[4.6rem] font-black leading-[1.05] tracking-tight"
            >
              We Create Content <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] via-[#8B5CF6] to-[#FF7A00]">
                That Stops The Scroll
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-medium"
            >
              Creative Digital Media, Social Growth, Branding & Web Experiences Designed To Make Your Business Impossible To Ignore.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <a href="#portfolio" className="bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] text-white text-[11px] font-black uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(0,153,255,0.3)] transition-all text-center">
                View Portfolio
              </a>
              <a href="#contact" className="border border-white/10 hover:bg-white/5 text-[#F8FAFC] text-[11px] font-black uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-center">
                Start Your Project
              </a>
            </motion.div>

          </div>

          {/* Right Column: Instagram Post mockup & widgets */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
            
            {/* ── Floating growth cards surrounding Instagram post ── */}
            
            {/* Widget 1: Followers Card */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-2 sm:-left-6 z-20 bg-[#161922]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#0099FF]/10 flex items-center justify-center text-[#0099FF]">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Followers</span>
                <span className="text-sm font-black text-white">+<AnimatedCounter value={12482} /></span>
              </div>
            </motion.div>

            {/* Widget 2: Comment Bubble */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-2 sm:-right-6 z-20 bg-[#161922]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-start gap-3 max-w-[180px] sm:max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-[#0099FF]">pranil_travel</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-tight">These reels literally stopped my scroll! 🔥</p>
              </div>
            </motion.div>

            {/* Main Instagram Post Frame */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[320px] sm:max-w-[380px] bg-[#161922] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Instgram Post Header */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#8B5CF6] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#161922] flex items-center justify-center p-[2px]">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0099FF] to-[#8B5CF6]" />
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-black text-white flex items-center gap-1">
                      karv_digital_media
                      <span className="w-3.5 h-3.5 rounded-full bg-[#0099FF] flex items-center justify-center text-[7px] text-white">✓</span>
                    </span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Ahmedabad, Gujarat</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                </div>
              </div>

              {/* Instagram Post Media Wrapper */}
              <div className="aspect-square bg-slate-950 relative overflow-hidden flex items-center justify-center">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroPortfolioIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={`https://images.unsplash.com/${heroPortfolios[heroPortfolioIndex].img}?auto=format&fit=crop&w=500&q=80`} 
                      alt="Portfolio Display" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Media Type Banner Overlay */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[8px] font-black uppercase text-white px-2.5 py-1 rounded-full border border-white/10 tracking-widest z-20">
                      {heroPortfolios[heroPortfolioIndex].type}
                    </div>

                    {/* Dark gradient shadow inside */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                    {/* Post tag overlay */}
                    <div className="absolute bottom-4 left-4 text-left z-20">
                      <span className="text-[9px] text-[#0099FF] font-black tracking-widest block mb-0.5 uppercase">Featured Project</span>
                      <h4 className="text-sm font-black text-white">{heroPortfolios[heroPortfolioIndex].title}</h4>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Action Buttons Row */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <motion.button whileTap={{ scale: 0.8 }} className="hover:text-[#FF7A00] transition">
                    <Heart className="h-5.5 w-5.5 fill-[#FF7A00] text-[#FF7A00]" />
                  </motion.button>
                  <button className="hover:text-[#0099FF] transition">
                    <MessageCircle className="h-5.5 w-5.5" />
                  </button>
                  <button className="hover:text-[#8B5CF6] transition">
                    <Share2 className="h-5.5 w-5.5" />
                  </button>
                </div>
                <button className="text-white hover:text-[#0099FF] transition">
                  <Bookmark className="h-5.5 w-5.5" />
                </button>
              </div>

              {/* Likes & Caption Text */}
              <div className="px-4 pb-5 text-left space-y-1">
                <span className="text-xs font-black text-white">18,492 likes</span>
                <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                  <span className="font-black text-white mr-1.5">karv_digital_media</span>
                  We don&apos;t just market — we build legacies. Delivering scroll-stopping creatives! 🚀
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  ABOUT TIMELINE STORYTELLING                                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-14 sm:py-28 bg-[#161922] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#0099FF] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">About KARV</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">We Don&apos;t Just Market — <br /> We Build Legacies</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Description Text Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              <h3 className="text-xl font-black text-[#0099FF] uppercase tracking-wider">Our Creative Philosophy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                KARV Digital Media & Event Solutions delivers expert website development, social media management, and branding services. We craft creative digital solutions to enhance your brand&apos;s presence and engagement.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                Our team ensures innovation, strategy, and precision in every project. We empower businesses with tailored digital solutions, seamlessly blending creativity and technology to elevate brand visibility, engagement, and growth.
              </p>
            </div>

            {/* Quick Stats Grid Column */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { value: 50, suffix: "+", label: "Clients Served" },
                { value: 200, suffix: "+", label: "Projects Delivered" },
                { value: 100, suffix: "%", label: "Satisfaction Rate" },
                { value: 5, suffix: "+", label: "Industries Covered" }
              ].map((s, idx) => (
                <div key={idx} className="bg-[#0F1117] border border-white/5 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0099FF] to-[#8B5CF6] mb-1">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Process Timeline Rows */}
          <div className="border-t border-white/5 pt-12">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] mb-10 text-center">Our Execution Blueprint</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
              {processTimeline.map((p, idx) => (
                <div key={idx} className="relative bg-[#0F1117]/50 rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-[#0099FF]/20 transition flex flex-col justify-between">
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[1.8rem] sm:text-[2.5rem] font-black text-white/5 select-none leading-none">0{idx + 1}</div>
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider mb-1.5 pr-6 leading-tight min-h-[30px] sm:min-h-0">{p.step}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed font-medium">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  SERVICE ECOSYSTEM — Orbiting service layout                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-14 sm:py-28 bg-[#0F1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#8B5CF6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Service Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Orbiting Brand Modules</h2>
            <p className="text-[11px] text-slate-400 font-medium mt-2">Hover over a module to lock orbit and inspect service description.</p>
            <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#FF7A00] mx-auto rounded-full mt-4" />
          </div>

          {/* Style injection for smooth responsive rotating physics */}
          <style>{`
            @keyframes orbit-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes orbit-unspin {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            .orbit-spin-clockwise {
              animation: orbit-spin 50s linear infinite;
            }
            .orbit-spin-counter {
              animation: orbit-unspin 50s linear infinite;
            }
          `}</style>

          {/* Interactive Orbit Wheel */}
          <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] mx-auto flex items-center justify-center my-10">
            
            {/* Outer dotted orbit paths (static guides) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/5 pointer-events-none" />
            <div className="absolute inset-[15%] rounded-full border border-white/5 pointer-events-none" />

            {/* Glowing static center core */}
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#161922] border-2 border-[#0099FF]/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,153,255,0.15)] z-20 pointer-events-none">
              <span className="text-xs font-black text-white tracking-widest leading-none block">KARV</span>
              <span className="text-[8px] text-[#0099FF] font-black uppercase tracking-wider mt-1">CORE</span>
            </div>

            {/* Rotating system (connecting lines + orbiting modules) */}
            <div 
              className="absolute inset-0 orbit-spin-clockwise flex items-center justify-center"
              style={{ animationPlayState: hoveredService !== null ? "paused" : "running" }}
            >
              
              {/* Radiating connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {serviceOrbit.map((s, idx) => {
                  const angleRad = (s.angle * Math.PI) / 180;
                  const x2 = 50 + Math.cos(angleRad) * 40;
                  const y2 = 50 + Math.sin(angleRad) * 40;
                  return (
                    <line 
                      key={idx} 
                      x1="50" 
                      y1="50" 
                      x2={x2} 
                      y2={y2} 
                      className="stroke-[#0099FF]/20" 
                      strokeWidth="0.3" 
                      strokeDasharray="1 1"
                    />
                  );
                })}
              </svg>

              {/* Orbiting bubble items */}
              {serviceOrbit.map((s, idx) => {
                const IconComp = s.icon;
                const angleRad = (s.angle * Math.PI) / 180;
                
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredService(idx)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="absolute z-10 cursor-pointer"
                    style={{
                      left: `${50 + Math.cos(angleRad) * 40}%`,
                      top: `${50 + Math.sin(angleRad) * 40}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Counter-rotating panel to keep text & icon upright */}
                    <div 
                      className="orbit-spin-counter flex flex-col items-center gap-1.5 w-20 sm:w-28 text-center"
                      style={{ animationPlayState: hoveredService !== null ? "paused" : "running" }}
                    >
                      <motion.div 
                        whileHover={{ scale: 1.12 }}
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border transition-all ${
                          hoveredService === idx 
                            ? "bg-[#0099FF] text-white border-transparent shadow-[0_0_25px_rgba(0,153,255,0.4)]" 
                            : "bg-[#161922] text-[#F8FAFC] border-white/10 hover:border-[#8B5CF6]/40"
                        }`}
                      >
                        <IconComp className="h-5 w-5 sm:h-7 sm:w-7" />
                      </motion.div>
                      
                      {/* Name label text displayed directly */}
                      <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-wider text-slate-400 select-none block max-w-full truncate px-0.5">
                        {s.title}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Description Panel based on selected service */}
          <div className="max-w-xl mx-auto h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredService !== null ? (
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#161922] border border-white/5 p-5 rounded-2xl w-full text-center"
                >
                  <h4 className="text-xs font-black uppercase text-[#0099FF] tracking-wider mb-1">
                    {serviceOrbit[hoveredService].title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {serviceOrbit[hoveredService].desc}
                  </p>
                </motion.div>
              ) : (
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                  Hover over a planetary icon to inspect details
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  PORTFOLIO: FLYER DESIGN SHOWCASE                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-14 sm:py-28 bg-[#161922] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 max-w-lg mx-auto">
            <span className="text-[#FF7A00] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Creative Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Signature Creative Showcase</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#FF7A00] to-[#0099FF] mx-auto rounded-full mt-4" />
          </div>

          {/* Auto-scrolling Showcase columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { img: "photo-1611162617213-7d7a39e9b1d7", title: "Social Campaign Graphic" },
              { img: "photo-1559028012-481c04fa702d", title: "Corporate Branding Flyer" },
              { img: "photo-1501281668745-f7f57925c3b4", title: "Event Launch Flyer" },
              { img: "photo-1460925895917-afdab827c52f", title: "Product Landing Page Mockup" }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4.5] shadow-lg border border-white/5 cursor-pointer"
              >
                <img 
                  src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=400&q=80`} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Details */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <span className="text-[8px] text-[#FF7A00] font-black uppercase tracking-widest block mb-1">Graphic Design</span>
                  <h4 className="text-xs font-black uppercase tracking-wider">{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  CAROUSEL DESIGN SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-28 bg-[#0F1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Swipe details */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#0099FF] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Carousel Post Mockups</span>
              <h2 className="text-3xl font-black text-white leading-tight">Instagram Slide Stacks</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                We craft multi-slide carousel journeys that guide users through a narrative. Experience our swipable stacked presentation to see how we display complex information in a digestible format.
              </p>
              
              <div className="flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCarouselSlide(idx)}
                    className={`w-3.5 h-3.5 rounded-full transition-all border ${
                      activeCarouselSlide === idx 
                        ? "bg-[#0099FF] border-transparent scale-110" 
                        : "bg-transparent border-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Sliding Cards Stack */}
            <div className="lg:col-span-7 relative flex justify-center items-center h-[340px]">
              
              <div className="relative w-full max-w-[420px] h-[280px]">
                {carouselSlides.map((slide, idx) => {
                  
                  // Calculate stacked layer offsets
                  const offset = idx - activeCarouselSlide;
                  const isVisible = offset >= 0 && offset < 3; // display max 3 layers
                  
                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={idx}
                      onClick={() => setActiveCarouselSlide(idx)}
                      animate={{
                        x: offset * 15,
                        y: offset * -12,
                        scale: 1 - offset * 0.05,
                        zIndex: 10 - offset,
                      }}
                      transition={{ duration: 0.4 }}
                      className={`absolute inset-0 rounded-3xl p-8 text-left text-white bg-gradient-to-br ${slide.bg} shadow-2xl flex flex-col justify-between border border-white/10 cursor-pointer origin-center`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/50">KARV SWIPER</span>
                        <span className="text-[10px] font-black text-white/70">0{idx + 1} / 03</span>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-base font-black uppercase tracking-wide">{slide.title}</h4>
                        <p className="text-xs text-white/80 leading-relaxed font-medium">
                          {slide.content}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-white/40">
                        <span>Click card to reveal next</span>
                        <ChevronRight className="h-4.5 w-4.5 text-white/40" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  WEB DEVELOPMENT SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-28 bg-[#0F1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typing Code Mockup */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              <div className="w-full rounded-2xl bg-[#090b0f] border border-white/5 overflow-hidden shadow-2xl font-mono text-xs text-slate-300">
                {/* Window header */}
                <div className="px-4 py-3 bg-[#13161f] border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">digital-media-company-client.tsx</span>
                  <Terminal className="h-4 w-4 text-slate-500" />
                </div>

                {/* Code Body */}
                <div className="p-6 space-y-2.5 overflow-x-auto text-[11px] leading-relaxed">
                  <div>
                    <span className="text-[#8B5CF6]">import</span> NextPage <span className="text-[#8B5CF6]">from</span> <span className="text-[#FF7A00]">&quot;next&quot;</span>;
                  </div>
                  <div>
                    <span className="text-[#8B5CF6]">const</span> <span className="text-[#0099FF]">Metadata</span> = &#123;
                  </div>
                  <div className="pl-4">
                    title: <span className="text-[#FF7A00]">&quot;KARV Digital Media | Web Solutions&quot;</span>,
                  </div>
                  <div className="pl-4">
                    performanceScore: <span className="text-[#0099FF]">100</span>,
                  </div>
                  <div className="pl-4">
                    framework: <span className="text-[#FF7A00]">&quot;Next.js 15&quot;</span>,
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2">
                    <span className="text-[#8B5CF6]">export default function</span> <span className="text-[#0099FF]">renderApp</span>() &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    {"// We compile ultra-responsive interfaces aligned with Next.js static traces."}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#8B5CF6]">return</span> (
                  </div>
                  <div className="pl-8 text-[#0099FF]">
                    &lt;<span className="text-[#FF7A00]">PerformanceDashboard</span> stats=&#123;100&#125; /&gt;
                  </div>
                  <div className="pl-4">);</div>
                  <div>&#125;</div>
                </div>
              </div>

            </div>

            {/* Right Column: Speed details & metric */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#0099FF] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Tech-Stack Architecture</span>
              <h2 className="text-3xl font-black text-white leading-tight">Premium Web Development</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                We design and build clean corporate applications with Next.js, TypeScript, and Tailwind CSS. We ensure every site scores a perfect 100 on PageSpeed core web vitals.
              </p>

              {/* PageSpeed Mock Dial */}
              <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#161922] border border-white/5 max-w-[280px]">
                <div className="relative w-16 h-16 rounded-full border-4 border-dashed border-[#0099FF] flex items-center justify-center animate-spin-slow">
                  <span className="text-base font-black text-white animate-pulse">100</span>
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">LCP Metric</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Passed Core Vitals</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  LEAD GENERATION DASHBOARD                                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="dashboard" className="py-28 bg-[#161922] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Growth statistics */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#FF7A00] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Lead Generation Conversion</span>
              <h2 className="text-3xl font-black text-white leading-tight">Interactive Metrics</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                We track campaigns to optimize conversion rates and maximize returns. See below the live performance mockup of our target integration.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#0F1117] text-left border border-white/5">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-1">Leads</span>
                  <span className="text-sm font-black text-white">
                    <AnimatedCounter value={1492} />
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1117] text-left border border-white/5">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-1">Conv. Rate</span>
                  <span className="text-sm font-black text-[#0099FF]">
                    <AnimatedCounter value={8.4} decimals={1} suffix="%" />
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1117] text-left border border-white/5">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-1">ROI Max</span>
                  <span className="text-sm font-black text-[#FF7A00]">
                    <AnimatedCounter value={340} suffix="%" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic SVG growth chart */}
            <div className="lg:col-span-7 bg-[#0F1117] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest block">Campaign Performance</span>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Conversion Analytics</h4>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0099FF]/10 text-[#0099FF] text-[8px] font-black uppercase tracking-widest">
                  <Sparkles className="h-3 w-3" /> Live
                </div>
              </div>

              {/* Dynamic SVG line graph charting growth */}
              <div className="w-full h-[180px] bg-slate-950/40 rounded-2xl relative overflow-hidden border border-white/5 flex items-end">
                <svg className="w-full h-full text-[#0099FF]" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0099FF" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0099FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Glowing chart path */}
                  <motion.path 
                    d="M 0,25 C 20,20 40,28 60,15 C 80,10 90,5 100,2 L 100,30 L 0,30 Z" 
                    fill="url(#chartGradient)"
                  />
                  <motion.path 
                    d="M 0,25 C 20,20 40,28 60,15 C 80,10 90,5 100,2" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  OUR GOALS SECTION                                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0F1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 max-w-lg mx-auto">
            <span className="text-[#8B5CF6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Our Ambition</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Strategic Growth Goals</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#0099FF] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
            {[
              { title: "Elevate Your Brand", desc: "Build unmatched visibility, positioning, and global reach for your corporate identity.", accent: "border-[#0099FF]/20 text-[#0099FF]" },
              { title: "Drive Growth", desc: "Formulate strategic marketing funnels to scale conversions and sales pipelines.", accent: "border-[#FF7A00]/20 text-[#FF7A00]" },
              { title: "Build Engagement", desc: "Deploy creative content to form long-term communities and customer loyalty.", accent: "border-[#8B5CF6]/20 text-[#8B5CF6]" },
              { title: "Maximize ROI", desc: "Allocate digital budgets efficiently, utilizing smart analytical testing loops.", accent: "border-white/10 text-white" }
            ].map((g, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`bg-[#161922] border rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-lg flex flex-col justify-between ${g.accent}`}
              >
                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                    <CheckCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-xs sm:text-base font-black uppercase tracking-wider mb-1.5 sm:mb-2 text-white leading-tight min-h-[32px] sm:min-h-0">{g.title}</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  PROJECT SHOWCASE                                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#161922] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 max-w-lg mx-auto">
            <span className="text-[#0099FF] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Featured Collaborations</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { client: "Pranil Education Services", details: "Developed full branding graphics, flyer designs, and custom dynamic short form video scripts for study abroad promotion.", img: "photo-1522202176988-66273c2fd55f", link: "/companies/education" },
              { client: "Pranil Tours & Travels", details: "Created stunning video reels compiling scenic tours, managed digital travel campaigns, and designed destination posters.", img: "photo-1488646953014-85cb44e25828", link: "/companies/travel" }
            ].map((proj, idx) => (
              <div key={idx} className="bg-[#0F1117] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 mb-6 relative">
                  <img 
                    src={`https://images.unsplash.com/${proj.img}?auto=format&fit=crop&w=600&q=80`} 
                    alt={proj.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="space-y-3 mb-6">
                  <span className="text-[8px] text-[#0099FF] font-black uppercase tracking-widest">Coordinated Project</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-wider">{proj.client}</h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{proj.details}</p>
                </div>

                <Link href={proj.link} className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#0099FF] hover:translate-x-1 transition-transform">
                  View Division Page <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FOUNDERS / TEAM SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}


      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FINAL CTA & METRICS                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#161922] relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#0099FF]/[0.05] blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready To Make Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] via-[#8B5CF6] to-[#FF7A00]">
              Impossible To Ignore?
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Contact us now to book an expert digital consultation and formulate your scroll-stopping brand campaign strategy.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="#contact" className="bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] text-white text-[11px] font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(0,153,255,0.3)] transition-all">
              Book Consultation
            </a>
            <a href="#portfolio" className="border border-white/10 hover:bg-white/5 text-[#F8FAFC] text-[11px] font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  CONTACT SECTION & FORM                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-[#0F1117] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact coordinates details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="text-left space-y-4">
                <span className="text-[#0099FF] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Get In Touch</span>
                <h2 className="text-3xl font-black text-white leading-tight">Elevate Your Brand Today</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0099FF] to-[#8B5CF6] rounded-full mt-4" />
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed pr-6 pt-3">
                  Reach out to us for flyer and carousel designs, high-impact videos, premium web development, and result-oriented lead generation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call Us Support", val: "+91 63538 18174" },
                  { icon: Mail, label: "Email Support", val: "admin.karv@gmail.com" },
                  { icon: MapPin, label: "Visit Us", val: "525, SV Square, Opp. Nishan Pride,", val2: "New Ranip, Ahmedabad - 382470" }
                ].map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div 
                      key={i} 
                      className="bg-[#161922] rounded-[1.5rem] p-5 border border-white/5 flex items-start gap-4 hover:border-[#0099FF]/20 transition"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0F1117] border border-white/5 text-[#0099FF] flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{c.label}</div>
                        <div className="text-xs font-black text-white">{c.val}</div>
                        {c.val2 && <div className="text-xs font-black text-white">{c.val2}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Inquiries input form */}
            <div className="lg:col-span-7 bg-[#161922]/50 rounded-[2.5rem] p-8 sm:p-10 border border-white/5 shadow-2xl flex flex-col justify-center">
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0099FF]/10 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-[#0099FF]" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400 text-xs font-medium">Your inquiry has been successfully sent. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0F1117] border border-white/5 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0099FF] transition" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0F1117] border border-white/5 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0099FF] transition" 
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0F1117] border border-white/5 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0099FF] transition" 
                        placeholder="you@email.com" 
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Interested Service</label>
                      <select 
                        value={formData.service} 
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0F1117] border border-white/5 rounded-xl px-4 py-3.5 text-xs font-bold text-white focus:outline-none focus:border-[#0099FF] transition appearance-none"
                      >
                        <option>Flyer Design</option>
                        <option>Carousel Design</option>
                        <option>Video Editing & Reels</option>
                        <option>Animated Reels</option>
                        <option>Web Development</option>
                        <option>Lead Generation</option>
                        <option>SEO Services</option>
                        <option>Social Media Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tell Us About Your Brand</label>
                    <textarea 
                      rows={4} 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0F1117] border border-white/5 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0099FF] transition resize-none" 
                      placeholder="Share your goals, timeline, and current social media handles..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#0099FF] via-[#8B5CF6] to-[#FF7A00] text-white text-[11px] font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Send Brief Inquiry <Send className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FOOTER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#090b0f] text-white/40 pt-20 pb-10 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-6 text-left">
              <div className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0099FF] to-[#8B5CF6] flex items-center justify-center">
                  <Sparkles className="h-4.5 w-4.5 text-white" />
                </div>
                KARV <span className="text-[#0099FF]">Media</span>
              </div>
              <p className="text-[11px] leading-relaxed font-medium">
                We don&apos;t just market — we build legacies. Creative digital solutions and event strategies that make your business impossible to ignore.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/1AHGgjP4Qn/" },
                  { Icon: Instagram, href: "https://www.instagram.com/karvdigitalmedia?igsh=c2hxdXgxYWFjOGRp" },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined} className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#0099FF] hover:text-white hover:border-transparent transition">
                    <item.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Hero", "About", "Services", "Portfolio", "Dashboard", "Team", "Contact"].map((l) => (
                  <li key={l}>
                    <a 
                      href={`#${l.toLowerCase()}`}
                      className="text-[11px] text-white/40 hover:text-[#0099FF] transition font-bold uppercase tracking-wider"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Capabilities */}
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Capabilities</h4>
              <ul className="space-y-3">
                {["Flyer Design", "Carousel Post Mockups", "Video Editing", "Reels Animations", "Web Development", "Lead Generation"].map((c) => (
                  <li key={c} className="text-[11px] text-white/40 font-bold uppercase tracking-wider">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Coordinates */}
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Coordinates</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-4.5 w-4.5 text-[#0099FF] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-white/50">+91 63538 18174</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4.5 w-4.5 text-[#0099FF] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-white/50">admin.karv@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-[#0099FF] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-white/50 leading-relaxed">
                    525, SV Square, Opp. Nishan Pride, New Ranip, Ahmedabad - 382470
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Bottom Bar */}
          <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase font-bold text-white/20">
            <p>© {new Date().getFullYear()} KARV Digital Media & Event Solutions. All Rights Reserved.</p>
            <p>A Pranil Group Company</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
