import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#06060e",
        surface: "#0e0e1c",
      },
      backgroundImage: {
        "gradient-cover":
          "radial-gradient(ellipse 90% 70% at 65% 40%, rgba(74,47,189,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 5% 90%, rgba(245,116,28,0.12) 0%, transparent 55%)",
      },
    },
  },
  plugins: [],
};
export default config;
