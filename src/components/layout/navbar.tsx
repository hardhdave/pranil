"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-navy/10 bg-white/78 px-4 py-3 shadow-[0_18px_60px_rgba(6,17,31,0.12)] backdrop-blur-2xl">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-royal text-sm font-black text-white">PG</span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-semibold tracking-[0.18em] text-navy">PRANIL</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-navy/50">Group of Companies</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} className="text-sm font-medium text-navy/62 transition hover:text-royal" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <MagneticButton href="#contact" className="px-5 py-2.5" variant="dark">
              Free Consultation
            </MagneticButton>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy/10 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-white/95 backdrop-blur-2xl pt-24 px-6 pb-8 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 text-lg font-semibold text-navy transition active:bg-royal/8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-royal/8 text-xs font-bold text-royal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <a
                href="#contact"
                onClick={close}
                className="block w-full rounded-full bg-navy py-4 text-center text-sm font-bold text-white shadow-premium"
              >
                Book Free Consultation
              </a>
              <p className="mt-4 text-center text-xs text-navy/40">PRANIL Group of Companies</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
