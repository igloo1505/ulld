import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupOrderByRelevanceFieldEnumSchema } from './CitationsGroupOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CitationsGroupOrderByRelevanceInputSchema: z.ZodType<Prisma.CitationsGroupOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema),z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default CitationsGroupOrderByRelevanceInputSchema;
