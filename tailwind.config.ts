import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
        },
        main: {
          100: 'var(--main-100)',
          200: 'var(--main-200)',
          300: 'var(--main-300)',
        },
        onsurface: 'var(--onsurface)',
        textcolor: 'var(--text)'
      },
      screens: {
        md: '769px',
      },
      transitionProperty: {
        width: "width",
      }
    },
  },
  plugins: [],
}
export default config