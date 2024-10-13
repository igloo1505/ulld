import {
  WaitlistRequestOrderByRelevanceInputSchema
} from "./chunk-7L2EV5I3.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-MT676SDN.js.map