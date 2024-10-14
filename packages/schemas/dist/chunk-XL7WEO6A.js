import {
  WaitlistRequestOrderByRelevanceInputSchema
} from "./chunk-LQBO56AD.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema.ts
import { z } from "zod";
var WaitlistRequestOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => WaitlistRequestOrderByRelevanceInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithRelationInputSchema_default = WaitlistRequestOrderByWithRelationInputSchema;

export {
  WaitlistRequestOrderByWithRelationInputSchema,
  WaitlistRequestOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-XL7WEO6A.js.map