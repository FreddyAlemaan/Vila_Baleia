/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        bg: '#0A0A0A',
        'bg-soft': '#141414',
        'bg-card': '#171717',
        'text-muted': '#ABABAB',
        bone: '#EDE7DA',
        navy: '#1E2D6B',
        'navy-light': '#3D52A0',
        border: '#1A1A1A',
        'border-md': '#2A2A2A',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
}
