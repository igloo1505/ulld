import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanOrderByRelevanceFieldEnumSchema } from './KanbanOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const KanbanOrderByRelevanceInputSchema: z.ZodType<Prisma.KanbanOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema),z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default KanbanOrderByRelevanceInputSchema;
