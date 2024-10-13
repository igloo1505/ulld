import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DefinitionScalarWhereInputSchema.ts
import { z } from "zod";
var DefinitionScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => DefinitionScalarWhereInputSchema), z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DefinitionScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefinitionScalarWhereInputSchema), z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  alphabeticalLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  mdxNoteId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var DefinitionScalarWhereInputSchema_default = DefinitionScalarWhereInputSchema;

export {
  DefinitionScalarWhereInputSchema,
  DefinitionScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-XRVSSVO4.js.map