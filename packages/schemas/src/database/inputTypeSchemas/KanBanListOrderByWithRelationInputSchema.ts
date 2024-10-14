import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { KanBanCardOrderByRelationAggregateInputSchema } from './KanBanCardOrderByRelationAggregateInputSchema';
import { KanbanOrderByWithRelationInputSchema } from './KanbanOrderByWithRelationInputSchema';
import { KanBanListOrderByRelevanceInputSchema } from './KanBanListOrderByRelevanceInputSchema';

export const KanBanListOrderByWithRelationInputSchema: z.ZodType<Prisma.KanBanListOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  boardId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cards: z.lazy(() => KanBanCardOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => KanBanListOrderByRelevanceInputSchema).optional()
}).strict();

export default KanBanListOrderByWithRelationInputSchema;
