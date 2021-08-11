module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['vuejs-accessibility', 'yaml', 'markdown'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:yaml/recommended',
    'plugin:markdown/recommended',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 1,
    semi: ['error', 'never'],
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
