import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistRequestOrderByRelevanceFieldEnumSchema } from './WaitlistRequestOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WaitlistRequestOrderByRelevanceInputSchema: z.ZodType<Prisma.WaitlistRequestOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema),z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WaitlistRequestOrderByRelevanceInputSchema;
