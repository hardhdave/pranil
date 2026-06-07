"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, Phone, X, Mail, GraduationCap, Briefcase, Plane, Globe, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import Image from "next/image";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const dropdownCompanies = [
  {
    name: "Education & Visa",
    slug: "education",
    tagline: "Success is Our New Horizon",
    icon: GraduationCap,
    color: "#991B1B",
    accentColor: "#E11D48",
    subItems: [
      { label: "Student Visa (USA, UK, Canada)", href: "/companies/education#coaching" },
      { label: "Visitor & Tourist Visa", href: "/companies/education#visa-process" },
      { label: "Canada PR & Express Entry", href: "/companies/education#visa-process" },
      { label: "IELTS / PTE / Duolingo Coaching", href: "/companies/education#coaching" }
    ]
  },
  {
    name: "Recruitment Services",
    slug: "recruitment",
    tagline: "Connecting Talent with Opportunity",
    icon: Briefcase,
    color: "#0B4F8A",
    accentColor: "#00A6D6",
    subItems: [
      { label: "Overseas Placements", href: "/companies/recruitment#why-choose-us" },
      { label: "Corporate HR Consultancy", href: "/companies/recruitment#why-choose-us" },
      { label: "Global Talent Acquisition", href: "/companies/recruitment" }
    ]
  },
  {
    name: "Tours & Travel",
    slug: "travel",
    tagline: "Your Journey, Our Passion",
    icon: Plane,
    color: "#0052CC",
    accentColor: "#5ba4e6",
    subItems: [
      { label: "International Holiday Packages", href: "/companies/travel" },
      { label: "Domestic Family Tours", href: "/companies/travel" },
      { label: "Bespoke Corporate Outings", href: "/companies/travel" }
    ]
  },
  {
    name: "KARV Digital Media",
    slug: "digital-media",
    tagline: "We Don't Just Market — We Build Legacies",
    icon: Globe,
    color: "#0077B6",
    accentColor: "#00B4D8",
    subItems: [
      { label: "Brand Strategy & Digital Marketing", href: "/companies/digital-media#services" },
      { label: "Premium Event Solutions", href: "/companies/digital-media#services" },
      { label: "Web Design & Development", href: "/companies/digital-media" }
    ]
  }
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* ─── Ultra-Luxury Champagne Gold Scroll Reading Progress Bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ffb703] via-[var(--teal)] to-[#ffb703] z-[100] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ─── Main Header ─── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.06)] border-gray-100"
            : "bg-[#031526]/85 backdrop-blur-md border-white/5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6 lg:py-2">
          {/* Logo */}
          <motion.a
            href="#"
            className={`flex items-center justify-center bg-white px-4 py-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? "shadow-sm border border-gray-100" 
                : "shadow-lg border border-white/20"
            }`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logos/main-logo.png"
              alt="PRANIL Group of Companies"
              width={160}
              height={50}
              className={`transition-all duration-300 ${scrolled ? "h-8 sm:h-10 lg:h-11" : "h-9 sm:h-11 lg:h-12"} w-auto object-contain`}
              priority
            />
          </motion.a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.label === "Our Companies") {
                return (
                  <div
                    key={item.href}
                    className="relative py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-bold transition-all duration-300 rounded-md ${
                        scrolled
                          ? "text-[var(--navy)] hover:text-[var(--teal)]"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span className="text-[8px] opacity-70 group-hover:rotate-180 transition-transform duration-300">▼</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </button>

                    {/* Desktop Hover Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="absolute left-0 top-full pt-3 z-50"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="w-[340px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(3,21,38,0.12)] border border-slate-100 overflow-hidden">
                            {/* Subtle top accent */}
                            <div className="h-[2px] bg-gradient-to-r from-[var(--teal)] via-[var(--blue)] to-[#ffb703]" />
                            
                            <div className="p-2">
                              {dropdownCompanies.map((comp, idx) => {
                                const CompanyIcon = comp.icon;
                                return (
                                  <a
                                    key={comp.slug}
                                    href={`/companies/${comp.slug}`}
                                    onClick={close}
                                    className="group/item flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 hover:bg-slate-50"
                                  >
                                    {/* Icon */}
                                    <div
                                      className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-200 group-hover/item:shadow-sm"
                                      style={{
                                        backgroundColor: `${comp.color}08`,
                                        borderColor: `${comp.color}18`,
                                        color: comp.color,
                                      }}
                                    >
                                      <CompanyIcon className="h-[18px] w-[18px]" />
                                    </div>
                                    
                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[13.5px] font-bold text-[var(--navy)] leading-tight group-hover/item:text-[var(--teal)] transition-colors duration-200">
                                        {comp.name}
                                      </div>
                                      <div className="text-[10.5px] text-slate-400 font-medium mt-0.5 truncate">
                                        {comp.tagline}
                                      </div>
                                    </div>

                                    {/* Arrow */}
                                    <ChevronRight
                                      className="h-4 w-4 text-slate-300 group-hover/item:text-[var(--teal)] group-hover/item:translate-x-0.5 transition-all duration-200 shrink-0"
                                    />
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-[14px] font-bold transition-all duration-300 rounded-md group ${
                    scrolled
                      ? "text-[var(--navy)] hover:text-[var(--teal)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              );
            })}
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">


            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((p) => !p)}
              className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden transition ${
                scrolled ? "border border-gray-200 text-[var(--navy)]" : "border border-white/20 text-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.div
        className="fixed z-50"
        style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))', right: '1.5rem' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="https://wa.me/917383997825"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
        </a>
      </motion.div>

      {/* ─── Mobile menu ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-white pt-20 px-5 pb-6 lg:hidden"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col overflow-y-auto max-h-[75vh] pr-1">
              {navItems.map((item, i) => {
                if (item.label === "Our Companies") {
                  return (
                    <div key={item.href} className="border-b border-gray-100 py-3">
                      <button
                        onClick={() => setMobileCompaniesOpen(!mobileCompaniesOpen)}
                        className="flex items-center justify-between w-full px-2 py-2 text-[16px] font-semibold text-[var(--navy)] hover:text-[var(--teal)] transition"
                      >
                        <span>{item.label}</span>
                        <span className={`text-[11px] transition-transform duration-300 ${mobileCompaniesOpen ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      
                      <AnimatePresence>
                        {mobileCompaniesOpen && (
                          <motion.div
                            className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-gray-100 text-left"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {dropdownCompanies.map((comp) => {
                              const MobileIcon = comp.icon;
                              return (
                                <div key={comp.slug} className="py-1">
                                  <a
                                    href={`/companies/${comp.slug}`}
                                    onClick={close}
                                    className="text-[14px] font-black text-[var(--navy)] hover:text-[var(--teal)] flex items-center gap-2"
                                  >
                                    <MobileIcon className="h-4 w-4 text-gray-400 shrink-0" />
                                    <span>{comp.name}</span>
                                  </a>
                                <div className="mt-1 flex flex-col gap-2 pl-6">
                                  {comp.subItems.map((sub, sIdx) => (
                                    <a
                                      key={sIdx}
                                      href={sub.href}
                                      onClick={close}
                                      className="text-[12px] text-gray-500 hover:text-[var(--teal)] font-medium"
                                    >
                                      • {sub.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="border-b border-gray-100 px-2 py-4 text-[16px] font-semibold text-[var(--navy)] hover:text-[var(--teal)] transition"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
            <div className="mt-auto space-y-3 pt-6">
              <a href="tel:+917383997825" className="flex items-center gap-2 text-sm font-bold text-[var(--navy)]">
                <Phone className="h-4 w-4 text-[var(--teal)]" /> +91 73839 97825 / +91 88499 48279
              </a>
              <a href="#contact" onClick={close} className="block w-full rounded-lg bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] py-3.5 text-center text-sm font-bold text-white shadow-lg">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
