"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft, ArrowRight, Phone, Mail, Check, Play, Star,
  MapPin, ShieldCheck, UserCheck, Globe2, Twitter,
  Facebook, Instagram, GraduationCap, FileCheck2,
  BookOpen, ScrollText, CheckCircle2, Landmark,
  Award, Plane, Users, Compass, HelpCircle, ChevronRight,
  TrendingUp, Users2, FileText, Globe, Sparkles, Briefcase, Heart, Menu, X, Youtube
} from "lucide-react";
import type { CompanyPageData } from "@/lib/company-pages-data";


/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HELPERS & SUB-COMPONENTS                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#6366F1] text-[11px] font-black uppercase tracking-[0.25em] block mb-2">
      {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-2xl sm:text-[2.2rem] font-black text-[#3730A3] leading-[1.2] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

interface StudentProfile {
  name: string;
  destination: string;
  code: string;
  university: string;
  score: string;
  image: string;
}

function StudentSlideshow() {
  const students: StudentProfile[] = [
    { name: "Priya Sharma", destination: "Canada", code: "ca", university: "University of Toronto", score: "PTE 78 | Study Visa", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&facepad=2&w=400&h=500&q=80" },
    { name: "Aarav Mehta", destination: "Australia", code: "au", university: "University of Melbourne", score: "IELTS 8.0 | Study Visa", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&crop=faces&facepad=2&w=400&h=500&q=80" },
    { name: "Meera Patel", destination: "United Kingdom", code: "gb", university: "Coventry University", score: "IELTS 7.5 | Spouse Pathway", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&facepad=2&w=400&h=500&q=80" },
    { name: "Rohan Shah", destination: "Germany", code: "de", university: "TU Munich", score: "PTE 81 | Work Transit", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&facepad=2&w=400&h=500&q=80" }
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % students.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const active = students[idx];

  return (
    <div className="relative w-full max-w-[240px] bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden group flex flex-col text-left">
      {/* Opacity-only fade — no y-movement prevents any layout shift */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="flex flex-col gap-3"
        >
          {/* Portrait Image */}
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shrink-0 border border-white/5 shadow-sm relative bg-slate-900">
            <img src={active.image} alt={active.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Country badge */}
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 shadow-sm">
              <CircularFlag code={active.code} alt={active.destination} size={5} />
              <span className="text-[8px] font-black uppercase text-indigo-300 tracking-wider">{active.destination}</span>
            </div>
          </div>
          
          {/* Student details */}
          <div className="text-left min-w-0 px-0.5">
            <h4 className="text-[11px] font-black text-white leading-tight mb-0.5">{active.name}</h4>
            <p className="text-[9px] text-slate-400 font-bold leading-tight mb-1.5">{active.university}</p>
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 rounded-md px-2 py-0.5 text-[7px] font-black uppercase tracking-wider text-indigo-300">
              {active.score}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="flex gap-1.5 justify-center mt-3 pt-2 border-t border-white/5">
        {students.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="min-h-0 min-w-0 h-1 rounded-full transition-all duration-300 p-0 border-none outline-none shrink-0"
            style={{ width: idx === i ? "20px" : "6px", backgroundColor: idx === i ? "#6366F1" : "rgba(255, 255, 255, 0.2)" }}
          />
        ))}
      </div>
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [value, inView]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toString());
    });
  }, []);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function RedDivider() {
  return <div className="h-[3px] w-14 bg-gradient-to-r from-[#3730A3] to-[#6366F1] mt-4" />;
}

function CircularFlag({ code, alt, size = 12 }: { code: string; alt: string; size?: number }) {
  let sizeClass = "w-14 h-14";
  if (size === 12) sizeClass = "w-12 h-12";
  if (size === 8) sizeClass = "w-8 h-8";
  if (size === 5) sizeClass = "w-5 h-5";
  return (
    <div className={`${sizeClass} rounded-full border border-white/10 bg-slate-900 flex items-center justify-center overflow-hidden shrink-0 shadow-sm group-hover:scale-110 group-hover:border-[#6366F1] group-hover:shadow-md transition-all duration-500`}>
      <img 
        src={`https://flagcdn.com/w160/${code.toLowerCase()}.png`} 
        alt={alt} 
        className="w-full h-full object-cover scale-105" 
      />
    </div>
  );
}

const universitySlides = [
  {
    name: "Cambridge University",
    location: "Cambridge, United Kingdom",
    image: "/image.png",
    quote: "Invest in yourself. Education pays the best interest.",
    author: "Benjamin Franklin"
  },
  {
    name: "Oxford University",
    location: "Oxford, United Kingdom",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    name: "Harvard University",
    location: "Massachusetts, USA",
    image: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&w=1920&q=80",
    quote: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    name: "University of Toronto",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=1920&q=80",
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    name: "Stanford University",
    location: "Stanford, California, USA",
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&w=1920&q=80",
    quote: "Real education should consist of drawing the goodness and the best out of our own students.",
    author: "Cesar Chavez"
  }
];

// ─── Unified Visa Category Pathways Dashboard ───
interface CountryItem {
  name: string;
  code: string;
  detail: string;
}

interface CategoryData {
  title: string;
  id: string;
  icon: any; // Lucide icon
  intro: string;
  description: string;
  countries: CountryItem[];
  process: { title: string; desc: string }[];
}

function VisaPathwaysDashboard() {
  const [activeTab, setActiveTab] = useState<"student" | "work" | "pr" | "spouse">("student");

  const categories: Record<"student" | "work" | "pr" | "spouse", CategoryData> = {
    student: {
      title: "Student Visa",
      id: "student",
      icon: GraduationCap,
      intro: "Your Gateway to Global Education",
      description: "We help students secure admissions and study visas in top global academic destinations, offering end-to-end guidance from course shortlisting to post-visa settlement.",
      countries: [
        { name: "Australia", code: "au", detail: "Group of Eight universities. High post-study work rights and student lifestyle." },
        { name: "France", code: "fr", detail: "Grandes Écoles and historic business schools. 2-year postgraduate work rights." },
        { name: "New Zealand", code: "nz", detail: "100% of universities in top 3% globally. Secure up to 3 years PGWP." },
        { name: "United Kingdom", code: "gb", detail: "Historic 1-year Masters programs. Graduate route allows 2-year work permit." },
        { name: "Canada", code: "ca", detail: "Top-ranked universities, flexible co-op programs, and PGWP rights up to 3 years." },
        { name: "Germany", code: "de", detail: "Tuition-free public universities. Strong industrial hub with 18-month job seeker visa." },
        { name: "Singapore", code: "sg", detail: "NUS/NTU leading global top 15. World-class financial and technological hub." },
        { name: "United States", code: "us", detail: "Ivy League and research powerhouses. STEM OPT extensions up to 3 years." }
      ],
      process: [
        { title: "Course shortlisting", desc: "Selecting the ideal universities and courses based on budget and goals." },
        { title: "SOP & Admission", desc: "Crafting professional SOPs, LORs, and processing university offers." },
        { title: "Visa File Preparation", desc: "Comprehensive documentation, financial proof checks, and interview drills." },
        { title: "Departure Settlement", desc: "Pre-departure briefings, flight transits, and accommodation help." }
      ]
    },
    work: {
      title: "Work Permit",
      id: "work",
      icon: Briefcase,
      intro: "Global Career & Employment Transits",
      description: "Direct assistance with securing employer-sponsored work permits, visa filing compliance, and professional relocation support.",
      countries: [
        { name: "Europe", code: "eu", detail: "Work permits for Germany, Poland, Portugal, Croatia, and other EU states." },
        { name: "United Kingdom", code: "gb", detail: "Skilled Worker sponsorship visa filing with certified employer matching." },
        { name: "Canada", code: "ca", detail: "LMIA-backed work permit processing and intra-company transfer options." },
        { name: "Australia", code: "au", detail: "TSS subclass 482 and employer-sponsored visa streams." },
        { name: "New Zealand", code: "nz", detail: "Accredited Employer Work Visa (AEWV) pathways for skilled professionals." },
        { name: "Dubai", code: "ae", detail: "Tax-free employment contracts with rapid residency approvals." },
        { name: "Singapore", code: "sg", detail: "Employment Pass (EP) and S Pass work permit sponsorships." }
      ],
      process: [
        { title: "Profile Evaluation", desc: "Assessing candidate CV, work experience, and occupation code matching." },
        { title: "Document Attestation", desc: "Notarizing and attesting degrees, police clearances, and logs." },
        { title: "Contract Approval", desc: "Obtaining and reviewing government-approved work contracts/LMIAs." },
        { title: "Visa Stamping", desc: "Lodging visa application for immediate employment travel permit." }
      ]
    },
    pr: {
      title: "Permanent Residency (PR)",
      id: "pr",
      icon: Landmark,
      intro: "Direct Migration & Long-Term Settlement",
      description: "Step-by-step guidance on points-tested migration systems, skilled worker nominations, and residency acquisition.",
      countries: [
        { name: "Canada", code: "ca", detail: "Express Entry (FSW, CEC), Provincial Nominee Programs (PNP), and Francophone streams." },
        { name: "Australia", code: "au", detail: "SkillSelect points-tested subclass 189, 190 state nomination, and 491 regional paths." },
        { name: "New Zealand", code: "nz", detail: "Green List straight-to-residence and Skilled Migrant residency pathways." },
        { name: "United Kingdom", code: "gb", detail: "Indefinite Leave to Remain (ILR) pathways after qualifying skilled residency." },
        { name: "Germany", code: "de", detail: "EU Blue Card fast-track to permanent settlement in 21-27 months." },
        { name: "Portugal", code: "pt", detail: "Golden Visa, D7, and D2 residency streams leading to permanent status." },
        { name: "Malta", code: "mt", detail: "European PR programs through investment, residency, and real estate options." },
        { name: "United Arab Emirates", code: "ae", detail: "Long-term Golden Visa residency for professionals, specialists, and investors." }
      ],
      process: [
        { title: "Points Calculation", desc: "Acquiring maximum points based on age, education, and language levels." },
        { title: "Skills Assessment", desc: "Verifying qualifications with bodies like WES, ACS, VETASSESS, etc." },
        { title: "EOI Lodgement", desc: "Submitting Expression of Interest profiles in the country's candidate pool." },
        { title: "ITA & Visa Grant", desc: "Receiving Invitation to Apply, filing medicals/backgrounds, and receiving PR." }
      ]
    },
    spouse: {
      title: "Spouse Visa",
      id: "spouse",
      icon: Users,
      intro: "Family Reunification & Partner Sponsorship",
      description: "Reunite with your family with direct, high-success sponsorship pathways allowing your partner to live and work abroad.",
      countries: [
        { name: "Canada", code: "ca", detail: "Spousal sponsorship class with immediate open work permit eligibility." },
        { name: "Australia", code: "au", detail: "Partner subclass 309/100 and 820/801 visas for direct local migration." },
        { name: "New Zealand", code: "nz", detail: "Partnership-based work visas leading to stable resident paths." },
        { name: "United Kingdom", code: "gb", detail: "Family settlement visas with full employment and residence rights." },
        { name: "United States", code: "us", detail: "CR1/IR1 family unification spouse visas for immediate Green Card." },
        { name: "Germany", code: "de", detail: "Family reunion visa for spouses of skilled workers and researchers." },
        { name: "France", code: "fr", detail: "Spouse of French citizen / talent passport partner visa." },
        { name: "Italy", code: "it", detail: "Family cohesion visas and residency registration." },
        { name: "Portugal", code: "pt", detail: "Family reunification pathways under article 98-A." },
        { name: "United Arab Emirates", code: "ae", detail: "Family sponsorship under unified residency portal." }
      ],
      process: [
        { title: "Relationship Audit", desc: "Compiling proof of marriage, cohabitation logs, and financial interdependency." },
        { title: "Sponsor Evaluation", desc: "Reviewing the sponsor's income levels, tax status, and legal declarations." },
        { title: "Immigration Lodgement", desc: "Lodging high-compliance visa files with the target nation's registry." },
        { title: "Biometrics & Stamp", desc: "Completing scans, attending embassy interviews if required, and visa stamp." }
      ]
    }
  };

  const active = categories[activeTab];
  const ActiveIcon = active.icon;

  return (
    <div className="max-w-6xl mx-auto text-left relative z-10 px-4">
      {/* Tab Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => {
          const cat = categories[key];
          const TabIcon = cat.icon;
          const isSelected = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 border text-left ${
                isSelected
                  ? "bg-gradient-to-br from-[#3730A3] to-[#1E1B4B] border-[#3730A3] text-white shadow-lg shadow-[#3730A3]/10 scale-[1.02]"
                  : "bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center border transition duration-300 shrink-0 ${
                isSelected ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-100 text-[#3730A3]"
              }`}>
                <TabIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <div className={`text-[10px] sm:text-xs font-black uppercase tracking-wider leading-tight ${isSelected ? "text-white" : "text-slate-800"}`}>
                  {cat.title}
                </div>
                <div className={`text-[7px] sm:text-[8px] font-bold uppercase tracking-widest mt-0.5 ${isSelected ? "text-[#6366F1]" : "text-slate-400"}`}>
                  Visa Pathway
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Dashboard Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Category Details & Custom Roadmap */}
        <div className="lg:col-span-5 bg-slate-50/50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 min-h-[460px] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-200/60">
              <div className="w-12 h-12 rounded-2xl bg-[#3730A3]/6 text-[#3730A3] flex items-center justify-center border border-[#3730A3]/10 shadow-inner">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[9px] font-black text-[#6366F1] uppercase tracking-[0.2em]">{active.title} Services</span>
                <h3 className="text-lg sm:text-xl font-black text-[#3730A3] uppercase tracking-wide leading-none mt-0.5">{active.intro}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mb-8">
              {active.description}
            </p>

            {/* Custom Interactive Roadmap */}
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Service Action Plan</span>
              <div className="space-y-4">
                {active.process.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-left">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 font-mono text-[10px] font-black text-[#3730A3]">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#3730A3] uppercase tracking-wider leading-none mb-1">{p.title}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold leading-normal">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200/60 mt-8">
            <a
              href="#contact-form"
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#3730A3] to-[#6366F1] hover:from-[#6366F1] hover:to-[#1E1B4B] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-[#3730A3]/10 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#6366F1]/20"
            >
              Consult for {active.title}
            </a>
          </div>
        </div>

        {/* Right Side: Countries Grid */}
        <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-4 sm:p-8 shadow-sm">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Countries & Perks</span>
            <span className="text-[8px] sm:text-[9px] font-mono font-bold bg-[#6366F1]/8 text-[#6366F1] px-2 py-0.5 rounded-full border border-[#6366F1]/15 uppercase">
              {active.countries.length} Destinations
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            {active.countries.map((c, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-[#6366F1]/50 bg-slate-50/20 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <CircularFlag code={c.code} alt={c.name} size={8} />
                <div className="text-left min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-black text-[#3730A3] uppercase tracking-wider mb-0.5 group-hover:text-[#6366F1] transition-colors leading-tight">
                    {c.name}
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-slate-400 leading-normal font-semibold font-sans">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
}

// ─── Cinematic Journey Timeline ───
// ─── Cinematic Journey Timeline (Three-Column Phase Dashboard) ───
function StudentJourney() {
  const phases = [
    {
      title: "Phase I: Foundation & Prep",
      desc: "Laying the groundwork for your international academic path.",
      color: "from-[#3730A3] to-[#6366F1]",
      steps: [
        { title: "Dream", desc: "Envision your global career and destination.", icon: Compass, num: 1 },
        { title: "Prepare", desc: "Profile assessment and university shortlisting.", icon: BookOpen, num: 2 },
        { title: "Learn", desc: "Expert coaching for IELTS, PTE, and French Language.", icon: ScrollText, num: 3 }
      ]
    },
    {
      title: "Phase II: Admissions & Filing",
      desc: "Navigating university applications and visa procedures.",
      color: "from-[#6366F1] to-[#8B5CF6]",
      steps: [
        { title: "Apply", desc: "Structured admissions and scholarship filings.", icon: FileCheck2, num: 4 },
        { title: "Visa Approval", desc: "High-success immigration file reviews.", icon: ShieldCheck, num: 5 },
        { title: "Fly Abroad", desc: "Flight reservations & pre-departure briefs.", icon: Plane, num: 6 }
      ]
    },
    {
      title: "Phase III: Arrival & Success",
      desc: "Succeeding in your studies and launching your global career.",
      color: "from-[#8B5CF6] to-[#3730A3]",
      steps: [
        { title: "Study", desc: "Engage in international university systems.", icon: GraduationCap, num: 7 },
        { title: "Graduate", desc: "Complete degree programs with high grades.", icon: Award, num: 8 },
        { title: "Build Career", desc: "Step directly into global professional markets.", icon: TrendingUp, num: 9 }
      ]
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto py-6 sm:py-12 px-4">
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 relative z-10">
        {phases.map((phase, pIdx) => (
          <motion.div
            key={pIdx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: pIdx * 0.15 }}
            className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative overflow-hidden flex flex-col justify-between group hover:border-[#6366F1]/30 hover:shadow-[0_15px_40px_rgba(99,102,241,0.04)] transition-all duration-500"
          >
            {/* Ambient corner glow */}
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40 -mr-6 -mt-6 bg-gradient-to-br ${phase.color}`} />
            
            <div>
              {/* Phase Header */}
              <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100">
                <span className={`inline-block bg-gradient-to-r ${phase.color} bg-clip-text text-transparent text-[10px] font-black uppercase tracking-widest`}>
                  {phase.title}
                </span>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold mt-1">{phase.desc}</p>
              </div>

              {/* Vertical steps */}
              <div className="space-y-4 sm:space-y-8 relative">
                {/* Vertical connecting line */}
                <div className="absolute top-3 bottom-3 left-[18px] sm:left-6 w-[1.5px] bg-slate-100 z-0">
                  <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className={`w-full h-1/2 bg-gradient-to-b from-transparent via-[#6366F1] to-transparent`}
                  />
                </div>

                {phase.steps.map((s, sIdx) => {
                  const Icon = s.icon;
                  return (
                    <div key={sIdx} className="flex items-start gap-3 text-left relative z-10 group/step">
                      {/* Step Circle Node */}
                      <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover/step:border-[#6366F1] group-hover/step:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 relative bg-white">
                        <Icon className="h-4 w-4 text-[#3730A3] group-hover/step:text-[#6366F1] transition-colors" />
                        <div className="absolute -top-1 -right-1 bg-slate-50 border border-slate-200 text-[6px] font-mono px-1 py-0.5 rounded text-slate-500">
                          {s.num}
                        </div>
                      </div>

                      {/* Step Description */}
                      <div className="pt-0.5 text-left">
                        <h4 className="text-[11px] sm:text-xs font-black text-[#3730A3] uppercase tracking-wider mb-0.5 group-hover/step:text-[#6366F1] transition-colors">
                          {s.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 leading-normal font-semibold">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

}

// Unused visa layouts replaced by VisaPathwaysDashboard

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN PORTAL COMPONENT                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

export function EducationCompanyClient({ data }: { data: CompanyPageData }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const cardsScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % universitySlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlideIdx]);

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
          ...formData,
          company: "pranil-education",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
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

  const chooseCards = [
    { title: "Corporate Training Programs", desc: "Special modules built for professional language and corporate integration.", icon: Landmark },
    { title: "Personality Development & Communication", desc: "Communication skills, accent neutralization, and self-confidence coaching.", icon: UserCheck },
    { title: "End-to-End Support", desc: "Complete assistance from classroom training to university admission and post-visa support.", icon: ShieldCheck },
    { title: "Interactive Classrooms", desc: "Focus on real-time dialogue and daily practice modules.", icon: BookOpen },
    { title: "Four-Core Focus", desc: "Focus on Listening, Reading, Writing & Speaking during training.", icon: ScrollText },
    { title: "Personalized Doubt Sessions", desc: "One-on-one doubt-clearing sessions with certified language experts.", icon: Users },
    { title: "Weekend Activity Forums", desc: "Special weekend activities for real-time communication practice.", icon: Users2 },
    { title: "Individual Attention", desc: "Individual attention and practice for every single student.", icon: Sparkles },
    { title: "Supportive Learning Environment", desc: "Supportive and engaging learning environment in all coaching centers.", icon: Compass },
    { title: "Student Encouragement", desc: "Dedicated activities to encourage, motivate, and guide students.", icon: HelpCircle }
  ];

  return (
    <div className="bg-[#F8FAFF] text-slate-800 min-h-screen font-sans antialiased overflow-hidden relative selection:bg-[#6366F1]/10 selection:text-[#3730A3]">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  1. NAVBAR                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFBFD]/80 backdrop-blur-xl border-b border-slate-100/50 shadow-[0_2px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-[#6366F1] transition-all flex items-center gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <span className="text-slate-200">|</span>
            <span className="text-xl font-black text-[#3730A3] tracking-tight flex items-center gap-2">
              <Image src="/logos/main-logo.png" alt="PRANIL Education" width={36} height={36} className="w-9 h-9 rounded-xl object-contain" />
              PRANIL <span className="text-[#6366F1] font-semibold">Education</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-9">
            {["Home", "About Us", "Destinations", "Training", "Pathways", "Contact"].map((item) => {
              let href = "#";
              if (item !== "Home") {
                if (item === "Contact") {
                  href = "#contact-form";
                } else if (item === "About Us") {
                  href = "#why-us";
                } else {
                  href = `#${item.toLowerCase().replace(/ /g, "-")}`;
                }
              }
              return (
                <a 
                  key={item} 
                  href={href} 
                  className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#6366F1] transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6366F1] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact-form" className="hidden sm:inline-block relative group overflow-hidden bg-gradient-to-r from-[#3730A3] to-[#6366F1] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-[0_8px_25px_rgba(99,102,241,0.25)] transition-all">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#6366F1] to-[#1E1B4B] transition-transform duration-500" />
            </a>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#3730A3] hover:bg-slate-200 transition cursor-pointer"
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
              {["Home", "About Us", "Destinations", "Training", "Pathways", "Contact"].map((item) => {
                let href = "#";
                if (item !== "Home") {
                  if (item === "Contact") {
                    href = "#contact-form";
                  } else if (item === "About Us") {
                    href = "#why-us";
                  } else {
                    href = `#${item.toLowerCase().replace(/ /g, "-")}`;
                  }
                }
                return (
                  <a 
                    key={item} 
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-[#6366F1] transition py-2 border-b border-slate-50"
                  >
                    {item}
                  </a>
                );
              })}
              <a 
                href="#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#3730A3] to-[#6366F1] text-white text-center text-xs font-black uppercase tracking-widest py-3.5 rounded-xl block mt-2"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO — Full-Width Cinematic University Showcase */}
      <section ref={heroRef} className="relative min-h-[100vh] pt-24 pb-24 overflow-hidden z-10 flex items-center bg-slate-950">
        
        {/* Full-bleed background — university campus images at high visibility */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={heroSlideIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              style={{ backgroundImage: `url(${universitySlides[heroSlideIdx].image})` }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            />
          </AnimatePresence>
          {/* Dark overlay gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/20" />
          
          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Main hero content — centered layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-amber-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              PRANIL EDUCATION — TRUSTED IMMIGRATION SERVICES
            </motion.span>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.6rem] sm:text-[4rem] lg:text-[5.2rem] font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              Your Future <br />
              <span className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent italic whitespace-nowrap">
                Has No Borders
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300/90 text-base sm:text-lg leading-[1.8] font-medium max-w-2xl mb-8"
            >
              From expert IELTS/PTE preparation to university admissions, study visas, work permits and permanent residency — we help students and professionals build successful global futures.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <a href="#destinations" className="inline-flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-[#6366F1] hover:to-[#4F46E5] text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35 transition-all hover:scale-[1.03] gap-2">
                Explore Destinations <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#contact-form" className="inline-flex items-center justify-center bg-white/8 border border-white/15 text-white hover:bg-white/12 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all gap-2 hover:scale-[1.03] backdrop-blur-sm">
                Book Free Consultation
              </a>
            </motion.div>

            {/* Dynamic Quote — changes with each university */}
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlideIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#FBBF24] text-3xl font-serif leading-none mt-1 select-none">&ldquo;</div>
                  <div className="flex-1">
                    <p className="text-white/90 italic text-sm sm:text-base font-medium leading-relaxed">
                      {universitySlides[heroSlideIdx].quote}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-[2px] w-6 bg-gradient-to-r from-[#FBBF24] to-[#D97706] rounded-full" />
                      <span className="text-[10px] text-[#FBBF24] uppercase tracking-widest font-black">
                        {universitySlides[heroSlideIdx].author}
                      </span>
                      <span className="text-[9px] text-[#FBBF24] font-bold uppercase tracking-wider">
                        • {universitySlides[heroSlideIdx].name}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
                  <motion.div
                    key={heroSlideIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom-left corner: University Name and Location */}
        <div className="absolute bottom-8 left-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlideIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl shadow-lg"
            >
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black uppercase text-white tracking-widest leading-none mb-1">
                  {universitySlides[heroSlideIdx].name}
                </span>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                  {universitySlides[heroSlideIdx].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom-right corner: Slide Navigation Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
          <button
            onClick={() => setHeroSlideIdx((prev) => (prev - 1 + universitySlides.length) % universitySlides.length)}
            className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-sm shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <div className="flex gap-1.5 items-center">
            {universitySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlideIdx(i)}
                className="h-1.5 rounded-full transition-all duration-300 cursor-pointer p-0 border-none outline-none"
                style={{
                  width: heroSlideIdx === i ? "28px" : "8px",
                  backgroundColor: heroSlideIdx === i ? "#FBBF24" : "rgba(255,255,255,0.25)"
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setHeroSlideIdx((prev) => (prev + 1) % universitySlides.length)}
            className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-sm shadow-md"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>


      {/* ─── Floating statistics Counter grid overlaying Hero Bottom ─── */}
      <div className="relative z-20 max-w-5xl mx-auto -mt-10 px-4">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] px-6 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: 98, suffix: "%", label: "Student Success", text: "Visa Approvals" },
              { val: 15, suffix: "+", label: "Countries Covered", text: "Global Destinations" },
              { val: 8, suffix: "+", label: "Visa Pathways", text: "Immigration Options" },
              { val: 4, suffix: "+", label: "Training Programs", text: "Language Academics" }
            ].map((st, idx) => (
              <div key={idx} className="text-center md:border-r border-slate-100 last:border-0 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-black text-[#3730A3] bg-clip-text mb-1">
                  <Counter value={st.val} suffix={st.suffix} />
                </div>
                <div className="text-[10px] font-black text-[#6366F1] uppercase tracking-wider mb-0.5">{st.label}</div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{st.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. IMMERSIVE DESTINATION & SERVICES CATEGORIES */}
      <section id="destinations" className="py-24 bg-[#EEF2FF]/40 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>GLOBAL PATHWAYS</SectionLabel>
            <SectionTitle>Services & Visa Categories</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>
          <div id="pathways">
            <VisaPathwaysDashboard />
          </div>
        </div>
      </section>

      {/* 4. LANGUAGE TRAINING ECOSYSTEM */}
      <section id="training" className="py-12 sm:py-24 bg-[#F8FAFF] border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <SectionLabel>LANGUAGE ACADEMY</SectionLabel>
            <SectionTitle>Language Training Ecosystem</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {[
              { name: "IELTS", desc: "International English Language Testing System. Comprehensive study paths.", score: "Target Band 7.5+" },
              { name: "PTE", desc: "Pearson Test of English. Fast score releases and certified mock platforms.", score: "Target Score 79+" },
              { name: "French Language", desc: "DELF/TEF training from A1 to B2 levels for Canadian PR and study pathways.", score: "DELF / TEF Prep" },
              { name: "Spoken English", desc: "Accent training, general dialogue, and corporate presentation modules.", score: "Fluency Confident" }
            ].map((lh, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-3.5 sm:p-6 shadow-sm hover:border-[#6366F1] hover:shadow-[0_12px_30px_rgba(99,102,241,0.08)] transition-all duration-300 text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#6366F1]/6 text-[#6366F1] flex items-center justify-center mb-3 sm:mb-5 border border-[#6366F1]/15 group-hover:bg-[#6366F1] group-hover:text-white transition duration-300">
                    <ScrollText className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#3730A3] uppercase tracking-wider mb-1 sm:mb-2 leading-tight">{lh.name}</h3>
                  <p className="text-[9px] sm:text-[11px] text-slate-400 leading-relaxed font-semibold mb-3 sm:mb-4">{lh.desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-2.5 sm:pt-3 flex flex-col xs:flex-row xs:items-center justify-between text-[8px] sm:text-[9px] font-mono font-black uppercase text-[#6366F1] tracking-wider gap-0.5 xs:gap-0">
                  <span>Standard</span>
                  <span className="truncate">{lh.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC JOURNEY MAP */}
      <section id="journey" className="py-24 bg-[#EEF2FF]/40 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>STUDENT TIMELINE</SectionLabel>
            <SectionTitle>Cinematic Professional Journey</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>
          <StudentJourney />
        </div>
      </section>

      {/* 9. WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-[#EEF2FF]/40 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>WHY CHOOSE PRANIL</SectionLabel>
            <SectionTitle>Global Strengths & Assured Support</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {chooseCards.map((cc, idx) => {
              const Icon = cc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-6 shadow-sm hover:border-[#6366F1] hover:shadow-[0_12px_35px_rgba(99,102,241,0.1)] transition-all duration-300 text-left group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#3730A3]/6 text-[#3730A3] flex items-center justify-center mb-3 sm:mb-5 border border-[#3730A3]/10 group-hover:bg-[#3730A3] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-[10px] sm:text-xs font-black text-[#3730A3] uppercase tracking-wider mb-1 sm:mb-2 group-hover:text-[#6366F1] transition-colors leading-tight min-h-[30px] sm:min-h-0">
                    {cc.title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 leading-relaxed font-semibold">
                    {cc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. UNIVERSITY GRADUATE EDITORIAL */}
      <section id="success" className="py-24 bg-[#F8FAFF] border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>GRADUATE STORIES</SectionLabel>
            <SectionTitle>Global Placements & University Futures</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Editorial graphic */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 p-8 min-h-[350px] bg-[#EEF2FF]/50 flex flex-col justify-between text-left group shadow-sm">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/8 flex items-center justify-center text-[#6366F1] border border-[#6366F1]/15">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 font-black uppercase tracking-widest">EDITORIAL v2.0</span>
              </div>
              <div>
                <span className="text-[9px] font-black text-[#6366F1] tracking-widest uppercase block mb-1">GLOBAL FUTURE</span>
                <h3 className="text-xl font-black text-[#3730A3] uppercase tracking-wider mb-3 leading-snug">Empowering Candidates to Excel Worldwide</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold max-w-sm">
                  Our certified counselling team has mapped thousands of students to top ranking universities in UK, Canada, Australia, and USA.
                </p>
              </div>
            </div>

            {/* Stories List */}
            <div className="space-y-6 text-left">
              {[
                { name: "Bindya Mankadya", route: "Canada PR Secured", text: "Their expert guidance helped me secure Canadian PR. Professional, thorough, and always updated." },
                { name: "Hars Patel", route: "Canada Work Permit Approved", text: "Heartfelt gratitude for their invaluable assistance in obtaining my Canadian work permit." },
                { name: "Dhruv Parekh", route: "UK Student Visa Placed", text: "Guided me through the visa process step-by-step, ensuring accurate documentation." }
              ].map((s, idx) => (
                <div key={idx} className="border-b border-slate-200/50 pb-5 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-black text-[#3730A3] uppercase tracking-wider">{s.name}</h4>
                    <span className="text-[9px] font-mono text-[#6366F1] font-black uppercase tracking-wider">{s.route}</span>
                  </div>
                  <p className="text-xs text-slate-500 italic leading-relaxed font-semibold">&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION (Clean background) */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFF] via-[#EEF2FF] to-[#F8FAFF] relative z-10 overflow-hidden border-b border-slate-200/50">
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <SectionLabel>START TODAY</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#3730A3] leading-tight uppercase mb-6">
            Where Will Your Future Take You?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10 font-semibold">
            Start your journey with trusted education, visa and migration experts. Get custom profile evaluation andIntakes updates.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#3730A3] to-[#6366F1] hover:from-[#6366F1] hover:to-[#1E1B4B] text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-[#3730A3]/10 transition-all hover:scale-[1.03]"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS (Marquee) */}
      <section id="testimonials" className="py-24 bg-[#EEF2FF]/40 border-b border-slate-200/50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <SectionTitle>Student Success Feedbacks</SectionTitle>
          <div className="flex justify-center"><RedDivider /></div>
        </div>

        <div className="relative flex overflow-x-hidden w-full py-2">
          <div className="flex animate-marquee-nonstop py-1 shrink-0">
            {data.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-[320px] shrink-0 mr-6 whitespace-normal text-left select-none"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-500" />)}
                </div>
                <p className="text-xs text-slate-500 font-medium italic leading-relaxed mb-6 h-[70px] overflow-hidden">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3730A3]/10 text-[#3730A3] flex items-center justify-center font-black text-xs border border-[#3730A3]/20 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-800 uppercase tracking-wider">{t.name}</div>
                    <div className="text-[9px] text-[#6366F1] font-bold uppercase tracking-widest">{t.role}</div>
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
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-500" />)}
                </div>
                <p className="text-xs text-slate-500 font-medium italic leading-relaxed mb-6 h-[70px] overflow-hidden">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3730A3]/10 text-[#3730A3] flex items-center justify-center font-black text-xs border border-[#3730A3]/20 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-800 uppercase tracking-wider">{t.name}</div>
                    <div className="text-[9px] text-[#6366F1] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-[#F8FAFF] relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>PORTAL ENTRANCE</SectionLabel>
            <SectionTitle>Connect With Certifed Advisers</SectionTitle>
            <div className="flex justify-center"><RedDivider /></div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3730A3] uppercase tracking-wider">Consultation Booked!</h3>
                <p className="text-xs text-slate-400 font-medium mt-2 max-w-sm font-semibold font-mono">A certified counsellor will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3730A3] text-xs font-semibold focus:outline-none focus:border-[#6366F1] transition font-medium" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3730A3] text-xs font-semibold focus:outline-none focus:border-[#6366F1] transition font-medium" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 99999 99999"
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3730A3] text-xs font-semibold focus:outline-none focus:border-[#6366F1] transition font-medium" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Select Program</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3730A3] text-xs font-semibold focus:outline-none focus:border-[#6366F1] transition font-medium">
                      <option value="">Choose global service...</option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Permit</option>
                      <option value="pr">PR Residency</option>
                      <option value="spouse">Spouse Visa</option>
                      <option value="coaching">IELTS/PTE Coaching</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your study abroad or migration preferences..."
                    className="w-full mt-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3730A3] text-xs font-semibold focus:outline-none focus:border-[#6366F1] transition resize-none font-medium" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#3730A3] to-[#6366F1] hover:from-[#6366F1] hover:to-[#1E1B4B] text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-[#3730A3]/10 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#6366F1]/20">
                  Book Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#0B0A1F] text-white relative z-10 border-t border-indigo-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3730A3] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="leading-none">
                  <div className="text-lg font-black text-white tracking-tight">PRANIL</div>
                  <div className="text-[8px] font-bold text-white/40 uppercase tracking-[0.18em] -mt-0.5">Education & Visa</div>
                </div>
              </div>
              <p className="text-xs text-white/40 font-medium leading-relaxed max-w-xs mb-6">
                Connecting exceptional talent and students with global opportunities. High-success admissions and visa transits.
              </p>
              <div className="flex gap-3">
                {[
                  { SIcon: Facebook, href: "https://www.facebook.com/share/18i3WEoGMT/" },
                  { SIcon: Instagram, href: "https://www.instagram.com/pranil_education_services_llp?igsh=b3dlanZuaXpsZzUy" },
                  { SIcon: Youtube, href: "https://youtube.com/@pranileducationservices?si=zISk1AzY8EAwiflh" },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition">
                    <item.SIcon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {["Home", "About Us", "Training", "Destinations", "Timeline", "Contact Us"].map((l) => (
                  <li key={l}><a href="#" className="text-[11px] text-white/40 hover:text-white transition font-medium">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Pathways */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Pathways</h4>
              <ul className="space-y-2.5">
                {["Student Visa", "Work Permit", "PR Residency", "Spouse Visa", "Language Coaching"].map((s) => (
                  <li key={s}><a href="#" className="text-[11px] text-white/40 hover:text-white transition font-medium">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone className="h-3.5 w-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium">{data.phone}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="h-3.5 w-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium">{data.email}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-white/40 font-medium leading-relaxed">525, SV SQUARE, New Ranip,<br />Ahmedabad, Gujarat - 382470</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[10px] text-white/30 font-medium">&copy; {new Date().getFullYear()} Pranil Education Services. All Rights Reserved.</span>
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
        @keyframes marquee-work-permit {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-nonstop {
          animation: marquee-nonstop 25s linear infinite;
        }
        .animate-marquee-work-permit {
          animation: marquee-work-permit 32s linear infinite;
        }
      `}</style>

    </div>
  );
}
