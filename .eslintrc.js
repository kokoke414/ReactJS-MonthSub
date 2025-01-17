module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/function-component-definition': 'off',
    'object-curly-newline': 0,
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-alert': 'off',
    'no-useless-escape': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'dot-notation': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-children-prop': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-expressions': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
