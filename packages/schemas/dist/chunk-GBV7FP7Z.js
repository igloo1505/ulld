import {
  BibCountOrderByAggregateInputSchema
} from "./chunk-HHWXRYWB.js";
import {
  BibAvgOrderByAggregateInputSchema
} from "./chunk-WKPSXWXO.js";
import {
  BibMinOrderByAggregateInputSchema
} from "./chunk-MJEHUIO7.js";
import {
  BibMaxOrderByAggregateInputSchema
} from "./chunk-LT5AGZSC.js";
import {
  BibSumOrderByAggregateInputSchema
} from "./chunk-PX5D3VI3.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/BibOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var BibOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BibCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BibAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BibMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BibMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BibSumOrderByAggregateInputSchema).optional()
}).strict();
var BibOrderByWithAggregationInputSchema_default = BibOrderByWithAggregationInputSchema;

export {
  BibOrderByWithAggregationInputSchema,
  BibOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-GBV7FP7Z.js.map