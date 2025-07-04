import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  // JavaScript 推荐配置
  js.configs.recommended,

  // TypeScript 配置
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  // Vue 配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: typescriptParser,
      },
      globals: {
        // UniApp 全局变量
        uni: 'readonly',
        wx: 'readonly',
        my: 'readonly',
        swan: 'readonly',
        tt: 'readonly',
        qq: 'readonly',
        ks: 'readonly',
        jd: 'readonly',
        getCurrentPages: 'readonly',
        getApp: 'readonly',
        Page: 'readonly',
        App: 'readonly',
        Component: 'readonly',
        Behavior: 'readonly',
        definePageConfig: 'readonly',
        defineAppConfig: 'readonly',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      ...vue.configs['vue3-recommended'].rules,
      ...typescript.configs.recommended.rules,
      ...prettierConfig.rules,

      // Prettier 规则
      'prettier/prettier': 'error',

      // Vue 规则
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
        },
      ],
      'vue/no-empty-component-block': 'error',
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],

      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      // 禁用在 Vue 文件中的 no-undef 规则
      'no-undef': 'off',
    },
  },

  // 通用 JavaScript/TypeScript 配置
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js 环境
        process: 'readonly',
        global: 'readonly',
        console: 'readonly',
        // 浏览器环境
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        // UniApp 全局变量
        uni: 'readonly',
        wx: 'readonly',
        my: 'readonly',
        swan: 'readonly',
        tt: 'readonly',
        qq: 'readonly',
        ks: 'readonly',
        jd: 'readonly',
        getCurrentPages: 'readonly',
        getApp: 'readonly',
        Page: 'readonly',
        App: 'readonly',
        Component: 'readonly',
        Behavior: 'readonly',
        definePageConfig: 'readonly',
        defineAppConfig: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // Prettier 规则
      'prettier/prettier': 'error',

      // 通用规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',

      // 导入规则
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },

  // 忽略文件
  {
    ignores: ['dist/**', 'node_modules/**', 'unpackage/**', '**/*.d.ts'],
  },
]
