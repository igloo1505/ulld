import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-HYRQFY6U.js.map