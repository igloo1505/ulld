import {
  EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema
} from "./chunk-3DR3VS3S.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-DOHO4RJ2.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";

// src/database/inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var ServingScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  dietaryItemId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  quant_oz: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  quant_guess: z.union([z.lazy(() => EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema), z.lazy(() => QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereWithAggregatesInputSchema_default = ServingScalarWhereWithAggregatesInputSchema;

export {
  ServingScalarWhereWithAggregatesInputSchema,
  ServingScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-RU3G45MR.js.map