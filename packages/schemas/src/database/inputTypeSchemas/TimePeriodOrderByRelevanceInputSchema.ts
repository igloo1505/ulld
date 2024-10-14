import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodOrderByRelevanceFieldEnumSchema } from './TimePeriodOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TimePeriodOrderByRelevanceInputSchema: z.ZodType<Prisma.TimePeriodOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema),z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TimePeriodOrderByRelevanceInputSchema;
