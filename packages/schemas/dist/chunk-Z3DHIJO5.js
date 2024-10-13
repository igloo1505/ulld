import {
  FloatFilterSchema
} from "./chunk-DX2UN7V4.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDJNRMXP.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-Z3DHIJO5.js.map