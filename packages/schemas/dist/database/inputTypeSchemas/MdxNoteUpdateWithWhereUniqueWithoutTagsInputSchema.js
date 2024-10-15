import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithoutTagsInputSchema } from './MdxNoteUpdateWithoutTagsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutTagsInputSchema } from './MdxNoteUncheckedUpdateWithoutTagsInputSchema.js';
export const MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    data: z.union([z.lazy(() => MdxNoteUpdateWithoutTagsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutTagsInputSchema)]),
}).strict();
export default MdxNoteUpdateWithWhereUniqueWithoutTagsInputSchema;
