import { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan-extrabold': ['"Spartan ExtraBold"', 'sans-serif'],
        'spartan-regular': ['"Spartan Regular"', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#242426',
      },
    },
  },
} satisfies Config