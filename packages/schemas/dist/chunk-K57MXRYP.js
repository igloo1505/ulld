import {
  DietArgsSchema,
  HealthReportIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  HealthReportOrderByWithRelationInputSchema
} from "./chunk-A3VY7CY6.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";
import {
  HealthReportScalarFieldEnumSchema
} from "./chunk-PXXMWZSN.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/HealthReportFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var HealthReportSelectSchema = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  summary: z.boolean().optional(),
  overall: z.boolean().optional(),
  skin: z.boolean().optional(),
  bloat: z.boolean().optional(),
  weight_feeling: z.boolean().optional(),
  fullness: z.boolean().optional(),
  weight: z.boolean().optional(),
  cardiacCapacity: z.boolean().optional(),
  jawLine: z.boolean().optional(),
  joints: z.boolean().optional(),
  flexibility: z.boolean().optional(),
  anxiety: z.boolean().optional(),
  anxiety_desc: z.boolean().optional(),
  mood_desc: z.boolean().optional(),
  mood: z.boolean().optional(),
  sexDrive: z.boolean().optional(),
  intruisiveThoughts: z.boolean().optional(),
  caffeineIntake: z.boolean().optional(),
  glutenIntake: z.boolean().optional(),
  sugarIntake: z.boolean().optional(),
  artificialSweetenerIntake: z.boolean().optional(),
  artificalDyes: z.boolean().optional(),
  sleepQuality: z.boolean().optional(),
  hydration: z.boolean().optional(),
  twitching: z.boolean().optional(),
  sleepHours: z.boolean().optional(),
  calorie_est: z.boolean().optional(),
  times_meals_more_than_gap_apart: z.boolean().optional(),
  estHoursInExcessFast: z.boolean().optional(),
  dietId: z.boolean().optional(),
  created: z.boolean().optional(),
  currentDiet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportFindFirstOrThrowArgsSchema = z.object({
  select: HealthReportSelectSchema.optional(),
  include: HealthReportIncludeSchema.optional(),
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([HealthReportOrderByWithRelationInputSchema.array(), HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: HealthReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([HealthReportScalarFieldEnumSchema, HealthReportScalarFieldEnumSchema.array()]).optional()
}).strict();
var HealthReportFindFirstOrThrowArgsSchema_default = HealthReportFindFirstOrThrowArgsSchema;

export {
  HealthReportSelectSchema,
  HealthReportFindFirstOrThrowArgsSchema,
  HealthReportFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-K57MXRYP.js.map