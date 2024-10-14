import {
  FloatWithAggregatesFilterSchema
} from "./chunk-4CX7VVNU.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-DOHO4RJ2.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var DietaryItemScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  barcode: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  gi: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  calsPerOz: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  glutenFree: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  minimalFructose: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  natural: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  organic: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  impactScore: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional()
}).strict();
var DietaryItemScalarWhereWithAggregatesInputSchema_default = DietaryItemScalarWhereWithAggregatesInputSchema;

export {
  DietaryItemScalarWhereWithAggregatesInputSchema,
  DietaryItemScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-QRPQ6ZFR.js.map