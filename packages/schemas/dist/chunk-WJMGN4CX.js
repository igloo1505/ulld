import {
  BoolWithAggregatesFilterSchema
} from "./chunk-ZZUY2PNT.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/QuoteScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var QuoteScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  body: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  author: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  source: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  pinned: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var QuoteScalarWhereWithAggregatesInputSchema_default = QuoteScalarWhereWithAggregatesInputSchema;

export {
  QuoteScalarWhereWithAggregatesInputSchema,
  QuoteScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-WJMGN4CX.js.map