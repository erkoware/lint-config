# [erkoware](https://www.erkoware.de) Formatting and Lint Rules

This repository contains the formatting and lint rules used by [erkoware](https://www.erkoware.de).

## Usage

### ESLint

Install the package

- [@erkoware/eslint-config-ts](https://www.npmjs.com/package/@erkoware/eslint-config-ts): `@erkoware/eslint-config-ts`

```bash
npm install --save-dev @erkoware/eslint-config-ts
```

Chose the lint config you want to use.

| Config          | Description                            |
| --------------- | -------------------------------------- |
| recommended     | Basic rules applicabel to all projects |
| foalRecommended | Recommende rules for foal projects     |
| foalStrict      | Strict rules for foal projects         |

And at it to your `eslint.config.js` file like that.

```js
// @ts-check
import erkowareTSeslint from '@erkoware/eslint-config-ts';

export default erkowareTSeslint.configs.foalStrict

```

## Extending

To extend/override a config.

```js
// @ts-check
import erkowareTSeslint from '@erkoware/eslint-config-ts';

export default [
    ...erkowareTSeslint.configs.foalStrict,
    {
        /* 
            config goes here
        */
    }
]

```
