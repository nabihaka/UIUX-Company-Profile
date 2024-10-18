/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        "custom-blue": "#2B3674",
        "custom-purple": "#4318FF",
        "custom-light": "#F4F7FE",
        "custom-gray": "#A3AED0",
        "custom-outline-gray": "#E0E5F2",
      },
      letterSpacing: {
        "negative-2": "-0.02em", // custom letter spacing -2%
      },
    },
  },
  plugins: [],
};
