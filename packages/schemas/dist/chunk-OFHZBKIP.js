import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/RelatedValuesAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema;

export {
  RelatedValuesAvgOrderByAggregateInputSchema,
  RelatedValuesAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OFHZBKIP.js.map