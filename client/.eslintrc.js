module.exports = {
  root: true,
  env: {
    "es6": true,
    "node": true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}