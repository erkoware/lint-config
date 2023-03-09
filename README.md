# [erkoware](https://www.erkoware.de) Formatting and Lint Rules

This repository contains the formatting and lint rules used by [erkoware](https://www.erkoware.de).

## Usage

### ESLint

Install the package matching your project:

- Typescript: `@erkoware/eslint-config-ts`
- FoalTS: `@erkoware/eslint-config-foalts`
- Vue: `@erkoware/eslint-config-vue`

```bash
npm install --save-dev @erkoware/eslint-config-ts
```

Then, in your `.eslintrc.js` file, add the following line:

```js
{
  "extends": "@erkoware/lint-config"
}

```

### Prettier

and in your `.prettierrc` file, add the following line:

```txt
"@erkoware/prettier-config"
```
