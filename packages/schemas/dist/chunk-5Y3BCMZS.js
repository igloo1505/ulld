// src/database/inputTypeSchemas/DietaryItemCreateManyInputSchema.ts
import { z } from "zod";
var DietaryItemCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional()
}).strict();
var DietaryItemCreateManyInputSchema_default = DietaryItemCreateManyInputSchema;

export {
  DietaryItemCreateManyInputSchema,
  DietaryItemCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-5Y3BCMZS.js.map