module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: { version: '18.2' }
  },
  plugins: ['react-refresh'],
  rules: {

    'require-jsdoc': 'off',
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'max-len': 'off' // Disable max-len rule
  },
};