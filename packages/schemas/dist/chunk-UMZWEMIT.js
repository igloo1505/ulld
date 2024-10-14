import {
  ReadingListCountOrderByAggregateInputSchema
} from "./chunk-LZ5PB5QS.js";
import {
  ReadingListMinOrderByAggregateInputSchema
} from "./chunk-MB7XJOYG.js";
import {
  ReadingListMaxOrderByAggregateInputSchema
} from "./chunk-T7KC7DPK.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var ReadingListOrderByWithAggregationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReadingListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReadingListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReadingListMinOrderByAggregateInputSchema).optional()
}).strict();
var ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema;

export {
  ReadingListOrderByWithAggregationInputSchema,
  ReadingListOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-UMZWEMIT.js.map