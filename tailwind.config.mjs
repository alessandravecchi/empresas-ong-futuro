/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal:  "#2FB7AD",
          orange:"#F4A520",
          gold:  "#D4AF37",
          ink:   "#0F1C1C"
        }
      }
    }
  },
  plugins: []
};


