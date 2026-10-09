import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import perfectionist from 'eslint-plugin-perfectionist';
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
      perfectionist,
    },
    rules: {
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto' },
        { usePrettierrc: true },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          groups: ['required-property', 'optional-property'],
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          groups: ['required-property', 'optional-property'],
        },
      ],
      'perfectionist/sort-enums': ['error'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-unnecessary-template-expression': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      'arrow-body-style': 'warn',
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'object-shorthand': ['error', 'always'],
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'], // TS
          exceptions: ['-'],
        },
      ],
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
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
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
