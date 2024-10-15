import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { RandomImageOrderByRelevanceInputSchema } from './RandomImageOrderByRelevanceInputSchema.js';
export const RandomImageOrderByWithRelationInputSchema: z.ZodType<Prisma.RandomImageOrderByWithRelationInput> = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => RandomImageOrderByRelevanceInputSchema).optional()
}).strict();
export default RandomImageOrderByWithRelationInputSchema;