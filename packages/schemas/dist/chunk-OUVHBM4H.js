import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/RandomImageCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var RandomImageCountOrderByAggregateInputSchema = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema;

export {
  RandomImageCountOrderByAggregateInputSchema,
  RandomImageCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OUVHBM4H.js.map