module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parseOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        'prettier/vue',
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['vue'],
    rules: {
        semi: [2, 'never'],
        'no-console': 'off',
        'vue/max-attributes-per-line': 'off',
        'prettier/prettier': ['error', {semi: false}]
    }
}
