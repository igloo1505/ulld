import {
  QuoteWhereInputSchema
} from "./chunk-3OXVABPN.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/QuoteWhereUniqueInputSchema.ts
import { z } from "zod";
var QuoteWhereUniqueInputSchema = z.object({
  body: z.string()
}).and(z.object({
  body: z.string().optional(),
  AND: z.union([z.lazy(() => QuoteWhereInputSchema), z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => QuoteWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuoteWhereInputSchema), z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  author: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  source: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  pinned: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var QuoteWhereUniqueInputSchema_default = QuoteWhereUniqueInputSchema;

export {
  QuoteWhereUniqueInputSchema,
  QuoteWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-YSPMCR2D.js.map