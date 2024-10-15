import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutToDoInputSchema } from './MdxNoteUncheckedUpdateManyWithoutToDoInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = z.object({
    where: z.lazy(() => MdxNoteScalarWhereInputSchema),
    data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoInputSchema)]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutToDoInputSchema;
