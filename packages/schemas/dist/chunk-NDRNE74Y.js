import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/DefinitionScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var DefinitionScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema), z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema), z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  alphabeticalLabel: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  mdxNoteId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var DefinitionScalarWhereWithAggregatesInputSchema_default = DefinitionScalarWhereWithAggregatesInputSchema;

export {
  DefinitionScalarWhereWithAggregatesInputSchema,
  DefinitionScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-NDRNE74Y.js.map