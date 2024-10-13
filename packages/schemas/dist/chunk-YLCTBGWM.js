import {
  CitationsGroupCountOrderByAggregateInputSchema
} from "./chunk-GEKDWCBL.js";
import {
  CitationsGroupMinOrderByAggregateInputSchema
} from "./chunk-4KE4H3GJ.js";
import {
  CitationsGroupMaxOrderByAggregateInputSchema
} from "./chunk-GQIORUAM.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var CitationsGroupOrderByWithAggregationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => CitationsGroupCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CitationsGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CitationsGroupMinOrderByAggregateInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithAggregationInputSchema_default = CitationsGroupOrderByWithAggregationInputSchema;

export {
  CitationsGroupOrderByWithAggregationInputSchema,
  CitationsGroupOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-YLCTBGWM.js.map