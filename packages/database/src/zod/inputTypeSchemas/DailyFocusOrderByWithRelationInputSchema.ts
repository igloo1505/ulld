import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DailyFocusOrderByRelevanceInputSchema } from './DailyFocusOrderByRelevanceInputSchema';

export const DailyFocusOrderByWithRelationInputSchema: z.ZodType<Prisma.DailyFocusOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DailyFocusOrderByRelevanceInputSchema).optional()
}).strict();

export default DailyFocusOrderByWithRelationInputSchema;
