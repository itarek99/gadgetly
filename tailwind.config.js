/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3aa68a',
        },
        secondary: {
          DEFAULT: '#d64439',
        },
        dark: '#010E38',
        light: '#64748b',
      },
    },
  },
  plugins: [],
};
