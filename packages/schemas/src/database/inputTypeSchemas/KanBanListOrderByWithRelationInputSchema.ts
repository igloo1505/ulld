import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { KanBanCardOrderByRelationAggregateInputSchema } from './KanBanCardOrderByRelationAggregateInputSchema.js';
import { KanbanOrderByWithRelationInputSchema } from './KanbanOrderByWithRelationInputSchema.js';
import { KanBanListOrderByRelevanceInputSchema } from './KanBanListOrderByRelevanceInputSchema.js';
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