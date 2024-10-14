import {
  BibCountOrderByAggregateInputSchema
} from "./chunk-BLVZZFMQ.js";
import {
  BibAvgOrderByAggregateInputSchema
} from "./chunk-47K2MUEW.js";
import {
  BibMinOrderByAggregateInputSchema
} from "./chunk-OCTO4XGA.js";
import {
  BibMaxOrderByAggregateInputSchema
} from "./chunk-DVRWZRZR.js";
import {
  BibSumOrderByAggregateInputSchema
} from "./chunk-7VSSONYG.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-HVWRAQPZ.js.map