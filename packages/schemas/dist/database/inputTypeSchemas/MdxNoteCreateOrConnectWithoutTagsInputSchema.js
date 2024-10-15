import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema.js';
export const MdxNoteCreateOrConnectWithoutTagsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutTagsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
export default MdxNoteCreateOrConnectWithoutTagsInputSchema;
