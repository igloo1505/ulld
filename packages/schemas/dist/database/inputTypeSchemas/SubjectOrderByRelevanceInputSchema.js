import { z } from 'zod';
import { SubjectOrderByRelevanceFieldEnumSchema } from './SubjectOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SubjectOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema), z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default SubjectOrderByRelevanceInputSchema;
