import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutToDoInputSchema } from './MdxNoteUpdateWithoutToDoInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutToDoInputSchema } from './MdxNoteUncheckedUpdateWithoutToDoInputSchema.js';
import { MdxNoteCreateWithoutToDoInputSchema } from './MdxNoteCreateWithoutToDoInputSchema.js';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from './MdxNoteUncheckedCreateWithoutToDoInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    update: z.union([z.lazy(() => MdxNoteUpdateWithoutToDoInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutToDoInputSchema)]),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutToDoInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema)]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutToDoInputSchema;
