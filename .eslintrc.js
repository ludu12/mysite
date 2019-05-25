module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    'globals': {
        'API_BASE': false,
        'after': false,
        'afterEach': false,
        'Atomics': 'readonly',
        'before': false,
        'beforeEach': false,
        'describe': false,
        'it': false,
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        'curly': 'error',
        'default-case': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': ['error', 'never'],
        "jsx-quotes": ["error", "prefer-single"],
        'indent': ['error', 4],
        'no-extra-semi': 'error',
        'no-multi-spaces': 'error',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'space-in-parens': ['error', 'never']
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};