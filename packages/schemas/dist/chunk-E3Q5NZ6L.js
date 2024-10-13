import {
  DietaryItemArgsSchema
} from "./chunk-QGBCG46B.js";

// src/database/inputTypeSchemas/ServingSelectSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingSelectSchema_default = ServingSelectSchema;

export {
  ServingSelectSchema,
  ServingSelectSchema_default
};
//# sourceMappingURL=chunk-E3Q5NZ6L.js.map