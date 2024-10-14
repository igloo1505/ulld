import {
  DietCreateNestedManyWithoutItemsInputSchema
} from "./chunk-PBXZNJDF.js";

// src/database/inputTypeSchemas/DietaryItemCreateWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemCreateWithoutServingInputSchema = z.object({
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Diet: z.lazy(() => DietCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();
var DietaryItemCreateWithoutServingInputSchema_default = DietaryItemCreateWithoutServingInputSchema;

export {
  DietaryItemCreateWithoutServingInputSchema,
  DietaryItemCreateWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-FGGFKGPZ.js.map