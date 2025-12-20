/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // DeepMind / Altair Axis Refined Palette
        'dm-white': '#FAFAFA', // Slightly warmer white for paper-feel
        'dm-black': '#0A0A0A', // Deep, rich black
        'dm-gray': '#F2F2F2', // Minimal gray
        'dm-border': '#E5E5E5', // Light border
        'dm-blue': '#2563EB', // Linear-style electric blue
        'dm-teal': '#0D9488', // Secondary accent
        'dm-text-primary': '#171717',
        'dm-text-secondary': '#737373',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'], // Explicitly Cormorant
        sans: ['Inter', 'sans-serif'], // Explicitly Inter
        mono: ['Fira Code', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
    },
  },
  plugins: [],
};
