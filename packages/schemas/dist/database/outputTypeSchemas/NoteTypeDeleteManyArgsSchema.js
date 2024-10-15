import { z } from 'zod';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema.js';
export const NoteTypeDeleteManyArgsSchema = z.object({
    where: NoteTypeWhereInputSchema.optional(),
}).strict();
export default NoteTypeDeleteManyArgsSchema;
