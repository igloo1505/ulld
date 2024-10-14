import {
  JsonWithAggregatesFilterSchema
} from "./chunk-OSEN3URL.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/EquationScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var EquationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => EquationScalarWhereWithAggregatesInputSchema), z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquationScalarWhereWithAggregatesInputSchema), z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  equationId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  desc: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  asPython: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  variableLegend: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var EquationScalarWhereWithAggregatesInputSchema_default = EquationScalarWhereWithAggregatesInputSchema;

export {
  EquationScalarWhereWithAggregatesInputSchema,
  EquationScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-QIX2QD6S.js.map