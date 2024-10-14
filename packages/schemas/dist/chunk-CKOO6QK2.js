import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/IpynbSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var IpynbSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
var IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema;

export {
  IpynbSumOrderByAggregateInputSchema,
  IpynbSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-CKOO6QK2.js.map