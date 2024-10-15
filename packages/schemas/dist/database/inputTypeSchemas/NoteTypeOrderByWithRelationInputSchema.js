import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { NoteTypeOrderByRelevanceInputSchema } from './NoteTypeOrderByRelevanceInputSchema.js';
export const NoteTypeOrderByWithRelationInputSchema = z.object({
    name: z.lazy(() => SortOrderSchema).optional(),
    _relevance: z.lazy(() => NoteTypeOrderByRelevanceInputSchema).optional()
}).strict();
export default NoteTypeOrderByWithRelationInputSchema;
