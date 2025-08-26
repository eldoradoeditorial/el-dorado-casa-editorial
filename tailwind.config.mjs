/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#186d6d',
          DEFAULT: '#2d8a8a',
        },
        accent: {
          DEFAULT: '#cd6a45',
          hover: '#b85a3a',
        },
        gold: {
          DEFAULT: '#dba73a',
          light: '#e8c45a',
        },
        bg: {
          primary: '#fff7e1',
          secondary: '#fefbed',
          white: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          primary: '#2c2c2c',
          secondary: '#666666',
          muted: '#999999',
          inverse: '#ffffff',
        }
      },
      fontFamily: {
        primary: ['Crimson Text', 'Georgia', 'serif'],
        secondary: ['Inter', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.07)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'xl': '0 20px 25px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  // Asegurar que se procesen las clases personalizadas
  safelist: [
    'py-16',
    'py-24',
    'lg:py-24'
  ]
}