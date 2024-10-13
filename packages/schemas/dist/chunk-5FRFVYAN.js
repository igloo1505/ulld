import {
  FloatWithAggregatesFilterSchema
} from "./chunk-UQJRVG5A.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-KVVU27MX.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-ZZUY2PNT.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-IYE6XDHM.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

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
//# sourceMappingURL=chunk-5FRFVYAN.js.map