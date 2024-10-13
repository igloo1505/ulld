import {
  DietListRelationFilterSchema,
  DietaryItemWhereInputSchema,
  ServingListRelationFilterSchema
} from "./chunk-4FCA5YKO.js";
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
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/DietaryItemWhereUniqueInputSchema.ts
import { z } from "zod";
var DietaryItemWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => DietaryItemWhereInputSchema), z.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DietaryItemWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DietaryItemWhereInputSchema), z.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  barcode: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  gi: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  calsPerOz: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  glutenFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  minimalFructose: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  natural: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  organic: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  impactScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  Diet: z.lazy(() => DietListRelationFilterSchema).optional(),
  Serving: z.lazy(() => ServingListRelationFilterSchema).optional()
}).strict());
var DietaryItemWhereUniqueInputSchema_default = DietaryItemWhereUniqueInputSchema;

export {
  DietaryItemWhereUniqueInputSchema,
  DietaryItemWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-YBVXMRYF.js.map