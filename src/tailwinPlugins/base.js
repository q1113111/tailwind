const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    h1: { fontSize: theme('fontSize.6xl'), lineHeight: theme('lineHeight.10') },
    h2: { fontSize: theme('fontSize.xl') }
  })
})
