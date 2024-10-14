import {
  DietOrderByRelevanceInputSchema
} from "./chunk-W4Q366B6.js";
import {
  DietaryItemOrderByRelationAggregateInputSchema
} from "./chunk-MTR5OF6P.js";
import {
  HealthReportOrderByRelationAggregateInputSchema
} from "./chunk-P3SYYFW6.js";
import {
  TimePeriodOrderByRelationAggregateInputSchema
} from "./chunk-YWQ2LKBQ.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietOrderByWithRelationInputSchema.ts
import { z } from "zod";
var DietOrderByWithRelationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  activelyFollowing: z.lazy(() => SortOrderSchema).optional(),
  gf: z.lazy(() => SortOrderSchema).optional(),
  vegan: z.lazy(() => SortOrderSchema).optional(),
  pescatarian: z.lazy(() => SortOrderSchema).optional(),
  vegetarian: z.lazy(() => SortOrderSchema).optional(),
  fasting: z.lazy(() => SortOrderSchema).optional(),
  cardioTraining: z.lazy(() => SortOrderSchema).optional(),
  weightTraining: z.lazy(() => SortOrderSchema).optional(),
  carb: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  pro: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  fat: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  goals: z.lazy(() => SortOrderSchema).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => DietaryItemOrderByRelationAggregateInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodOrderByRelationAggregateInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DietOrderByRelevanceInputSchema).optional()
}).strict();
var DietOrderByWithRelationInputSchema_default = DietOrderByWithRelationInputSchema;

export {
  DietOrderByWithRelationInputSchema,
  DietOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-4TP62LJL.js.map