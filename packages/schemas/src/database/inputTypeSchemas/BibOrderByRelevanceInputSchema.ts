import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibOrderByRelevanceFieldEnumSchema } from './BibOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const BibOrderByRelevanceInputSchema: z.ZodType<Prisma.BibOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BibOrderByRelevanceFieldEnumSchema),z.lazy(() => BibOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default BibOrderByRelevanceInputSchema;
