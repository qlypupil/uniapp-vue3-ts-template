// .stylelintrc.cjs

module.exports = {
  root: true,
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // 关闭报错源头
    // 'declaration-property-value-no-unknown': null,

    'prettier/prettier': true,

    // 支持 rpx 单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    //  允许部分伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
      },
    ],

    //  小程序 page 标签
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page'],
      },
    ],

    // 某些项目中无冲突地关闭部分约束
    'comment-empty-line-before': 'never',
    'custom-property-empty-line-before': 'never',
    'no-empty-source': null,
    'comment-no-empty': null,
    'no-duplicate-selectors': null,
    'scss/comment-no-empty': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,

    // 如果你使用 Tailwind + SCSS，可以忽略 at 规则
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
}
