/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snowWhite: "#ffffff",
        teal: "#22d1ee",
        dark: "#0e153a",
      },
    },
  },
  plugins: [
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    extend: {
      fontSize: ["hover", "focus"],
      backgroundOpacity: ["active"],
      borderWidth: ["hover", "focus"],
    },
  },
}
