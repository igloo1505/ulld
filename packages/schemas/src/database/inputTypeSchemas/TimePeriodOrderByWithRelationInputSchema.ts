import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { DietOrderByWithRelationInputSchema } from './DietOrderByWithRelationInputSchema.js';
import { TimePeriodOrderByRelevanceInputSchema } from './TimePeriodOrderByRelevanceInputSchema.js';
export const TimePeriodOrderByWithRelationInputSchema: z.ZodType<Prisma.TimePeriodOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Diet: z.lazy(() => DietOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TimePeriodOrderByRelevanceInputSchema).optional()
}).strict();
export default TimePeriodOrderByWithRelationInputSchema;