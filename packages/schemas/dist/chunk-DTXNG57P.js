import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-WLJXWNSV.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-DTXNG57P.js.map