import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-6WA7EIAW.js.map