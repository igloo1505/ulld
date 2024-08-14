import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HealthReportCountOrderByAggregateInputSchema } from './HealthReportCountOrderByAggregateInputSchema';
import { HealthReportAvgOrderByAggregateInputSchema } from './HealthReportAvgOrderByAggregateInputSchema';
import { HealthReportMaxOrderByAggregateInputSchema } from './HealthReportMaxOrderByAggregateInputSchema';
import { HealthReportMinOrderByAggregateInputSchema } from './HealthReportMinOrderByAggregateInputSchema';
import { HealthReportSumOrderByAggregateInputSchema } from './HealthReportSumOrderByAggregateInputSchema';

export const HealthReportOrderByWithAggregationInputSchema: z.ZodType<Prisma.HealthReportOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  summary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  overall: z.lazy(() => SortOrderSchema).optional(),
  skin: z.lazy(() => SortOrderSchema).optional(),
  bloat: z.lazy(() => SortOrderSchema).optional(),
  weight_feeling: z.lazy(() => SortOrderSchema).optional(),
  fullness: z.lazy(() => SortOrderSchema).optional(),
  weight: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cardiacCapacity: z.lazy(() => SortOrderSchema).optional(),
  jawLine: z.lazy(() => SortOrderSchema).optional(),
  joints: z.lazy(() => SortOrderSchema).optional(),
  flexibility: z.lazy(() => SortOrderSchema).optional(),
  anxiety: z.lazy(() => SortOrderSchema).optional(),
  anxiety_desc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mood_desc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
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
  sleepHours: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  calorie_est: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  times_meals_more_than_gap_apart: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  estHoursInExcessFast: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HealthReportCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HealthReportAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HealthReportMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HealthReportMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HealthReportSumOrderByAggregateInputSchema).optional()
}).strict();

export default HealthReportOrderByWithAggregationInputSchema;
