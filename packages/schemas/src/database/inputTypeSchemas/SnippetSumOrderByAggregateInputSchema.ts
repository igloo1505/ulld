import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SnippetSumOrderByAggregateInputSchema: z.ZodType<Prisma.SnippetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SnippetSumOrderByAggregateInputSchema;