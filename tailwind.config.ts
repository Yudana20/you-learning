import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  safelist: [
    // Cover gradients used dynamically in materials.ts
    "from-primary-500", "to-primary-700",
    "from-accent-400", "to-amber-500",
    "bg-gradient-to-br",
    // Category badge colors
    "bg-primary-50", "text-primary-600", "border-primary-200",
    "bg-accent-50", "text-amber-700", "border-accent-200",
    "bg-blue-50", "text-blue-700", "border-blue-200",
    "bg-purple-50", "text-purple-700", "border-purple-200",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#02462E",
          50: "#E6F4EE",
          100: "#C2E4D2",
          200: "#8FCAB0",
          300: "#5BB08E",
          400: "#2E9672",
          500: "#02462E",
          600: "#023D28",
          700: "#023422",
          800: "#012B1C",
          900: "#011F14",
        },
        accent: {
          DEFAULT: "#FEC700",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FEC700",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        background: "#FAFAF8",
        foreground: "#0F1A14",
        muted: "#F5F5F2",
        card: "#FFFFFF",
        border: "#E5E7E4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(2, 70, 46, 0.08), 0 1px 2px -1px rgba(2, 70, 46, 0.06)",
        "card-hover":
          "0 4px 12px 0 rgba(2, 70, 46, 0.12), 0 2px 4px -1px rgba(2, 70, 46, 0.08)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#0F1A14",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
