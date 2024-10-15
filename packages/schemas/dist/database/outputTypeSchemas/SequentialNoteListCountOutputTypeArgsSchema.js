import { z } from 'zod';
import { SequentialNoteListCountOutputTypeSelectSchema } from './SequentialNoteListCountOutputTypeSelectSchema.js';
export const SequentialNoteListCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => SequentialNoteListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default SequentialNoteListCountOutputTypeSelectSchema;
