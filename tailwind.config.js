/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#9f9f9f',
        border: '#5454547a',
        white: '#ffffff',
        backgroud: '#181818'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    // ...
    textOpacity: false
  }
}
