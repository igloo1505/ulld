import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/IpynbAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var IpynbAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
var IpynbAvgOrderByAggregateInputSchema_default = IpynbAvgOrderByAggregateInputSchema;

export {
  IpynbAvgOrderByAggregateInputSchema,
  IpynbAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-YPY3HX67.js.map