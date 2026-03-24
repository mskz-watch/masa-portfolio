import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0A1F44", light: "#1a3a6b", dark: "#060f22" },
        gold: { DEFAULT: "#C8A96E", light: "#dfc99a", dark: "#a88a4e" },
        cream: "#FAF8F4",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        noto:  ["'Noto Serif JP'", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
