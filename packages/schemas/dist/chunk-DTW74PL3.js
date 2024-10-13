import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-DTW74PL3.js.map