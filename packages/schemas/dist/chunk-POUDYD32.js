import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietaryItemCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietaryItemCountOrderByAggregateInputSchema = z.object({
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
var DietaryItemCountOrderByAggregateInputSchema_default = DietaryItemCountOrderByAggregateInputSchema;

export {
  DietaryItemCountOrderByAggregateInputSchema,
  DietaryItemCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-POUDYD32.js.map