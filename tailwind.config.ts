import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile: {
          min: "100px",
          max: "550px",
        },
        tablet: {
          min: "550px",
          max: "750px",
        },
        "mini-laptop": {
          min: "750px",
          max: "874px",
        },
        laptop: {
          min: "874px",
          max: "1280px",
        },
        desktop: {
          min: "1280px",
        },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
