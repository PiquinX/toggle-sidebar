/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "appear-right-to-left": {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        "appear-left-to-right": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        "dissapear-right-to-left": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "dissapear-left-to-right": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        "navBar-appear-right": 'appear-right-to-left .45s forwards',
        "navBar-appear-left": 'appear-left-to-right .45s forwards',
        "navBar-disappear-right": 'dissapear-left-to-right 350ms forwards',
        "navBar-disappear-left": 'dissapear-right-to-left 350ms forwards'
      }
    },
  },
  plugins: [],
}

