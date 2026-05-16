"use client";

import { motion } from "framer-motion";

/* Continuously moving geometric shapes — drop into any section */
export function MovingShapes({ variant = "light" }: { variant?: "light" | "dark" }) {
  const color = variant === "dark" ? "rgba(255,255,255," : "rgba(14,110,122,";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Rotating ring — top right */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-2 border-dashed opacity-[0.07]"
        style={{
          borderColor: variant === "dark" ? "white" : "var(--teal)",
          animation: "rotate-slow 30s linear infinite"
        }}
      />

      {/* Orbiting small dot */}
      <div
        className="absolute top-[15%] right-[10%] w-3 h-3 rounded-full"
        style={{
          background: variant === "dark" ? "rgba(255,255,255,0.2)" : "var(--teal)",
          opacity: 0.3,
          animation: "float 6s ease-in-out infinite"
        }}
      />

      {/* Floating triangle — made with CSS borders */}
      <div
        className="absolute top-[30%] left-[5%]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: `20px solid ${color}0.06)`,
          animation: "float-slow 10s ease-in-out infinite",
        }}
      />

      {/* Pulsing circle — mid left */}
      <div
        className="absolute top-[50%] left-[3%] w-4 h-4 rounded-full"
        style={{
          background: `${color}0.12)`,
          animation: "pulse-ring 4s ease-in-out infinite"
        }}
      />

      {/* Moving horizontal dashed line */}
      <div
        className="absolute top-[65%] left-0 w-24 h-px opacity-[0.08]"
        style={{
          background: `repeating-linear-gradient(90deg, ${color}0.3) 0, ${color}0.3) 6px, transparent 6px, transparent 12px)`,
          animation: "marquee 8s linear infinite"
        }}
      />

      {/* Morphing blob — bottom right */}
      <div
        className="absolute bottom-[10%] right-[8%] w-20 h-20 opacity-[0.04]"
        style={{
          background: variant === "dark" ? "white" : "var(--blue)",
          animation: "blob 12s ease-in-out infinite"
        }}
      />

      {/* Floating small square — rotates */}
      <div
        className="absolute bottom-[30%] left-[8%] w-4 h-4 opacity-[0.08]"
        style={{
          border: `2px solid ${color}0.3)`,
          animation: "float 8s ease-in-out infinite, rotate-slow 20s linear infinite",
        }}
      />

      {/* Small orbiting dots cluster — top left */}
      <div className="absolute top-[20%] left-[15%]">
        <div
          className="w-2 h-2 rounded-full absolute"
          style={{
            background: `${color}0.15)`,
            animation: "float 5s ease-in-out infinite"
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full absolute top-3 left-4"
          style={{
            background: `${color}0.1)`,
            animation: "float 7s ease-in-out infinite 1s"
          }}
        />
        <div
          className="w-1 h-1 rounded-full absolute -top-2 left-6"
          style={{
            background: `${color}0.12)`,
            animation: "float 9s ease-in-out infinite 0.5s"
          }}
        />
      </div>

      {/* Subtle cross pattern — bottom left */}
      <div className="absolute bottom-[15%] left-[20%] opacity-[0.06]">
        <div
          className="w-6 h-px absolute"
          style={{ background: variant === "dark" ? "white" : "var(--teal)" }}
        />
        <div
          className="w-px h-6 absolute -top-3 left-3"
          style={{ background: variant === "dark" ? "white" : "var(--teal)" }}
        />
      </div>

      {/* Rotating ring — bottom */}
      <div
        className="absolute -bottom-8 left-[40%] w-32 h-32 rounded-full border opacity-[0.04]"
        style={{
          borderColor: variant === "dark" ? "white" : "var(--navy)",
          animation: "rotate-slow 25s linear infinite reverse"
        }}
      />
    </div>
  );
}
