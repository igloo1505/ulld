import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardOrderByRelevanceFieldEnumSchema } from '../KanBanCardOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const KanBanCardOrderByRelevanceInputSchema: z.ZodType<Prisma.KanBanCardOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema),z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default KanBanCardOrderByRelevanceInputSchema;