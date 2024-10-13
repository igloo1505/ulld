import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibOrderByRelevanceFieldEnumSchema } from '../BibOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const BibOrderByRelevanceInputSchema: z.ZodType<Prisma.BibOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BibOrderByRelevanceFieldEnumSchema),z.lazy(() => BibOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default BibOrderByRelevanceInputSchema;