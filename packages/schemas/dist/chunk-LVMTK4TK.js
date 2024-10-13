import {
  SnippetWhereInputSchema
} from "./chunk-WV7T4YLA.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-LVMTK4TK.js.map