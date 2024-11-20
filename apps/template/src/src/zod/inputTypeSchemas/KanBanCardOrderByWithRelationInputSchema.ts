import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { KanBanListOrderByWithRelationInputSchema } from './KanBanListOrderByWithRelationInputSchema';
import { KanBanCardOrderByRelevanceInputSchema } from './KanBanCardOrderByRelevanceInputSchema';

export const KanBanCardOrderByWithRelationInputSchema: z.ZodType<Prisma.KanBanCardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  details: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  KanBanList: z.lazy(() => KanBanListOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => KanBanCardOrderByRelevanceInputSchema).optional()
}).strict();

export default KanBanCardOrderByWithRelationInputSchema;
