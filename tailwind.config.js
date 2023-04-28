/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'title':['"Poltawski Nowy"']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      screens: {
        '2lg':'1200px',
        'xs':'480px'
      }
    },
  },
  plugins: [],
}
