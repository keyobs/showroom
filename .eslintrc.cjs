module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4],
        camelcase: 'error',
        eqeqeq: ['warn', 'smart'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'no-multi-assign': 'error',
        'no-var': 'warn',
        'prefer-const': 'warn',
        'no-duplicate-imports': 'warn',
        'linebreak-style': ['warn', 'unix'],
        'react/prop-types': 'off'
    }
};
