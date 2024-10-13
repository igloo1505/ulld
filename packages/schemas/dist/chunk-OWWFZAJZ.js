import {
  DefinitionCountOrderByAggregateInputSchema
} from "./chunk-7QH334NJ.js";
import {
  DefinitionAvgOrderByAggregateInputSchema
} from "./chunk-5X24WC4T.js";
import {
  DefinitionMaxOrderByAggregateInputSchema
} from "./chunk-PREU3GIZ.js";
import {
  DefinitionMinOrderByAggregateInputSchema
} from "./chunk-K2ZETSIU.js";
import {
  DefinitionSumOrderByAggregateInputSchema
} from "./chunk-TFLCJMW7.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DefinitionOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  alphabeticalLabel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  mdxNoteId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DefinitionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DefinitionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DefinitionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DefinitionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DefinitionSumOrderByAggregateInputSchema).optional()
}).strict();
var DefinitionOrderByWithAggregationInputSchema_default = DefinitionOrderByWithAggregationInputSchema;

export {
  DefinitionOrderByWithAggregationInputSchema,
  DefinitionOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-OWWFZAJZ.js.map