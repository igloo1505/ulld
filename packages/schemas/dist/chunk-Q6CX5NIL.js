import {
  DietaryItemCreateNestedOneWithoutServingInputSchema
} from "./chunk-VGO4NNJF.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

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
//# sourceMappingURL=chunk-Q6CX5NIL.js.map