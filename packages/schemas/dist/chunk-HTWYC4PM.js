import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var WaitlistRequestMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WaitlistRequestMinOrderByAggregateInputSchema_default = WaitlistRequestMinOrderByAggregateInputSchema;

export {
  WaitlistRequestMinOrderByAggregateInputSchema,
  WaitlistRequestMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HTWYC4PM.js.map