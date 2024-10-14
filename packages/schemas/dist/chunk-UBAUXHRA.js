import {
  DietListRelationFilterSchema,
  DietaryItemWhereInputSchema,
  ServingListRelationFilterSchema
} from "./chunk-MDAJAPVT.js";
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
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-UBAUXHRA.js.map