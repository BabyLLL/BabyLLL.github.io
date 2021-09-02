module.exports = {
  // 设为eslint的根文件
  root: true,

  // 环境
  env: {
    browser: true,
    es2021: true
  },

  // 解析器
  parser: 'vue-eslint-parser',

  // 包含哪些功能
  extends: [
    'plugin:vue-libs/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  // 编译配置
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  // 插件
  plugins: ['@typescript-eslint', 'prettier', 'vue'],

  // 规则
  rules: {
    'prettier/prettier': 'error',
    'object-curly-spacing': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/one-component-per-file': 'off',
    'vue/experimental-script-setup-vars': 'off',
    'vue/no-deprecated-props-default-this': 'off'
  }
}
