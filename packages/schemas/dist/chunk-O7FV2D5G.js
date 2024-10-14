import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

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
//# sourceMappingURL=chunk-O7FV2D5G.js.map