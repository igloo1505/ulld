import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WaitlistRequestCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var WaitlistRequestCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WaitlistRequestCountOrderByAggregateInputSchema_default = WaitlistRequestCountOrderByAggregateInputSchema;

export {
  WaitlistRequestCountOrderByAggregateInputSchema,
  WaitlistRequestCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OQTAJHOQ.js.map