import {
  EquationCountOrderByAggregateInputSchema
} from "./chunk-5JHC7VHJ.js";
import {
  EquationAvgOrderByAggregateInputSchema
} from "./chunk-CUECTXWX.js";
import {
  EquationMinOrderByAggregateInputSchema
} from "./chunk-V7UK3PVX.js";
import {
  EquationMaxOrderByAggregateInputSchema
} from "./chunk-ELP5ADJG.js";
import {
  EquationSumOrderByAggregateInputSchema
} from "./chunk-UQK5STBQ.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-6F36DGHM.js.map