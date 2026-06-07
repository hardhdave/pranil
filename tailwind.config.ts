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
        navy: "#0a3d6b",
        "navy-deep": "#062a4d",
        teal: "#0e6e7a",
        "teal-light": "#1a9aaa",
        blue: "#1e7bb8",
        "blue-light": "#5ba4e6",
        porcelain: "#f5f8fc",
        accent: "#e8b830",
        crimson: "#d42a36",
        ink: "#12124e",
        royal: "#1a1a6e",
        electric: "#0052CC",
        cyanSoft: "#5BA4E6",
        champagne: "#f5a623",
        lightBg: "#f0f4fa"
      },
      fontFamily: {
        sans: ["'Poppins'", "'Inter'", "sans-serif"],
        display: ["'Poppins'", "'Inter'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"]
      },
      boxShadow: {
        glass: "0 2px 12px rgba(0,0,0,0.06)",
        premium: "0 4px 20px rgba(0,0,0,0.08)",
        card: "0 2px 12px rgba(0,0,0,0.06)",
        cardHover: "0 8px 30px rgba(0,0,0,0.1)",
        glow: "0 0 30px rgba(14, 110, 122, 0.15)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
