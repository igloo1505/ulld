import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-WV7T4YLA.js.map