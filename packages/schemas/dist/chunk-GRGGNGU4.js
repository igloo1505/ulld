import {
  TimePeriodOrderByRelevanceInputSchema
} from "./chunk-JSUF43I3.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-WI5K43UV.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.ts
import { z } from "zod";
var TimePeriodOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  Diet: z.lazy(() => DietOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TimePeriodOrderByRelevanceInputSchema).optional()
}).strict();
var TimePeriodOrderByWithRelationInputSchema_default = TimePeriodOrderByWithRelationInputSchema;

export {
  TimePeriodOrderByWithRelationInputSchema,
  TimePeriodOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-GRGGNGU4.js.map