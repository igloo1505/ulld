import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutToDoInputSchema } from './MdxNoteUpdateWithoutToDoInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutToDoInputSchema } from './MdxNoteUncheckedUpdateWithoutToDoInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    data: z.union([z.lazy(() => MdxNoteUpdateWithoutToDoInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutToDoInputSchema)]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutToDoInputSchema;
