import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-DEVF2DKA.js.map