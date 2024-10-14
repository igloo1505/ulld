import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var FeatureRequestMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional()
}).strict();
var FeatureRequestMaxOrderByAggregateInputSchema_default = FeatureRequestMaxOrderByAggregateInputSchema;

export {
  FeatureRequestMaxOrderByAggregateInputSchema,
  FeatureRequestMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-RAOOB5TV.js.map