import { z } from 'zod';
import { QuoteOrderByRelevanceFieldEnumSchema } from './QuoteOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QuoteOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema), z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default QuoteOrderByRelevanceInputSchema;
