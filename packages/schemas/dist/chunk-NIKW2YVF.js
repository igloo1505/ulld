import {
  DietaryItemArgsSchema
} from "./chunk-KDYZAD52.js";

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
//# sourceMappingURL=chunk-NIKW2YVF.js.map