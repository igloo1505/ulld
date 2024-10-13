import {
  HealthReportOrderByRelevanceInputSchema
} from "./chunk-BEQQFCFC.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-WI5K43UV.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/HealthReportOrderByWithRelationInputSchema.ts
import { z } from "zod";
var HealthReportOrderByWithRelationInputSchema = z.object({
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
  currentDiet: z.lazy(() => DietOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => HealthReportOrderByRelevanceInputSchema).optional()
}).strict();
var HealthReportOrderByWithRelationInputSchema_default = HealthReportOrderByWithRelationInputSchema;

export {
  HealthReportOrderByWithRelationInputSchema,
  HealthReportOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-A3VY7CY6.js.map