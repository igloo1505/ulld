import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/ServingUncheckedCreateInputSchema.ts
import { z } from "zod";
var ServingUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  dietaryItemId: z.number().int(),
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingUncheckedCreateInputSchema_default = ServingUncheckedCreateInputSchema;

export {
  ServingUncheckedCreateInputSchema,
  ServingUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-ZOQLGWKA.js.map