import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutCitationsInputSchema } from './MdxNoteUpdateWithoutCitationsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutCitationsInputSchema } from './MdxNoteUncheckedUpdateWithoutCitationsInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    data: z.union([z.lazy(() => MdxNoteUpdateWithoutCitationsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutCitationsInputSchema)]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema;
