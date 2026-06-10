module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#2d8b8b",
        "brand-dark": "#0F172A",
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
};
