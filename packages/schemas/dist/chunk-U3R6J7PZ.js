import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var ReadingListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema;

export {
  ReadingListScalarWhereWithAggregatesInputSchema,
  ReadingListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-U3R6J7PZ.js.map