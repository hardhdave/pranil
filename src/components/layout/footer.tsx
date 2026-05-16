"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { navItems, companyContacts, companyAddress } from "@/lib/site-data";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";

const companyLinks = [
  "Pranil Education",
  "Pranil Recruitment",
  "Pranil Tours & Travel",
  "Pranil KBV"
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Companies", href: "#companies" },
  { label: "Our Vision", href: "#vision" },
  { label: "News & Events", href: "#news" },
  { label: "Contact us", href: "#contact" }
];

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Main footer */}
      <div className="gradient-navy py-16 sm:py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logos/main-logo.jpg"
                  alt="PRANIL Group of Companies"
                  className="h-14 w-auto rounded-md bg-white p-1.5"
                />
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Building a better tomorrow through trust, care, commitment and excellence.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
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
                      className="text-sm text-white/50 hover:text-[var(--teal-light)] transition-colors duration-300 flex items-center gap-2 group"
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
                {companyLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#companies"
                      className="text-sm text-white/50 hover:text-[var(--teal-light)] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[var(--teal-light)] group-hover:w-3 transition-all duration-300" />
                      {label}
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
                {companyContacts.slice(0, 2).map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[var(--teal-light)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/40 font-medium">{c.label}</p>
                      <a href={`tel:${c.phone.replace(/[^+\d]/g, "")}`} className="text-sm text-white/70 hover:text-white transition">
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[var(--teal-light)] mt-0.5 shrink-0" />
                  <p className="text-xs text-white/40 leading-5">{companyAddress}</p>
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © Copyright PRANIL Group of Companies {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 grid h-10 w-10 place-items-center rounded-full bg-[var(--navy)] text-white shadow-lg hover:bg-[var(--teal)] transition-all duration-300"
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
