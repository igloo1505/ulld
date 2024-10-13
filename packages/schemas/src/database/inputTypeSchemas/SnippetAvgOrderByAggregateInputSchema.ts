import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SnippetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SnippetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SnippetAvgOrderByAggregateInputSchema;