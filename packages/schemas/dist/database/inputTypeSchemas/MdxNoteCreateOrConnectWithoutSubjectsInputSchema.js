import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutSubjectsInputSchema } from './MdxNoteCreateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateWithoutSubjectsInputSchema.js';
export const MdxNoteCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default MdxNoteCreateOrConnectWithoutSubjectsInputSchema;
