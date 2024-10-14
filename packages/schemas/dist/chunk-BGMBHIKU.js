import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QAPairAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var QAPairAvgOrderByAggregateInputSchema = z.object({
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QAPairAvgOrderByAggregateInputSchema_default = QAPairAvgOrderByAggregateInputSchema;

export {
  QAPairAvgOrderByAggregateInputSchema,
  QAPairAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-BGMBHIKU.js.map