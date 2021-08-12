const plugin = require('tailwindcss/plugin')
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
    }
  },
  variants: {
    // 為borderStyle增加hover的class
    borderStyle: ['responsive', 'hover'],
    // 目前好像不用加這段也有
    divideColor: ['group-hover']
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
