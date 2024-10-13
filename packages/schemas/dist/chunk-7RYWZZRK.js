import {
  EquationCountOrderByAggregateInputSchema
} from "./chunk-LR4J3XEB.js";
import {
  EquationAvgOrderByAggregateInputSchema
} from "./chunk-XY3ACCLM.js";
import {
  EquationMinOrderByAggregateInputSchema
} from "./chunk-TZSIQOVT.js";
import {
  EquationMaxOrderByAggregateInputSchema
} from "./chunk-UVDUUS4L.js";
import {
  EquationSumOrderByAggregateInputSchema
} from "./chunk-3TKBALW7.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var EquationOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  variableLegend: z.lazy(() => SortOrderSchema).optional(),
  variables: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EquationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EquationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EquationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EquationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EquationSumOrderByAggregateInputSchema).optional()
}).strict();
var EquationOrderByWithAggregationInputSchema_default = EquationOrderByWithAggregationInputSchema;

export {
  EquationOrderByWithAggregationInputSchema,
  EquationOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-7RYWZZRK.js.map