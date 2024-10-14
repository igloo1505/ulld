import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var BusinessContactMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BusinessContactMinOrderByAggregateInputSchema_default = BusinessContactMinOrderByAggregateInputSchema;

export {
  BusinessContactMinOrderByAggregateInputSchema,
  BusinessContactMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-5YBBGFZC.js.map