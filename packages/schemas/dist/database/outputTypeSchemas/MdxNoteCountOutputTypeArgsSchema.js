import { z } from 'zod';
import { MdxNoteCountOutputTypeSelectSchema } from './MdxNoteCountOutputTypeSelectSchema.js';
export const MdxNoteCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => MdxNoteCountOutputTypeSelectSchema).nullish(),
}).strict();
export default MdxNoteCountOutputTypeSelectSchema;
