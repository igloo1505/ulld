import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessContactOrderByRelevanceFieldEnumSchema } from './BusinessContactOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const BusinessContactOrderByRelevanceInputSchema: z.ZodType<Prisma.BusinessContactOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema),z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default BusinessContactOrderByRelevanceInputSchema;
