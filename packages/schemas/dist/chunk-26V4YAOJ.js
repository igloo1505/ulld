import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/SnippetWhereInputSchema.ts
import { z } from "zod";
var SnippetWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SnippetWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  language: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var SnippetWhereInputSchema_default = SnippetWhereInputSchema;

export {
  SnippetWhereInputSchema,
  SnippetWhereInputSchema_default
};
//# sourceMappingURL=chunk-26V4YAOJ.js.map