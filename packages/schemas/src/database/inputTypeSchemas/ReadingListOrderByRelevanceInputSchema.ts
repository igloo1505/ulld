import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListOrderByRelevanceFieldEnumSchema } from './ReadingListOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReadingListOrderByRelevanceInputSchema: z.ZodType<Prisma.ReadingListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema),z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ReadingListOrderByRelevanceInputSchema;
