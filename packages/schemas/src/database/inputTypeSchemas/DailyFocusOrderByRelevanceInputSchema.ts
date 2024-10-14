import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DailyFocusOrderByRelevanceFieldEnumSchema } from './DailyFocusOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DailyFocusOrderByRelevanceInputSchema: z.ZodType<Prisma.DailyFocusOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema),z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DailyFocusOrderByRelevanceInputSchema;
