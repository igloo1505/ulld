import '../chunk-GQSCBKA6.js';
import { z } from 'zod';

var e=z.union([z.string(),z.date()]).transform(o=>new Date(o)),n=z.union([z.string(),z.date()]).nullish().transform(o=>o&&new Date(o));

export { n as dateNullableZodProperty, e as dateZodProperty };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.js.map