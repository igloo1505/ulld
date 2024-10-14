import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryOrderByRelevanceFieldEnumSchema } from './BibEntryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const BibEntryOrderByRelevanceInputSchema: z.ZodType<Prisma.BibEntryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema),z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default BibEntryOrderByRelevanceInputSchema;
