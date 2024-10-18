import '../chunk-T7KECS5U.mjs';
import r from 'dayjs';
import { z } from 'zod';

var i=z.string().optional().nullable(),s=z.number().optional().nullable(),u=e=>z.union([z.boolean(),z.string()]).optional().nullable().default(e).transform(o=>typeof o=="boolean"?o:o==="true"),p=(e=!1,o)=>e?z.union([z.string().datetime(),z.number(),z.date()]).optional().nullable().transform(n=>r(n).isValid()?new Date(n):o):z.union([z.string().datetime(),z.number(),z.date()]).transform(n=>new Date(n));

export { p as zodCoerceToDate, u as zodOptBool, s as zodOptNum, i as zodOptStr };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utility.mjs.map