import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const HealthReportScalarWhereInputSchema: z.ZodType<Prisma.HealthReportScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HealthReportScalarWhereInputSchema),z.lazy(() => HealthReportScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HealthReportScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HealthReportScalarWhereInputSchema),z.lazy(() => HealthReportScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  summary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  overall: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  skin: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  bloat: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  weight_feeling: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  fullness: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  weight: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  cardiacCapacity: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  jawLine: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  joints: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  flexibility: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  anxiety: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  anxiety_desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mood_desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mood: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sexDrive: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  intruisiveThoughts: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  caffeineIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  glutenIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sugarIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  artificialSweetenerIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  artificalDyes: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sleepQuality: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  hydration: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  twitching: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sleepHours: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  calorie_est: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  times_meals_more_than_gap_apart: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  estHoursInExcessFast: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default HealthReportScalarWhereInputSchema;
