import {
  FloatWithAggregatesFilterSchema
} from "./chunk-UQJRVG5A.js";
import {
  JsonWithAggregatesFilterSchema
} from "./chunk-HTFCS32S.js";
import {
  IntNullableListFilterSchema
} from "./chunk-EUFG6BDQ.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";

// src/database/inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var RelatedValuesScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  input: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  output: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  equationId: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereWithAggregatesInputSchema_default = RelatedValuesScalarWhereWithAggregatesInputSchema;

export {
  RelatedValuesScalarWhereWithAggregatesInputSchema,
  RelatedValuesScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-OR4VSMTT.js.map