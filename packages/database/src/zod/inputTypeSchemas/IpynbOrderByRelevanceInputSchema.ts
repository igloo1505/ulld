import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbOrderByRelevanceFieldEnumSchema } from './IpynbOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const IpynbOrderByRelevanceInputSchema: z.ZodType<Prisma.IpynbOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema),z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default IpynbOrderByRelevanceInputSchema;
