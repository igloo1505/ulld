import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SnippetOrderByRelevanceFieldEnumSchema } from '../SnippetOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SnippetOrderByRelevanceInputSchema: z.ZodType<Prisma.SnippetOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema),z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default SnippetOrderByRelevanceInputSchema;