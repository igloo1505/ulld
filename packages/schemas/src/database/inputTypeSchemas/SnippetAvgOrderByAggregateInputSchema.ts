import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SnippetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SnippetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SnippetAvgOrderByAggregateInputSchema;
