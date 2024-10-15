import { z } from 'zod';
export const NoteTypeUncheckedCreateInputSchema = z.object({
    name: z.string()
}).strict();
export default NoteTypeUncheckedCreateInputSchema;
