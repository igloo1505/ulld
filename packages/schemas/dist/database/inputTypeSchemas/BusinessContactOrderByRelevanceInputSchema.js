import { z } from 'zod';
import { BusinessContactOrderByRelevanceFieldEnumSchema } from './BusinessContactOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BusinessContactOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema), z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default BusinessContactOrderByRelevanceInputSchema;
