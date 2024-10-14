import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ReadingListMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var ReadingListMaxOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema;

export {
  ReadingListMaxOrderByAggregateInputSchema,
  ReadingListMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-T7KC7DPK.js.map