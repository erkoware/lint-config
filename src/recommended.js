// @ts-check
import tseslint from 'typescript-eslint';
import {base, foal, strictFoal } from './index.js';

export const recommended = tseslint.config(...base);
export const foalRecommended = tseslint.config(...foal, ...base);
export const foalStrict = tseslint.config(...strictFoal, ...base);
