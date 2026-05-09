import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#06111F",
        ink: "#08182C",
        royal: "#0B57D0",
        electric: "#23A6FF",
        cyanSoft: "#9CEBFF",
        porcelain: "#F6FAFF",
        champagne: "#D7C9A6"
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "Inter", "sans-serif"],
        display: ["var(--font-clash)", "Satoshi", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(9, 46, 92, 0.26)",
        premium: "0 30px 100px rgba(0, 80, 180, 0.28)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.13) 1px, transparent 0)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
