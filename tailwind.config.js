/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAD096",
        shade5: "#f8f8f8",
        shade4: "#f0f0f0",
        shade3: "#e8e8e8",
        shade2: "#e0e0e0",
        shade1: "#d8d8d8",
        dark: "#333",
        background: "#ded8cf",
        light: "#fff",
      },
      dropShadow: {
        text: "1px 1px 2px rgba(0,0,0, 0.5)",
      },
      padding: {
        sectionPadding: "92px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "url('/images/gradient.webp')",
        hero: "url('/images/hero5.png')",
      },
      fontSize: {
        h1: "120px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
      },
      fontFamily: {
        clashdisplay: ["var(--font-clashdisplay)"],
      },
    },
  },
  plugins: [],
}
