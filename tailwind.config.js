/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        verticalFloat: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(60px)" },
        },
      },
      animation: {
        verticalFloat: "verticalFloat 6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
