import {
  KanBanCardCountOrderByAggregateInputSchema
} from "./chunk-KRIFBRE4.js";
import {
  KanBanCardAvgOrderByAggregateInputSchema
} from "./chunk-VS6M7BR3.js";
import {
  KanBanCardMinOrderByAggregateInputSchema
} from "./chunk-2NUHICGC.js";
import {
  KanBanCardMaxOrderByAggregateInputSchema
} from "./chunk-FMXQSN5V.js";
import {
  KanBanCardSumOrderByAggregateInputSchema
} from "./chunk-XLXKCQIW.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-X5QRSDOB.js.map