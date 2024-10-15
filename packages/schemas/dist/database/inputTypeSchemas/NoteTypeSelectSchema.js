import { z } from 'zod';
export const NoteTypeSelectSchema = z.object({
    name: z.boolean().optional(),
}).strict();
export default NoteTypeSelectSchema;
