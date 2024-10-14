import {
  KanBanListCountOrderByAggregateInputSchema
} from "./chunk-GO3U4SKA.js";
import {
  KanBanListAvgOrderByAggregateInputSchema
} from "./chunk-G6MPEBS2.js";
import {
  KanBanListMinOrderByAggregateInputSchema
} from "./chunk-KOELC2C3.js";
import {
  KanBanListMaxOrderByAggregateInputSchema
} from "./chunk-3CMA5P4Y.js";
import {
  KanBanListSumOrderByAggregateInputSchema
} from "./chunk-TGZU7C2W.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-XZOHEDEY.js.map