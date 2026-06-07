"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";

interface SectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function SectionOverlay({ isOpen, onClose, title, children }: SectionOverlayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Destroy Lenis completely when overlay opens, recreate when it closes
  useEffect(() => {
    if (!isOpen) return;

    // Fully destroy Lenis so it can't intercept any events
    window.__lenisDestroy?.();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      // Recreate Lenis when overlay closes
      window.__lenisCreate?.();
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Reset scroll position when opening
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={scrollRef}
          className="fixed inset-0 z-[60] flex flex-col bg-white"
          style={{
            overflowY: "scroll",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3 shadow-card">
            <button
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-navy transition hover:bg-crimson/5 active:scale-95"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
            <span className="font-display text-sm font-bold tracking-[0.08em] text-navy uppercase">{title}</span>
          </div>

          {/* Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
