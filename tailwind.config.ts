import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        slate: "#77665f",
        mist: "#f7f0ec",
        line: "#eadfd8",
        accent: "#d14a34",
        emerald: "#f0a07a"
      },
      boxShadow: {
        card: "0 20px 60px rgba(6, 17, 31, 0.08)",
        soft: "0 12px 30px rgba(6, 17, 31, 0.06)"
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(135deg, rgba(6,17,31,0.92) 0%, rgba(6,17,31,0.62) 45%, rgba(6,17,31,0.42) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
