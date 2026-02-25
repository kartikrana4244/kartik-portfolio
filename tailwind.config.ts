import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509"
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #f97316, #dc2626)",
        "glow-gradient":
          "radial-gradient(circle at top, rgba(248,113,22,0.18), transparent 60%), radial-gradient(circle at bottom, rgba(239,68,68,0.18), transparent 60%)"
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(248,113,22,0.35)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;

