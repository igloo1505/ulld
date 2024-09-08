import { ArrayUtilities } from '../../chunk-JEBMZLDZ.js';
import '../../chunk-F3FYYIAV.js';
import { z } from 'zod';

var paginationProps = z.object({
  page: z.number().int().default(1),
  take: z.number().int().default(20)
});
var sortDirProps = z.object({
  sortDir: z.union([z.literal("asc"), z.literal("desc")]).default("desc")
});
var equationSearchParamsSchema = z.object({
  tags: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
  variables: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
  query: z.string().optional(),
  value: z.string().optional(),
  orderBy: z.union([
    z.literal("title"),
    z.literal("createdAt")
  ]).default("title")
}).merge(paginationProps).merge(sortDirProps);

export { equationSearchParamsSchema, paginationProps, sortDirProps };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=zod.js.map