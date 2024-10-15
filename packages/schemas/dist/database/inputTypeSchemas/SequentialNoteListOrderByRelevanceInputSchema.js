import { z } from 'zod';
import { SequentialNoteListOrderByRelevanceFieldEnumSchema } from './SequentialNoteListOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SequentialNoteListOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema), z.lazy(() => SequentialNoteListOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default SequentialNoteListOrderByRelevanceInputSchema;
