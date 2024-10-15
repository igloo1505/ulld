import { z } from 'zod';
import { SequentialNoteListSelectSchema } from '../inputTypeSchemas/SequentialNoteListSelectSchema.js';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema.js';
export const SequentialNoteListArgsSchema = z.object({
    select: z.lazy(() => SequentialNoteListSelectSchema).optional(),
    include: z.lazy(() => SequentialNoteListIncludeSchema).optional(),
}).strict();
export default SequentialNoteListArgsSchema;
