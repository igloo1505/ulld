import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const HealthReportScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HealthReportScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema),z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema),z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  summary: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  overall: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  skin: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  bloat: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  weight_feeling: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  fullness: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  weight: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  cardiacCapacity: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  jawLine: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  joints: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  flexibility: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  anxiety: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  anxiety_desc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mood_desc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mood: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  sexDrive: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  intruisiveThoughts: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  caffeineIntake: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  glutenIntake: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  sugarIntake: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  artificialSweetenerIntake: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  artificalDyes: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  sleepQuality: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  hydration: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  twitching: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  sleepHours: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  calorie_est: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  times_meals_more_than_gap_apart: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  estHoursInExcessFast: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default HealthReportScalarWhereWithAggregatesInputSchema;
