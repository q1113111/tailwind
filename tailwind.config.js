module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        // utilities like `bg-base` and `bg-primary`
        base: 'var(--color-base)',
        primary: 'var(--color-primary)',
        danger: 'var(--color-danger)'
      },
      colors: {
        // utilities like `bg-base` and `bg-primary`
        base: 'var(--color-base)',
        primary: 'var(--color-primary)',
        danger: 'var(--color-danger)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
