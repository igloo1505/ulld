import {
  HealthReportAvgOrderByAggregateInputSchema
} from "./chunk-CZ2FIJOX.js";
import {
  HealthReportCountOrderByAggregateInputSchema
} from "./chunk-H355A4EV.js";
import {
  HealthReportMinOrderByAggregateInputSchema
} from "./chunk-3ZOIX5YI.js";
import {
  HealthReportMaxOrderByAggregateInputSchema
} from "./chunk-INLC2MD3.js";
import {
  HealthReportSumOrderByAggregateInputSchema
} from "./chunk-D6Y2AQIW.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/HealthReportOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var HealthReportOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  overall: z.lazy(() => SortOrderSchema).optional(),
  skin: z.lazy(() => SortOrderSchema).optional(),
  bloat: z.lazy(() => SortOrderSchema).optional(),
  weight_feeling: z.lazy(() => SortOrderSchema).optional(),
  fullness: z.lazy(() => SortOrderSchema).optional(),
  weight: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  cardiacCapacity: z.lazy(() => SortOrderSchema).optional(),
  jawLine: z.lazy(() => SortOrderSchema).optional(),
  joints: z.lazy(() => SortOrderSchema).optional(),
  flexibility: z.lazy(() => SortOrderSchema).optional(),
  anxiety: z.lazy(() => SortOrderSchema).optional(),
  anxiety_desc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  mood_desc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
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
  sleepHours: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  calorie_est: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  times_meals_more_than_gap_apart: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  estHoursInExcessFast: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HealthReportCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HealthReportAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HealthReportMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HealthReportMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HealthReportSumOrderByAggregateInputSchema).optional()
}).strict();
var HealthReportOrderByWithAggregationInputSchema_default = HealthReportOrderByWithAggregationInputSchema;

export {
  HealthReportOrderByWithAggregationInputSchema,
  HealthReportOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-FXYZFPCZ.js.map