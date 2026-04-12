/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2EB',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2D2D2D',
        'charcoal-muted': '#6B6B6B',
        border: '#E5E5E5',
        'border-input': '#D1D1D1',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
