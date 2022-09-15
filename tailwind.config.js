/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily: {
      mont: ['ClMont', 'sans-serif'],
      oxygen: ['Oxygen', 'serif'],
      'oxygen-mono': ['Oxygen Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          'primary-light': '#CBFFD6',
          '50': '#CBFFD6',
          '100': '#AAFCBC',
          '200': '#87FAA0',
          '300': '#5BF97D',
          '400': '#4AE86D',
          '500': '#2DC54F',
          '600': '#0D9D2D',
          '700': '#098525',
          '800': '#0A651E',
          '900': '#0F3D19',
          'primary-dark': '#0F3D19'
        },
        secondary: {
          'secondary-light': '#E5C2FF',
          '50': '#E5C2FF',
          '100': '#CC87FF',
          '200': '#B056F5',
          '300': '#9838E1',
          '400': '#8C37CB',
          '500': '#7426AF',
          '600': '#580C91',
          '700': '#43096E',
          '800': '#330457',
          '900': '#26073E',
          'secondary-dark': '#26073E',
        },
        tertiary: {
          '200': '#FF6DAA',
          '300': '#FF4D97',
          '400': '#FF2882',
          '500': '#E82174',
          '600': '#D11C68',
        }
      }
    },
  },
  plugins: [],

}
