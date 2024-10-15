import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
export const SequentialNoteListNullableRelationFilterSchema = z.object({
    is: z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable(),
    isNot: z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable()
}).strict();
export default SequentialNoteListNullableRelationFilterSchema;
