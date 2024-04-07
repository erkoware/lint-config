// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

const prettier = tseslint.config(
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                    semi: true,
                    trailingComma: 'all',
                    endOfLine: 'lf',
                },
            ],
        },
    },
    eslintPluginPrettierRecommended,
);

const style = tseslint.config({
    rules: {
        'eol-last': 'error',
        quotes: ['warn', 'single', { avoidEscape: true }],
        'no-trailing-spaces': 'error',
    },
});

const emptyLines = tseslint.config({
    rules: {
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            { blankLine: 'always', prev: '*', next: 'return' },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
    },
});

const typescript = tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
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
                format: ['camelCase'],
            },
            {
                selector: 'parameter',
                format: null,
                leadingUnderscore: 'allow',
            },
            {
                selector: ['enum', 'enumMember'],
                format: ['UPPER_CASE'],
            },
            {
                selector: ['class', 'typeLike'],
                format: ['PascalCase'],
            },
            {
                selector: 'objectLiteralProperty',
                format: null,
            },
            {
                selector: 'default',
                modifiers: ['private'],
                format: null,
                leadingUnderscore: 'allow',
            },
            {
                selector: 'default',
                modifiers: ['exported'],
                filter: {
                    regex: 'main',
                    match: false,
                },
                format: ['PascalCase'],
            },
            {
                selector: 'default',
                filter: '_id',
                format: null,
                leadingUnderscore: 'allow',
            },
        ],
        'no-dupe-class-members': 'off',
        'require-atomic-updates': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
    },
});

const tests = tseslint.config({
    files: ['**/*.spec.ts', '**/e2e/*'],
    languageOptions: {
        globals: {
            ...globals.mocha,
        },
    },
});

export const base = tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'block-scoped-var': 'error',
            curly: ['error', 'all'],
            eqeqeq: 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'error',
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
        },
    },
    ...style,
    ...emptyLines,
    ...typescript,
    ...tests,
    ...prettier,
);

export default base;
