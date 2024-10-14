import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QAPairSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var QAPairSumOrderByAggregateInputSchema = z.object({
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QAPairSumOrderByAggregateInputSchema_default = QAPairSumOrderByAggregateInputSchema;

export {
  QAPairSumOrderByAggregateInputSchema,
  QAPairSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-W4CJ25PZ.js.map