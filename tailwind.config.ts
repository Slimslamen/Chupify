import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        componentGrey: "#53535350",
        componentGreyHover: "#53535380",
        componentLightGrey: "#53535310",
        TextColor: "#838383",
        LightHover: "#939393"
      },
    },
  },
  plugins: [],
} satisfies Config;
