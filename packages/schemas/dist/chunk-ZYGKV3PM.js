import {
  DietUncheckedCreateNestedManyWithoutItemsInputSchema
} from "./chunk-HFW6TIQ4.js";
import {
  ServingUncheckedCreateNestedManyWithoutItemInputSchema
} from "./chunk-F3SU5DUS.js";

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateInputSchema.ts
import { z } from "zod";
var DietaryItemUncheckedCreateInputSchema = z.object({
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
  Diet: z.lazy(() => DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: z.lazy(() => ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateInputSchema_default = DietaryItemUncheckedCreateInputSchema;

export {
  DietaryItemUncheckedCreateInputSchema,
  DietaryItemUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-ZYGKV3PM.js.map