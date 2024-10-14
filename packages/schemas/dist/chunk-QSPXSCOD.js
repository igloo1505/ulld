import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var FeatureRequestMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional()
}).strict();
var FeatureRequestMinOrderByAggregateInputSchema_default = FeatureRequestMinOrderByAggregateInputSchema;

export {
  FeatureRequestMinOrderByAggregateInputSchema,
  FeatureRequestMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-QSPXSCOD.js.map