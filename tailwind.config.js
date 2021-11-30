const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Fira Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      primary: 'var(--color-brand-primary)',
      secondary: 'var(--color-brand-secondary)',
      tetriary: 'var(--color-brand-tetriary)',
      coolGray: 'var(--color-brand-cool-gray)',
      primaryLigthen: 'var(--color-brand-primary-lighten)',
      neutral: {
        1: 'var(--color-neutral-1)',
        2: 'var(--color-neutral-2)',
        3: 'var(--color-neutral-3)',
        4: 'var(--color-neutral-4)',
        5: 'var(--color-neutral-5)',
      },
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
      backdropOpacity: ['hover', 'focus'],
      backdropContrast: ['hover', 'focus'],
      backdropBrightness: ['hover', 'focus'],
      display: ["group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
