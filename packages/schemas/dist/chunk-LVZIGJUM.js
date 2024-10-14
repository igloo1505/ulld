import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var WaitlistRequestMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WaitlistRequestMaxOrderByAggregateInputSchema_default = WaitlistRequestMaxOrderByAggregateInputSchema;

export {
  WaitlistRequestMaxOrderByAggregateInputSchema,
  WaitlistRequestMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-LVZIGJUM.js.map