import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintReact.configs['recommended-typescript'],
      prettier,
    ],
    plugins: {
      '@stylistic': stylistic,
      'jsx-a11y-x': jsxA11y,
    },
    rules: {
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto' },
        { usePrettierrc: true },
      ],

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      'arrow-body-style': 'warn',
      curly: ['error', 'all'],
      'no-underscore-dangle': ['error', { allow: ['__esModule', '__extends'] }],
      'no-nested-ternary': 'warn',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'react-refresh/only-export-components': 'warn',
      '@eslint-react/no-duplicate-key': 'error',
      '@eslint-react/dom-no-missing-button-type': 'error',
      '@eslint-react/jsx-no-useless-fragment': 'error',
      '@eslint-react/no-unused-props': 'error',
      '@eslint-react/dom-no-unsafe-target-blank': 'error',
      '@stylistic/jsx-self-closing-comp': 'error',
      'jsx-a11y-x/prefer-tag-over-role': ['error'],
      'jsx-a11y-x/no-static-element-interactions': ['error'],
      'jsx-a11y-x/no-aria-hidden-on-focusable': 'error',
      'jsx-a11y-x/no-redundant-roles': ['error'],
      'jsx-a11y-x/click-events-have-key-events': ['error'],
      'jsx-a11y-x/no-noninteractive-element-to-interactive-role': ['error'],
      'jsx-a11y-x/img-redundant-alt': [
        2,
        {
          components: ['Image'],
          words: ['Bild', 'Foto', 'Billede'],
        },
      ],
      'jsx-a11y-x/label-has-associated-control': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'no-warning-comments': [
        'error',
        { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' },
      ],
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
  },
]);
