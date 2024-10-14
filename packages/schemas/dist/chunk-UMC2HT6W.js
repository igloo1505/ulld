import {
  BusinessContactOrderByRelevanceInputSchema
} from "./chunk-IXBV5ZV4.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.ts
import { z } from "zod";
var BusinessContactOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _relevance: z.lazy(() => BusinessContactOrderByRelevanceInputSchema).optional()
}).strict();
var BusinessContactOrderByWithRelationInputSchema_default = BusinessContactOrderByWithRelationInputSchema;

export {
  BusinessContactOrderByWithRelationInputSchema,
  BusinessContactOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-UMC2HT6W.js.map