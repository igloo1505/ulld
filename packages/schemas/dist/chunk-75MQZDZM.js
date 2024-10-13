import {
  ServingCreateNestedManyWithoutItemInputSchema
} from "./chunk-5AIU2MNV.js";

// src/database/inputTypeSchemas/DietaryItemCreateWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemCreateWithoutDietInputSchema = z.object({
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Serving: z.lazy(() => ServingCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemCreateWithoutDietInputSchema_default = DietaryItemCreateWithoutDietInputSchema;

export {
  DietaryItemCreateWithoutDietInputSchema,
  DietaryItemCreateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-75MQZDZM.js.map