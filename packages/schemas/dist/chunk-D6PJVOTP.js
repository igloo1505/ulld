import {
  EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema
} from "./chunk-SWCW5N3Y.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-KVVU27MX.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";

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
//# sourceMappingURL=chunk-D6PJVOTP.js.map