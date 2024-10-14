import {
  DJTOrderByRelevanceInputSchema
} from "./chunk-KITUSP3F.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTOrderByWithRelationInputSchema.ts
import { z } from "zod";
var DJTOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DJTOrderByRelevanceInputSchema).optional()
}).strict();
var DJTOrderByWithRelationInputSchema_default = DJTOrderByWithRelationInputSchema;

export {
  DJTOrderByWithRelationInputSchema,
  DJTOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-E2HOW4GC.js.map