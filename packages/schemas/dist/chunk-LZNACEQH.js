import {
  DietNullableRelationFilterSchema,
  DietWhereInputSchema,
  HealthReportWhereInputSchema
} from "./chunk-MDAJAPVT.js";
import {
  FloatFilterSchema
} from "./chunk-KRPE75Q3.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDL32JOO.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/HealthReportWhereUniqueInputSchema.ts
import { z } from "zod";
var HealthReportWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => HealthReportWhereInputSchema), z.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => HealthReportWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => HealthReportWhereInputSchema), z.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  title: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  summary: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  overall: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  skin: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  bloat: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  weight_feeling: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  fullness: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  weight: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  cardiacCapacity: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  jawLine: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  joints: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  flexibility: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  anxiety: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  anxiety_desc: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  mood_desc: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  mood: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  sexDrive: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  intruisiveThoughts: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  caffeineIntake: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  glutenIntake: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  sugarIntake: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  artificialSweetenerIntake: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  artificalDyes: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  sleepQuality: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  hydration: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  twitching: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  sleepHours: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  calorie_est: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  times_meals_more_than_gap_apart: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  estHoursInExcessFast: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  dietId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  created: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  currentDiet: z.union([z.lazy(() => DietNullableRelationFilterSchema), z.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict());
var HealthReportWhereUniqueInputSchema_default = HealthReportWhereUniqueInputSchema;

export {
  HealthReportWhereUniqueInputSchema,
  HealthReportWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-LZNACEQH.js.map