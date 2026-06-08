"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft, Phone, Mail, Check, Star,
  Sparkles, ShieldCheck, Building2, BriefcaseBusiness, Search,
  UserRoundCheck, MapPin, Facebook, Twitter, Instagram, Linkedin,
  CheckCircle2, Users2, Award, Globe, TrendingUp, ArrowRight,
  GraduationCap, HeartPulse, Cpu, Landmark, FileText, Headphones,
  Handshake, Zap, Target, Youtube, Menu, X
} from "lucide-react";
import type { CompanyPageData } from "@/lib/company-pages-data";

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HELPERS & SUB-COMPONENTS                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#00A6D6] text-[11px] font-black uppercase tracking-[0.25em] block mb-2">
      {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-2xl sm:text-[2.2rem] font-black text-[#0B1B3D] leading-[1.2] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

function BlueDivider() {
  return <div className="h-[3px] w-14 bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] mt-4" />;
}

// ─── Inquiry Widget (Quick Hero Contact Bar) ───
function HeroInquiryWidget({ onInquire }: { onInquire: (name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInquire(name, email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-100 shadow-[0_12px_45px_rgba(0,0,0,0.06)] rounded-2xl p-3 flex flex-col md:flex-row items-center gap-3 w-full max-w-xl relative z-20"
    >
      <div className="flex items-center gap-2.5 px-3 py-2 w-full border-b md:border-b-0 md:border-r border-slate-100">
        <Sparkles className="h-5 w-5 text-[#0B4F8A] shrink-0" />
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Full Name..."
          className="w-full text-xs font-semibold text-[#0B1B3D] bg-transparent outline-none placeholder-slate-400"
        />
      </div>

      <div className="flex items-center gap-2.5 px-3 py-2 w-full">
        <Mail className="h-5 w-5 text-[#0B4F8A] shrink-0" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address..."
          className="w-full text-xs font-semibold text-[#0B1B3D] bg-transparent outline-none placeholder-slate-400"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto bg-[#0B4F8A] hover:bg-[#094478] text-white text-xs font-black uppercase tracking-wider px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] transition-all whitespace-nowrap shrink-0"
      >
        Inquire Now
      </button>
    </form>
  );
}

// ─── Flight Network Background Canvas ───
function FlightNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const airports = [
      { name: "Ahmedabad", x: 0.25, y: 0.65 },
      { name: "London", x: 0.45, y: 0.35 },
      { name: "Munich", x: 0.52, y: 0.38 },
      { name: "Singapore", x: 0.75, y: 0.72 },
      { name: "Toronto", x: 0.12, y: 0.38 },
      { name: "Dubai", x: 0.58, y: 0.58 },
      { name: "Sydney", x: 0.88, y: 0.85 },
      { name: "Tokyo", x: 0.85, y: 0.45 }
    ];

    interface FlightPath {
      from: typeof airports[0];
      to: typeof airports[0];
      progress: number;
      speed: number;
    }

    const activeFlights: FlightPath[] = [];

    const spawnFlight = () => {
      if (activeFlights.length >= 8) return;
      const fromIdx = Math.floor(Math.random() * airports.length);
      let toIdx = Math.floor(Math.random() * airports.length);
      while (toIdx === fromIdx) {
        toIdx = Math.floor(Math.random() * airports.length);
      }
      activeFlights.push({
        from: airports[fromIdx],
        to: airports[toIdx],
        progress: 0,
        speed: 0.003 + Math.random() * 0.004
      });
    };

    for (let i = 0; i < 5; i++) {
      spawnFlight();
    }

    let frameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(11, 79, 138, 0.06)";
      ctx.lineWidth = 1;

      // Draw nodes
      airports.forEach((node) => {
        const px = node.x * width;
        const py = node.y * height;

        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#0B4F8A";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 8 + Math.sin(Date.now() * 0.002) * 3, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(11, 79, 138, 0.12)";
        ctx.stroke();

        ctx.fillStyle = "rgba(11, 27, 61, 0.3)";
        ctx.font = "9px sans-serif";
        ctx.fillText(node.name, px + 8, py + 3);
      });

      // Update flights
      for (let i = activeFlights.length - 1; i >= 0; i--) {
        const flight = activeFlights[i];
        flight.progress += flight.speed;

        if (flight.progress >= 1) {
          activeFlights.splice(i, 1);
          spawnFlight();
          continue;
        }

        const x1 = flight.from.x * width;
        const y1 = flight.from.y * height;
        const x2 = flight.to.x * width;
        const y2 = flight.to.y * height;

        const cx = (x1 + x2) / 2;
        const cy = Math.min(y1, y2) - 60; // Curve arc height

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        ctx.strokeStyle = "rgba(11, 79, 138, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const t = flight.progress;
        const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
        const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00A6D6";
        ctx.shadowColor = "#00A6D6";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-60" />;
}

// ─── Logo Marquee (Target reference client logostrip) ───
function ClientLogosMarquee() {
  const logos = ["UBER", "NIVEA", "BOMBARDIER", "IKEA", "UNILEVER", "ACCENTURE", "MICROSOFT", "PRANIL GROUP"];
  const doubleLogos = [...logos, ...logos];

  return (
    <div className="border-y border-slate-100 py-6 bg-slate-50/50 overflow-hidden w-full">
      <div className="flex animate-marquee-logos whitespace-nowrap gap-0 w-max items-center">
        {doubleLogos.map((l, idx) => (
          <span
            key={idx}
            className="text-slate-400 font-black text-sm uppercase tracking-[0.25em] px-12 block select-none"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Target-Style Services Grid ───
interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

function TargetServicesSection({ services }: { services: ServiceItem[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Recruitment": return UserRoundCheck;
      case "Permanent Staffing": return Building2;
      case "Temporary Staffing": return BriefcaseBusiness;
      case "Resume Update": return FileText;
      case "Interview Preparation": return Sparkles;
      default: return Sparkles;
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
      {/* Left side: Heading */}
      <div className="lg:col-span-4 text-left">
        <SectionLabel>OUR SERVICES</SectionLabel>
        <SectionTitle className="mb-4">
          Our HR &<br />Recruitment Services.
        </SectionTitle>
        <BlueDivider />
        <p className="text-slate-500 text-xs sm:text-sm leading-[1.8] mt-6 mb-8 font-medium">
          We offer comprehensive staffing solutions aligned with organizational expectations. Zero placement charges for candidates and verified corporate contracts.
        </p>
        <a
          href="#contact-form"
          className="inline-block bg-[#0B4F8A] hover:bg-[#094478] text-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-md transition-all hover:scale-[1.02]"
        >
          Explore Services
        </a>
      </div>

      {/* Right side: 2x2 grid (hover effects change active cards to solid blue, others remain white) */}
      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 w-full">
        {services.slice(0, 4).map((s, idx) => {
          const Icon = getServiceIcon(s.title);
          const isHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-6 border text-left cursor-pointer transition-all duration-300 relative overflow-hidden select-none ${
                isHovered
                  ? "bg-[#0B4F8A] border-[#0B4F8A] text-white shadow-[0_12px_30px_rgba(11,79,138,0.25)]"
                  : "bg-white border-slate-200/80 text-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.015)]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-colors ${
                  isHovered
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-[#0B4F8A]/6 border-[#0B4F8A]/10 text-[#0B4F8A]"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-2 ${isHovered ? "text-white" : "text-[#0B1B3D]"}`}>
                {s.title}
              </h3>
              <p className={`text-[11px] leading-relaxed font-medium ${isHovered ? "text-white/80" : "text-slate-500"}`}>
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Cinematic Career Journey Route ───
function CareerJourney() {
  const steps = [
    { title: "Apply", desc: "Submit profile to global opportunity gateway.", icon: FileText },
    { title: "Interview", desc: "Tailored preparation with expert review panels.", icon: Users2 },
    { title: "Selection", desc: "Direct pairing with premium corporate enterprises.", icon: CheckCircle2 },
    { title: "Visa", desc: "High-success legal filing & documentation.", icon: ShieldCheck },
    { title: "Departure", desc: "Onboarding transits & global briefings.", icon: Globe },
    { title: "Career Growth", desc: "Long-term progression inside foreign markets.", icon: TrendingUp },
    { title: "Success", desc: "Achieve boundary-free career milestones.", icon: Award }
  ];

  return (
    <div className="relative max-w-6xl mx-auto py-8 px-4">
      <div className="relative">
        {/* Connected Line */}
        <div className="absolute top-8 left-[7.14%] right-[7.14%] h-[2px] bg-slate-100 hidden lg:block z-0 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#0B4F8A] to-transparent"
          />
        </div>

        <div className="grid lg:grid-cols-7 gap-6 relative z-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Node */}
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex items-center justify-center mb-4 group-hover:border-[#0B4F8A] group-hover:shadow-[0_0_20px_rgba(11,79,138,0.15)] transition-all duration-300 relative">
                  <Icon className="h-6 w-6 text-[#0B4F8A] group-hover:text-[#00A6D6] transition-colors" />
                  <div className="absolute -top-1 -right-1 bg-slate-100 border border-slate-200 text-[8px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                    {idx + 1}
                  </div>
                </div>

                <h4 className="text-[12px] font-black text-[#0B1B3D] uppercase tracking-wider mb-2 group-hover:text-[#0B4F8A] transition-colors">
                  {s.title}
                </h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-medium px-2 group-hover:text-slate-600 transition-colors">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Number Counting Animation Component ───
function CountUpNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN PORTAL COMPONENT                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

export function RecruitmentCompanyClient({ data }: { data: CompanyPageData }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolledNav(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.role || "Recruitment Inquiry",
          message: formData.message,
          company: "pranil-recruitment",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", role: "", message: "" });
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

  const handleHeroInquire = (name: string, email: string) => {
    setFormData((prev) => ({ ...prev, name, email }));
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const phoneInput = document.getElementById("phone-input");
        if (phoneInput) phoneInput.focus();
      }, 800);
    }
  };

  const successStories = [
    {
      name: "Pranav Shah",
      from: "Associate Technical Agent (India)",
      to: "Operations Team Lead (Dublin, Ireland)",
      company: "Logistics Enterprise",
      duration: "4 Months Transition",
      avatar: "P"
    },
    {
      name: "Dr. Anjali Desai",
      from: "Clinical Practitioner (Ahmedabad)",
      to: "Senior Medical Consultant (London, UK)",
      company: "Healthcare Trust Network",
      duration: "6 Months Transition",
      avatar: "A"
    },
    {
      name: "Samir Mehta",
      from: "Finance Specialist (Vadodara)",
      to: "Financial Asset Manager (Toronto, Canada)",
      company: "Asset Advisory Corp",
      duration: "5 Months Transition",
      avatar: "S"
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans antialiased overflow-hidden relative selection:bg-[#0B4F8A]/10 selection:text-[#0B4F8A]">

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-tr from-[#0B4F8A]/[0.02] to-[#00A6D6]/[0.03] blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-[#0B4F8A]/[0.02] to-[#00A6D6]/[0.02] blur-[150px]" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  1. NAVBAR                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFBFD]/80 backdrop-blur-xl border-b border-slate-100/50 shadow-[0_2px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-[#0B4F8A] transition-all flex items-center gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <span className="text-slate-200">|</span>
            <span className="text-xl font-black text-[#0B1B3D] tracking-tight flex items-center gap-2">
              <Image src="/logos/recruitment-logo.png" alt="PRANIL Recruitment" width={36} height={36} className="w-9 h-9 rounded-xl object-contain" />
              PRANIL <span className="text-[#0B4F8A] font-semibold">Recruitment</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-9">
            {["Home", "About Us", "Industries", "Services", "Success Stories", "Contact"].map((item) => {
              let href = "#";
              if (item !== "Home") {
                if (item === "Contact") {
                  href = "#contact-form";
                } else if (item === "About Us") {
                  href = "#journey";
                } else {
                  href = `#${item.toLowerCase().replace(/ /g, "-")}`;
                }
              }
              return (
                <a 
                  key={item} 
                  href={href} 
                  className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#0B4F8A] transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B4F8A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact-form" className="hidden sm:inline-block relative group overflow-hidden bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-[0_8px_25px_rgba(0,166,214,0.25)] transition-all">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] transition-transform duration-500" />
            </a>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#0B4F8A] hover:bg-slate-200 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
            className="fixed top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl z-40 lg:hidden p-6 space-y-4"
          >
            <div className="flex flex-col gap-4">
              {["Home", "About Us", "Industries", "Services", "Success Stories", "Contact"].map((item) => {
                let href = "#";
                if (item !== "Home") {
                  if (item === "Contact") {
                    href = "#contact-form";
                  } else if (item === "About Us") {
                    href = "#journey";
                  } else {
                    href = `#${item.toLowerCase().replace(/ /g, "-")}`;
                  }
                }
                return (
                  <a 
                    key={item} 
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-[#0B4F8A] transition py-2 border-b border-slate-50"
                  >
                    {item}
                  </a>
                );
              })}
              <a 
                href="#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-center text-xs font-black uppercase tracking-widest py-3.5 rounded-xl block mt-2"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO — Premium Light-Theme Dashboard */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden z-10 flex items-center bg-gradient-to-b from-[#F5F8FC]/60 via-white to-white">
        
        {/* Particle / flight canvas background */}
        <FlightNetworkCanvas />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[#0B4F8A] text-[10px] font-black uppercase tracking-[0.25em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F8A]" />
                PRANIL RECRUITMENT SERVICES
              </span>

              <h1 className="font-display text-[2.8rem] sm:text-[3.8rem] lg:text-[4.2rem] font-black text-[#0B1B3D] leading-[1.1] mb-6 tracking-tight">
                Your Career<br />
                <span className="bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] bg-clip-text text-transparent italic">
                  Has No Borders
                </span>
              </h1>

              <p className="text-slate-500 text-sm leading-[1.8] font-semibold max-w-lg mb-8">
                Send us a quick inquiry. We connect exceptional talent with global opportunities across multiple industries.
              </p>

              {/* Quick inquiry widget */}
              <div className="mb-6">
                <HeroInquiryWidget onInquire={handleHeroInquire} />
              </div>

              {/* Micro badge indicator */}
              <div className="flex items-center gap-2 text-slate-400 text-[9px] font-mono uppercase tracking-wider">
                <span className="text-[#0B4F8A] font-bold">500+</span> Corporate Partners <span className="text-slate-300">•</span> <span className="text-[#0B4F8A] font-bold">10K+</span> Placed Candidates
              </div>
            </div>

            {/* Right side: Circular frame representation from reference */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-20">
              <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
                
                {/* Dotted border guides floating around */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-15px] rounded-full border border-dashed border-[#0B4F8A]/25 pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-5px] rounded-full border border-[#00A6D6]/15 pointer-events-none"
                />

                {/* Overlapping Blue solid decorative circle accent */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#0B4F8A]/8 z-0 animate-pulse" />

                {/* Circular image mask */}
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Professional recruitment candidate"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>

                {/* Floating metrics badge card 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -left-12 bg-white border border-slate-100 rounded-xl p-3 shadow-xl z-20 flex items-center gap-2.5 max-w-[170px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#0B1B3D] leading-none uppercase">98% Success</div>
                    <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Visa Approvals</div>
                  </div>
                </motion.div>

                {/* Floating metrics badge card 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 -right-8 bg-white border border-slate-100 rounded-xl p-3 shadow-xl z-20 flex items-center gap-2.5 max-w-[170px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B4F8A] flex items-center justify-center shrink-0 border border-blue-100">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#0B1B3D] leading-none uppercase">Global Reach</div>
                    <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">8 Major Sectors</div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARTNER LOGO STRIP */}
      <ClientLogosMarquee />

      {/* 4. CINEMATIC PROCESS JOURNEY */}
      <section id="journey" className="py-24 border-b border-slate-100 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>CAREER JOURNEY</SectionLabel>
            <SectionTitle>Cinematic Professional Transit</SectionTitle>
            <div className="flex justify-center"><BlueDivider /></div>
          </div>
          <CareerJourney />
        </div>
      </section>

      {/* 5. SERVICE GRID (Target-style layout) */}
      <section id="services" className="py-24 bg-slate-50/50 border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <TargetServicesSection services={data.services} />
        </div>
      </section>

      {/* 6. TAILORED SOLUTIONS BLOCK (Target reference split layout) */}
      <section className="py-24 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 bg-slate-50/30">
            
            {/* Left: Solid blue card */}
            <div className="md:col-span-5 bg-[#0B4F8A] text-white p-8 sm:p-10 flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] block mb-2">GROWTH ASSURED</span>
                <h3 className="text-2xl font-black uppercase tracking-wide leading-tight mb-4">
                  Tailored<br />Solutions For<br />Your Needs
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  We select the right candidates for growing your organization, matching skillset expectations accurately.
                </p>
              </div>

              <a
                href="#contact-form"
                className="mt-8 inline-block bg-white text-[#0B4F8A] text-[10px] font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-md transition-all hover:scale-[1.02] text-center w-full md:w-auto"
              >
                Inquire Now
              </a>
            </div>

            {/* Right: Meeting photo */}
            <div className="md:col-span-7 relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Corporate onboarding consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* 7. FLOATING INDUSTRIES */}
      <section id="industries" className="py-24 bg-slate-50/50 border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>INDUSTRIES WE SERVE</SectionLabel>
            <SectionTitle>Empowering Sectors With Right Talent</SectionTitle>
            <div className="flex justify-center"><BlueDivider /></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Education", desc: "Global academic institutes & study transits.", icon: GraduationCap },
              { name: "BPO", desc: "MNC business operations support.", icon: Headphones },
              { name: "KPO", desc: "High-end knowledge & analytics services.", icon: Cpu },
              { name: "Finance", desc: "Investment, portfolio, & audit sectors.", icon: TrendingUp },
              { name: "Banking", desc: "Retail & institutional banking channels.", icon: Landmark },
              { name: "Healthcare", desc: "International clinical & healthcare boards.", icon: HeartPulse },
              { name: "IT", desc: "Enterprise systems, SaaS, & infrastructure.", icon: Globe },
              { name: "Non IT", desc: "Engineering, management & logistics.", icon: BriefcaseBusiness }
            ].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, border: "1px solid rgba(11, 79, 138, 0.25)" }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300 group cursor-pointer text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0B4F8A]/6 text-[#0B4F8A] flex items-center justify-center mb-5 group-hover:bg-[#0B4F8A] group-hover:text-white transition duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider mb-2">{ind.name}</h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium">{ind.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS STORIES */}
      <section id="success-stories" className="py-24 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>SUCCESS STORIES</SectionLabel>
            <SectionTitle>Career Growth Transformations</SectionTitle>
            <div className="flex justify-center"><BlueDivider /></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successStories.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm text-left hover:border-[#0B4F8A]/30 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#0B4F8A]/10 text-[#0B4F8A] flex items-center justify-center font-black text-sm border border-[#0B4F8A]/20">
                      {s.avatar}
                    </div>
                    <span className="text-[8px] font-mono bg-slate-100 border border-slate-200 text-slate-500 px-2 py-0.5 rounded uppercase">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-[#0B1B3D] uppercase tracking-wider mb-4">{s.name}</h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">PREVIOUS STATUS</div>
                      <div className="text-[11px] font-semibold text-slate-500">{s.from}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[#0B4F8A] uppercase tracking-wider">TRANSIT STATUS</div>
                      <div className="text-[11px] font-black text-[#0B1B3D]">{s.to}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  PLACED AT: <span className="text-[#0B4F8A]">{s.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <SectionTitle>Platform Strengths & Values</SectionTitle>
            <div className="flex justify-center"><BlueDivider /></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Industry Expertise", desc: "Expert recruiters across BPO, KPO, Finance, Healthcare, and IT systems.", icon: Target },
              { title: "Quality Matching", desc: "Precise candidate-to-corporate profile matching metrics.", icon: Sparkles },
              { title: "Professional Team", desc: "Dedicated global transit and visa consultants guiding you at each point.", icon: Users2 },
              { title: "Fast Hiring", desc: "Rapid processing times and direct client routing channels.", icon: Zap },
              { title: "Long Term Relationships", desc: "Building lifelong business relationships and continuous career tracking.", icon: Handshake },
              { title: "Multi Sector Coverage", desc: "Deep connections across IT and non-IT sectors, domestic and foreign markets.", icon: Globe }
            ].map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 text-left hover:border-[#0B4F8A]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0B4F8A]/6 text-[#0B4F8A] flex items-center justify-center mb-5 border border-[#0B4F8A]/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider mb-2">{pt.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. STATS COUNTER BAR */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {[
              { val: 800, suffix: "+", label: "Successful Placements" },
              { val: 150, suffix: "+", label: "Corporate Clients" },
              { val: 100, suffix: "%", label: "Free Candidate Charges" },
              { val: 95, suffix: "%", label: "Satisfaction Rate" }
            ].map((s, i) => (
              <div key={i} className="text-center flex-1 min-w-[140px]">
                <div className="text-3xl font-black text-[#0B4F8A] bg-clip-text">
                  <CountUpNumber value={s.val} suffix={s.suffix} />
                </div>
                <div className="text-[9px] text-slate-400 uppercase tracking-widest font-black mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA SECTION (Light skyline outline) */}
      <section className="py-24 bg-gradient-to-tr from-blue-50/50 via-white to-white relative z-10 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B4F8A]/10 to-transparent" />
          <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path d="M0,200 L50,150 L80,180 L120,130 L160,190 L200,140 L250,170 L300,100 L350,190 L400,150 L450,160 L500,80 L550,180 L600,130 L650,150 L700,90 L750,180 L800,140 L850,160 L900,110 L950,170 L1000,130 L1000,200 Z" fill="rgba(11,79,138,0.06)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <SectionLabel>THE NEXT CHAPTER</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] leading-tight uppercase mb-6">
            The Next Chapter Of Your<br />Career Starts Here
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10 font-semibold">
            Register with PRANIL Recruitment Services today. Zero candidate fees, expert mentoring, and verified global opportunities.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-[#0B4F8A] hover:bg-[#094478] text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.03]"
          >
            Create Your Profile Now
          </a>
        </div>
      </section>

      {/* 13. TESTIMONIALS (Marquee) */}
      <section id="testimonials" className="py-24 bg-white border-b border-slate-100 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <SectionTitle>Global Transit Feedback</SectionTitle>
          <div className="flex justify-center"><BlueDivider /></div>
        </div>

        <div className="relative flex overflow-x-hidden w-full py-2">
          <div className="flex animate-marquee-nonstop py-1 shrink-0">
            {data.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-[320px] shrink-0 mr-6 whitespace-normal text-left select-none"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-[#00A6D6]" />)}
                </div>
                <p className="text-xs text-slate-500 font-medium italic leading-relaxed mb-6 h-[70px] overflow-hidden">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B4F8A]/10 text-[#0B4F8A] flex items-center justify-center font-black text-xs border border-[#0B4F8A]/20 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider">{t.name}</div>
                    <div className="text-[9px] text-[#0B4F8A] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-nonstop py-1 shrink-0" aria-hidden="true">
            {data.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-[320px] shrink-0 mr-6 whitespace-normal text-left select-none"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-[#00A6D6]" />)}
                </div>
                <p className="text-xs text-slate-500 font-medium italic leading-relaxed mb-6 h-[70px] overflow-hidden">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B4F8A]/10 text-[#0B4F8A] flex items-center justify-center font-black text-xs border border-[#0B4F8A]/20 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider">{t.name}</div>
                    <div className="text-[9px] text-[#0B4F8A] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-[#F8FAFC] relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>PORTAL ENTRANCE</SectionLabel>
            <SectionTitle>Connect With Global Coordinators</SectionTitle>
            <div className="flex justify-center"><BlueDivider /></div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0B1B3D] uppercase tracking-wider">Profile Submitted!</h3>
                <p className="text-xs text-slate-400 font-medium mt-2 max-w-sm font-semibold">A talent transit coordinator from PRANIL Recruitment Services will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-xs font-semibold focus:outline-none focus:border-[#0B4F8A] transition font-medium" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-xs font-semibold focus:outline-none focus:border-[#0B4F8A] transition font-medium" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input id="phone-input" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 99999 99999"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-xs font-semibold focus:outline-none focus:border-[#0B4F8A] transition font-medium" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Looking For</label>
                    <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Hiring / Job Search"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-xs font-semibold focus:outline-none focus:border-[#0B4F8A] transition font-medium" />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your career requirements..."
                    className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-xs font-semibold focus:outline-none focus:border-[#0B4F8A] transition resize-none font-medium" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:shadow-lg transition-all hover:scale-[1.01]">
                  Submit Profile
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#0B1B3D] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B4F8A] to-[#00A6D6] flex items-center justify-center text-white shadow-md">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="leading-none">
                  <div className="text-lg font-black text-white tracking-tight">PRANIL</div>
                  <div className="text-[8px] font-bold text-white/40 uppercase tracking-[0.18em] -mt-0.5">Recruitment Services</div>
                </div>
              </div>
              <p className="text-xs text-white/40 font-medium leading-relaxed max-w-xs mb-6">
                Connecting exceptional talent with global opportunities across multiple industries. Zero placement charges for candidates.
              </p>
              <div className="flex gap-3">
                {[
                  { SIcon: Facebook, href: "https://www.facebook.com/share/18jzwzF5fx/" },
                  { SIcon: Linkedin, href: "#" },
                  { SIcon: Instagram, href: "https://www.instagram.com/pranil_recruitment_services?igsh=MTMyanQ5b2V0cWV3Ng==" },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition">
                    <item.SIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {["Home", "About Us", "Services", "Industries", "Our Process", "Contact Us"].map((l) => (
                  <li key={l}><a href="#" className="text-[11px] text-white/40 hover:text-white transition font-medium">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Our Services</h4>
              <ul className="space-y-2.5">
                {["Recruitment", "Permanent Staffing", "Temporary Staffing", "Resume Update", "Interview Preparation"].map((s) => (
                  <li key={s}><a href="#" className="text-[11px] text-white/40 hover:text-white transition font-medium">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium">{data.phone}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium">{data.email}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium leading-relaxed">525, SV SQUARE, New Ranip,<br />Ahmedabad, Gujarat - 382470</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[10px] text-white/30 font-medium">&copy; {new Date().getFullYear()} Pranil Recruitment Services. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="text-[10px] text-white/30 hover:text-white/60 transition font-medium">Privacy Policy</a>
              <a href="#" className="text-[10px] text-white/30 hover:text-white/60 transition font-medium">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS marquee overrides */}
      <style jsx global>{`
        @keyframes marquee-nonstop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-logos {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-nonstop {
          animation: marquee-nonstop 25s linear infinite;
        }
        .animate-marquee-logos {
          animation: marquee-logos 28s linear infinite;
        }
      `}</style>

    </div>
  );
}
