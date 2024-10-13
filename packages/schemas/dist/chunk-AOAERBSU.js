import {
  DJTOrderByRelevanceInputSchema
} from "./chunk-JNTGNBU2.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-AOAERBSU.js.map