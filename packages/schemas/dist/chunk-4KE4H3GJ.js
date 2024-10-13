import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/CitationsGroupMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var CitationsGroupMinOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();
var CitationsGroupMinOrderByAggregateInputSchema_default = CitationsGroupMinOrderByAggregateInputSchema;

export {
  CitationsGroupMinOrderByAggregateInputSchema,
  CitationsGroupMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-4KE4H3GJ.js.map