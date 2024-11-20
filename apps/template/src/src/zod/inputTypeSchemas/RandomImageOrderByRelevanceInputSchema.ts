import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RandomImageOrderByRelevanceFieldEnumSchema } from './RandomImageOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const RandomImageOrderByRelevanceInputSchema: z.ZodType<Prisma.RandomImageOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema),z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default RandomImageOrderByRelevanceInputSchema;
