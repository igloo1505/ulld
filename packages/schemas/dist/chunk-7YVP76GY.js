import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-33MCZ6AL.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingOrderByWithRelationInputSchema.ts
import { z } from "zod";
var ServingOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  quant_guess: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  item: z.lazy(() => DietaryItemOrderByWithRelationInputSchema).optional()
}).strict();
var ServingOrderByWithRelationInputSchema_default = ServingOrderByWithRelationInputSchema;

export {
  ServingOrderByWithRelationInputSchema,
  ServingOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-7YVP76GY.js.map