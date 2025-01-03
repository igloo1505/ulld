import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { DietaryItemOrderByRelationAggregateInputSchema } from './DietaryItemOrderByRelationAggregateInputSchema.js';
import { TimePeriodOrderByRelationAggregateInputSchema } from './TimePeriodOrderByRelationAggregateInputSchema.js';
import { HealthReportOrderByRelationAggregateInputSchema } from './HealthReportOrderByRelationAggregateInputSchema.js';
import { DietOrderByRelevanceInputSchema } from './DietOrderByRelevanceInputSchema.js';
export const DietOrderByWithRelationInputSchema: z.ZodType<Prisma.DietOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  summary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activelyFollowing: z.lazy(() => SortOrderSchema).optional(),
  gf: z.lazy(() => SortOrderSchema).optional(),
  vegan: z.lazy(() => SortOrderSchema).optional(),
  pescatarian: z.lazy(() => SortOrderSchema).optional(),
  vegetarian: z.lazy(() => SortOrderSchema).optional(),
  fasting: z.lazy(() => SortOrderSchema).optional(),
  cardioTraining: z.lazy(() => SortOrderSchema).optional(),
  weightTraining: z.lazy(() => SortOrderSchema).optional(),
  carb: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pro: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  goals: z.lazy(() => SortOrderSchema).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => DietaryItemOrderByRelationAggregateInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodOrderByRelationAggregateInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DietOrderByRelevanceInputSchema).optional()
}).strict();
export default DietOrderByWithRelationInputSchema;