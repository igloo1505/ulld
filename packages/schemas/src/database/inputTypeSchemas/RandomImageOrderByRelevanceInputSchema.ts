import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RandomImageOrderByRelevanceFieldEnumSchema } from './RandomImageOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const RandomImageOrderByRelevanceInputSchema: z.ZodType<Prisma.RandomImageOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema),z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default RandomImageOrderByRelevanceInputSchema;