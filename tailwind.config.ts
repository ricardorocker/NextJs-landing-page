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
        "green-primary": "#1D3531",
        "green-actived": "#5D8A83",
        "green-border": "#2A4B46",
        "green-btn": "#CCEC60",
        "green-title-card": "#719D96",
      },
      maxWidth: {
        // 1240px
        grid: "77.5rem",
        // 1056px
        'text-hero': '66rem',
        // 855px
        'area-icons': '53.4375rem',
        // 957px
        'area-mockups': '59.8125rem',
        // 1320px
        'area-cards': '82.5rem',
      },
      height: {
        // 874px
        "section-hero": "54.625rem",
        // 562px
        'area-cards': '35.1rem',
      },
      backgroundImage: {
        'hero': "url(/bg-hero.svg)"
      }
    },
  },
  plugins: [],
};
export default config;
