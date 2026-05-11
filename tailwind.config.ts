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
        navy: "#1a1a6e",
        ink: "#12124e",
        royal: "#1a1a6e",
        electric: "#0052CC",
        cyanSoft: "#5BA4E6",
        porcelain: "#f0f4fa",
        champagne: "#f5a623",
        crimson: "#d42a36",
        lightBg: "#f0f4fa"
      },
      fontFamily: {
        sans: ["'Poppins'", "'Inter'", "sans-serif"],
        display: ["'Poppins'", "'Inter'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        glass: "0 2px 12px rgba(0,0,0,0.06)",
        premium: "0 4px 20px rgba(0,0,0,0.08)",
        card: "0 2px 12px rgba(0,0,0,0.06)",
        cardHover: "0 8px 30px rgba(0,0,0,0.1)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" }
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
