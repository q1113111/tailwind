const plugin = require('tailwindcss/plugin')
const _ = require('lodash')
// 如果要安裝全域設定 使用指令 npx tailwindcss init --full
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
    },
    filter: { // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
      test: 'blur(5)'
    },
    backdropFilter: { // defaults to {}
      none: 'none',
      blur: 'blur(20px)'
    },
    rotate: {
      '1/4': '90deg'
    },
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')]
      // ...
    }),
    // 必須加extend 繼承預設顏色 除非要全部自訂顏色
    extend: {
      colors: {
        primary: '#000'
      }
    }
  },
  variants: {
    // 為borderStyle增加hover的class
    borderStyle: ['responsive', 'hover'],
    // 目前好像不用加這段也有
    divideColor: ['group-hover'],
    // fiter套件
    filter: ['responsive', 'hover'], // defaults to ['responsive']
    backdropFilter: ['responsive', 'hover'], // defaults to ['responsive']
    gradients: ['responsive', 'hover'],
    rotate: ['responsive', 'hover']
  },
  plugins: [
    // 用JS方式 設定全域樣式

    plugin(function ({ addBase, theme, addComponents, addUtilities, e, variants }) {
      // 設定btn 組件樣式
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.600')
        },
        '.btn-indigo': {
          backgroundColor: theme('colors.indigo.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.indigo.600')
          }
        }
      }
      // 使用js的可以在html顯示提示字元
      const newUtilities = {
        '.input-text': {
          outline: 'none'
        },
        '.filter-grayscale': {
          filter: 'grayscale(100%)'
        }
      }
      // 使用擴充元件的方式
      const rotateUtilities = _.map(theme('rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })
      // 也都可以做成一個js檔 在require
      const gradients = theme('gradients', {})
      // const gradientVariants = variants('gradients', [])
      const gradientsUnit = _.map(gradients, ([start, end], name) => ({
        [`.${e(`bg-gradient-${name}`)}`]: {
          backgroundImage: `linear-gradient(to right,${start},${end})`
        }
      }))
      addUtilities(gradientsUnit, variants('gradients'))
      addUtilities(newUtilities, ['responsive', 'hover'])
      addUtilities(rotateUtilities, variants('rotate'))
      addComponents(buttons)
      // 設定基本樣式
      addBase({
        h2: { fontSize: theme('fontSize.lg') }
      })
    }),
    require('tailwindcss-filters') // 安裝filter套件
  ]
}
