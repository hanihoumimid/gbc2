/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      colors: {
        void: "#050505",
        onyx: "#111111",
        concrete: "#E5E5E5",
        sand: "#C5B5A1",
        line: "#222222"
      }
    }
  },
  plugins: []
};
