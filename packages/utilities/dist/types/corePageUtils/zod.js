import { a as a$1 } from '../../chunk-QX24WZV2.js';
import '../../chunk-5WT32FJO.js';
import { z } from 'zod';

var e=z.object({page:z.number().int().default(1),take:z.number().int().default(20)}),a=z.object({sortDir:z.union([z.literal("asc"),z.literal("desc")]).default("desc")}),l=z.object({tags:z.union([z.string(),z.string().array()]).transform(a$1.beArray).default([]),variables:z.union([z.string(),z.string().array()]).transform(a$1.beArray).default([]),query:z.string().optional(),value:z.string().optional(),orderBy:z.union([z.literal("title"),z.literal("createdAt")]).default("title")}).merge(e).merge(a);

export { l as equationSearchParamsSchema, e as paginationProps, a as sortDirProps };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=zod.js.map