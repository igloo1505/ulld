import {
  RandomImageOrderByRelevanceInputSchema
} from "./chunk-RUMOSXK6.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.ts
import { z } from "zod";
var RandomImageOrderByWithRelationInputSchema = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => RandomImageOrderByRelevanceInputSchema).optional()
}).strict();
var RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema;

export {
  RandomImageOrderByWithRelationInputSchema,
  RandomImageOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-5CVYGPNS.js.map