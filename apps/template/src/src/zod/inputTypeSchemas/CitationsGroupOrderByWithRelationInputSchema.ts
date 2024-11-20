import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema';
import { CitationsGroupOrderByRelevanceInputSchema } from './CitationsGroupOrderByRelevanceInputSchema';

export const CitationsGroupOrderByWithRelationInputSchema: z.ZodType<Prisma.CitationsGroupOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  entries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => CitationsGroupOrderByRelevanceInputSchema).optional()
}).strict();

export default CitationsGroupOrderByWithRelationInputSchema;
