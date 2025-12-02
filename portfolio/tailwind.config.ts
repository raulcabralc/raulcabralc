import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "slide-underline": "slideUnderline 2s ease-in-out infinite",
      },
      keyframes: {
        slideUnderline: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "50%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },

      colors: {
        rebound: {
          DEFAULT: "#F25F4C",
          dark: "#D14030",
          light: "#FF7A66",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
