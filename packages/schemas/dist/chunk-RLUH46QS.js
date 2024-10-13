import {
  KanBanListCountOrderByAggregateInputSchema
} from "./chunk-W6NRUVUD.js";
import {
  KanBanListAvgOrderByAggregateInputSchema
} from "./chunk-6WTJ7ZQO.js";
import {
  KanBanListMinOrderByAggregateInputSchema
} from "./chunk-CLOHMQXI.js";
import {
  KanBanListMaxOrderByAggregateInputSchema
} from "./chunk-MCM32C3J.js";
import {
  KanBanListSumOrderByAggregateInputSchema
} from "./chunk-MXRBBCAU.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var KanBanListOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  boardId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => KanBanListCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanBanListAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanBanListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanBanListMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanBanListSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanListOrderByWithAggregationInputSchema_default = KanBanListOrderByWithAggregationInputSchema;

export {
  KanBanListOrderByWithAggregationInputSchema,
  KanBanListOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-RLUH46QS.js.map