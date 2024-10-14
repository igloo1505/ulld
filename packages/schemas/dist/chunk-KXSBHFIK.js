import {
  QAPairCountOrderByAggregateInputSchema
} from "./chunk-2F74OL3D.js";
import {
  QAPairAvgOrderByAggregateInputSchema
} from "./chunk-BGMBHIKU.js";
import {
  QAPairMinOrderByAggregateInputSchema
} from "./chunk-OZ7OFUKC.js";
import {
  QAPairMaxOrderByAggregateInputSchema
} from "./chunk-VF7NVQ4V.js";
import {
  QAPairSumOrderByAggregateInputSchema
} from "./chunk-W4CJ25PZ.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-KXSBHFIK.js.map