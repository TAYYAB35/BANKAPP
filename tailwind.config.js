/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxxl': ['48px', '56px'], // Heading XXXlarge
        'xxl': ['40px', '48px'],  // Heading XXlarge
        'xl': ['32px', '40px'],   // Heading Xlarge
        'lg': ['24px', '32px'],   // Heading large
        'md': ['20px', '28px'],   // Heading medium
        'base': ['18px', '24px'],   // Heading small
        'sm': ['16px', '22px'],   // Heading small
        'xs': ['14px', '20px'],   // Heading xsmall
        'xxs': ['12px', '16px'],  // Heading xxsmall
        'xxxs': ['10px', '12px'], // Heading xxxsmall
        'xxxxs': ['8px', '10px'], // Heading xxxxsmall
        'display-lg': ['64px', '72px'], // Display large
        'display-md': ['48px', '56px'], // Display medium
        'display-sm': ['32px', '40px'], // Display small
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.7',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'x-bold': 800,
        'xx-bold': 900,
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
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
        'tiktok-red': '#FE2B54',
        'Primary/25': '#FEFBFF',
        'Primary/50': '#EEF0FF',
        'Primary/100': '#DAE1FF',
        'Primary/600': '#1856CD',
        'Primary/700': '#003FA4',
        'blue-650': '#2d62d9',

        //error
        'Error/500': '#F04438',

        // gray
        'Gray/000': '#838383',
        'Gray/200': '#EAECF0',
        'Gray/500': '#667085',
        'Gray/600': '#475467',
        'Gray/700': '#344054',
        'Gray/900': '#101828',
      },
      borderRadius: {
        'base': '10px',
      },
      padding: {
        '7.5': '30px',
      },
      margin: {
        '7.5': '30px',
      },
      listStyleType: {
        decimal: 'decimal',
        roman: 'upper-roman',
      },
      boxShadow: {
        custom: '0px 2px 8px 0px #00000026'
      }
    }
  },
  plugins: [],
}

