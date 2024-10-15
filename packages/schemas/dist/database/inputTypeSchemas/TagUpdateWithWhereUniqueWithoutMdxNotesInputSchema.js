import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutMdxNotesInputSchema } from './TagUpdateWithoutMdxNotesInputSchema.js';
import { TagUncheckedUpdateWithoutMdxNotesInputSchema } from './TagUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutMdxNotesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutMdxNotesInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
