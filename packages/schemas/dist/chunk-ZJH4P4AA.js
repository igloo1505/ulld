import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var SnippetScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  language: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var SnippetScalarWhereWithAggregatesInputSchema_default = SnippetScalarWhereWithAggregatesInputSchema;

export {
  SnippetScalarWhereWithAggregatesInputSchema,
  SnippetScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-ZJH4P4AA.js.map