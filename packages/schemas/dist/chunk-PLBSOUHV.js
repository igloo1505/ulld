import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/HealthReportSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var HealthReportSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  overall: z.lazy(() => SortOrderSchema).optional(),
  skin: z.lazy(() => SortOrderSchema).optional(),
  bloat: z.lazy(() => SortOrderSchema).optional(),
  weight_feeling: z.lazy(() => SortOrderSchema).optional(),
  fullness: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  cardiacCapacity: z.lazy(() => SortOrderSchema).optional(),
  jawLine: z.lazy(() => SortOrderSchema).optional(),
  joints: z.lazy(() => SortOrderSchema).optional(),
  flexibility: z.lazy(() => SortOrderSchema).optional(),
  anxiety: z.lazy(() => SortOrderSchema).optional(),
  mood: z.lazy(() => SortOrderSchema).optional(),
  sexDrive: z.lazy(() => SortOrderSchema).optional(),
  intruisiveThoughts: z.lazy(() => SortOrderSchema).optional(),
  caffeineIntake: z.lazy(() => SortOrderSchema).optional(),
  glutenIntake: z.lazy(() => SortOrderSchema).optional(),
  sugarIntake: z.lazy(() => SortOrderSchema).optional(),
  artificialSweetenerIntake: z.lazy(() => SortOrderSchema).optional(),
  artificalDyes: z.lazy(() => SortOrderSchema).optional(),
  sleepQuality: z.lazy(() => SortOrderSchema).optional(),
  hydration: z.lazy(() => SortOrderSchema).optional(),
  twitching: z.lazy(() => SortOrderSchema).optional(),
  sleepHours: z.lazy(() => SortOrderSchema).optional(),
  calorie_est: z.lazy(() => SortOrderSchema).optional(),
  times_meals_more_than_gap_apart: z.lazy(() => SortOrderSchema).optional(),
  estHoursInExcessFast: z.lazy(() => SortOrderSchema).optional()
}).strict();
var HealthReportSumOrderByAggregateInputSchema_default = HealthReportSumOrderByAggregateInputSchema;

export {
  HealthReportSumOrderByAggregateInputSchema,
  HealthReportSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-PLBSOUHV.js.map