import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WaitlistRequestSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var WaitlistRequestSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WaitlistRequestSumOrderByAggregateInputSchema_default = WaitlistRequestSumOrderByAggregateInputSchema;

export {
  WaitlistRequestSumOrderByAggregateInputSchema,
  WaitlistRequestSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-ZUFXDXAT.js.map