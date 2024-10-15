import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutCitationsInputSchema } from './MdxNoteUpdateWithoutCitationsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutCitationsInputSchema } from './MdxNoteUncheckedUpdateWithoutCitationsInputSchema.js';
import { MdxNoteCreateWithoutCitationsInputSchema } from './MdxNoteCreateWithoutCitationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from './MdxNoteUncheckedCreateWithoutCitationsInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    update: z.union([z.lazy(() => MdxNoteUpdateWithoutCitationsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutCitationsInputSchema)]),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema)]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema;
