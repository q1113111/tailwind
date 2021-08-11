const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1200px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // 用JS方式 設定全域樣式

    plugin(function ({ addBase, theme }) {
      addBase({
        h2: { fontSize: theme('fontSize.lg') }
      })
    })
  ]
}
