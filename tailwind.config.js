/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fade: 'fade 0.5s ease-in-out',
        fade2: 'fade2 1s ease-in-out',
        flydown: 'flydown 0.8s ease-in-out',
        zoom: 'zoom 0.3s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        zoom: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        fade2: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        fill: {
          '0%': { height: '1px', width: '0%' },
          '50%': { height: '1px', width: '100%' },
          '100%': { height: '100%', width: '100%', background: '#04773B' },
        },
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto Serif', 'sans-serif'],
      },
      backgroundImage: {
        'foggybg': "url('/src/assets/images/foggy-light-fafbee.jpg')",
        'forestbg': "url('/src/assets/images/paper-texture.jpg')",
      },
      colors: {
        "foggy": "#FAFBEE",
        "forest": "#053B06",
        "leaf": "#04773B",
        "soil": "#ae8b0c",
        "sun": "#f1c834",
      },
      screens: {
        "bp-800": "800px",
        "bp-850": "850px",
      },
    },
  },
  plugins: [],
}

