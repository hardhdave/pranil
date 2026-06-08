"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { navItems, companyAddress } from "@/lib/site-data";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";

const companyLinks = [
  { label: "Pranil Education", href: "/companies/education" },
  { label: "Pranil Recruitment", href: "/companies/recruitment" },
  { label: "Pranil Tours & Travel", href: "/companies/travel" },
  { label: "Karv digital media and event solution", href: "/companies/digital-media" }
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Companies", href: "/#companies" },
  { label: "Our Vision", href: "/#vision" },
  { label: "Contact us", href: "/#contact" }
];

export function Footer({ companyLogoUrl }: { companyLogoUrl?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Main footer */}
      <div className="gradient-navy py-10 sm:py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-8 sm:gap-10 grid-cols-2 lg:grid-cols-4">
            {/* Brand + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src={companyLogoUrl || "/logos/main-logo.png"}
                  alt="PRANIL Group of Companies"
                  width={120}
                  height={56}
                  className="h-14 w-auto rounded-md bg-white p-1.5"
                />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Building a better tomorrow through trust, care, commitment and excellence.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/18i3WEoGMT/", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/komal-tiwari-36230266?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/pranil_education_services_llp?igsh=b3dlanZuaXpsZzUy", label: "Instagram" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 hover:bg-[var(--teal)] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-[var(--teal-light)] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[var(--teal-light)] group-hover:w-3 transition-all duration-300" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">Our Companies</h4>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-[var(--teal-light)] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[var(--teal-light)] group-hover:w-3 transition-all duration-300" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm font-bold text-white mb-5 tracking-wider uppercase">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[var(--teal-light)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Phone</p>
                    <a href="tel:+917383997825" className="text-sm text-slate-200 hover:text-white transition">
                      +91 73839 97825 / +91 88499 48279
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[var(--teal-light)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Email</p>
                    <a href="mailto:inquiry.pranileducation@gmail.com" className="text-sm text-slate-200 hover:text-white transition">
                      inquiry.pranileducation@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[var(--teal-light)] mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-300 leading-6">{companyAddress}</p>
                </div>
              </div>

              {/* GET IN TOUCH button */}
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-all duration-300"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#041d33] py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © Copyright PRANIL Group of Companies {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-200 transition">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-200 transition">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed z-50 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-[var(--navy)] text-white shadow-lg hover:bg-[var(--teal)] transition-all duration-300"
        style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))', left: '1.5rem' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        whileHover={{ y: -3 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>
    </footer>
  );
}
