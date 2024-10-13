import {
  KanBanCardCountOrderByAggregateInputSchema
} from "./chunk-I7GBNOG3.js";
import {
  KanBanCardAvgOrderByAggregateInputSchema
} from "./chunk-JBKIVCLD.js";
import {
  KanBanCardMinOrderByAggregateInputSchema
} from "./chunk-T2VYLFHL.js";
import {
  KanBanCardMaxOrderByAggregateInputSchema
} from "./chunk-W3XHWKQG.js";
import {
  KanBanCardSumOrderByAggregateInputSchema
} from "./chunk-ZSWH3LDR.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanCardOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var KanBanCardOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => KanBanCardCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanBanCardAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanBanCardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanBanCardMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanBanCardSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanCardOrderByWithAggregationInputSchema_default = KanBanCardOrderByWithAggregationInputSchema;

export {
  KanBanCardOrderByWithAggregationInputSchema,
  KanBanCardOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-TWLGFQXQ.js.map