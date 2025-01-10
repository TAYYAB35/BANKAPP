/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Optima': ['optima', 'sans-serif'],
        'popin': ["Poppins", 'sans-serif']
      },
      screens: {
        'xs': '480px',  // Extra small screens
        'sm': '576px',  // Small screens (default)
        'md': '768px',  // Medium screens (default)
        'lg': '992px', // Large screens (default)
        'xl': '1200px', // Extra large screens (default) 
        'web': '1400px',
        '2xl': '1536px', // 2x large screens (default)
        '3xl': '1920px', // Custom breakpoint for large screens
      },
      colors: {
        highlight_light: '#D69D2F',
        Highlight: '#D69D2F',
        primary_dark: '#2D385E',
        primary: "#003649",
        success_lt: "#ebfff1",
        success: "#119C2B",

        warning_lt : '#fdf8ec',
        warning : '#e7b742',
        red:"#F14821",

        border : "#C4C4C4",

        gray_50: '#f2f2f2',
        gray_100: '#e5e9eb',
        gray_150: '#e5ebed',
        gray_300: '#00212D',
        gray_400: '#666666',
        gray_500: '#44525F',
        gray_600: '#252C32',
      },
      boxShadow: {
        custom: '0px 2px 8px 0px #00000026'
      }
    }
  },
  plugins: [],
}

