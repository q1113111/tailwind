module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg'
    },
    gradients: theme => ({
      'blue-green': ['bottom', theme('colors.blue.light'), theme('colors.gray.darkest')],
      'purple-blue': ['right', theme('colors.gray.light'), theme('colors.pink.light')]
      // ...
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1'
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc'
      }
    }
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px']
    // }

  },
  variants: {
    gradients: ['responsive', 'hover']
  },
  plugins: [
    require('./src/tailwinPlugins/rotate'),
    require('./src/tailwinPlugins/gradients'),
    require('./src/tailwinPlugins/base')
  ]
}
