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
        primary: "#0F3D2E",
        deep: "#0B3B2E",
        court: "#1F7A5B",
        rally: "#18A36B",
        tennis: "#D9FF43",
        clay: "#FF7A59",
        sky: "#7DD3FC",
        warm: "#F8F6EF",
        ink: "#17212B",
        soft: "#E6E9E6"
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 61, 46, 0.12)",
        lift: "0 18px 34px rgba(23, 33, 43, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
