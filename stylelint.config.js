module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier'
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    // 允许空，vue 中只写了 style，没有写内容
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin'
        ]
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'string-quotes': 'single',
    // 这条有点模糊，iconfont '' "" 都不行
    'font-family-name-quotes': null,
    'selector-class-pattern': null,
    // .menus-item a 和 .nav .blog-title a 毫无关系 （除了作用于a），但是他还是报错
    'no-descending-specificity': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports'
        },
        {
          type: 'at-rule',
          name: 'media'
        },
        'rules'
      ],
      { severity: 'warning' }
    ]
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: ['stylelint-config-recommended', 'stylelint-config-html'],
      rules: {
        'keyframes-name-pattern': null,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'v-deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'global']
          }
        ]
      }
    }
  ]
}
