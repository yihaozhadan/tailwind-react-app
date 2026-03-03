// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
  {
    files: ['vite.config.ts', 'tailwind.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/serviceWorker.js'],
    rules: {
      'no-undef': 'off',
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/', 'build/', 'node_modules/', '*.config.js'],
  },
];