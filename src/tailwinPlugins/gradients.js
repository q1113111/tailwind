const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
  const gradients = theme('gradients', {})
  //   const gradientVariants = variants('gradients', [])

  const utilities = _.map(gradients, ([position, start, end], name) => ({
    [`.${e(`bg-gradient-${name}`)}`]: {
      backgroundImage: `linear-gradient(to ${position}, ${start}, ${end})`
    }
  }))

  addUtilities(utilities, variants('gradients'))
})
