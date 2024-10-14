import {
  FloatWithAggregatesFilterSchema
} from "./chunk-4CX7VVNU.js";
import {
  JsonWithAggregatesFilterSchema
} from "./chunk-OSEN3URL.js";
import {
  IntNullableListFilterSchema
} from "./chunk-YSW3P2HE.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";

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
//# sourceMappingURL=chunk-WZTHW4BQ.js.map