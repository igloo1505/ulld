import {
  QuoteWhereInputSchema
} from "./chunk-BT6JUMEM.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-OQ4XMP32.js.map