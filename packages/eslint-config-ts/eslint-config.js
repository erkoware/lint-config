module.exports = {
    extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
    plugins: ['node', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'block-scoped-var': 'error',
        curly: ['error', 'all'],
        eqeqeq: 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'eol-last': 'error',
        'prefer-arrow-callback': 'error',
        'no-trailing-spaces': 'error',
        quotes: ['warn', 'single', { avoidEscape: true }],
        'no-restricted-properties': [
            'error',
            {
                object: 'describe',
                property: 'only',
            },
            {
                object: 'it',
                property: 'only',
            },
        ],
        'no-duplicate-imports': 'error',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                //"plugin:@typescript-eslint/strict"
            ],
            rules: {
                '@typescript-eslint/member-ordering': 'warn',
                'lines-between-class-members': 'off',
                '@typescript-eslint/lines-between-class-members': [
                    'error',
                    'always',
                    { exceptAfterSingleLine: true },
                ],
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-empty-function': 'warn',
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'default',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'parameter',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'enumMember',
                        format: ['UPPER_CASE'],
                    },
                    {
                        selector: 'memberLike',
                        modifiers: ['private'],
                        format: ['camelCase'],
                        leadingUnderscore: 'require',
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                ],
                'node/no-missing-import': 'off',
                'node/no-empty-function': 'off',
                'node/no-unsupported-features/es-syntax': 'off',
                'node/no-missing-require': 'off',
                'node/shebang': 'off',
                'no-dupe-class-members': 'off',
                'require-atomic-updates': 'off',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                project: ['tsconfig.json'],
            },
            overrides: [
                {
                    files: ['**/*.spec.ts', '**/e2e/*'],
                    env: {
                        mocha: true,
                    },
                },
            ],
        },
    ],
};
