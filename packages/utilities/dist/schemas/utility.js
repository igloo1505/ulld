import '../chunk-5WT32FJO.js';
import r from 'dayjs';
import { z } from 'zod';

var u=z.string().optional().nullable(),p=z.number().optional().nullable(),m=e=>z.union([z.boolean(),z.string()]).optional().nullable().default(e).transform(o=>typeof o=="boolean"?o:o==="true"),b=(e=!1,o)=>e?z.union([z.string().datetime(),z.number(),z.date()]).optional().nullable().transform(n=>r(n).isValid()?new Date(n):o):z.union([z.string().datetime(),z.number(),z.date()]).transform(n=>new Date(n));

export { b as zodCoerceToDate, m as zodOptBool, p as zodOptNum, u as zodOptStr };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utility.js.map