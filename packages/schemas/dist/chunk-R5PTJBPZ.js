import {
  SnippetWhereInputSchema
} from "./chunk-26V4YAOJ.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/SnippetWhereUniqueInputSchema.ts
import { z } from "zod";
var SnippetWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SnippetWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  language: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var SnippetWhereUniqueInputSchema_default = SnippetWhereUniqueInputSchema;

export {
  SnippetWhereUniqueInputSchema,
  SnippetWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-R5PTJBPZ.js.map