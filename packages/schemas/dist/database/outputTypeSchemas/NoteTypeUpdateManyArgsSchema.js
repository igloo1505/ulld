import { z } from 'zod';
import { NoteTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema.js';
import { NoteTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateManyInputSchema.js';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema.js';
export const NoteTypeUpdateManyArgsSchema = z.object({
    data: z.union([NoteTypeUpdateManyMutationInputSchema, NoteTypeUncheckedUpdateManyInputSchema]),
    where: NoteTypeWhereInputSchema.optional(),
}).strict();
export default NoteTypeUpdateManyArgsSchema;
