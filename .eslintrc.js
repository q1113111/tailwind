module.exports = {
  root: true,
  env: {
    node: true
  },
  // "extends": "plugin:vue/base",   // 受到的規範最少
  // "extends": "plugin:vue/essential",
  // "extends": "plugin:vue/strongly-recommended",
  // "extends": "plugin:vue/recommended" // 最嚴謹
  extends: [
    // 'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
