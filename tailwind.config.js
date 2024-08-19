/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false,
  theme: {
    screens: {
      md: '800px',
      lg: '1024px',
      xl: '1300px'
    },
    extend: {
      colors: {
        'blue-100': '#EEF6FF',
        'blue-500': '#3E97FF',
        'slate-950': '#181C32',
        'gray-100': '#F9F9F9',
        'gray-200': '#F1F1F2',
        'gray-300': '#A1A5B7',
        'gray-400': '#D8D8E5',
        'gray-500': '#7E8299'
      },
      fontSize: {
        xl: '1.375rem'
      }
    }
  },
  plugins: []
};
