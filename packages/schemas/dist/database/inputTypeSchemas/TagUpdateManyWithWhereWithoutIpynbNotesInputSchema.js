import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './TagUncheckedUpdateManyWithoutIpynbNotesInputSchema.js';
export const TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => TagScalarWhereInputSchema),
    data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutIpynbNotesInputSchema)]),
}).strict();
export default TagUpdateManyWithWhereWithoutIpynbNotesInputSchema;
