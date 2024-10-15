import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema.js';
export const MdxNoteCreateOrConnectWithoutReadingListInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema)]),
}).strict();
export default MdxNoteCreateOrConnectWithoutReadingListInputSchema;
