import {
  DietaryItemRelationFilterSchema,
  DietaryItemWhereInputSchema,
  ServingWhereInputSchema
} from "./chunk-MDAJAPVT.js";
import {
  EnumQUANTITY_GUESSNullableFilterSchema
} from "./chunk-W3S4HR64.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDL32JOO.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";

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
//# sourceMappingURL=chunk-BRBARM24.js.map