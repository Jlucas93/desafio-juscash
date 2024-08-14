import js from '@eslint/js'
import globals from 'globals'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSimpleSortImports from 'eslint-plugin-simple-import-sort';
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintPluginPrettierRecommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-refresh': reactRefresh,
    'simple-import-sort': eslintPluginSimpleSortImports,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  })
