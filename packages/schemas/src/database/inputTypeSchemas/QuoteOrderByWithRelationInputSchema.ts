import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { QuoteOrderByRelevanceInputSchema } from './QuoteOrderByRelevanceInputSchema.js';
export const QuoteOrderByWithRelationInputSchema: z.ZodType<Prisma.QuoteOrderByWithRelationInput> = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => QuoteOrderByRelevanceInputSchema).optional()
}).strict();
export default QuoteOrderByWithRelationInputSchema;