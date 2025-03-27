import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondaryTwo: "var(--color-secondaryTwo)",
        secondaryThree: "var(--color-secondaryThree)",
        accent: "var(--color-accent)",
        accentTwo: "var(--color-accentTwo)",
        accentThree: "var(--color-accentThree)",
        tBase: "var(--color-textBase)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
