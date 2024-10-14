import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var WaitlistRequestAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WaitlistRequestAvgOrderByAggregateInputSchema_default = WaitlistRequestAvgOrderByAggregateInputSchema;

export {
  WaitlistRequestAvgOrderByAggregateInputSchema,
  WaitlistRequestAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-NMR33OCF.js.map