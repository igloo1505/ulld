import { z } from 'zod';
export const SequentialNoteListCountOutputTypeSelectSchema = z.object({
    MdxNote: z.boolean().optional(),
    Ipynb: z.boolean().optional(),
}).strict();
export default SequentialNoteListCountOutputTypeSelectSchema;
