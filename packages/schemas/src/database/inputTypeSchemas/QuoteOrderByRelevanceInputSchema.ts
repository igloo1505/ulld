import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuoteOrderByRelevanceFieldEnumSchema } from './QuoteOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const QuoteOrderByRelevanceInputSchema: z.ZodType<Prisma.QuoteOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema),z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default QuoteOrderByRelevanceInputSchema;
