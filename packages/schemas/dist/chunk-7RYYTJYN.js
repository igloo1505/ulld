import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var BusinessContactMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BusinessContactMaxOrderByAggregateInputSchema_default = BusinessContactMaxOrderByAggregateInputSchema;

export {
  BusinessContactMaxOrderByAggregateInputSchema,
  BusinessContactMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-7RYYTJYN.js.map