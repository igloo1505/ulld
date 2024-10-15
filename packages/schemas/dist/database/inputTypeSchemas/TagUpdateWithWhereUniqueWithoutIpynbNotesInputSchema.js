import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutIpynbNotesInputSchema } from './TagUpdateWithoutIpynbNotesInputSchema.js';
import { TagUncheckedUpdateWithoutIpynbNotesInputSchema } from './TagUncheckedUpdateWithoutIpynbNotesInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutIpynbNotesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutIpynbNotesInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
