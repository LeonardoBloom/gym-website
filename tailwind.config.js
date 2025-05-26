/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      
    },
    screens: {
      // Define your custom breakpoints or omit those you don't need
      // For example, to remove 'md' (medium) breakpoint:
      'sm': '100%',
      'lg': '100%',
      'xl': '100%',
      '2xl': '1920px',
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
  daisyui: {
    themes: [],
    base: false,
    themeRoot:"body"
  },
  
}
