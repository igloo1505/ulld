import {
  CitationsGroupCountOrderByAggregateInputSchema
} from "./chunk-D4AYWDYF.js";
import {
  CitationsGroupMinOrderByAggregateInputSchema
} from "./chunk-62ZW7XGQ.js";
import {
  CitationsGroupMaxOrderByAggregateInputSchema
} from "./chunk-UT6VCJQO.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-CU3ZPZXL.js.map