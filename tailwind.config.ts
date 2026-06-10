// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#2d8b8b",
        "brand-dark": "#0F172A",
        "brand-purple": "#45003e",
        "brand-purple-light": "#661749",
        "brand-bone": "#F7F5F0",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      screens: {
        xs: "320px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;