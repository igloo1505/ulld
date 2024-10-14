import {
  ServingUncheckedCreateNestedManyWithoutItemInputSchema
} from "./chunk-XSIO7LDI.js";

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateWithoutDietInputSchema.ts
import { z } from "zod";
var DietaryItemUncheckedCreateWithoutDietInputSchema = z.object({
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
  Serving: z.lazy(() => ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateWithoutDietInputSchema_default = DietaryItemUncheckedCreateWithoutDietInputSchema;

export {
  DietaryItemUncheckedCreateWithoutDietInputSchema,
  DietaryItemUncheckedCreateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-FHWIZJB2.js.map