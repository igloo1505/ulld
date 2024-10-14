import {
  TimePeriodOrderByRelevanceInputSchema
} from "./chunk-H4HFGUAJ.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-4TP62LJL.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-J5RY4DJT.js.map