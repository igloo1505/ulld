import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutMdxNotesInputSchema } from './TagUpdateWithoutMdxNotesInputSchema.js';
import { TagUncheckedUpdateWithoutMdxNotesInputSchema } from './TagUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema.js';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    update: z.union([z.lazy(() => TagUpdateWithoutMdxNotesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutMdxNotesInputSchema)]),
    create: z.union([z.lazy(() => TagCreateWithoutMdxNotesInputSchema), z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema)]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
