/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fade: 'fade 1s ease-in-out',
        fade2: 'fade2 1s ease-in-out',
        flydown: 'flydown 0.8s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        fade2: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        flydown: {
          '0%': { height: '0px' },
          '100%': { height: '100vh' },
        },
        }
    },
  },
  plugins: [],
}

