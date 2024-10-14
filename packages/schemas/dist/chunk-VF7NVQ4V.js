import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QAPairMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var QAPairMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  secondaryLabel: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QAPairMaxOrderByAggregateInputSchema_default = QAPairMaxOrderByAggregateInputSchema;

export {
  QAPairMaxOrderByAggregateInputSchema,
  QAPairMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-VF7NVQ4V.js.map