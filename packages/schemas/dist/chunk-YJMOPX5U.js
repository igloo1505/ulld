import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/ServingUncheckedCreateWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUncheckedCreateWithoutItemInputSchema = z.object({
  id: z.number().int().optional(),
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingUncheckedCreateWithoutItemInputSchema_default = ServingUncheckedCreateWithoutItemInputSchema;

export {
  ServingUncheckedCreateWithoutItemInputSchema,
  ServingUncheckedCreateWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-YJMOPX5U.js.map