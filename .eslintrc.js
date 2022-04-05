module.exports = {
    extends: ['plugin:vue/vue3-essential', 'prettier'],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
    },
    env: {
        'vue/setup-compiler-macros': true,
    },
}
