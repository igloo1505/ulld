import { z } from 'zod';
export const MdxNoteCreateimportantValuesInputSchema = z.object({
    set: z.number().array()
}).strict();
export default MdxNoteCreateimportantValuesInputSchema;
