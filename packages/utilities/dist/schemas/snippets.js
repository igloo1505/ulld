import { a } from '../chunk-MKDKLXNC.js';
import '../chunk-5WT32FJO.js';
import { z } from 'zod';

var o=z.object({id:z.number().int(),content:z.string(),description:z.string(),keywords:z.string().array().default([]),language:z.enum(a)});

export { o as snippetValidator };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=snippets.js.map