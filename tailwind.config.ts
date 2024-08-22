import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryColor: '#2EC2B3',
        secondaryColor: '#FF9F1A',
      },
      animation: {
        slideInFromRight: 'slideInFromRight 1.5s forwards',
        slideInFromLeft: 'slideInFromLeft 1.5s forwards',
        unblur: 'unblur 1.3s forwards',
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', filter: 'blur(10px)' },
          '100%': { transform: 'translateX(0)', filter: 'blur(0)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', filter: 'blur(10px)' },
          '100%': { transform: 'translateX(0)', filter: 'blur(0)' },
        },
        unblur: {
          '0%': { filter: 'blur(10px)' },
          '100%': { filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
