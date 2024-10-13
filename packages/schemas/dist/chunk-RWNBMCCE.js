import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietaryItemMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietaryItemMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  barcode: z.lazy(() => SortOrderSchema).optional(),
  gi: z.lazy(() => SortOrderSchema).optional(),
  calsPerOz: z.lazy(() => SortOrderSchema).optional(),
  glutenFree: z.lazy(() => SortOrderSchema).optional(),
  minimalFructose: z.lazy(() => SortOrderSchema).optional(),
  natural: z.lazy(() => SortOrderSchema).optional(),
  organic: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietaryItemMinOrderByAggregateInputSchema_default = DietaryItemMinOrderByAggregateInputSchema;

export {
  DietaryItemMinOrderByAggregateInputSchema,
  DietaryItemMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-RWNBMCCE.js.map