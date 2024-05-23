// @ts-check
export * from './configs/base.js';
export * from './configs/foal.js';

import { foalRecommended, foalStrict, recommended } from './recommended.js';

export default {
    configs: {
        recommended,
        foalRecommended,
        foalStrict
    }
}
