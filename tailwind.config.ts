import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
