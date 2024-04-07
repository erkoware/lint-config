// @ts-check
import tseslint from 'typescript-eslint';

export const foal = tseslint.config(
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        rules: {
            '@typescript-eslint/consistent-indexed-object-style': [
                'error',
                'index-signature',
            ],
        },
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
);

export const strictFoal = tseslint.config(
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        rules: {
            '@typescript-eslint/consistent-indexed-object-style': [
                'error',
                'index-signature',
            ],
        },
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
);

export default foal;
