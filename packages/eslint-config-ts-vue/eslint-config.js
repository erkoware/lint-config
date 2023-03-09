module.exports = {
    extends: ["@erkoware/eslint-config-ts"],
    ignorePatterns: ["src/migrations/**/*.ts"],
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            overrides: [
                {
                    files: ["**/*.controller.ts"],
                    rules: {
                        "@typescript-eslint/require-await": "off",
                    },
                },
            ],
        },
    ],
};
