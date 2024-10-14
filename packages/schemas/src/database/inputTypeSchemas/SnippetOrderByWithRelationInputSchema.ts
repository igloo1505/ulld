import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SnippetOrderByRelevanceInputSchema } from './SnippetOrderByRelevanceInputSchema';

export const SnippetOrderByWithRelationInputSchema: z.ZodType<Prisma.SnippetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => SnippetOrderByRelevanceInputSchema).optional()
}).strict();

export default SnippetOrderByWithRelationInputSchema;
