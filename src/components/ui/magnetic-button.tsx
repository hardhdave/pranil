"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "light" | "dark" | "ghost";
  className?: string;
};

export function MagneticButton({ children, href, variant = "light", className }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const classes = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variant === "light" && "bg-white text-navy shadow-premium",
    variant === "dark" && "bg-navy text-white shadow-premium",
    variant === "ghost" && "border border-white/18 bg-white/8 text-white backdrop-blur-xl hover:bg-white/14",
    className
  );

  const content = (
    <motion.span
      className={classes}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyanSoft/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a className="group inline-flex" href={href}>
        {content}
      </a>
    );
  }

  return <button className="group inline-flex">{content}</button>;
}
