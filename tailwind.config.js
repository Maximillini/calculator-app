/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["League Spartan"]
    },
    fontSize: {
      'numbers': '2rem'
    },
    extend: {
      colors: {
        'vdk-desat-blu-main': 'hsl(222, 26%, 31%)',
        'vdk-desat-blu-inset': 'hsl(223, 31%, 20%)',
        'vdk-desat-blu-screen': 'hsl(224, 36%, 15%)',
        'thm1-main-key-txt': 'hsl(221, 14%, 31%)',
        'thm1-main-key-bg': 'hsl(30, 25%, 89%)',
        'thm1-main-key-shadow': 'hsl(28, 16%, 65%)',
        'thm1-secondary-key-bg': 'hsl(225, 21%, 49%)',
        'thm1-secondary-key-shadow': 'hsl(224, 28%, 35%)',
        'thm1-tertiary-key-bg': 'hsl(6, 63%, 50%)',
        'thm1-tertiary-key-shadow': 'hsl(6, 70%, 34%)'
      },
      flexBasis: {
        '2/5': '40%' 
      }
    },
  },
  plugins: [],
}

