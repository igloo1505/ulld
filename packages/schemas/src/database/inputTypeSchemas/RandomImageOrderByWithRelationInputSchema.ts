import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RandomImageOrderByRelevanceInputSchema } from './RandomImageOrderByRelevanceInputSchema';

export const RandomImageOrderByWithRelationInputSchema: z.ZodType<Prisma.RandomImageOrderByWithRelationInput> = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => RandomImageOrderByRelevanceInputSchema).optional()
}).strict();

export default RandomImageOrderByWithRelationInputSchema;
