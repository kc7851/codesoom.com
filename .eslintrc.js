module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: [
    'node_modules/',
    'src/images',
    'src/css',
    'src/assets',
    'src/webfonts',
  ],
  rules: {
    'react/no-unescaped-entities': ['error', {'forbid': ['>', '}']}],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
  },
};
