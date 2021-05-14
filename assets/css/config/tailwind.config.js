module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: require('./purge.config.js'),
  theme: {
    extend: {
      colors: require('./colors.config.js'),
      fontFamily: require('./fonts.config.js'),
      maxWidth: {
        '8xl': '90rem'
      },
      spacing: {
        '4m': '1em'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ]
};
