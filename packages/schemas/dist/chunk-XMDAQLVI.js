import {
  DietUncheckedCreateNestedManyWithoutItemsInputSchema
} from "./chunk-HFW6TIQ4.js";

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemUncheckedCreateWithoutServingInputSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Diet: z.lazy(() => DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateWithoutServingInputSchema_default = DietaryItemUncheckedCreateWithoutServingInputSchema;

export {
  DietaryItemUncheckedCreateWithoutServingInputSchema,
  DietaryItemUncheckedCreateWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-XMDAQLVI.js.map