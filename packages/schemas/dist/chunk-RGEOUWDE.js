import {
  QUANTITY_GUESSSchema
} from "./chunk-LUUG3TNG.js";

// src/database/inputTypeSchemas/ServingCreateManyItemInputSchema.ts
import { z } from "zod";
var ServingCreateManyItemInputSchema = z.object({
  id: z.number().int().optional(),
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateManyItemInputSchema_default = ServingCreateManyItemInputSchema;

export {
  ServingCreateManyItemInputSchema,
  ServingCreateManyItemInputSchema_default
};
//# sourceMappingURL=chunk-RGEOUWDE.js.map