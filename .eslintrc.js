module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
