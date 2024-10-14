import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListOrderByRelevanceFieldEnumSchema } from './KanBanListOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const KanBanListOrderByRelevanceInputSchema: z.ZodType<Prisma.KanBanListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema),z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default KanBanListOrderByRelevanceInputSchema;
