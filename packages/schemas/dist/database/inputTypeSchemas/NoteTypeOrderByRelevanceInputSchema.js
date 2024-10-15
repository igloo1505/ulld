import { z } from 'zod';
import { NoteTypeOrderByRelevanceFieldEnumSchema } from './NoteTypeOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const NoteTypeOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema), z.lazy(() => NoteTypeOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default NoteTypeOrderByRelevanceInputSchema;
