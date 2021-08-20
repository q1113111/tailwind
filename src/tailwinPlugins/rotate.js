const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme, e }) {
  const rotate = _.map(theme('rotate'), (value, key) => {
    return {
      [`.${e(`rotate-${key}`)}`]: {
        transform: `rotate(${value})`
      }
    }
  })
  addUtilities(rotate)
})
