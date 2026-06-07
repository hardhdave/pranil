"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Expose lenis instance globally so overlays can destroy/recreate it
declare global {
  interface Window {
    __lenis?: Lenis;
    __lenisRaf?: number;
    __lenisCreate?: () => void;
    __lenisDestroy?: () => void;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    function createLenis() {
      // Don't recreate if already exists
      if (window.__lenis) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style organic deceleration
        lerp: 0.07, // Dynamic interpolation
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      window.__lenis = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        window.__lenisRaf = requestAnimationFrame(raf);
      };
      window.__lenisRaf = requestAnimationFrame(raf);
    }

    function destroyLenis() {
      if (window.__lenisRaf) {
        cancelAnimationFrame(window.__lenisRaf);
        window.__lenisRaf = undefined;
      }
      if (window.__lenis) {
        window.__lenis.destroy();
        window.__lenis = undefined;
      }
    }

    // Expose create/destroy globally
    window.__lenisCreate = createLenis;
    window.__lenisDestroy = destroyLenis;

    // Initial creation
    createLenis();

    return () => {
      destroyLenis();
      delete window.__lenisCreate;
      delete window.__lenisDestroy;
    };
  }, []);

  return null;
}
