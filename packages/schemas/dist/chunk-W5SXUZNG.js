import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-W5SXUZNG.js.map