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

// src/database/inputTypeSchemas/FeatureRequestScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var FeatureRequestScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var FeatureRequestScalarWhereWithAggregatesInputSchema_default = FeatureRequestScalarWhereWithAggregatesInputSchema;

export {
  FeatureRequestScalarWhereWithAggregatesInputSchema,
  FeatureRequestScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-OWWIKXLR.js.map