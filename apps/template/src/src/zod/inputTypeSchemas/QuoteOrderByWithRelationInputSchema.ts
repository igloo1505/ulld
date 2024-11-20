import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { QuoteOrderByRelevanceInputSchema } from './QuoteOrderByRelevanceInputSchema';

export const QuoteOrderByWithRelationInputSchema: z.ZodType<Prisma.QuoteOrderByWithRelationInput> = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => QuoteOrderByRelevanceInputSchema).optional()
}).strict();

export default QuoteOrderByWithRelationInputSchema;
