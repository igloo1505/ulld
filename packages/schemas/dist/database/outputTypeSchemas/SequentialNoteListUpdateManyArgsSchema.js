import { z } from 'zod';
import { SequentialNoteListUpdateManyMutationInputSchema } from '../inputTypeSchemas/SequentialNoteListUpdateManyMutationInputSchema.js';
import { SequentialNoteListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListUncheckedUpdateManyInputSchema.js';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js';
export const SequentialNoteListUpdateManyArgsSchema = z.object({
    data: z.union([SequentialNoteListUpdateManyMutationInputSchema, SequentialNoteListUncheckedUpdateManyInputSchema]),
    where: SequentialNoteListWhereInputSchema.optional(),
}).strict();
export default SequentialNoteListUpdateManyArgsSchema;
