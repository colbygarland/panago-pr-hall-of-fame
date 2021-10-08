module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#94FFB7',
        secondary: '#FABAE4',
        tertiary: '#411557',
      },
      fontFamily: {
        sans: ['NeuzeitGro', 'sans-serif'],
        sansBold: ['NeuzeitGroBold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
