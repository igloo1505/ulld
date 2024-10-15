import { z } from 'zod';
import { TagOrderByRelevanceFieldEnumSchema } from './TagOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TagOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => TagOrderByRelevanceFieldEnumSchema), z.lazy(() => TagOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default TagOrderByRelevanceInputSchema;
