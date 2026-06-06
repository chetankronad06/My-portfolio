import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0a0a0a",
          fg: "#f5f0eb",
          muted: "#a39e97",
          accent: "#f5a623",
          border: "#1c1c1c",
          card: "#111111",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        body: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
