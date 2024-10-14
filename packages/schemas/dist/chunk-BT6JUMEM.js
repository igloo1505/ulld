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

// src/database/inputTypeSchemas/QuoteWhereInputSchema.ts
import { z } from "zod";
var QuoteWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => QuoteWhereInputSchema), z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => QuoteWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuoteWhereInputSchema), z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  body: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  author: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  source: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  pinned: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var QuoteWhereInputSchema_default = QuoteWhereInputSchema;

export {
  QuoteWhereInputSchema,
  QuoteWhereInputSchema_default
};
//# sourceMappingURL=chunk-BT6JUMEM.js.map