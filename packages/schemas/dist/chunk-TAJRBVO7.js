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

// src/database/inputTypeSchemas/ServingScalarWhereInputSchema.ts
import { z } from "zod";
var ServingScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ServingScalarWhereInputSchema), z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ServingScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServingScalarWhereInputSchema), z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  dietaryItemId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  quant_oz: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => EnumQUANTITY_GUESSNullableFilterSchema), z.lazy(() => QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereInputSchema_default = ServingScalarWhereInputSchema;

export {
  ServingScalarWhereInputSchema,
  ServingScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-TAJRBVO7.js.map