import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietaryItemAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietaryItemAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gi: z.lazy(() => SortOrderSchema).optional(),
  calsPerOz: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietaryItemAvgOrderByAggregateInputSchema_default = DietaryItemAvgOrderByAggregateInputSchema;

export {
  DietaryItemAvgOrderByAggregateInputSchema,
  DietaryItemAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-JWTC4VW3.js.map