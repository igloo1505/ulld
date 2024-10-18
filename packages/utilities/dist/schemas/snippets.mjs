import { a as a$1 } from '../chunk-YPKN2OGE.mjs';
import '../chunk-T7KECS5U.mjs';
import { z } from 'zod';

var a=z.object({id:z.number().int(),content:z.string(),description:z.string(),keywords:z.string().array().default([]),language:z.enum(a$1)});

export { a as snippetValidator };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=snippets.mjs.map