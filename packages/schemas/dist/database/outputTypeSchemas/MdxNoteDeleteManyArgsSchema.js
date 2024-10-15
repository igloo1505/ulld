import { z } from 'zod';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema.js';
export const MdxNoteDeleteManyArgsSchema = z.object({
    where: MdxNoteWhereInputSchema.optional(),
}).strict();
export default MdxNoteDeleteManyArgsSchema;
