import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietMaxOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  activelyFollowing: z.lazy(() => SortOrderSchema).optional(),
  gf: z.lazy(() => SortOrderSchema).optional(),
  vegan: z.lazy(() => SortOrderSchema).optional(),
  pescatarian: z.lazy(() => SortOrderSchema).optional(),
  vegetarian: z.lazy(() => SortOrderSchema).optional(),
  fasting: z.lazy(() => SortOrderSchema).optional(),
  cardioTraining: z.lazy(() => SortOrderSchema).optional(),
  weightTraining: z.lazy(() => SortOrderSchema).optional(),
  carb: z.lazy(() => SortOrderSchema).optional(),
  pro: z.lazy(() => SortOrderSchema).optional(),
  fat: z.lazy(() => SortOrderSchema).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietMaxOrderByAggregateInputSchema_default = DietMaxOrderByAggregateInputSchema;

export {
  DietMaxOrderByAggregateInputSchema,
  DietMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-6HSK7XXL.js.map