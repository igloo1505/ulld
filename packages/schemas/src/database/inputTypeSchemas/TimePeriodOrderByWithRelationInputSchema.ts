import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DietOrderByWithRelationInputSchema } from './DietOrderByWithRelationInputSchema';
import { TimePeriodOrderByRelevanceInputSchema } from './TimePeriodOrderByRelevanceInputSchema';

export const TimePeriodOrderByWithRelationInputSchema: z.ZodType<Prisma.TimePeriodOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Diet: z.lazy(() => DietOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TimePeriodOrderByRelevanceInputSchema).optional()
}).strict();

export default TimePeriodOrderByWithRelationInputSchema;
