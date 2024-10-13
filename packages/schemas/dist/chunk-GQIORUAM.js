import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/CitationsGroupMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var CitationsGroupMaxOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();
var CitationsGroupMaxOrderByAggregateInputSchema_default = CitationsGroupMaxOrderByAggregateInputSchema;

export {
  CitationsGroupMaxOrderByAggregateInputSchema,
  CitationsGroupMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-GQIORUAM.js.map