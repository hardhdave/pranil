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
    "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
    variant === "light" && "bg-crimson text-white shadow-lg hover:bg-[#b8222d]",
    variant === "dark" && "bg-navy text-white shadow-lg hover:bg-ink",
    variant === "ghost" && "border border-gray-200 bg-white text-navy hover:border-crimson hover:text-crimson",
    className
  );

  const content = (
    <motion.span
      className={classes}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
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
