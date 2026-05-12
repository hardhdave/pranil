"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

const overlaySections = new Set(["#destinations", "#recruitment", "#travel"]);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (overlaySections.has(href)) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-section-overlay", { detail: href.replace("#", "") }));
        close();
      } else { close(); }
    }, [close]
  );

  return (
    <>
      {/* ─── Row 1: Top utility bar (cleaned up — only phone + email, no duplicate CTAs) ─── */}
      <div className="hidden lg:block bg-[#1a1a6e] text-white text-[13px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5">
            <a href="tel:+917383997679" className="flex items-center gap-1.5 hover:text-[#f5a623] transition">
              <Phone className="h-3.5 w-3.5" /> +91 73839 97679
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/70">hr@pranilrecruitment.com</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-[#f5a623] transition font-medium">Book Appointment</a>
          </div>
        </div>
      </div>

      {/* ─── Row 2: Logo + tagline + search ─── */}
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src="/logos/main-logo.jpg" alt="PRANIL Group of Companies" className="h-[3.2rem] w-auto" />
          </a>
          <p className="text-sm text-gray-600">
            Building Global Futures – Education, Recruitment & Travel{" "}
            <a href="#about" className="font-semibold text-[#d42a36] hover:underline">Read more</a>
          </p>
        </div>
      </div>

      {/* ─── Row 3: Main nav (sticky) ─── */}
      <motion.header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "border-b border-gray-100"}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 lg:px-6">
          {/* Phone number - left side */}
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <span className="text-[#d42a36] font-bold text-lg">?</span>
            <span className="font-semibold text-[#1a1a6e]">JUST ASK : </span>
            <a href="tel:+917383997679" className="font-bold text-[#1a1a6e] hover:text-[#d42a36] transition">73839 97679</a>
          </div>

          {/* Mobile logo */}
          <a href="#" className="flex items-center gap-2 lg:hidden">
            <img src="/logos/main-logo.jpg" alt="PRANIL Group of Companies" className="h-9 w-auto" />
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-5 text-[15px] font-semibold text-[#1a1a6e] transition hover:text-[#d42a36] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#d42a36] after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-[#1a1a6e] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ─── "ENQUIRE NOW" side tab ─── */}
      <div className="fixed right-0 top-1/3 z-40 hidden lg:block">
        <a
          href="#contact"
          className="flex items-center justify-center bg-[#d42a36] text-white text-xs font-bold tracking-widest px-2 py-6 rounded-l-lg shadow-lg hover:bg-[#b8222d] transition"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          ENQUIRE NOW
        </a>
      </div>

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
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="border-b border-gray-100 px-2 py-4 text-[16px] font-semibold text-[#1a1a6e] hover:text-[#d42a36] transition"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto space-y-3 pt-6">
              <a href="tel:+917383997679" className="flex items-center gap-2 text-sm font-bold text-[#1a1a6e]">
                <Phone className="h-4 w-4 text-[#d42a36]" /> +91 73839 97679
              </a>
              <a href="#contact" onClick={close} className="block w-full rounded-lg bg-[#d42a36] py-3.5 text-center text-sm font-bold text-white shadow-lg">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
