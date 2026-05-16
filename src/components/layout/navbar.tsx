"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

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
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* ─── Main Header ─── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6 lg:py-2">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/logos/main-logo.jpg"
              alt="PRANIL Group of Companies"
              className={`transition-all duration-300 ${scrolled ? "h-10 sm:h-12 lg:h-14" : "h-12 sm:h-14 lg:h-16"} w-auto object-contain`}
            />
          </motion.a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[14px] font-semibold transition-all duration-300 rounded-md group ${
                  scrolled
                    ? "text-[var(--navy)] hover:text-[var(--teal)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Contact button - desktop */}
            <a
              href="#contact"
              className={`hidden lg:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-white shadow-md hover:shadow-lg hover:scale-[1.03]"
                  : "bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              CONTACT US
            </a>

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
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="https://wa.me/919499518218"
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
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
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
              ))}
            </nav>
            <div className="mt-auto space-y-3 pt-6">
              <a href="tel:+917383997679" className="flex items-center gap-2 text-sm font-bold text-[var(--navy)]">
                <Phone className="h-4 w-4 text-[var(--teal)]" /> +91 73839 97679
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
