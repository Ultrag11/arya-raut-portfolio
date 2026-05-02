/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
      },
      fontSize: {
        // mobile-first (rem)
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.6" }],

        // desktop (vw handled via classes)
      },
      colors: {
        bg: "#0A0A0A",
        card: "#111111",
        accent: "#00F0FF",
        text: "#FFFFFF",
        muted: "#888888",
      },
    },
  },
  plugins: [],
};