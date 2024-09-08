import '../chunk-5WT32FJO.js';
import { z } from 'zod';

var a=z.union([z.string(),z.date()]).transform(o=>new Date(o)),s=z.union([z.string(),z.date()]).nullish().transform(o=>o&&new Date(o));

export { s as dateNullableZodProperty, a as dateZodProperty };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.js.map