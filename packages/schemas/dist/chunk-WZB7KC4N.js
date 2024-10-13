import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/inputTypeSchemas/ServingCreateWithoutItemInputSchema.ts
import { z } from "zod";
var ServingCreateWithoutItemInputSchema = z.object({
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateWithoutItemInputSchema_default = ServingCreateWithoutItemInputSchema;

export {
  ServingCreateWithoutItemInputSchema,
  ServingCreateWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-WZB7KC4N.js.map