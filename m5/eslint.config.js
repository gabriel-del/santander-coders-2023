import antfu from '@antfu/eslint-config'

export default antfu(
  { rules:
    {
      'ts/consistent-type-imports': 'off',
      // 'no-console': 'off',
      // 'ts/space-infix-ops': 'off',
      // 'style/object-curly-spacing': ['error', 'never'],
      // 'max-statements-per-line': ['error', {max: 6}],
      // 'ts/brace-style': ['error', '1tbs', {allowSingleLine: true}],
      // 'arrow-parens': ['error', 'as-needed'],
      // 'antfu/if-newline': 0,
      // 'block-spacing': ['error', 'never'],
      // 'promise/param-names': 'off',
      // 'no-new': 0,
      // 'style/lines-between-class-members': ['error', 'never'],
    },
  },
)
