/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/images/bg1.jpg')",
        'bg2': "url('/images/bg3.jpg')",
        'bg3': "url('/images/bg4.jpg')",
        'bg4': "url('/images/marsBg.jpg')",
        'bg5': "url('/images/nest.jpg')",
        'bg6': "url('/images/sky.jpg')",
        'bg7': "url('/images/sky2.jpg')",
        'bg8': "url('/images/sky4.jpg')",
        'bg9': "url('/images/bg33.jpg')"
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down2': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down3': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out',
        'fade-in-down2': 'fade-in-down 1.0s ease-out',
        'fade-in-down3': 'fade-in-down 1.0s ease-out',
      },
      fontFamily: {
        'Roboto': ['Roboto']
      },
    },
  },
  variants: {},
  plugins: [],
}
