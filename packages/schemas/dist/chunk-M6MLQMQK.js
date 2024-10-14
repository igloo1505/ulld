import {
  DietaryItemCreateNestedOneWithoutServingInputSchema
} from "./chunk-3PGZCI7Z.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";

// src/database/inputTypeSchemas/ServingCreateInputSchema.ts
import { z } from "zod";
var ServingCreateInputSchema = z.object({
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  item: z.lazy(() => DietaryItemCreateNestedOneWithoutServingInputSchema)
}).strict();
var ServingCreateInputSchema_default = ServingCreateInputSchema;

export {
  ServingCreateInputSchema,
  ServingCreateInputSchema_default
};
//# sourceMappingURL=chunk-M6MLQMQK.js.map