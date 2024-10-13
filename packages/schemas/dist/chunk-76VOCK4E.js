import {
  QAPairCountOrderByAggregateInputSchema
} from "./chunk-566XLGR5.js";
import {
  QAPairAvgOrderByAggregateInputSchema
} from "./chunk-DTW74PL3.js";
import {
  QAPairMinOrderByAggregateInputSchema
} from "./chunk-TJJBOI3R.js";
import {
  QAPairMaxOrderByAggregateInputSchema
} from "./chunk-FLLX5QF2.js";
import {
  QAPairSumOrderByAggregateInputSchema
} from "./chunk-HYRQFY6U.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/QAPairOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var QAPairOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  secondaryLabel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QAPairCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QAPairAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QAPairMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QAPairMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QAPairSumOrderByAggregateInputSchema).optional()
}).strict();
var QAPairOrderByWithAggregationInputSchema_default = QAPairOrderByWithAggregationInputSchema;

export {
  QAPairOrderByWithAggregationInputSchema,
  QAPairOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-76VOCK4E.js.map