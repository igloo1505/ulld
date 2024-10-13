import {
  DietaryItemRelationFilterSchema,
  DietaryItemWhereInputSchema,
  ServingWhereInputSchema
} from "./chunk-4FCA5YKO.js";
import {
  EnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-MR4VDJQU.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDJNRMXP.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";

// src/database/inputTypeSchemas/ServingWhereUniqueInputSchema.ts
import { z } from "zod";
var ServingWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => ServingWhereInputSchema), z.lazy(() => ServingWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ServingWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServingWhereInputSchema), z.lazy(() => ServingWhereInputSchema).array()]).optional(),
  dietaryItemId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  quant_oz: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => EnumQUANTITY_GUESSNullableFilterSchema), z.lazy(() => QUANTITY_GUESSSchema)]).optional().nullable(),
  item: z.union([z.lazy(() => DietaryItemRelationFilterSchema), z.lazy(() => DietaryItemWhereInputSchema)]).optional()
}).strict());
var ServingWhereUniqueInputSchema_default = ServingWhereUniqueInputSchema;

export {
  ServingWhereUniqueInputSchema,
  ServingWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-XBJQZROE.js.map