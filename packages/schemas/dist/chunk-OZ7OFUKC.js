import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QAPairMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var QAPairMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  secondaryLabel: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QAPairMinOrderByAggregateInputSchema_default = QAPairMinOrderByAggregateInputSchema;

export {
  QAPairMinOrderByAggregateInputSchema,
  QAPairMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OZ7OFUKC.js.map