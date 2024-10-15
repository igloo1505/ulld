import { z } from 'zod';
import { TopicOrderByRelevanceFieldEnumSchema } from './TopicOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TopicOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => TopicOrderByRelevanceFieldEnumSchema), z.lazy(() => TopicOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default TopicOrderByRelevanceInputSchema;
