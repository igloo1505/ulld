import { a as a$1 } from '../../chunk-RTY2WVUP.mjs';
import '../../chunk-T7KECS5U.mjs';
import { z } from 'zod';

var e=z.object({page:z.number().int().default(1),take:z.number().int().default(20)}),a=z.object({sortDir:z.union([z.literal("asc"),z.literal("desc")]).default("desc")}),n=z.object({tags:z.union([z.string(),z.string().array()]).transform(a$1.beArray).default([]),variables:z.union([z.string(),z.string().array()]).transform(a$1.beArray).default([]),query:z.string().optional(),value:z.string().optional(),orderBy:z.union([z.literal("title"),z.literal("createdAt")]).default("title")}).merge(e).merge(a);

export { n as equationSearchParamsSchema, e as paginationProps, a as sortDirProps };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=zod.mjs.map