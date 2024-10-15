import { z } from 'zod';
export const NoteTypeCreateManyInputSchema = z.object({
    name: z.string()
}).strict();
export default NoteTypeCreateManyInputSchema;
