import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/RelatedValuesSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesSumOrderByAggregateInputSchema_default = RelatedValuesSumOrderByAggregateInputSchema;

export {
  RelatedValuesSumOrderByAggregateInputSchema,
  RelatedValuesSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-RULB6RPK.js.map