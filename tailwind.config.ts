import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
          vivid: "var(--color-brand-vivid)",
          tint: "var(--color-brand-tint)",
          tint2: "var(--color-brand-tint-2)",
          lavender: "var(--color-brand-lavender)",
        },
        cream: "var(--color-cream)",
        warmwhite: "var(--color-warmwhite)",
        pink: "var(--color-pink)",
        graphite: "var(--color-graphite)",
        muted: "var(--color-muted)",
        bordersoft: "var(--color-border-soft)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        editorial: ["var(--font-fraunces)", "serif"],
      },
      maxWidth: {
        content: "640px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
