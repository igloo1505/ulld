import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SnippetOrderByRelevanceFieldEnumSchema } from './SnippetOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SnippetOrderByRelevanceInputSchema: z.ZodType<Prisma.SnippetOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema),z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SnippetOrderByRelevanceInputSchema;
