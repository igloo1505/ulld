import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var BusinessContactCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BusinessContactCountOrderByAggregateInputSchema_default = BusinessContactCountOrderByAggregateInputSchema;

export {
  BusinessContactCountOrderByAggregateInputSchema,
  BusinessContactCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-5CD5RSJD.js.map