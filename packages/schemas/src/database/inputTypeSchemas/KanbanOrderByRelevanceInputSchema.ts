import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanOrderByRelevanceFieldEnumSchema } from './KanbanOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanbanOrderByRelevanceInputSchema: z.ZodType<Prisma.KanbanOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema),z.lazy(() => KanbanOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default KanbanOrderByRelevanceInputSchema;