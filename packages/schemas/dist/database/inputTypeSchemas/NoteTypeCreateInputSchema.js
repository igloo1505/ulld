import { z } from 'zod';
export const NoteTypeCreateInputSchema = z.object({
    name: z.string()
}).strict();
export default NoteTypeCreateInputSchema;
