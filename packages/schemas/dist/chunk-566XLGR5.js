import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/QAPairCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var QAPairCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  secondaryLabel: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QAPairCountOrderByAggregateInputSchema_default = QAPairCountOrderByAggregateInputSchema;

export {
  QAPairCountOrderByAggregateInputSchema,
  QAPairCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-566XLGR5.js.map