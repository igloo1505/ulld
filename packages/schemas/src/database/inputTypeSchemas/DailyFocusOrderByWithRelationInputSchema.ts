import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { DailyFocusOrderByRelevanceInputSchema } from '../DailyFocusOrderByRelevanceInputSchema.js';
export const DailyFocusOrderByWithRelationInputSchema: z.ZodType<Prisma.DailyFocusOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DailyFocusOrderByRelevanceInputSchema).optional()
}).strict();
export default DailyFocusOrderByWithRelationInputSchema;