import {
  DailyFocusOrderByRelevanceInputSchema
} from "./chunk-XTRDHOIP.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.ts
import { z } from "zod";
var DailyFocusOrderByWithRelationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DailyFocusOrderByRelevanceInputSchema).optional()
}).strict();
var DailyFocusOrderByWithRelationInputSchema_default = DailyFocusOrderByWithRelationInputSchema;

export {
  DailyFocusOrderByWithRelationInputSchema,
  DailyFocusOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-QOXHHMBW.js.map