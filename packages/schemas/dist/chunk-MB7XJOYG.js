import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ReadingListMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var ReadingListMinOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ReadingListMinOrderByAggregateInputSchema_default = ReadingListMinOrderByAggregateInputSchema;

export {
  ReadingListMinOrderByAggregateInputSchema,
  ReadingListMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-MB7XJOYG.js.map