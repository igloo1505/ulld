import { z } from 'zod';
export const MdxNoteCreatecitationsListOrderInputSchema = z.object({
    set: z.string().array()
}).strict();
export default MdxNoteCreatecitationsListOrderInputSchema;
