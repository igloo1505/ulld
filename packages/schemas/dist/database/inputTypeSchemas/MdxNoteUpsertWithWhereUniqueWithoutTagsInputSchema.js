import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutTagsInputSchema } from './MdxNoteUpdateWithoutTagsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutTagsInputSchema } from './MdxNoteUncheckedUpdateWithoutTagsInputSchema.js';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema.js';
export const MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    update: z.union([z.lazy(() => MdxNoteUpdateWithoutTagsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutTagsInputSchema)]),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutTagsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
export default MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema;
