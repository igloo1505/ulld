import '../chunk-F3FYYIAV.js';
import { z } from 'zod';

var dateZodProperty = z.union([z.string(), z.date()]).transform((d) => new Date(d));
var dateNullableZodProperty = z.union([z.string(), z.date()]).nullish().transform((d) => d ? new Date(d) : d);

export { dateNullableZodProperty, dateZodProperty };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.js.map