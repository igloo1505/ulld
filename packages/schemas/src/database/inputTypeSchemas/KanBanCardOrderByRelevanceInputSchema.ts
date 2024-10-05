import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardOrderByRelevanceFieldEnumSchema } from './KanBanCardOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const KanBanCardOrderByRelevanceInputSchema: z.ZodType<Prisma.KanBanCardOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema),z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default KanBanCardOrderByRelevanceInputSchema;
