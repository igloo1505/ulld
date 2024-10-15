import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListOrderByRelevanceFieldEnumSchema } from './KanBanListOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanListOrderByRelevanceInputSchema: z.ZodType<Prisma.KanBanListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema),z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default KanBanListOrderByRelevanceInputSchema;