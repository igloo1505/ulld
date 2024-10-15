import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema.js';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema.js';
export const TagCreateOrConnectWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TagCreateWithoutMdxNotesInputSchema), z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema)]),
}).strict();
export default TagCreateOrConnectWithoutMdxNotesInputSchema;
