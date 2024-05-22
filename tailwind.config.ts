import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: "var(--font-lexend)",
      },
      colors: {
        primary: "#3da4f5",
        secondary: "#ededed",
        complementory: "#eaeaea",
        highlights: "#dcdcdc"
      },
      padding: {
        body: "0%",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
