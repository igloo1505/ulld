import { z } from 'zod';
export const MdxNoteCreateoutgoingQuickLinksInputSchema = z.object({
    set: z.string().array()
}).strict();
export default MdxNoteCreateoutgoingQuickLinksInputSchema;
