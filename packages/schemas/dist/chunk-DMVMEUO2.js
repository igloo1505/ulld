import {
  DietCreateNestedManyWithoutItemsInputSchema
} from "./chunk-PBXZNJDF.js";
import {
  ServingCreateNestedManyWithoutItemInputSchema
} from "./chunk-2OVCX575.js";

// src/database/inputTypeSchemas/DietaryItemCreateInputSchema.ts
import { z } from "zod";
var DietaryItemCreateInputSchema = z.object({
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Diet: z.lazy(() => DietCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: z.lazy(() => ServingCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemCreateInputSchema_default = DietaryItemCreateInputSchema;

export {
  DietaryItemCreateInputSchema,
  DietaryItemCreateInputSchema_default
};
//# sourceMappingURL=chunk-DMVMEUO2.js.map