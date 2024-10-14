import {
  DefinitionCountOrderByAggregateInputSchema
} from "./chunk-L4N6HERR.js";
import {
  DefinitionAvgOrderByAggregateInputSchema
} from "./chunk-NNGLDKI3.js";
import {
  DefinitionMaxOrderByAggregateInputSchema
} from "./chunk-MVUHGOUL.js";
import {
  DefinitionMinOrderByAggregateInputSchema
} from "./chunk-W47HOKN2.js";
import {
  DefinitionSumOrderByAggregateInputSchema
} from "./chunk-RQWMCTYD.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-7HQWY5OZ.js.map