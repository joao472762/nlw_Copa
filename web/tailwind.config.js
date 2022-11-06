/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },
      colors: {
        gray: {
          900: '#121214',
          800: '#09090A',
          600: '#323238',
          500: '#202024',
          400: '#8D8D99',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },
        green: {
          500: '#129E57'
        },
        yellow: {
          500: '#F7DD43'
        }
      }
    },
  },
  plugins: [],
}
