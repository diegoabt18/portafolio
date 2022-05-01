module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    fontFamily: {
      ShadowsIntoLight: ['Shadows Into Light', 'sans-serif'],
      IndieFlower: ['Indie Flower', 'serif'],
      BlackOpsOne: ['BlackOpsOne', 'serif'],
      Dhyana: ['Dhyana', 'serif'],
      RobotoMono: ['Roboto Mono', 'serif'],
      fredoka: ['Fredoka One', 'serif'],
      Audiowide: ['Audiowide', 'serif'],
      Poppins: ['Poppins', 'serif']
    },
    extend: {
      colors: {
        color1: '#1C182F',
        color2: '#59185A',
        color3: '#B90060',
        color4: '#39C49C',
        color5: '#E0CCD2',
        color6: '#FF5A1A',
        color7: '#322FCA',
        color8: 'rgba(28, 24, 47,0.9)',
        color9: 'rgba(224, 204, 210, 0.9)',
        color10: '#24263B',
        color11: '#1F2235',
        color12:'##23263A'
      },
      screens: {
        'xs': { 'min': '320px' },
        'sd': { 'min': '400px' },
        'sm': {'min': '640px'},
        // => @media (min-width: 640px) { ... }

        'md': { 'min': '768px' },
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      backgroundImage: {
        bgcolor1: 'linear-gradient(180deg, rgba(107, 67, 167, 0.1) 0%, rgba(255, 75, 168, 0.1) 100%);',
        bgcolor2: 'linear-gradient(180deg, rgba(107, 67, 167, 0.1) 66.67%, rgba(255, 75, 168, 0.1) 100%)',
        bgColor3: 'linear-gradient(0deg, rgba(113, 113, 113, 0.1), rgba(113, 113, 113, 0.1)), linear-gradient(180deg, rgba(185, 0, 96, 0.1) 0%, rgba(29, 24, 49, 0.1) 100%)',
        bgcolor4: 'linear-gradient(136.9deg, rgba(89, 24, 90, 0.2) 24.17%, rgba(185, 0, 96, 0.2) 57.15%), linear-gradient(279deg, rgba(185, 0, 96, 0.2) 21.59%, rgba(89, 24, 90, 0.2) 47.99%), #1C182F',
      },
      boxShadow: {
        'shadow-menu': '12px 0px 34px #190A3E'
      }
    },
  },
  plugins: [],
}
