import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SnippetSumOrderByAggregateInputSchema: z.ZodType<Prisma.SnippetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SnippetSumOrderByAggregateInputSchema;
