import { z } from 'zod';
import { BibEntryOrderByRelevanceFieldEnumSchema } from './BibEntryOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibEntryOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema), z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default BibEntryOrderByRelevanceInputSchema;
