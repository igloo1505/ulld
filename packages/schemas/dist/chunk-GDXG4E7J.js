import {
  DailyFocusOrderByRelevanceInputSchema
} from "./chunk-I5TSDRV3.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-GDXG4E7J.js.map