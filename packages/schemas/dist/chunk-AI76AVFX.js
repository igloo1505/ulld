import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/ServingCreateManyInputSchema.ts
import { z } from "zod";
var ServingCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  dietaryItemId: z.number().int(),
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateManyInputSchema_default = ServingCreateManyInputSchema;

export {
  ServingCreateManyInputSchema,
  ServingCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-AI76AVFX.js.map