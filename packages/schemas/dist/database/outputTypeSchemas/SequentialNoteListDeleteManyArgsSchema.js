import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js';
export const SequentialNoteListDeleteManyArgsSchema = z.object({
    where: SequentialNoteListWhereInputSchema.optional(),
}).strict();
export default SequentialNoteListDeleteManyArgsSchema;
