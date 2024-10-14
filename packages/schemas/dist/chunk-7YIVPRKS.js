import {
  FloatFilterSchema
} from "./chunk-KRPE75Q3.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDL32JOO.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/DietaryItemScalarWhereInputSchema.ts
import { z } from "zod";
var DietaryItemScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => DietaryItemScalarWhereInputSchema), z.lazy(() => DietaryItemScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DietaryItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietaryItemScalarWhereInputSchema), z.lazy(() => DietaryItemScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  barcode: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  gi: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  calsPerOz: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  glutenFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  minimalFructose: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  natural: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  organic: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  impactScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional()
}).strict();
var DietaryItemScalarWhereInputSchema_default = DietaryItemScalarWhereInputSchema;

export {
  DietaryItemScalarWhereInputSchema,
  DietaryItemScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-7YIVPRKS.js.map