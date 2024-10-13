import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ReadingListCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var ReadingListCountOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ReadingListCountOrderByAggregateInputSchema_default = ReadingListCountOrderByAggregateInputSchema;

export {
  ReadingListCountOrderByAggregateInputSchema,
  ReadingListCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-JJK3UMUJ.js.map