import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var FeatureRequestCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  userBase: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional()
}).strict();
var FeatureRequestCountOrderByAggregateInputSchema_default = FeatureRequestCountOrderByAggregateInputSchema;

export {
  FeatureRequestCountOrderByAggregateInputSchema,
  FeatureRequestCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-2Z5PX7BY.js.map