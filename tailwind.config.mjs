const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b3c5ff',
          400: '#809fff',
          500: '#4d7aff',
          600: '#1a55ff',
          700: '#0044ff',
          800: '#0036cc',
          900: '#002db3',
        }
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
              textDecoration: 'none',
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}