import { z } from 'zod';
export const MdxNoteUpdatecitationsListOrderInputSchema = z.object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
}).strict();
export default MdxNoteUpdatecitationsListOrderInputSchema;
