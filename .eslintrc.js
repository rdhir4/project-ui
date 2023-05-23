module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',

    // TypeScript-specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // React-specific rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // Spacing rules
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]

  }
}
