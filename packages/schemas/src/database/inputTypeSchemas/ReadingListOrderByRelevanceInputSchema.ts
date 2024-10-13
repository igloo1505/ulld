import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListOrderByRelevanceFieldEnumSchema } from '../ReadingListOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ReadingListOrderByRelevanceInputSchema: z.ZodType<Prisma.ReadingListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema),z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default ReadingListOrderByRelevanceInputSchema;