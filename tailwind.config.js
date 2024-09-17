/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#673AB7",
          50: "#f0ebf8",
          100: "#d0c2e9",
          200: "#b9a4de",
          300: "#997BCF",
          400: "#8561c5",
          500: "#673AB7",
          600: "#5e35a7",
          700: "#492982",
          800: "#392065",
          900: "#2b184d"
        },
        dark: "#1E1E1E",
        light: "#FFFFFF",
        grey: {
          light: "#D9D9D9",
          dark: "#5D5C5F"
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  }
}
