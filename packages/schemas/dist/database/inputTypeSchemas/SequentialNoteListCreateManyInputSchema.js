import { z } from 'zod';
export const SequentialNoteListCreateManyInputSchema = z.object({
    sequentialKey: z.string()
}).strict();
export default SequentialNoteListCreateManyInputSchema;
